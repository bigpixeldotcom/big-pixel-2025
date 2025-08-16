'use client'

import { faBars, faXmark } from '@awesome.me/kit-89a9106b13/icons/sharp/regular'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion, Variants } from 'motion/react'
import Link from 'next/link'
import { useState } from 'react'
import Navigation from './Navigation'
import XIcon from './XIcon'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const variants: Variants = {
    closed: {
      height: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 150,
        damping: 25,
      },
    },
    open: {
      height: 'auto',
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 150,
        damping: 10,
      },
    },
  }
  return (
    <div className="absolute top-0 z-30 w-full">
      <div className="absolute top-3 right-3 z-40 lg:top-4 lg:right-8">
        <div className="flex items-center justify-center gap-2 lg:gap-4">
          <Link
            href="/contact"
            className="rounded-full border-2 border-white/60 bg-black/30 px-4 py-2 text-white/80 backdrop-blur-lg transition-colors duration-300 ease-out hover:border-white hover:bg-black/40 hover:text-white lg:py-3"
          >
            Contact Us
          </Link>
          <button
            className="size-10 cursor-pointer rounded-full border-2 border-white/60 bg-black/30 text-lg text-white backdrop-blur-lg transition-colors duration-300 ease-out hover:border-white hover:bg-black/40 hover:text-white lg:size-12 lg:text-xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FontAwesomeIcon icon={isOpen ? faXmark : faBars} fixedWidth />
          </button>
        </div>
      </div>

      <motion.header
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        variants={variants}
        transition={{ duration: 0.3, ease: 'easeInOut', type: 'spring', stiffness: 200, restDelta: 2 }}
        className="overflow-hidden bg-spline-grey"
      >
        <div className="p-4 lg:p-8">
          <XIcon />
          <Navigation />
        </div>
      </motion.header>
    </div>
  )
}
