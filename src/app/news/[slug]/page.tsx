import { Container } from '@/components/Container'
import NewsHeader from '@/components/news/NewsHeader'
import RootLayout from '@/components/RootLayout'
import { getPostBySlug } from '@/lib/blog-api'
import { convertMarkdown } from '@/lib/markdown-html'

export default async function NewsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const { content, title, coverImage } = getPostBySlug(slug)

  const htmlContent = await convertMarkdown({ content })

  return (
    <RootLayout>
      <NewsHeader title={title} image={coverImage} />
      <Container>
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} className="mx-auto prose lg:prose-lg" />
      </Container>
    </RootLayout>
  )
}
