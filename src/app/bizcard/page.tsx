import { Container } from '@/components/Container'
import PageHeader from '@/components/PageHeader'
import RootLayout from '@/components/RootLayout'
import {
  faBriefcaseBlank,
  faBuilding,
  faFaceSmile,
  faMobileNotch,
  faPaperPlane,
  faPhoneOffice,
} from '@awesome.me/kit-89a9106b13/icons/sharp/regular'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'

export default function About() {
  return (
    <RootLayout>
      <PageHeader
        title="Contact Details"
        subtitle="You probably scanned a card"
        icon={faBriefcaseBlank}
        colour="bg-grey-100"
      />
      <Container>
        <main className="my-12">
          <div className="flex w-full flex-col gap-6 lg:gap-12">
            <div className="flex">
              <h1 className="bp-gradient font-header bg-clip-text text-6xl leading-18 font-black text-transparent md:text-8xl md:leading-30 lg:text-9xl lg:leading-40">
                Big Pixel
              </h1>
            </div>
            <div className="flex flex-col-reverse items-center gap-6 lg:flex-row lg:gap-8">
              <div className="flex-grow">
                <dl className="mb-12 flex w-full flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <dt className="flex size-10 items-center justify-center rounded bg-purple-50 text-xl text-white">
                      <FontAwesomeIcon icon={faFaceSmile} fixedWidth />
                      <span className="sr-only">Name</span>
                    </dt>
                    <dd className="text-xl font-semibold">Adrian Beston</dd>
                  </div>
                  <div className="flex items-center gap-4">
                    <dt className="flex size-10 items-center justify-center rounded bg-purple-50 text-xl text-white">
                      <FontAwesomeIcon icon={faPaperPlane} fixedWidth />
                      <span className="sr-only">Email</span>
                    </dt>
                    <dd className="text-xl font-semibold">adrian@big-pixel.com</dd>
                  </div>
                  <div className="flex items-center gap-4">
                    <dt className="flex size-10 items-center justify-center rounded bg-purple-50 text-xl text-white">
                      <FontAwesomeIcon icon={faMobileNotch} fixedWidth />
                      <span className="sr-only">Mobile</span>
                    </dt>
                    <dd className="text-xl font-semibold">07415 853 453</dd>
                  </div>
                  <div className="flex items-center gap-4">
                    <dt className="flex size-10 items-center justify-center rounded bg-purple-50 text-xl text-white">
                      <FontAwesomeIcon icon={faPhoneOffice} fixedWidth />
                      <span className="sr-only">Office Telephone</span>
                    </dt>
                    <dd className="text-xl font-semibold">01692 774 886</dd>
                  </div>
                  <div className="flex items-center gap-4">
                    <dt className="flex size-10 items-center justify-center rounded bg-purple-50 text-xl text-white">
                      <FontAwesomeIcon icon={faBuilding} fixedWidth />
                      <span className="sr-only">Address</span>
                    </dt>
                    <dd className="text-xl font-semibold">Hardwick House, Agricultural Hall Plain, Norwich NR1 3FS</dd>
                  </div>
                </dl>
                <a
                  href="/adrian-beston-big-pixel.vcf"
                  className="rounded bg-purple-50 px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 ease-out hover:bg-purple-75"
                >
                  Add my contact details
                </a>
              </div>
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
          </div>
        </main>
      </Container>
    </RootLayout>
  )
}
