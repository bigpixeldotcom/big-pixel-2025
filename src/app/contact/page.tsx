import ContactForm from '@/components/contact/Form'
import Meetings from '@/components/contact/Meetings'
import { Container } from '@/components/Container'
import PageHeader from '@/components/PageHeader'
import RootLayout from '@/components/RootLayout'
import { faMessageLines } from '@awesome.me/kit-89a9106b13/icons/sharp/regular'

export default function Contact() {
  return (
    <RootLayout>
      <PageHeader
        title="Contact Us"
        subtitle="Let’s make something brilliant together."
        icon={faMessageLines}
        colour="bg-grey-75"
      />
      <Container>
        <main className="my-12 min-w-full">
          <div className="flex w-full flex-col gap-6 lg:gap-12">
            <div className="flex">
              <h1 className="bp-gradient font-header bg-clip-text text-6xl leading-16 font-black text-transparent md:text-8xl md:leading-28 lg:text-9xl lg:leading-36">
                Big hello
              </h1>
            </div>
            <p className="flex-grow text-lg font-medium text-grey-75 lg:text-3xl lg:leading-10">
              Tell us about your project &ndash; we&apos;ll get back within two business days.
            </p>
            <Meetings />
            <p className="flex-grow text-lg font-medium text-grey-75 lg:text-3xl lg:leading-10">
              Already have an idea for a project? Then fill out this form and we will get back to you within two
              business days with a personalized proposal.
            </p>
            <ContactForm />
          </div>
        </main>
      </Container>
    </RootLayout>
  )
}
