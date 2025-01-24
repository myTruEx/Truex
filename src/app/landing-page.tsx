"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Logo from "./logo"
import WelcomeScreen from "./welcome-screen"

export default function LandingPage() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  return (
    <div ref={containerRef} className="h-[200vh]">
      <motion.div className="fixed inset-0 bg-gradient-to-br from-[#e6f4f4] to-[#e0f2e9]" style={{ opacity }} />
      <motion.div className="fixed inset-0" style={{ opacity, scale }}>
        <Logo />
      </motion.div>
      <div className="h-screen" />
      <div className="h-screen bg-gradient-to-br from-[#34d399] to-[#0d4f6e]">
        <WelcomeScreen />
      </div>
    </div>
  )
}

