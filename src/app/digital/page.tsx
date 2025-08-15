import { Container } from '@/components/Container'
import PageHeader from '@/components/PageHeader'
import RootLayout from '@/components/RootLayout'
import SecuritySpline from '@/components/splines/Security'
import { FloatingPlayer } from '@/components/VideoPlayer'
import {
  faBalanceScale,
  faFloppyDisk,
  faGearCode,
  faLayerPlus,
  faRectangleHistory,
  faShieldKeyhole,
  faWebhook,
} from '@awesome.me/kit-89a9106b13/icons/sharp/regular'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'

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
              <h1 className="bp-gradient font-header bg-clip-text text-6xl leading-16 font-black text-transparent md:text-8xl md:leading-28 lg:text-9xl lg:leading-36">
                Big data
              </h1>
            </div>
            <p className="flex-grow text-lg font-medium text-grey-75 lg:text-3xl lg:leading-10">
              A beautiful front end is only half the story.
              <br />
              We design and develop secure, scalable back-end systems that keep your data safe, your users protected,
              and your site performing at its best.
            </p>
            <FloatingPlayer src="videos/digital-video.mp4" />
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
            <div className="grid grid-cols-2 items-center gap-6 lg:gap-12">
              <div className="order-1 col-span-full lg:col-span-1">
                <SecuritySpline />
              </div>
              <div className="order-2 col-span-full lg:col-span-1">
                <h3 className="font-header text-5xl font-extrabold tracking-tight text-blue-50">
                  Robust, Secure Back-End Development
                </h3>
                <p className="mt-4 text-grey-100 lg:text-lg">
                  Your website is more than what your customers see &ndash; it&apos;s how you protect their data, manage
                  operations, and scale your business. We build secure, reliable systems that handle everything from
                  customer accounts to internal tools, ensuring your digital platform is stable, safe, and ready for
                  growth. Whether you&apos;re a charity accepting donations or a business processing orders, we make
                  sure your data &ndash; and your reputation &ndash; stay protected.
                </p>
              </div>
              <div className="order-4 col-span-full lg:order-3 lg:col-span-1">
                <h3 className="font-header text-5xl font-extrabold tracking-tight text-blue-50">
                  Built for Performance. Engineered for Security
                </h3>
                <p className="mt-4 text-grey-100 lg:text-lg">
                  Your back end needs to do more than &quot;work&quot; &ndash; it needs to perform, protect, and grow
                  with your organisation. We design and build <strong>tailored, secure infrastructure</strong> to manage
                  content, user data, ecommerce, and more. Every site we develop follows best practices in data
                  handling, encryption, and uptime reliability &ndash; so you can focus on your business with peace of
                  mind.
                </p>
              </div>
              <div className="order-3 col-span-full items-center lg:order-4 lg:col-span-1">
                <div className="justify center flex size-[540px] items-center">
                  <Image src="/digital/rocket.png" alt="A toy rocket" width={540} height={540} />
                </div>
              </div>
            </div>
            <h3 className="font-header text-5xl font-extrabold tracking-tight text-blue-50 lg:mt-12">
              Back-End Architecture You Can Trust
            </h3>
            <p className="-mt-6 text-grey-800 lg:text-lg">
              When you work with Big Pixel, you’re not just getting a website &ndash; you&apos;re getting a digital
              foundation built to support your organisation long-term. From GDPR-compliant data handling to custom
              content management systems, we create powerful, secure back-end solutions that deliver confidence to your
              team and protection to your users.
            </p>
          </div>
        </main>
      </Container>
    </RootLayout>
  )
}
