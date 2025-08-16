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
    <motion.ul className="my-8 grid grid-cols-1 gap-4 px-4 lg:grid-cols-5" variants={navVariants}>
      {navigation.map((item) => (
        <motion.li key={item.id} variants={itemVariants}>
          <Link href={item.value}>
            <div
              className={clsx(
                'h-full w-full rounded-md p-4 transition-colors duration-200 ease-out',
                item.background,
                item.hover
              )}
            >
              <div className={clsx('flex gap-1', item.text)}>
                <p className="text-2xl font-bold">{item.name}</p>
                <span>
                  <FontAwesomeIcon className="align-super" icon={item.icon} fixedWidth />
                </span>
              </div>
              <p className={clsx('mt-2 hidden text-xs font-light md:text-sm/5 lg:block', item.text)}>
                {item.description}
              </p>
            </div>
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  )
}
