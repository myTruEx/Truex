"use client"

import { motion } from "framer-motion"

export default function WelcomeScreen() {
  return (
    <div className="h-screen flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ rotate: -10 }}
        animate={{ rotate: 20 }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          duration: 0.5,
          ease: "easeInOut",
        }}
        className="text-5xl mb-6"
      >
        👋
      </motion.div>

      <div className="max-w-md text-center space-y-4">
        <h1 className="text-2xl text-white font-medium">We&apos;re so excited to have you here!</h1>

        <p className="text-white/90 text-lg">
          Let&apos;s get started on creating your awesome profile. It only takes a few minutes, promise!
        </p>
      </div>

      <div className="mt-12 flex justify-end w-full max-w-md">
        <button className="px-4 py-2 bg-white text-gray-800 rounded-md font-medium hover:bg-white/90 transition-colors">
          Let&apos;s Go
        </button>
      </div>
    </div>
  )
}

