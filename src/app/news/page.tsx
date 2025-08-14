import { Container } from '@/components/Container'
import Article from '@/components/news/Article'
import PageHeader from '@/components/PageHeader'
import RootLayout from '@/components/RootLayout'
import { getAllPosts } from '@/lib/blog-api'
import { faNewspaper } from '@awesome.me/kit-89a9106b13/icons/classic/regular'

export default async function News() {
  const posts = getAllPosts()

  return (
    <RootLayout>
      <PageHeader
        title="News"
        subtitle="The latest news and developments at Big Pixel"
        icon={faNewspaper}
        colour="bg-red-50"
      />
      <Container>
        <div className="h-[640px]">
          <ul className="my-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Article key={post.slug} post={post} />
            ))}
          </ul>
        </div>
      </Container>
    </RootLayout>
  )
}
