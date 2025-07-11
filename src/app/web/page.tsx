import { Container } from '@/components/Container'
import PageHeader from '@/components/PageHeader'
import RootLayout from '@/components/RootLayout'
import ScrollingSite from '@/components/web/ScrollingSite'
import { faRectangleCode } from '@awesome.me/kit-89a9106b13/icons/classic/regular'

export default function Web() {
  return (
    <RootLayout>
      <PageHeader
        title="Web Design"
        subtitle="Websites, user interfaces, and user experience"
        icon={faRectangleCode}
        colour="bg-green"
      />
      <Container>
        <main className="my-12">
          <div className="flex w-full flex-col gap-6">
            <div className="flex">
              <h1 className="bp-gradient bg-clip-text font-mono text-6xl leading-16 font-black text-transparent md:text-8xl md:leading-28 lg:text-9xl lg:leading-36">
                Big pixels
              </h1>
            </div>
            <p className="flex-grow text-lg font-medium text-grey-700 lg:text-3xl lg:leading-10">
              Whatever you&apos;re doing &mdash; selling, creating, building, or collaborating &mdash; it&apos;s almost
              certain you&apos;ll need a website to go with it. And with the lightning-fast pace of technological
              development, that website will need to be fast, accessible, easy to navigate, and impactful.
            </p>
            <ScrollingSite />
            <div className="grid grid-cols-2 gap-6 lg:gap-8">
              <div className="col-span-full lg:col-span-1">Image here</div>
              <div className="col-span-full lg:col-span-1">
                <h2 className="font-mono text-5xl font-bold tracking-tight text-red">
                  Designed for Every Screen, Built for Every User
                </h2>
                <p className="mt-4 text-grey-800 lg:text-lg">
                  We create fully responsive websites that look great on any screen. We ensure sites adapt seamlessly
                  across desktops, tablets, and smartphones &ndash; so your message is always clear and the site is
                  pixel-perfect no matter how, or where, it&apos;s accessed.
                </p>
                <ul className="mt-4 list-disc space-y-3 marker:text-xl marker:text-purple">
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
              <div className="col-span-full lg:col-span-1">
                <h2 className="font-mono text-5xl font-bold tracking-tight text-red">
                  No Templates, Just Tailored Digital Experiences.
                </h2>
                <p className="mt-4 text-grey-800 lg:text-lg">
                  Your business isn&apos;t off-the-shelf &mdash; your website shouldn&apos;t be either. We create{' '}
                  <strong>bespoke websites</strong> that are designed around your brand, your goals, and your users.
                  Every line of code, every pixel, and every interaction is crafted to reflect your unique value.
                </p>
                <ul className="mt-4 list-disc space-y-3 marker:text-xl marker:text-purple">
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
              <div className="col-span-full lg:col-span-1">Image here</div>
            </div>
          </div>
        </main>
      </Container>
    </RootLayout>
  )
}
