import PageHeader from '@/components/PageHeader'
import RootLayout from '@/components/RootLayout'
import { faPaintbrushPencil } from '@awesome.me/kit-89a9106b13/icons/classic/regular'

export default function Design() {
  return (
    <RootLayout>
      <PageHeader
        title="Graphic Design"
        subtitle="Print, brand identity, and brochure design"
        icon={faPaintbrushPencil}
        colour="bg-purple"
      />
    </RootLayout>
  )
}
