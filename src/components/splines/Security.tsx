'use client'

import { useConsentManager } from '@c15t/nextjs'
import { lazy, Suspense } from 'react'

const Spline = lazy(() => import('@splinetool/react-spline/next'))

export default function SecuritySpline() {
  const { hasConsentFor } = useConsentManager()
  const allowed = hasConsentFor('experience')

  if (!allowed) {
    return (
      <div className="h-full w-full">
        <div className="mx-auto size-[540px]">This is a placeholder for the security spline.</div>
      </div>
    )
  }
  return (
    <div className="h-full w-full">
      <div className="mx-auto size-[540px]">
        <Suspense fallback={<div>Loading...</div>}>
          <Spline scene="/splines/security_cloud.spline" />
        </Suspense>
      </div>
    </div>
  )
}
