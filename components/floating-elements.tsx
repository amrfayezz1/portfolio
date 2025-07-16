"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface FloatingElementProps {
  children: React.ReactNode
  speed?: number
  direction?: number
  delay?: number
  className?: string
}

const FloatingElement = ({ children, speed = 0.5, direction = 1, delay = 0, className = "" }: FloatingElementProps) => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  if (prefersReducedMotion) {
    return <div className={`absolute pointer-events-none select-none opacity-20 ${className}`}>{children}</div>
  }

  return (
    <motion.div
      className={`absolute pointer-events-none select-none ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: [0.1, 0.3, 0.1],
        y: [0, -20 * direction, 0],
        x: [0, 10 * direction, 0],
        rotate: [0, direction * 2, 0],
      }}
      transition={{
        duration: 8 + speed * 2,
        repeat: Number.POSITIVE_INFINITY,
        delay,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  )
}

export default function FloatingElements() {
  return (
    <>
      <FloatingElement speed={0.3} direction={1} delay={0} className="top-20 left-10">
        <div className="w-32 h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl" />
      </FloatingElement>

      <FloatingElement speed={0.5} direction={-1} delay={1} className="top-40 right-20">
        <div className="w-24 h-24 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-lg" />
      </FloatingElement>

      <FloatingElement speed={0.4} direction={1} delay={2} className="bottom-40 left-20">
        <div className="w-40 h-40 bg-gradient-to-r from-green-500/8 to-blue-500/8 rounded-full blur-2xl" />
      </FloatingElement>

      <FloatingElement speed={0.6} direction={-1} delay={0.5} className="bottom-20 right-10">
        <div className="w-28 h-28 bg-gradient-to-r from-orange-500/12 to-red-500/12 rounded-full blur-xl" />
      </FloatingElement>

      <FloatingElement speed={0.3} direction={1} delay={1.5} className="top-1/2 left-1/4">
        <div className="w-20 h-20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-lg" />
      </FloatingElement>

      <FloatingElement speed={0.4} direction={-1} delay={2.5} className="top-1/3 right-1/3">
        <div className="w-36 h-36 bg-gradient-to-r from-violet-500/8 to-purple-500/8 rounded-full blur-2xl" />
      </FloatingElement>
    </>
  )
}
