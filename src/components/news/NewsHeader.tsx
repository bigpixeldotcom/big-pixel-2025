'use client'

import { motion } from 'motion/react'
import Image from 'next/image'

export default function NewsHeader({ title, subtitle, image }: { title: string; subtitle?: string; image?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -1024 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.4,
        ease: 'easeOut',
      }}
      className="flex items-start"
    >
      <div className="relative h-96 w-full pt-36 pb-12 lg:pt-44 lg:pb-96">
        <div className="absolute top-0 left-0 -z-10 h-96 w-full bg-gradient-to-b from-black to-transparent">
          <Image src={image} alt={title} fill style={{ objectFit: 'cover' }} />
        </div>
        <div className="z-10">
          <div className="absolute top-80 bg-red-50 px-20 py-6">
            <p className="text-5xl font-black text-white lg:text-7xl">{title}</p>
          </div>
        </div>
        {subtitle && <p className="mt-2 text-2xl lg:text-4xl">{subtitle}</p>}
      </div>
    </motion.div>
  )
}
