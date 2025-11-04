"use client"

import { motion } from "framer-motion"
import Confetti from "./confetti"

interface LetterSectionProps {
  onNext: () => void
  onBack: () => void
}

export default function LetterSection({ onNext, onBack }: LetterSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-12 sm:py-16 md:py-20 relative bg-gradient-to-b from-background to-secondary">
      <Confetti />

      <motion.div className="max-w-2xl mx-auto w-full" variants={containerVariants} initial="hidden" animate="visible">
        {/* Decorative frame - Responsive padding */}
        <motion.div
          className="relative p-6 sm:p-8 md:p-12 bg-white/40 backdrop-blur-md rounded-2xl border border-primary/20 shadow-2xl"
          variants={itemVariants}
          whileHover={{ boxShadow: "0 20px 50px rgba(224, 84, 130, 0.2)" }}
        >
          {/* Corner decorations - Hidden on very small screens */}
          <div className="hidden sm:block absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-primary" />
          <div className="hidden sm:block absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-accent" />
          <div className="hidden sm:block absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-accent" />
          <div className="hidden sm:block absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-primary" />

          {/* Letter content */}
          <motion.div variants={itemVariants} className="text-center">
            <h3 className="font-script text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 sm:mb-6">
              Cara Giulia,
            </h3>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="font-body text-sm sm:text-base md:text-lg text-foreground/80 leading-relaxed mb-4 sm:mb-6 text-center"
          >
            Oggi è un giorno straordinario, un giorno tutto tuo. 19 anni di vita piena di luce, sorrisi sinceri e magia
            che solo tu sai creare. Ogni momento trascorso con te è un dono, una pagina scritta nel libro più bello
            della mia vita.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="font-body text-sm sm:text-base md:text-lg text-foreground/80 leading-relaxed mb-6 sm:mb-8 text-center"
          >
            Auguro a un cuore puro come il tuo un futuro brillante, pieno di avventure straordinarie, amore infinito e
            sogni che si avverano. Che ogni giorno sia colorato di felicità e che il tuo sorriso continui a illuminare
            il mondo.
          </motion.p>

          <motion.div variants={itemVariants} className="text-center text-foreground text-lg sm:text-xl">
            <p className="font-body text-primary font-light">Con tutto il mio amore,</p>
            <span className="font-script text-accent text-2xl sm:text-3xl block mt-4">✦ Il tuo Tesoro ✦</span>
          </motion.div>
        </motion.div>

        {/* Button Group - Responsive button layout */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mt-8 sm:mt-10 md:mt-12 w-full">
          <motion.button
            onClick={onBack}
            className="font-body flex-1 px-6 sm:px-8 py-3 sm:py-4 bg-white/40 hover:bg-white/60 text-foreground rounded-full font-semibold text-sm sm:text-base transition-all duration-300 backdrop-blur-sm border border-white/40 hover:border-white/70 shadow-md hover:shadow-lg"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            ← Indietro
          </motion.button>
          <motion.button
            onClick={onNext}
            className="font-body flex-1 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-accent to-pink-400 text-accent-foreground rounded-full font-semibold text-sm sm:text-base shadow-lg shadow-accent/40 hover:shadow-2xl hover:shadow-accent/60 transition-all duration-300 relative overflow-hidden group border border-accent/50"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
            whileHover={{ scale: 1.03, letterSpacing: "0.02em" }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Guarda la Sorpresa ✨</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
            />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}
