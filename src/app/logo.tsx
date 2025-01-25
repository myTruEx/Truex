"use client"

import { motion } from "framer-motion"

export default function Logo() {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-[#e6f4f4] to-[#e0f2e9]">
      <motion.h1
        className="text-[12rem] font-bold tracking-tight"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <span className="text-[#1a237e]">Tru</span>
        <span className="text-[#2e7d32]">Ex</span>
        <motion.span
          className="text-6xl align-super ml-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          ®
        </motion.span>
      </motion.h1>
    </div>
  )
}

