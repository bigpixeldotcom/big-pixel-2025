import BigIdeas from '@/components/home/BigIdeas'
import Helping from '@/components/home/Helping'
import RootLayout from '@/components/RootLayout'
import HeroSpline from '@/components/splines/SplineHero'

export default function Home() {
  return (
    <RootLayout>
      <HeroSpline />
      <BigIdeas />
      <Helping />
    </RootLayout>
  )
}
