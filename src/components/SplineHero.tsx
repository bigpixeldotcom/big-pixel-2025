import Spline from '@splinetool/react-spline/next'
import Image from 'next/image'
import { Suspense } from 'react'

export default function SplineHero() {
  return (
    <div className="h-full">
      <div className="h-[520px] md:h-[740px] lg:h-[960px] xl:h-[1080px]">
        <Suspense fallback={<Image src="big_pixel.jpg" fill alt="" />}>
          <Spline scene="big_pixel.spline" />
        </Suspense>
      </div>
    </div>
  )
}
