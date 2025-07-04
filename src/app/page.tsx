import RootLayout from '@/components/RootLayout'
import SplineHero from '@/components/SplineHero'

export default function Home() {
  return (
    <RootLayout>
      <SplineHero />
      <div className="h-screen w-full bg-yellow" />
    </RootLayout>
  )
}
