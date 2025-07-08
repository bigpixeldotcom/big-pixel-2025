import { Container } from '@/components/Container'
import RollingIcons from './RollingIcons'

export default function Helping() {
  return (
    <div className="flex h-screen w-full items-center overflow-x-clip bg-grey-700">
      <Container>
        <div className="flex w-full flex-col items-center gap-12 md:flex-row">
          <div className="flex flex-col gap-4">
            <h2 className="font-mono text-6xl font-black text-light-blue lg:text-8xl">
              Creative Web &amp; Graphic Design for Businesses
            </h2>
            <h3 className="mt-2 text-xl font-semibold text-white lg:text-3xl">
              We can design &amp; build your whole brand, from end-to-end
            </h3>
            <RollingIcons />
          </div>
        </div>
      </Container>
    </div>
  )
}
