import { Container } from '@/components/Container'
import PageHeader from '@/components/PageHeader'
import RootLayout from '@/components/RootLayout'
import { faSmile } from '@awesome.me/kit-89a9106b13/icons/classic/regular'
import Image from 'next/image'

export default function About() {
  return (
    <RootLayout>
      <PageHeader
        title="About Big Pixel"
        subtitle="The people, the mission, and the vision"
        icon={faSmile}
        colour="bg-yellow-50"
      />
      <Container>
        <main className="my-12">
          <div className="flex w-full flex-col gap-6 lg:gap-12">
            <div className="flex">
              <h1 className="bp-gradient font-header bg-clip-text text-6xl leading-16 font-black text-transparent md:text-8xl md:leading-28 lg:text-9xl lg:leading-36">
                Big hello
              </h1>
            </div>
            <div className="flex flex-col-reverse items-center gap-6 lg:flex-row lg:gap-8">
              <p className="flex-1 text-lg font-medium text-grey-75 lg:text-3xl lg:leading-10">
                I&apos;m Adrian Beston &ndash; the founder and Digital Architect at Big Pixel, living under the vast
                skies of North Norfolk. I&apos;ve been a designer and web developer for more years than I care to admit,
                starting my career at PC World as an artworker before eventually leading their brand team. Since then,
                I&apos;ve worked with various SMEs, charities, and sole traders, building brand identities, websites,
                brochures, and more.
              </p>
              <div className="size-80">
                <Image
                  src="/images/profile2025.png"
                  alt="Adrian Beston"
                  width={800}
                  height={800}
                  className="flex-0 rounded-tl-4xl rounded-br-4xl"
                />
              </div>
            </div>
            <p className="flex-grow text-grey-100 lg:text-lg">
              I also founded the Milton Keynes Design Forum, which introduced me to a wide range of people from various
              creative industries and allowed me to work closely with the{' '}
              <a
                href="https://www.designcouncil.org.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-50 transition-colors duration-300 ease-out hover:text-blue-25"
              >
                Design Council
              </a>
              , including an awkward encounter with Vivienne Westwood.
              <br />
              <br />
              These days, I specialise in building robust web apps using the latest technologies, with a particular
              focus on{' '}
              <a
                href="https://nextjs.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-50 transition-colors duration-300 ease-out hover:text-blue-25"
              >
                Next.js
              </a>{' '}
              and{' '}
              <a
                href="https://reactjs.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-50 transition-colors duration-300 ease-out hover:text-blue-25"
              >
                React
              </a>{' '}
              more broadly. As a Full-Stack Developer, I also handle the back-end systems that power the polished front
              ends, working fluently with PostgreSQL, MongoDB, and Fauna, as well as OAuth2 systems. I&apos;m
              experienced with a variety of content management systems, including WordPress, Storyblok, and my personal
              favourite,{' '}
              <a
                href="https://www.sanity.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-50 transition-colors duration-300 ease-out hover:text-blue-25"
              >
                Sanity
              </a>
              .
              <br />
              <br />
              Whatever the project, I take great pride in ensuring that the work I deliver is not only pixel (or point)
              perfect but also reflects the client&apos;s vision to its fullest. I achieve this by involving clients
              heavily during the initial scoping phase and keeping them informed throughout the project.
            </p>
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold">Some of the organisations I have helped in the past (and present)</h2>
              <div className="mt-8 flex flex-col justify-between gap-y-4 md:flex-row md:gap-x-4">
                <Image src="/images/pcworld.png" height={112} width={256} alt="PC World" />
                <Image src="/images/currys.png" height={112} width={200} alt="Currys" />
                <Image src="/images/calibre.png" height={112} width={232} alt="Calibre Audio" />
                <Image src="/images/ais.png" height={112} width={144} alt="AIS" />
              </div>
            </div>
          </div>
        </main>
      </Container>
    </RootLayout>
  )
}
