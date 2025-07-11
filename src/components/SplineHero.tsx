import Spline from '@splinetool/react-spline/next'
import Image from 'next/image'
import { Suspense } from 'react'

export default function SplineHero() {
  return (
    <div className="h-full bg-spline-grey">
      <div className="h-[240px] md:h-[560px] lg:h-[720px] xl:h-[900px]">
        <Suspense fallback={<Image src="big_pixel.jpg" fill alt="" priority />}>
          <Spline scene="big_pixel.spline" />
        </Suspense>
      </div>
    </div>
  )
}
