import { ProgressOnScroll } from '@/components/Animations'
import { Container } from '@/components/Container'
import NewsHeader from '@/components/news/NewsHeader'
import SharePost from '@/components/news/SharePost'
import RootLayout from '@/components/RootLayout'
import { getPostBySlug } from '@/lib/blog-api'
import { convertMarkdown } from '@/lib/markdown-html'
import { format } from 'date-fns'
import { Calendar, CircleArrowLeft, CircleUser, Tag } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const { title, excerpt, canonical, noindex, ogImage, author, tags, date, lastmod, twitterImage } = getPostBySlug(slug)

  return {
    title: title,
    description: excerpt,
    alternates: { canonical },
    robots: noindex ? { index: false, follow: false } : undefined,
    openGraph: {
      type: 'article',
      url: canonical,
      title: title,
      description: excerpt,
      images: ogImage ? [{ url: ogImage }] : [{ url: '/posts/news-og.png' }],
      authors: author?.name ? [author.name] : undefined,
      tags: tags,
      publishedTime: date,
      modifiedTime: lastmod ?? date,
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: excerpt,
      images: twitterImage ? [twitterImage] : ['/posts/news-twitter.png'],
    },
  }
}

export default async function NewsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const { content, title, coverImage, author, date, lastmod, tags, ogImage, excerpt, canonical } = getPostBySlug(slug)

  const htmlContent = await convertMarkdown({ content })

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: excerpt,
    image: ogImage ?? '/posts/news-og.png',
    datePublished: date,
    dateModified: lastmod ?? date,
    author: author?.name
      ? {
          '@type': 'Person',
          name: author.name,
        }
      : undefined,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonical ? canonical : `https://big-pixel.com/news/${slug}`,
    },
  }

  return (
    <RootLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <NewsHeader title={title} image={coverImage} />
      <Container>
        <Link href="/news" className="mt-4 flex items-center gap-1 text-xs/6 font-medium hover:text-blue-50 md:mt-0">
          <CircleArrowLeft size={16} />
          <span>Back to News</span>
        </Link>
        <div className="mt-4 grid grid-cols-4 gap-2">
          <div className="col-span-4 lg:col-span-1">
            <div className="sticky top-6 w-full overflow-hidden rounded border border-grey-10">
              <ProgressOnScroll />
              <dl className="mt-2 divide-y divide-grey-10 px-2 py-1 dark:divide-white/10">
                <div className="flex items-center gap-2 pb-2">
                  <dt className="size-4 text-blue-50">
                    <Calendar size={18} aria-hidden="true" />
                    <span className="sr-only">Date</span>
                  </dt>
                  <dd className="text-sm/6 sm:col-span-7">{format(new Date(date), 'do MMMM, yyyy')}</dd>
                </div>
                <div className="flex items-center gap-2 py-2">
                  <dt className="size-4 text-blue-50">
                    <CircleUser size={18} aria-hidden="true" />
                    <span className="sr-only">Author</span>
                  </dt>
                  <dd className="text-sm/6 sm:col-span-7">{author.name}</dd>
                </div>
                <div className="flex items-center gap-2 pt-2">
                  <dt className="size-4 text-blue-50">
                    <Tag size={18} aria-hidden="true" />
                    <span className="sr-only">Tags</span>
                  </dt>
                  <dd className="text-sm/6 sm:col-span-7">{tags?.join(', ')}</dd>
                </div>
              </dl>
              <SharePost title={title} excerpt={excerpt} url={canonical} />
            </div>
          </div>
          <article
            dangerouslySetInnerHTML={{ __html: htmlContent }}
            className="col-span-full mx-auto prose prose-sm mt-4 sm:prose lg:col-span-3 lg:prose-lg lg:mt-0"
          />
        </div>
      </Container>
    </RootLayout>
  )
}
