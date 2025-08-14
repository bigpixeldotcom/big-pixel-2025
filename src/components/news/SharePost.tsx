'use client'

import { faFacebookSquare, faLinkedin, faXTwitter } from '@awesome.me/kit-89a9106b13/icons/classic/brands'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Clipboard, ClipboardCheck, Send, SquareArrowOutUpRight } from 'lucide-react'
import { useCallback, useState } from 'react'

function withUTM(url: string, utm?: SocialShare['utm']) {
  if (!utm) return url
  const u = new URL(url)
  if (utm.source) u.searchParams.set('utm_source', utm.source)
  if (utm.medium) u.searchParams.set('utm_medium', utm.medium)
  if (utm.campaign) u.searchParams.set('utm_campaign', utm.campaign)
  return u.toString()
}

export default function SharePost({ title, url, excerpt, utm }: SocialShare) {
  const shareUrl = withUTM(url, { medium: 'social', campaign: 'news_share' })

  const onNativeShare = useCallback(async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title, text: excerpt, url: shareUrl })
      } catch {
        // user cancelled — do nothing
      }
    }
  }, [title, excerpt, shareUrl])

  const [copied, setCopied] = useState(false)
  const copy = async () => {
    await navigator.clipboard.writeText(shareUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  const enc = encodeURIComponent
  const twitter = `https://twitter.com/intent/tweet?text=${enc(title)}&url=${enc(shareUrl)}`
  const linkedin = `https://www.linkedin.com/sharing/share-offsite/?url=${enc(shareUrl)}`
  const facebook = `https://www.facebook.com/sharer/sharer.php?u=${enc(shareUrl)}`
  const email = `mailto:?subject=${enc(title)}&body=${enc(`${excerpt ?? ''}\n\n${shareUrl}`)}`

  return (
    <div className="flex items-center gap-4 p-4 lg:justify-between">
      {/* Web Share API (mobile/modern browsers) */}
      <button
        onClick={onNativeShare}
        className="flex size-8 cursor-pointer items-center justify-center rounded bg-blue-10 text-sm font-medium text-blue-75 transition-all duration-300 ease-out hover:bg-blue-50 hover:text-white"
        aria-label="Share using device menu"
      >
        <SquareArrowOutUpRight size={18} />
      </button>

      {/* Fallback links */}
      <a
        href={twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="flex size-8 cursor-pointer items-center justify-center rounded bg-blue-10 text-sm font-medium text-blue-75 transition-all duration-300 ease-out hover:bg-blue-50 hover:text-white"
      >
        <FontAwesomeIcon icon={faXTwitter} fixedWidth />
      </a>
      <a
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="flex size-8 cursor-pointer items-center justify-center rounded bg-blue-10 text-sm font-medium text-blue-75 transition-all duration-300 ease-out hover:bg-blue-50 hover:text-white"
      >
        <FontAwesomeIcon icon={faLinkedin} fixedWidth />
      </a>
      <a
        href={facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="flex size-8 cursor-pointer items-center justify-center rounded bg-blue-10 text-sm font-medium text-blue-75 transition-all duration-300 ease-out hover:bg-blue-50 hover:text-white"
      >
        <FontAwesomeIcon icon={faFacebookSquare} fixedWidth />
      </a>
      <a
        href={email}
        className="flex size-8 cursor-pointer items-center justify-center rounded bg-blue-10 text-sm font-medium text-blue-75 transition-all duration-300 ease-out hover:bg-blue-50 hover:text-white"
      >
        <Send size={18} />
      </a>

      <button
        onClick={copy}
        className="flex size-8 cursor-pointer items-center justify-center rounded bg-blue-10 text-sm font-medium text-blue-75 transition-all duration-300 ease-out hover:bg-blue-50 hover:text-white"
        aria-live="polite"
      >
        {copied ? <ClipboardCheck size={18} /> : <Clipboard size={18} />}
      </button>
    </div>
  )
}
