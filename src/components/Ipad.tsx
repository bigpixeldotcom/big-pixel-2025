import Image from 'next/image'

export default function Ipad({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="aspect-2/3 h-[620px] rounded-2xl bg-gradient-to-br from-grey-400 via-grey-100 to-grey-500 p-2 shadow-2xl shadow-black md:h-[840px]">
      <div className="aspect-2/3 h-full rounded-xl bg-black p-8">
        <Image
          src={src}
          alt={alt}
          height={960}
          width={640}
          style={{ objectFit: 'fill' }}
          className="aspect-2/3 h-full rounded"
        />
      </div>
    </div>
  )
}
