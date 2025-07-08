import RootLayout from '@/components/RootLayout'
import SplineHero from '@/components/SplineHero'
import BigIdeas from '@/components/home/BigIdeas'
import Helping from '@/components/home/Helping'

export default function Home() {
  return (
    <RootLayout>
      <SplineHero />
      <BigIdeas />
      <Helping />
    </RootLayout>
  )
}
