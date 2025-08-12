'use client'

import Player from '@vimeo/player'
import type React from 'react'
import { useEffect, useRef } from 'react'

interface VimeoBackgroundProps {
  videoId: number
  autoplay?: boolean
  loop?: boolean
  muted?: boolean
}

export const VimeoPortfolio169: React.FC<VimeoBackgroundProps> = ({ videoId, autoplay, loop, muted }) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const vimeoPlayer = new Player(containerRef.current, {
      id: videoId,
      background: true,
      autoplay,
      loop,
      muted,
      controls: false,
      autopause: false,
      responsive: true,
    })

    vimeoPlayer.setVolume(0)

    const resizeVideo = () => {
      if (!containerRef.current) return
      const windowWidth = window.innerWidth
      const aspectRatio = 16 / 9
      let videoWidth = 0
      let videoHeight = 0

      if (windowWidth >= 1280) {
        videoWidth = 1152
        videoHeight = videoWidth / aspectRatio
      } else {
        videoWidth = windowWidth - 72
        videoHeight = videoWidth / aspectRatio
      }
      containerRef.current.style.width = `${videoWidth}px`
      containerRef.current.style.height = `${videoHeight}px`
      containerRef.current.style.objectFit = 'cover'
      containerRef.current.style.overflow = 'hidden'
    }

    resizeVideo()

    window.addEventListener('resize', resizeVideo)

    return () => {
      window.removeEventListener('resize', resizeVideo)
    }
  }, [videoId, autoplay, loop, muted])

  return <div ref={containerRef} className="w-full overflow-hidden" />
}
