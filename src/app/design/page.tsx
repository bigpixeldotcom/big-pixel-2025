import { Container } from '@/components/Container'
import PageHeader from '@/components/PageHeader'
import RootLayout from '@/components/RootLayout'
import {
  faBookOpenLines,
  faComputerClassic,
  faCopyright,
  faHouseHeart,
  faPaintbrushPencil,
  faSolarSystem,
  faUTurnRightUp,
} from '@awesome.me/kit-89a9106b13/icons/sharp/regular'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const services = [
  {
    id: 1,
    title: 'Brand Identity',
    description: 'Logo design, messaging, colour palettes, type, and tone.',
    icon: faCopyright,
    colour: 'bg-yellow-10',
    text: 'text-yellow-100',
  },
  {
    id: 2,
    title: 'Design Systems',
    description: 'Style guides, design elements for consistency and scalability.',
    icon: faSolarSystem,
    colour: 'bg-green-10',
    text: 'text-green-100',
  },
  {
    id: 3,
    title: 'Print Design',
    description: 'Brochures, reports, signage, point of sale, and publications.',
    icon: faBookOpenLines,
    colour: 'bg-blue-10',
    text: 'text-blue-100',
  },
  {
    id: 4,
    title: 'Digital Assets',
    description: 'Social templates, online ad creatives, and brand decks.',
    icon: faComputerClassic,
    colour: 'bg-purple-10',
    text: 'text-purple-100',
  },
  {
    id: 5,
    title: 'Charity & Campaigns',
    description: 'Messaging and visual identity for purpose-led projects.',
    icon: faHouseHeart,
    colour: 'bg-red-10',
    text: 'text-red-100',
  },
  {
    id: 6,
    title: 'Rebranding Projects',
    description: 'For evolving companies, mergers, or repositioning efforts.',
    icon: faUTurnRightUp,
    colour: 'bg-orange-10',
    text: 'text-orange-100',
  },
]

export default function Design() {
  return (
    <RootLayout>
      <PageHeader
        title="Graphic Design"
        subtitle="Print, brand identity, and brochure design"
        icon={faPaintbrushPencil}
        colour="bg-purple-50"
      />
      <Container>
        <main className="my-12">
          <div className="flex w-full flex-col gap-6 lg:gap-12">
            <div className="flex">
              <h1 className="bp-gradient bg-clip-text font-mono text-6xl leading-16 font-black text-transparent md:text-8xl md:leading-28 lg:text-9xl lg:leading-36">
                Big impact
              </h1>
            </div>
            <p className="flex-grow text-lg font-medium text-grey-75 lg:text-3xl lg:leading-10">
              Your brand is more than a logo &ndash; it&apos;s how people remember you, trust you, and even why they
              choose you.
            </p>
            <p className="flex-grow text-grey-100 lg:text-lg">
              With decades of experience in both digital and print, we help businesses and non-profits build clear,
              confident identities that work everywhere &ndash; from pitch decks and packaging to websites and window
              vinyls.
              <br />
              <br />
              Whether you&apos;re launching something new, refreshing something tired, or rolling out a full rebrand, we
              deliver strategic, thoughtful design that communicates exactly who you are and what you stand for.
            </p>
            <h2 className="text-3xl font-bold text-grey-75">Key Graphic Design Services We Offer</h2>
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
            <div className="grid grid-cols-2 gap-6 lg:gap-12">
              <div className="order-1 col-span-full lg:col-span-1">Image here</div>
              <div className="order-2 col-span-full lg:col-span-1">
                <h3 className="font-mono text-5xl font-extrabold tracking-tight text-red-50">
                  Branding That Builds Trust. Design That Gets Results
                </h3>
                <p className="mt-4 text-grey-100 lg:text-lg">
                  We don&apos;t just make things look good &ndash; we make them work hard for your brand. Whether
                  you&apos;re launching a product, repositioning your organisation, or rolling out a new campaign, we
                  deliver thoughtful, consistent design that builds trust, drives recognition, and supports your
                  business goals &ndash; across print, digital, and everything in between.
                </p>
              </div>
              <div className="order-4 col-span-full lg:order-3 lg:col-span-1">
                <h3 className="font-mono text-5xl font-extrabold tracking-tight text-red-50">
                  Graphic Design with Purpose, Built on Experience
                </h3>
                <p className="mt-4 text-grey-100 lg:text-lg">
                  With decades of design expertise behind us, we understand what makes visual communication effective
                  &ndash; not just eye-catching. From annual reports to social media assets, we create branded materials
                  that speak clearly, reflect your identity, and meet the demands of your audience and channels. No
                  fluff. Just focused, functional design that performs.
                </p>
              </div>
              <div className="order-3 col-span-full lg:order-4 lg:col-span-1">Image here</div>
            </div>
            <h3 className="font-mono text-5xl font-extrabold tracking-tight text-red-50 lg:mt-12">
              Creating Brands That Speak with Clarity and Confidence
            </h3>
            <p className="-mt-6 text-grey-800 lg:text-lg">
              Whether you&apos;re starting from scratch or evolving an existing identity, we help you express who you
              are &ndash; visually, consistently, and with impact. We&apos;ve supported charities, startups, and
              established brands through full rebrands, logo refreshes, and system-wide rollouts &ndash; always with a
              focus on clarity, coherence, and creative thinking that lasts.
            </p>
          </div>
        </main>
      </Container>
    </RootLayout>
  )
}
