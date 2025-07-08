'use client'

import { usePathname } from 'next/navigation'
import Footer from './Footer'
import Header from './Header'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  let pathname = usePathname()

  return (
    <div className="min-h-screen">
      <Header />
      {children}
      <Footer />
    </div>
  )
}
