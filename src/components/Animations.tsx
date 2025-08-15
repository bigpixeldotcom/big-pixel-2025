'use client'

import { faDesktop, faMobileNotch, faTablet } from '@awesome.me/kit-89a9106b13/icons/sharp/regular'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import {
  AnimatePresence,
  motion,
  useAnimationFrame,
  useMotionValue,
  usePresenceData,
  useScroll,
  useSpring,
  Variants,
  wrap,
} from 'motion/react'
import Image from 'next/image'
import { forwardRef, useState } from 'react'

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

export function ProgressOnScroll() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      id="scroll-indicator"
      style={{
        scaleX,
        position: 'relative',
        top: 0,
        left: 0,
        right: 0,
        height: 6,
        originX: 0,
        backgroundColor: 'oklch(0.5514 0.2242 26.2)',
      }}
    />
  )
}

export function SlideShow({ items }: { items: Slide[] }) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [direction, setDirection] = useState<1 | -1>(1)

  function setSlide(newDirection: 1 | -1) {
    const nextIndex = wrap(0, items.length, selectedIndex + newDirection)
    setSelectedIndex(nextIndex)
    setDirection(newDirection)
  }

  return (
    <div className="flex items-center justify-center gap-2.5">
      <motion.button
        aria-label="Previous"
        className="z-10 flex size-8 items-center justify-center rounded-full bg-green-50 text-white"
        onClick={() => setSlide(-1)}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowLeft />
      </motion.button>
      <div className="relative size-[800px] overflow-hidden">
        <AnimatePresence custom={direction} initial={false} mode="popLayout">
          <Slide key={selectedIndex}>
            <Image
              src={items[selectedIndex].src}
              alt={items[selectedIndex].alt ?? ''}
              fill
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 800px"
              priority
            />
          </Slide>
        </AnimatePresence>
      </div>
      <motion.button
        aria-label="Next"
        className="z-10 flex size-8 items-center justify-center rounded-full bg-green-50 text-white"
        onClick={() => setSlide(1)}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowRight />
      </motion.button>
    </div>
  )
}

export function SmallSlideShow({ items }: { items: Slide[] }) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [direction, setDirection] = useState<1 | -1>(1)

  function setSlide(newDirection: 1 | -1) {
    const nextIndex = wrap(0, items.length, selectedIndex + newDirection)
    setSelectedIndex(nextIndex)
    setDirection(newDirection)
  }

  return (
    <div className="flex items-center justify-center gap-2 xl:gap-6">
      <motion.button
        aria-label="Previous"
        className="z-10 flex size-8 items-center justify-center rounded-full bg-purple-50 text-white"
        onClick={() => setSlide(-1)}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowLeft />
      </motion.button>
      <div className="relative size-[360px] overflow-hidden xl:size-[480px]">
        <AnimatePresence custom={direction} initial={false} mode="popLayout">
          <Slide key={selectedIndex}>
            <Image
              src={items[selectedIndex].src}
              alt={items[selectedIndex].alt ?? ''}
              fill
              className="object-fit"
              sizes="(max-width: 480px) 100vw, 480px"
              priority
            />
          </Slide>
        </AnimatePresence>
      </div>
      <motion.button
        aria-label="Next"
        className="z-10 flex size-8 items-center justify-center rounded-full bg-purple-50 text-white"
        onClick={() => setSlide(1)}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowRight />
      </motion.button>
    </div>
  )
}

const Slide = motion(
  forwardRef(function Slide({ children }: { children: React.ReactNode }, ref: React.Ref<HTMLDivElement>) {
    const direction = usePresenceData() as 1 | -1

    return (
      <motion.div
        ref={ref}
        className="absolute inset-0 h-full w-full"
        initial={{ opacity: 0, x: direction * 50 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: {
            delay: 0.1,
            type: 'spring',
            bounce: 0.3,
            duration: 0.5,
          },
        }}
        exit={{ opacity: 0, x: direction * -50 }}
      >
        {children}
      </motion.div>
    )
  })
)

export function KeyFrameResponsive() {
  const icons = [
    <FontAwesomeIcon icon={faDesktop} className="text-9xl" />,
    <FontAwesomeIcon icon={faTablet} className="text-8xl" />,
    <FontAwesomeIcon icon={faMobileNotch} className="text-6xl" />,
  ]

  const [iconIndex, setIconIndex] = useState(0)
  const progress = useMotionValue(0)
  const duration = 2000 + 1000 // 2s anim + 1s repeat delay

  useAnimationFrame((t) => {
    const loopTime = t % duration
    const pct = loopTime / duration

    if (pct < 0.3)
      setIconIndex(0) // Desktop
    else if (pct < 0.6)
      setIconIndex(1) // Tablet
    else setIconIndex(2) // Mobile
  })

  return (
    <div className="flex h-full w-full items-center justify-center">
      <motion.div
        animate={{
          scale: [1, 2, 2, 1.5, 1.5, 1],
          rotate: [0, 0, 180, 180, 0, 0],
          borderRadius: ['0%', '0%', '50%', '50%', '0%'],
        }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
          times: [0, 0.2, 0.4, 0.6, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
        className="size-42 rounded-sm bg-green-50"
      />
      <div className="absolute size-42 text-white">
        <motion.div
          key={iconIndex}
          animate={{
            scale: [0, 1],
            opacity: [0, 1],
          }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.2,
            ease: 'easeInOut',
            times: [0, 0.2, 0.4, 0.6, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
          className="flex h-full w-full items-center justify-center text-white"
        >
          {icons[iconIndex]}
        </motion.div>
      </div>
    </div>
  )
}
