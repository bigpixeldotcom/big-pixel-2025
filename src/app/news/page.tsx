import PageHeader from '@/components/PageHeader'
import RootLayout from '@/components/RootLayout'
import { faNewspaper } from '@awesome.me/kit-89a9106b13/icons/classic/regular'

export default function News() {
  return (
    <RootLayout>
      <PageHeader
        title="News"
        subtitle="The latest news and developments at Big Pixel"
        icon={faNewspaper}
        colour="bg-red-50"
      />
    </RootLayout>
  )
}
