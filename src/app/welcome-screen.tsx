"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function WelcomeScreen() {
  return (
    <div className="h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-[#34d399] to-[#0d4f6e]">
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

      <motion.div
        className="max-w-md text-center space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h1 className="text-2xl text-white font-medium">We&apos;re so excited to have you here!</h1>

        <p className="text-white/90 text-lg">
          Let&apos;s get started on creating your awesome profile. It only takes a few minutes, promise!
        </p>
      </motion.div>

      <motion.div
        className="mt-12 flex justify-end w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        
        <Link href="/auth/login" passHref>
          <motion.a
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white text-gray-800 text-lg font-semibold rounded-md hover:bg-white/90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let&apos;s Go
          </motion.a>
        </Link>
      </motion.div>
    </div>
  )
}

