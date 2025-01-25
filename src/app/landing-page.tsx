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

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]) // Update 1: Changed the range to ensure complete fade out
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  return (
    <div ref={containerRef} className="h-[200vh]">
      <motion.div className="fixed inset-0 z-0" style={{ opacity, scale }}>
        {" "}
        {/* Update 2: Added z-index */}
        <Logo />
      </motion.div>
      <div className="h-screen" />
      <div className="h-screen relative z-10">
        {" "}
        {/* Update 3: Added z-index */}
        <WelcomeScreen />
      </div>
    </div>
  )
}

