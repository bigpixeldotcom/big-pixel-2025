'use client'

import { motion, Variants } from 'motion/react'
import Image from 'next/image'

export default function ScrollingSite() {
  const scrollVariants: Variants = {
    offscreen: {
      y: 0,
      transition: {
        type: 'tween',
        duration: 4,
        delay: 0.2,
      },
    },
    onscreen: {
      y: -1772,
      transition: {
        type: 'tween',
        duration: 4,
        delay: 0.2,
      },
    },
  }

  return (
    <div className="z-0 mx-0 -mt-6 mb-8 size-full perspective-distant sm:size-5/6 md:-mt-10 md:mb-16">
      <div className="-translate-z-36 rotate-x-18 -rotate-y-8 rotate-z-6">
        <div className="aspect-3/2 w-full overflow-hidden rounded-xl bg-grey-75 shadow-2xl sm:w-[360px] sm:drop-shadow-[32px_42px_6px_rgba(0,0,0,0.25)] md:w-[720px] md:drop-shadow-[64px_96px_10px_rgba(0,0,0,0.25)] lg:w-[1024px]">
          <div className="flex gap-1.5 pt-3 pl-4 md:gap-2 md:pt-6 md:pl-8">
            <div className="size-2 rounded-full bg-red-50 md:size-3 lg:size-4" />
            <div className="size-2 rounded-full bg-yellow-50 md:size-3 lg:size-4" />
            <div className="size-2 rounded-full bg-green-50 md:size-3 lg:size-4" />
          </div>
          <div className="mx-3 mt-2 rounded-md border border-grey-25 px-1 py-0.5 text-xs text-grey-25 md:mx-6 md:mt-4 md:px-2 md:py-1 md:text-sm lg:text-base">
            https://calibreaudio.org.uk
          </div>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.7 }}
            className="relative mt-3 h-full w-full overflow-clip bg-white md:mt-6"
          >
            <motion.div variants={scrollVariants} className="">
              <Image src="/work/calibre-homescroll.png" alt="" width={1024} height={2032} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
