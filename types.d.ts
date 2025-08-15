type Author = {
  name: string
  picture: string
}

type Meeting = {
  id: string
  icon: JSX.Element
  colour: string
  hover: string
  title: string
  description: string
  duration: string
  price: string
  link: string
}

type Post = {
  slug: string
  title: string
  subtitle?: string
  date: string
  lastmod?: string
  coverImage: string
  coverAlt?: string
  author: Author
  excerpt: string
  ogImage?: string
  twitterImage?: string
  canonical: string
  tags?: string[]
  content: string
  draft?: boolean
  readingTime: { text: string; minutes: number; time: number; words: number }
  noindex?: boolean
}

type Services = {
  id: number
  title: string
  description: string
  icon: IconDefinition
  colour: string
  text: string
}

type Slide = {
  src: string
  alt?: string
}

type SocialShare = {
  title: string
  url: string
  excerpt?: string
  utm?: { source?: string; medium?: string; campaign?: string }
}
