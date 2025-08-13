import PageHeader from '@/components/PageHeader'
import RootLayout from '@/components/RootLayout'
import { getAllPosts } from '@/lib/blog-api'
import { faNewspaper } from '@awesome.me/kit-89a9106b13/icons/classic/regular'
import Link from 'next/link'

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
      {posts.map((post) => (
        <Link key={post.slug} href={`/news/${post.slug}`}>
          <h2>{post.title}</h2>
        </Link>
      ))}
    </RootLayout>
  )
}
