'use client'

import { useConsentManager } from '@c15t/nextjs'
import Spline from '@splinetool/react-spline'
import Image from 'next/image'
import { Suspense } from 'react'

export default function SecuritySpline() {
  const { hasConsentFor } = useConsentManager()
  const allowed = hasConsentFor('experience')

  if (!allowed) {
    return <FallbackImage />
  }

  return (
    <Suspense fallback={<FallbackImage />}>
      <div className="h-full bg-spline-grey">
        <div className="relative h-[240px] pt-12 md:h-[560px] lg:h-[720px] lg:pt-0">
          <Spline scene="/splines/big_pixel.spline" />
        </div>
      </div>
    </Suspense>
  )
}

function FallbackImage() {
  return (
    <div className="relative h-full bg-spline-grey">
      <div className="relative h-[240px] pt-12 md:h-[560px] lg:h-[720px] lg:pt-0">
        <Image src="/big_pixel.jpg" fill style={{ objectFit: 'contain' }} alt="" priority />
      </div>
    </div>
  )
}
