import { Clock } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Article({ post }: { post: Post }) {
  return (
    <li className="w-full rounded bg-white p-6 shadow-md">
      <Link href={`/news/${post.slug}`}>
        <Image
          src={post.coverImage}
          alt={post.coverAlt ?? 'Article Cover'}
          width={400}
          height={200}
          className="rounded-tl-4xl rounded-br-4xl"
        />
      </Link>
      <div className="mt-2 flex flex-col gap-3">
        <div>
          <h2 className="text-2xl font-bold">
            <Link href={`/news/${post.slug}`}>{post.title}</Link>
          </h2>
          <p className="text-lg font-semibold text-blue-50">{post.subtitle}</p>
        </div>
        <p className="text-sm">{post.excerpt}</p>
        {post.readingTime?.text && (
          <div className="flex items-center gap-1.5 text-sm font-medium tracking-tight text-blue-50">
            <Clock size={16} strokeWidth="2px" />
            <span>{post.readingTime.text}</span>
          </div>
        )}
      </div>
    </li>
  )
}
