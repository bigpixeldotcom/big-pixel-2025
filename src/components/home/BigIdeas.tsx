import { PopUpOnScroll } from '@/components/Animations'
import { Container } from '@/components/Container'
import Ipad from '@/components/Ipad'

export default function BigIdeas() {
  return (
    <div className="flex min-h-screen w-full items-center overflow-x-clip bg-yellow">
      <Container>
        <div className="mt-16 flex flex-col items-center gap-12 lg:flex-row">
          <div className="flex flex-col gap-4">
            <h2 className="font-mono text-6xl font-black text-red lg:text-8xl">Big Ideas Deserve a Big Impact</h2>
            <h3 className="mt-2 text-xl font-semibold lg:text-3xl">
              The internet is a very busy place, with over 1 billion websites estimated to be out there
              <a href="#1" className="align-super text-xs hover:text-red">
                1
              </a>
              . So it is important that your brilliant idea has some impact in all that noise.
            </h3>
            <p className="text-xl">
              We can deliver a website that search engines love just as much as visitors. Using the latest tech to make
              sure the site is fast, responsive and fun to use, every pixel can help push your brand and message,
              supporting all your hard work and helping ensure you reach the audience you want to reach.
            </p>
            <p className="mt-12 text-sm" id="1">
              1.{' '}
              <a href="https://siteefy.com/how-many-websites-are-there/" target="_blank" className="hover:text-red">
                Siteefy
              </a>
              . Accessed July 2025.
            </p>
          </div>
          <div className="flex-0">
            <PopUpOnScroll>
              <Ipad src="/work/mcnag-ipad.png" alt="Screenshot of the Marine Conservation Norfolk website" />
            </PopUpOnScroll>
          </div>
        </div>
      </Container>
    </div>
  )
}
