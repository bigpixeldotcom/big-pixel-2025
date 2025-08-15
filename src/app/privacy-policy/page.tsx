import { Container } from '@/components/Container'
import RootLayout from '@/components/RootLayout'
import { convertMarkdown } from '@/lib/markdown-html'
import fs from 'fs'
import { join } from 'path'

export default async function Privacy() {
  const privacyPath = join(process.cwd(), 'src/app/privacy-policy/privacy.mdx')
  const fileContents = fs.readFileSync(privacyPath, 'utf8')
  const htmlContent = await convertMarkdown({ content: fileContents })

  return (
    <RootLayout>
      <Container>
        <main className="my-12 min-w-full">
          <div
            className="col-span-full mx-auto prose lg:col-span-3 lg:prose-lg"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </main>
      </Container>
    </RootLayout>
  )
}
