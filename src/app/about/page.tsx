import PageHeader from '@/components/PageHeader'
import RootLayout from '@/components/RootLayout'
import { faSmile } from '@awesome.me/kit-89a9106b13/icons/classic/regular'

export default function About() {
  return (
    <RootLayout>
      <PageHeader
        title="About Big Pixel"
        subtitle="The people, the mission, and the vision"
        icon={faSmile}
        colour="bg-yellow-50"
      />
    </RootLayout>
  )
}
