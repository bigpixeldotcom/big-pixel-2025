# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

Project overview
- Framework: Next.js (TypeScript, App Router) with Tailwind CSS v4
- Entry points: src/app (route segments), src/app/layout.tsx (global layout/providers)
- Aliases: @/* -> src/* (see tsconfig.json)
- UI: Local component library under src/components/ui (shadcn-style) and project components under src/components
- Content: MDX posts in src/_posts processed via unified/remark/rehype with sanitization
- Integrations: Notion (contact form), BotId bot protection, Consent management (@c15t/nextjs)

Common commands
- Install dependencies (requires a Font Awesome token; see Environment):
  ```bash path=null start=null
  # ensure FONTAWESOME_PACKAGE_TOKEN is set in the environment before installing
  npm ci
  ```
- Development server:
  ```bash path=null start=null
  npm run dev
  # serves http://localhost:3000
  ```
- Build and run production:
  ```bash path=null start=null
  npm run build
  npm run start
  ```
- Lint:
  ```bash path=null start=null
  npm run lint
  ```
- Tests: no test runner is configured in this repo (no test scripts or configs detected).

Environment
Define these in .env.local (gitignored) or as shell env vars before running. Do not print secrets in the terminal.
- FONTAWESOME_PACKAGE_TOKEN — required to install private Font Awesome packages (used via .npmrc)
- NEXT_PUBLIC_C15T_URL — base URL for consent manager backend; used by a rewrite for /api/c15t (next.config.ts)
- NOTION_API_KEY — token for the Notion API client (src/lib/notion.ts)
- NOTION_DATABASE_ID — target database for contact form submissions (src/actions/form.ts)

Architecture and key flows
- App Router and global providers
  - src/app/layout.tsx sets site metadata, loads local fonts, and wraps the app with ConsentManagerProvider and CookieBanner from @c15t/nextjs. The provider is configured to send requests to /api/c15t, which is rewritten to the external backend (see Rewrites below).
  - Pages live in src/app/<route>/page.tsx. A project-level wrapper component (src/components/RootLayout.tsx) is commonly used inside pages for page composition.

- Rewrites and bot protection
  - next.config.ts wraps the config with withBotId and defines a rewrite:
    - /api/c15t/:path* -> ${NEXT_PUBLIC_C15T_URL}/:path*
  - Client-side BotId is initialized in src/instrumentation-client.ts to protect POST /contact. Server-side, submitForm uses checkBotId to block automated submissions.

- Contact form -> Notion
  - UI: src/components/contact/Form.tsx (client component using react-hook-form + zod)
  - Server action: src/actions/form.ts validates inputs and writes a page into a Notion database using NOTION_API_KEY and NOTION_DATABASE_ID.
  - Notion client: src/lib/notion.ts initializes @notionhq/client from env.

- MDX blog content
  - Source: src/_posts/*.mdx with frontmatter; read via src/lib/blog-api.ts (gray-matter). Posts are sorted by date and include reading time.
  - Rendering: src/lib/markdown-html.ts converts markdown -> sanitized HTML using unified + remark/rehype with an allowlist extension for attributes and <section> tags.

- Styling and formatting
  - Tailwind CSS v4 via @tailwindcss/postcss (postcss.config.mjs); base stylesheet at src/styles/base.css.
  - Prettier config (prettier.config.mjs) uses prettier-plugin-organize-imports and prettier-plugin-tailwindcss with a custom tailwind stylesheet path.
  - ESLint extends next/core-web-vitals; rule override disables @next/next/no-img-element.

Conventions
- TypeScript strict mode with incremental builds; noEmit is enabled.
- Module alias @/* maps to src/* for concise imports.
- Icons: lucide-react and Font Awesome Kit (private). The latter requires FONTAWESOME_PACKAGE_TOKEN to install.

Operational notes
- Without NEXT_PUBLIC_C15T_URL, consent-manager API calls to /api/c15t will fail. Set it for development if you need to exercise the banner/dialog.
- submitForm sets developmentOptions.bypass = 'HUMAN' in checkBotId, allowing local testing of the contact form flow.
- README contains the standard Next.js quickstart; prefer the commands listed above for this repo.

