'use client'

import { useConsentManager } from '@c15t/nextjs'
import Spline from '@splinetool/react-spline'

export default function SecuritySpline() {
  const consent = useConsentManager()
  const allowed = consent.hasConsentFor('experience')

  if (!allowed) {
    return (
      <div className="size-80 md:size-[540px]">
        <div className="mx-auto flex h-80 flex-col items-center justify-center md:h-[540px]">
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
        <Spline scene="https://prod.spline.design/ynGdwhDwq-8Un0Rw/scene.splinecode" />
      </div>
    </div>
  )
}
