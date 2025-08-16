'use client'

import { ConsentButton, useConsentManager } from '@c15t/nextjs'
import Spline from '@splinetool/react-spline'

export default function SecuritySpline() {
  const { hasConsentFor } = useConsentManager()
  const allowed = hasConsentFor('experience')

  if (!allowed) {
    return (
      <div className="h-full w-full">
        <div className="mx-auto size-[540px]">
          <p>This interactive 3D content is blocked until you allow “experience” cookies.</p>
          <ConsentButton className="mt-2">Update privacy settings</ConsentButton>
        </div>
      </div>
    )
  }

  return (
    <div className="size-80 md:size-[540px]">
      <div className="h-80 md:h-[540px]">
        <Spline scene="/splines/security_cloud.spline" />
      </div>
    </div>
  )
}
