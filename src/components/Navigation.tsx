'use client'

import { navigation } from '@/lib/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'
import { motion } from 'motion/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const path = usePathname()

  const navVariants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  }

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  }

  return (
    <motion.ul className="mt-22 grid grid-cols-1 gap-4 lg:grid-cols-3 2xl:grid-cols-5" variants={navVariants}>
      {navigation.map((item) => (
        <motion.li key={item.id} variants={itemVariants}>
          <Link href={item.value}>
            <div
              className={clsx(
                'w-full rounded-md border-2 p-4 transition-colors duration-200 ease-out hover:bg-black/20',
                item.border
              )}
            >
              <div className="flex items-center gap-2">
                <FontAwesomeIcon className={clsx('text-3xl', item.text)} icon={item.icon} fixedWidth />
                <p className={clsx('text-2xl font-bold', item.text)}>{item.name}</p>
              </div>
              <p className="mt-2 text-sm/5 font-light text-grey-200">{item.description}</p>
            </div>
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  )
}
