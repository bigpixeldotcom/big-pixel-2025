import { Container } from '@/components/Container'
import PageHeader from '@/components/PageHeader'
import RootLayout from '@/components/RootLayout'
import { VimeoPortfolio169 } from '@/components/VimeoPlayer'
import {
  faBalanceScale,
  faFloppyDisk,
  faGearCode,
  faLayerPlus,
  faRectangleHistory,
  faShieldKeyhole,
  faWebhook,
} from '@awesome.me/kit-89a9106b13/icons/sharp/regular'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Services {
  id: number
  title: string
  description: string
  icon: IconDefinition
  colour: string
  text: string
}
const services = [
  {
    id: 1,
    title: 'Secure Authentication',
    description: 'Role-based access, tokenized sessions, and encrypted logins.',
    icon: faShieldKeyhole,
    colour: 'bg-green-10',
    text: 'text-green-100',
  },
  {
    id: 2,
    title: 'Data Compliance',
    description: 'GDPR-aligned development practices and data handling.',
    icon: faBalanceScale,
    colour: 'bg-blue-10',
    text: 'text-blue-100',
  },
  {
    id: 3,
    title: 'Scalable Infrastructure',
    description: 'Cloud-native setups with performance and the future in mind.',
    icon: faLayerPlus,
    colour: 'bg-purple-10',
    text: 'text-purple-100',
  },
  {
    id: 4,
    title: 'Backups & Monitoring',
    description: 'Regular snapshots and backups, plus live system monitoring.',
    icon: faFloppyDisk,
    colour: 'bg-red-10',
    text: 'text-red-100',
  },
  {
    id: 5,
    title: 'Built-in API Security',
    description: 'API endpoints with validation, throttling, and key-based access.',
    icon: faWebhook,
    colour: 'bg-orange-10',
    text: 'text-orange-100',
  },
  {
    id: 6,
    title: 'CMS Backends',
    description: 'Custom or headless setups without bloat or unnecessary exposure.',
    icon: faRectangleHistory,
    colour: 'bg-yellow-10',
    text: 'text-yellow-100',
  },
]

export default function Digital() {
  return (
    <RootLayout>
      <PageHeader
        title="Digital Development"
        subtitle="Databases, authentication, and secure backend development"
        icon={faGearCode}
        colour="bg-blue-50"
      />
      <Container>
        <main className="my-12">
          <div className="flex w-full flex-col gap-6 lg:gap-12">
            <div className="flex">
              <h1 className="bp-gradient bg-clip-text font-mono text-6xl leading-16 font-black text-transparent md:text-8xl md:leading-28 lg:text-9xl lg:leading-36">
                Big data
              </h1>
            </div>
            <p className="flex-grow text-lg font-medium text-grey-75 lg:text-3xl lg:leading-10">
              A beautiful front end is only half the story.
              <br />
              We design and develop secure, scalable back-end systems that keep your data safe, your users protected,
              and your site performing at its best.
            </p>
            <VimeoPortfolio169 videoId={1103832184} />
            <h2 className="text-3xl font-bold text-grey-75">Key Digital Services We Offer</h2>
            <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-6">
              {services.map((service: Services) => (
                <div key={service.id} className={`aspect-square w-full rounded-lg p-3 ${service.colour}`}>
                  <div className={`flex h-48 flex-col items-center justify-evenly gap-1 ${service.text}`}>
                    <FontAwesomeIcon icon={service.icon} className="text-6xl" />
                    <p className="font-semibold tracking-tight">{service.title}</p>
                    <p className="text-center text-sm">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </Container>
    </RootLayout>
  )
}
