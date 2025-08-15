'use client'

import { faGearCode, faPaintbrushPencil, faRectangleCode } from '@awesome.me/kit-89a9106b13/icons/classic/regular'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'
import { motion, Variants } from 'motion/react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

type WorkType = {
  id: number
  title: string
  icon: IconDefinition
  url: string
  cta: string
  intro: string
  colour: string
}

const workTypes: WorkType[] = [
  {
    id: 1,
    title: 'Web Design & UX',
    icon: faRectangleCode,
    url: '/web',
    cta: 'Learn more about our web design services',
    intro:
      'Beautiful, user-first websites designed to captivate your audience and deliver results — whether you’re a startup or a global brand.',
    colour: 'bg-green-50',
  },
  {
    id: 2,
    title: 'Web Development',
    icon: faGearCode,
    url: '/digital',
    cta: 'Learn more about our web development services',
    intro:
      'We don’t just make it look good—we build it to work. Secure, scalable web development tailored to your business goals. From CMS-driven sites to custom apps and ecommerce.',
    colour: 'bg-blue-50',
  },
  {
    id: 3,
    title: 'Branding & Graphic Design',
    icon: faPaintbrushPencil,
    url: '/design',
    cta: 'Learn all about our branding and design services',
    intro:
      'With decades in print and digital, we create memorable brand identities and supporting materials that elevate your message.',
    colour: 'bg-purple-50',
  },
  // {
  //   id: 4,
  //   title: 'Strategy & Support',
  //   icon: faBriefcaseBlank,
  //   url: '/strategy',
  //   cta: 'Learn more about how we can help with your digital strategy',
  //   intro:
  //     'We collaborate directly with your team—from marketing heads to founders—to deliver end-to-end creative support.',
  //   colour: 'bg-orange-50',
  // },
]

const containerVariants: Variants = {
  offscreen: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
  onscreen: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

const circleVariants: Variants = {
  offscreen: {
    opacity: 0,
    x: 200,
    rotate: 360,
  },
  onscreen: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: {
      type: 'spring',
      bounce: 0.3,
      duration: 0.8,
    },
  },
}

const textVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 100,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0.3,
      duration: 0.8,
    },
  },
}

export default function RollingIcons() {
  const [amount, setAmount] = useState(0.8)

  useEffect(() => {
    const updateAmount = () => {
      const width = window.innerWidth
      setAmount(width < 640 ? 0.3 : 0.8)
    }

    updateAmount()
    window.addEventListener('resize', updateAmount)
    return () => window.removeEventListener('resize', updateAmount)
  }, [])

  return (
    <motion.div
      className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-1 xl:grid-cols-3 xl:gap-16"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount }}
      variants={containerVariants}
    >
      {workTypes.map((type) => (
        <div key={type.id} className="flex flex-col items-center gap-2 text-center">
          <motion.div
            className={clsx(
              'flex size-32 items-center justify-center rounded-full text-5xl text-white shadow-lg shadow-black/30',
              type.colour
            )}
            variants={circleVariants}
          >
            <FontAwesomeIcon icon={type.icon} fixedWidth />
          </motion.div>
          <motion.div className="mt-6 flex min-h-64 flex-col justify-between gap-2" variants={textVariants}>
            <div>
              <h4 className="font-mono text-xl font-black text-yellow-50">{type.title}</h4>
              <p className="mt-2 text-white">{type.intro}</p>
            </div>
            <Link
              className="flex h-24 items-center justify-center rounded bg-grey-100 p-6 text-white transition-colors duration-200 ease-out hover:bg-black"
              href={type.url}
            >
              {type.cta}
            </Link>
          </motion.div>
        </div>
      ))}
    </motion.div>
  )
}
