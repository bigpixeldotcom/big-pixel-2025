'use client'

import { motion, Variants } from 'motion/react'

const popUpVariants: Variants = {
  offscreen: {
    opacity: 0,
    scale: 0.5,
  },
  onscreen: {
    opacity: 1,
    scale: 1,
    rotate: 9,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.3,
      delay: 0.2,
    },
  },
}

export function PopUpOnScroll({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }}>
      <motion.div variants={popUpVariants}>{children}</motion.div>
    </motion.div>
  )
}
