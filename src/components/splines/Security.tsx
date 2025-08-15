'use client'

import { useConsentManager } from '@c15t/nextjs'
import Spline from '@splinetool/react-spline'

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
    <div className="size-[540px]">
      <div className="h-[540px]">
        <Spline scene="/splines/security_cloud.spline" />
      </div>
    </div>
  )
}
