import '@/styles/base.css'
import type { Metadata } from 'next'
import { Inter, Tourney } from 'next/font/google'

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
    default: 'Big Pixel',
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
      <body className={`${interSans.variable} ${tourneyHeader.variable}`}>{children}</body>
    </html>
  )
}
