"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import HeartFireworks from "./heart-fireworks"

interface FinaleSectionProps {
  soundEnabled: boolean
  onBack: () => void
}

export default function FinaleSection({ soundEnabled, onBack }: FinaleSectionProps) {
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null)

  useEffect(() => {
    if (soundEnabled && !audioContext) {
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)()
      setAudioContext(ctx)
      playCelebrationSound(ctx)
    }
  }, [soundEnabled, audioContext])

  const playCelebrationSound = (ctx: AudioContext) => {
    const notes = [659.25, 783.99, 987.77, 1174.66] // E, G, B, D
    const now = ctx.currentTime

    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()

      osc.connect(gain)
      gain.connect(ctx.destination)

      osc.frequency.value = freq
      gain.gain.setValueAtTime(0.25, now + idx * 0.08)
      gain.gain.exponentialRampToValueAtTime(0.01, now + idx * 0.08 + 0.4)

      osc.start(now + idx * 0.08)
      osc.stop(now + idx * 0.08 + 0.4)
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
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-12 sm:py-16 md:py-20 relative bg-gradient-to-b from-secondary via-background to-primary/5 overflow-hidden">
      <HeartFireworks />

      <motion.div
        className="text-center max-w-3xl mx-auto z-10 w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main message - Responsive heading */}
        <motion.h2
          variants={itemVariants}
          className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-8 sm:mb-10 md:mb-12 drop-shadow-lg"
        >
          Ti Amo, Giulia
        </motion.h2>

        {/* Decorative line */}
        <motion.div
          variants={itemVariants}
          className="h-1 bg-gradient-to-r from-transparent via-accent to-transparent max-w-xs mx-auto mb-8 sm:mb-10 md:mb-12"
        />

        {/* Footer message - Responsive text size */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl text-foreground/70 font-light italic px-2 sm:px-0"
        >
          Creato con amore per il tuo 19º compleanno
        </motion.p>

        {/* Decorative elements */}
        <motion.div variants={itemVariants} className="mt-10 sm:mt-12 md:mt-16 flex justify-center gap-4 sm:gap-8">
          {["✦", "✦", "✦"].map((icon, idx) => (
            <motion.span
              key={idx}
              className="text-2xl sm:text-3xl text-accent"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: idx * 0.3 }}
            >
              {icon}
            </motion.span>
          ))}
        </motion.div>

        {/* Back Button - Mobile-friendly back button */}
        <motion.button
          onClick={onBack}
          variants={itemVariants}
          className="mt-12 sm:mt-14 md:mt-16 px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-primary/30 to-accent/30 hover:from-primary/50 hover:to-accent/50 text-primary rounded-full font-semibold text-sm sm:text-base transition-all duration-300 backdrop-blur-sm border border-primary/40 hover:border-primary/70 shadow-md hover:shadow-lg relative overflow-hidden group"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10">← Rileggi</span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          />
        </motion.button>
      </motion.div>

      {/* Bottom decorative frame - Hidden on mobile */}
      <div className="hidden md:block absolute bottom-10 left-10 w-24 h-24 border-b-2 border-l-2 border-primary/20 rounded-bl-3xl" />
      <div className="hidden md:block absolute top-10 right-10 w-24 h-24 border-t-2 border-r-2 border-accent/20 rounded-tr-3xl" />
    </section>
  )
}
