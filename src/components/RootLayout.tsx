'use client'

import { usePathname } from 'next/navigation'
import Footer from './Footer'
import Header from './Header'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  let pathname = usePathname()

  return (
    <div className="absolute top-0 min-h-screen max-w-screen">
      <div className="flex min-h-full w-full flex-col justify-between">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  )
}
