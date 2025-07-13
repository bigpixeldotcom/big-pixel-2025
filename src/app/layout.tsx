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
      <body className={`${interSans.variable} ${tourneyHeader.variable} bg-grey-bg text-grey-100`}>{children}</body>
    </html>
  )
}
