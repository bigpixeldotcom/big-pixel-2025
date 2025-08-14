import '@/styles/base.css'
import type { Metadata } from 'next'
import { Inter, Tourney } from 'next/font/google'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const interSans = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const tourneyHeader = Tourney({
  variable: '--font-tourney',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://big-pixel.com'),
  title: {
    template: '%s - Big Pixel',
    default: 'Big Pixel | Web Design Agency in Norfolk',
  },
  description:
    'Big Pixel helps brands grow with custom websites built for speed, impact, and scale — combining sleek design with the latest web technology.',
  openGraph: {
    title: 'Big Pixel | Web Design Agency in Norfolk',
    description:
      'Big Pixel helps brands grow with custom websites built for speed, impact, and scale — combining sleek design with the latest web technology.',
    url: 'https://big-pixel.com',
    siteName: 'Big Pixel',
    images: [
      {
        url: 'https://big-pixel.com/images/generic-og.png',
        width: 1200,
        height: 630,
        alt: 'Big Pixel | Web Design Agency in Norfolk',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Big Pixel | Web Design Agency in Norfolk',
    description:
      'Big Pixel helps brands grow with custom websites built for speed, impact, and scale — combining sleek design with the latest web technology.',
    images: [
      {
        url: 'https://big-pixel.com/images/generic-twitter.png',
        width: 1200,
        height: 675,
        alt: 'Big Pixel | Web Design Agency in Norfolk',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="antialiased">
      <head>
        <meta name="apple-mobile-web-app-title" content="Big Pixel" />
      </head>
      <body
        className={`${interSans.variable} ${tourneyHeader.variable} h-screen max-w-screen overflow-x-hidden bg-grey-bg text-grey-100`}
      >
        {children}
      </body>
    </html>
  )
}
