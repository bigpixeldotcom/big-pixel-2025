import PageHeader from '@/components/PageHeader'
import RootLayout from '@/components/RootLayout'
import { faGearCode } from '@awesome.me/kit-89a9106b13/icons/classic/regular'

export default function Digital() {
  return (
    <RootLayout>
      <PageHeader
        title="Digital Development"
        subtitle="Databases, authentication, and secure backend development"
        icon={faGearCode}
        colour="bg-blue"
      />
    </RootLayout>
  )
}
