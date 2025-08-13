import { defaultSchema } from 'hast-util-sanitize'
import rehypeSanitize from 'rehype-sanitize'
import rehypeStringify from 'rehype-stringify'
import remarkGfm from 'remark-gfm'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'

const schema = {
  ...defaultSchema,
  // keep footnote anchors/backrefs intact
  attributes: {
    ...defaultSchema.attributes,
    '*': [
      ...(defaultSchema.attributes?.['*'] ?? []),
      'id',
      'className',
      'aria-describedby',
      'aria-label',
      'data-footnote-ref',
      'data-footnote-backref',
    ],
  },
  // GitHub-style footnotes wrap in <section class="footnotes">
  tagNames: [...(defaultSchema.tagNames ?? []), 'section'],
}

export async function convertMarkdown({ content }: { content: string }) {
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSanitize, schema)
    .use(rehypeStringify)
    .process(content)

  return file.toString()
}
