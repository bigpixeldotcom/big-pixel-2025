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
      <div className="relative h-64 w-screen pt-36 pb-48 lg:h-96 lg:pt-44 lg:pb-96">
        <div className="absolute top-0 left-0 -z-10 h-64 w-full lg:h-96">
          <Image src={image ?? '/posts/default.jpg'} alt={title} fill style={{ objectFit: 'cover' }} />
        </div>
        <div className="z-10">
          <div className="absolute top-52 bg-red-50 px-6 py-6 lg:top-80 lg:px-20">
            <p className="text-3xl font-black text-white md:text-5xl lg:text-7xl">{title}</p>
            {subtitle && <p className="mt-2 text-lg text-red-10 md:text-2xl lg:text-4xl">{subtitle}</p>}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
