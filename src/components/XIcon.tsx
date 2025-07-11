'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const colors = ['bg-red', 'bg-green', 'bg-purple', 'bg-yellow', 'bg-blue']

export default function XIcon() {
  const [rotationIndex, setRotationIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRotationIndex((prev) => (prev + 1) % colors.length)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const rotatedColors = colors.map((_, i) => colors[(i + rotationIndex) % colors.length])

  return (
    <Link href="/" className="group grid size-12 grid-cols-3 grid-rows-3">
      <div className={`col-span-1 ${rotatedColors[0]} transition-colors duration-300 ease-in-out group-hover:bg-red`} />
      <div
        className={`col-span-1 col-start-3 ${rotatedColors[1]} transition-colors duration-300 ease-in-out group-hover:bg-green`}
      />
      <div
        className={`col-span-1 col-start-2 ${rotatedColors[2]} transition-colors duration-300 ease-in-out group-hover:bg-purple`}
      />
      <div
        className={`col-span-1 col-start-1 ${rotatedColors[3]} transition-colors duration-300 ease-in-out group-hover:bg-yellow`}
      />
      <div
        className={`col-span-1 col-start-3 ${rotatedColors[4]} transition-colors duration-300 ease-in-out group-hover:bg-blue`}
      />
    </Link>
  )
}
