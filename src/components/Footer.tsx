import {
  faBluesky,
  faLinkedin,
  faSquareFacebook,
  faSquareInstagram,
} from '@awesome.me/kit-89a9106b13/icons/classic/brands'
import { useConsentManager } from '@c15t/nextjs'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from './Container'

type SocialType = {
  id: number
  icon: IconDefinition
  url: string
}

const socials: SocialType[] = [
  {
    id: 1,
    icon: faLinkedin,
    url: 'https://www.linkedin.com/company/bigpixeldotcom/',
  },
  {
    id: 2,
    icon: faBluesky,
    url: 'https://bsky.app/profile/big-pixel.com',
  },
  {
    id: 3,
    icon: faSquareFacebook,
    url: 'https://www.facebook.com/bigpixeldotcom/',
  },
  {
    id: 4,
    icon: faSquareInstagram,
    url: 'https://www.instagram.com/bigpixeldotcom/',
  },
]

export default function Footer() {
  const consentManager = useConsentManager()
  const year = new Date().getFullYear()

  return (
    <footer className="bottom-0 w-screen bg-grey-100">
      <Container>
        <div className="grid grid-cols-1 items-center gap-4 py-8 md:py-12 lg:grid-cols-6">
          <div className="order-3 col-span-full lg:order-1 lg:col-span-3">
            <p className="text-sm text-grey-10">
              &copy; Copyright {year}, Big Pixel Consulting Ltd. All rights reserved.
            </p>
            <p className="mt-2 text-xs text-grey-25">Registered in England and Wales No. 15928040.</p>
            <p className="text-xs text-grey-25">
              Registered address: Hardwick House, Agricultural Hall Plain, Norwich, England, NR1 3FS
            </p>
            <nav className="mt-2 flex gap-4 text-sm text-grey-10">
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/cookie-policy">Cookie Policy</Link>
              <button
                type="button"
                onClick={() => consentManager.setIsPrivacyDialogOpen(true)}
                className="cursor-pointer"
              >
                Privacy Settings
              </button>
            </nav>
          </div>
          <div className="order-2 col-span-full lg:col-span-2">
            <div className="flex items-center gap-8">
              <Link href="https://www.dba.org.uk/" target="_blank" rel="noopener noreferrer">
                <Image src="/footer/dba-logo.svg" alt="DBA logo" width={160} height={44} />
              </Link>
              <Link href="https://www.acid.uk.com/" target="_blank" rel="noopener noreferrer">
                <Image src="/footer/acid-logo.svg" alt="ACID logo" width={160} height={44} />
              </Link>
            </div>
          </div>
          <div className="order-1 lg:order-3">
            <div className="flex items-center gap-4">
              {socials.map((social: SocialType) => (
                <Link
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-grey-10 transition-colors duration-200 ease-out hover:text-grey-25"
                >
                  <FontAwesomeIcon icon={social.icon} fixedWidth />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
