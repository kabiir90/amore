"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import BirthdayCakeSVG from "./birthday-cake-svg"
import TypedText from "./typed-text"

interface IntroSectionProps {
  soundEnabled: boolean
  onNext: () => void
}

export default function IntroSection({ soundEnabled, onNext }: IntroSectionProps) {
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null)

  useEffect(() => {
    if (soundEnabled && !audioContext) {
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)()
      setAudioContext(ctx)
      playWelcomeChime(ctx)
    }
  }, [soundEnabled, audioContext])

  const playWelcomeChime = (ctx: AudioContext) => {
    const notes = [523.25, 659.25, 783.99]
    const now = ctx.currentTime

    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()

      osc.connect(gain)
      gain.connect(ctx.destination)

      osc.frequency.value = freq
      gain.gain.setValueAtTime(0.3, now + idx * 0.1)
      gain.gain.exponentialRampToValueAtTime(0.01, now + idx * 0.1 + 0.5)

      osc.start(now + idx * 0.1)
      osc.stop(now + idx * 0.1 + 0.5)
    })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-12 sm:py-16 md:py-20 relative">
      <motion.div
        className="text-center max-w-2xl mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Title - Responsive text sizes for mobile */}
        <motion.div variants={itemVariants}>
          <h1 className="font-script text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-primary mb-2 sm:mb-4 drop-shadow-lg">
            Buon Compleanno
          </h1>
          <h2 className="font-script text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-accent mb-6 sm:mb-8">
            Giulia
          </h2>
        </motion.div>

        {/* Birthday Cake - Reduced size for mobile */}
        <motion.div variants={itemVariants} className="my-6 sm:my-10 md:my-12">
          <div className="flex justify-center scale-75 sm:scale-90 md:scale-100">
            <BirthdayCakeSVG />
          </div>
        </motion.div>

        {/* Subheading - Responsive text */}
        <motion.div variants={itemVariants}>
          <TypedText text="19 Anni di Gioia, Amore e Sogni" />
        </motion.div>

        {/* Call to Action Button - Use onNext callback instead of scroll */}
        <motion.div
          variants={itemVariants}
          className="mt-8 sm:mt-10 md:mt-12"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.button
            onClick={onNext}
            className="font-body px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-primary via-pink-400 to-primary text-white rounded-full font-semibold text-base sm:text-lg shadow-lg shadow-primary/30 hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 w-full sm:w-auto relative overflow-hidden group border border-primary/50"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            whileHover={{ letterSpacing: "0.05em" }}
          >
            <span className="relative z-10">Continua il Viaggio</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-40"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            />
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Decorative corner accents - Hidden on mobile */}
      <div className="hidden md:block absolute top-10 left-10 w-20 h-20 border-t-2 border-l-2 border-primary/30 rounded-tl-2xl" />
      <div className="hidden md:block absolute bottom-10 right-10 w-20 h-20 border-b-2 border-r-2 border-accent/30 rounded-br-2xl" />
    </section>
  )
}
