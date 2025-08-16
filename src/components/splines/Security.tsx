'use client'

import { useConsentManager } from '@c15t/nextjs'
import Spline from '@splinetool/react-spline'

export default function SecuritySpline() {
  const consent = useConsentManager()
  const allowed = consent.hasConsentFor('experience')

  if (!allowed) {
    return (
      <div className="h-full w-full">
        <div className="mx-auto flex size-[540px] flex-col items-center justify-center">
          <p className="text-center">This interactive 3D content is blocked until you allow “experience” cookies.</p>
          <button
            onClick={() => consent.setIsPrivacyDialogOpen(true)}
            className="mt-2 cursor-pointer font-semibold text-blue-50 transition-colors duration-300 ease-out hover:text-blue-75"
          >
            Update privacy settings
          </button>
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
