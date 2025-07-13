import { Container } from '@/components/Container'
import PageHeader from '@/components/PageHeader'
import RootLayout from '@/components/RootLayout'
import ScrollingSite from '@/components/web/ScrollingSite'
import {
  faCartShopping,
  faChartLineUp,
  faFolderTree,
  faRectangleCode,
  faShieldKeyhole,
  faUniversalAccess,
  faWrench,
} from '@awesome.me/kit-89a9106b13/icons/classic/regular'
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
    title: 'eCommerce',
    description: 'Sell with confidence using a range of eCommerce platforms.',
    icon: faCartShopping,
    colour: 'bg-green-10',
    text: 'text-green-100',
  },
  {
    id: 2,
    title: 'Content Management',
    description: 'We can set up a CMS and provide training for your team.',
    icon: faFolderTree,
    colour: 'bg-blue-10',
    text: 'text-blue-100',
  },
  {
    id: 3,
    title: 'Hosting & Security',
    description: 'Fast, secure, and fully managed infrastructure options.',
    icon: faShieldKeyhole,
    colour: 'bg-purple-10',
    text: 'text-purple-100',
  },
  {
    id: 4,
    title: 'SEO & Perfomance',
    description: 'Optimisations to help you stay visible and competitive.',
    icon: faChartLineUp,
    colour: 'bg-red-10',
    text: 'text-red-100',
  },
  {
    id: 5,
    title: 'Accessibility',
    description: 'WCAG 2.0 compliance to make your site usable by everyone.',
    icon: faUniversalAccess,
    colour: 'bg-orange-10',
    text: 'text-orange-100',
  },
  {
    id: 6,
    title: 'Ongoing Maintenance',
    description: 'We can monitor, update, and protect your site well into the future.',
    icon: faWrench,
    colour: 'bg-yellow-10',
    text: 'text-yellow-100',
  },
]

export default function Web() {
  return (
    <RootLayout>
      <PageHeader
        title="Web Design"
        subtitle="Websites, user interfaces, and user experience"
        icon={faRectangleCode}
        colour="bg-green-50"
      />
      <Container>
        <main className="my-12">
          <div className="flex w-full flex-col gap-6 lg:gap-12">
            <div className="flex">
              <h1 className="bp-gradient bg-clip-text font-mono text-6xl leading-16 font-black text-transparent md:text-8xl md:leading-28 lg:text-9xl lg:leading-36">
                Big pixels
              </h1>
            </div>
            <p className="flex-grow text-lg font-medium text-grey-75 lg:text-3xl lg:leading-10">
              Whatever you&apos;re doing &mdash; selling, creating, building, or collaborating &mdash; it&apos;s almost
              certain you&apos;ll need a website to go with it. And with the lightning-fast pace of technological
              development, that website will need to be fast, accessible, easy to navigate, and impactful.
            </p>
            <ScrollingSite />
            <div className="grid grid-cols-2 gap-6 lg:gap-12">
              <div className="order-1 col-span-full lg:col-span-1">Image here</div>
              <div className="order-2 col-span-full lg:col-span-1">
                <h2 className="font-mono text-5xl font-extrabold tracking-tight text-red-50">
                  Designed for Every Screen, Built for Every User
                </h2>
                <p className="mt-4 text-grey-100 lg:text-lg">
                  We create fully responsive websites that look great on any screen. We ensure sites adapt seamlessly
                  across desktops, tablets, and smartphones &ndash; so your message is always clear and the site is
                  pixel-perfect no matter how, or where, it&apos;s accessed.
                </p>
                <ul className="mt-4 list-disc space-y-3 marker:text-xl marker:text-purple-50">
                  <li>
                    <span className="font-semibold">Optimised for Mobile &amp; Tablet </span>
                    &ndash; Layouts that scale beautifully across devices
                  </li>
                  <li>
                    <span className="font-semibold">Built with Performance in Mind </span>
                    &ndash; Fast-loading, lightweight front-ends
                  </li>
                  <li>
                    <span className="font-semibold">Designed for Usability </span>
                    &ndash; Tap targets, accessible menus, and intuitive flows
                  </li>
                </ul>
              </div>
              <div className="order-4 col-span-full lg:order-3 lg:col-span-1">
                <h2 className="font-mono text-5xl font-extrabold tracking-tight text-red-50">
                  No Templates, Just Tailored Digital Experiences.
                </h2>
                <p className="mt-4 text-grey-100 lg:text-lg">
                  Your business isn&apos;t off-the-shelf &mdash; your website shouldn&apos;t be either. We create{' '}
                  <strong>bespoke websites</strong> that are designed around your brand, your goals, and your users.
                  Every line of code, every pixel, and every interaction is crafted to reflect your unique value.
                </p>
                <ul className="mt-4 list-disc space-y-3 marker:text-xl marker:text-purple-50">
                  <li>
                    <span className="font-semibold">Optimised for Mobile &amp; Tablet </span>
                    &ndash; Layouts that scale beautifully across devices
                  </li>
                  <li>
                    <span className="font-semibold">Built with Performance in Mind </span>
                    &ndash; Fast-loading, lightweight front-ends
                  </li>
                  <li>
                    <span className="font-semibold">Designed for Usability </span>
                    &ndash; Tap targets, accessible menus, and intuitive flows
                  </li>
                </ul>
              </div>
              <div className="order-3 col-span-full lg:order-4 lg:col-span-1">Image here</div>
            </div>
            <h2 className="font-mono text-5xl font-extrabold tracking-tight text-red-50 lg:mt-12">
              Built to Grow With You
            </h2>
            <p className="-mt-6 text-grey-800 lg:text-lg">
              Whether you&apos;re launching your first site or managing a complex digital ecosystem, we&apos;re here for
              the long haul.
              <br />
              From eCommerce platforms to ongoing maintenance, content updates to performance audits &mdash; we provide
              the support you need to keep your site running smoothly and evolving with your goals.
            </p>
            <h3 className="text-3xl font-bold text-grey-75">Key Web Design Services We Offer</h3>
            <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-6">
              {services.map((service: Services) => (
                <div key={service.id} className={`aspect-square w-full rounded-lg p-3 ${service.colour}`}>
                  <div className={`flex h-48 flex-col items-center justify-evenly gap-1 ${service.text}`}>
                    <FontAwesomeIcon icon={service.icon} fixedWidth className="text-6xl" />
                    <p className="font-semibold">{service.title}</p>
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
