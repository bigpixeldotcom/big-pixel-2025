'use client'

export default function VideoPlayer({ src }: { src: string }) {
  return <video src={src} autoPlay muted loop playsInline className="h-auto w-full object-cover" />
}
