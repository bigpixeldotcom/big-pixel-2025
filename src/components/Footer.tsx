import {
  faBluesky,
  faLinkedin,
  faSquareFacebook,
  faSquareInstagram,
} from '@awesome.me/kit-89a9106b13/icons/classic/brands'
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
  const year = new Date().getFullYear()
  return (
    <footer className="bg-grey-800">
      <Container>
        <div className="grid grid-cols-1 items-center gap-4 py-8 md:py-12 lg:grid-cols-6">
          <div className="col-span-full lg:col-span-3">
            <p className="text-sm text-grey-100">
              &copy; Copyright {year}, Big Pixel Consulting Ltd. All rights reserved.
            </p>
            <p className="mt-2 text-xs text-grey-200">Registered in England and Wales No. 15928040.</p>
            <p className="text-xs text-grey-200">
              Registered address: Hardwick House, Agricultural Hall Plain, Norwich, England, NR1 3FS
            </p>
          </div>
          <div className="col-span-full lg:col-span-2">
            <div className="flex items-center gap-4">
              <Link href="https://www.dba.org.uk/" target="_blank" rel="noopener noreferrer">
                <Image src="/footer/dba-logo.svg" alt="DBA logo" width={160} height={44} />
              </Link>
              <Link href="https://www.acid.uk.com/" target="_blank" rel="noopener noreferrer">
                <Image src="/footer/acid-logo.svg" alt="ACID logo" width={160} height={44} />
              </Link>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-4">
              {socials.map((social: SocialType) => (
                <Link
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-grey-100 transition-colors duration-200 ease-out hover:text-grey-200"
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
