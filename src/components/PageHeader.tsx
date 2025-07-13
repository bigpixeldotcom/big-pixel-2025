'use client'

import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'
import { motion } from 'motion/react'
import { Container } from './Container'

export default function PageHeader({
  title,
  subtitle,
  icon,
  colour,
}: {
  title: string
  subtitle?: string
  icon: IconDefinition
  colour: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -1024 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.4,
        ease: 'easeOut',
      }}
      className={clsx('flex items-center pt-36 pb-12 lg:pt-44 lg:pb-24', colour)}
    >
      <Container>
        <div className={colour === 'bg-yellow-50' ? 'text-black' : 'text-white'}>
          <div className="flex gap-2">
            <p className="text-5xl font-black lg:text-8xl">{title}</p>
            <span>
              <FontAwesomeIcon icon={icon} fixedWidth className="align-super text-2xl lg:text-5xl" />
            </span>
          </div>
          {subtitle && <p className="mt-2 text-2xl lg:text-4xl">{subtitle}</p>}
        </div>
      </Container>
    </motion.div>
  )
}
