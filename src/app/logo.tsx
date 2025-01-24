"use client"

import { motion } from "framer-motion"

export default function Logo() {
  return (
    <div className="bg-gradient-to-br from-[#e6f4f4] to-[#e8f5e9] min-h-screen flex items-center justify-center overflow-hidden">
      <motion.h1
        className="text-[12rem] font-bold tracking-tight"
        initial={{ opacity: 0, scale: 0.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <span className="text-[#1a237e]">Tru</span>
        <span className="text-[#2e7d32]">Ex</span>
        <span className="text-6xl align-super ml-4">®</span>
      </motion.h1>
    </div>
  )
}

