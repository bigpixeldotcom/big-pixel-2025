'use client'

import { useConsentManager } from '@c15t/nextjs'
import Spline from '@splinetool/react-spline'
import Image from 'next/image'
import { Suspense } from 'react'

export default function SecuritySpline() {
  const { hasConsentFor } = useConsentManager()
  const allowed = hasConsentFor('experience')

  if (!allowed) {
    return (
      <div className="h-full bg-spline-grey">
        <div className="h-[240px] pt-12 md:h-[560px] lg:h-[720px] lg:pt-0">
          <Image src="/big_pixel.jpg" fill style={{ objectFit: 'contain' }} alt="" priority />
        </div>
      </div>
    )
  }

  return (
    <div className="h-full bg-spline-grey">
      <div className="h-[240px] pt-12 md:h-[560px] lg:h-[720px] lg:pt-0">
        <Suspense fallback={<Image src="/big_pixel.jpg" fill alt="" priority />}>
          <Spline scene="/splines/big_pixel.spline" />
        </Suspense>
      </div>
    </div>
  )
}
