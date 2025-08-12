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
    <>
      <div className="absolute top-4 right-4 z-40">
        <div className="flex items-center justify-center gap-4">
          <Link
            href="/contact"
            className="rounded-full border-2 border-white/60 bg-white/10 px-4 py-3 text-white/80 transition-colors duration-200 ease-in-out hover:border-white hover:bg-black/30 hover:text-white"
          >
            Contact Us
          </Link>
          <button
            className="size-12 cursor-pointer rounded-full bg-white/20 text-xl text-white transition-colors duration-200 ease-in-out hover:bg-black/30"
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
        className="overflow-hidden bg-spline-grey shadow-inner"
      >
        <div className="p-4 lg:p-8">
          <XIcon />
          <Navigation />
        </div>
      </motion.header>
    </>
  )
}
