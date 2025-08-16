'use client'

export function FloatingPlayer({ src }: { src: string }) {
  return (
    <div className="shadow-md">
      <video src={src} autoPlay muted loop playsInline className="h-auto w-full object-cover" />
    </div>
  )
}

export function IpadPlayer({ src }: { src: string }) {
  return (
    <div className="aspect-3/2 w-full rounded-2xl bg-gradient-to-br from-grey-50 via-grey-25 to-grey-75 p-2 shadow-xl shadow-black/40 md:w-full">
      <div className="aspect-3/2 w-full rounded-xl bg-black p-4 md:p-8">
        <video src={src} autoPlay muted loop playsInline className="h-auto w-full object-cover" />
      </div>
    </div>
  )
}
