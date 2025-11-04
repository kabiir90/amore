"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface TypedTextProps {
  text: string
}

export default function TypedText({ text }: TypedTextProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index])
        setIndex((prev) => prev + 1)
      }, 80)

      return () => clearTimeout(timer)
    }
  }, [index, text])

  return (
    <motion.p
      className="font-script text-3xl md:text-4xl font-light text-foreground/80"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      {displayedText}
      <motion.span
        className="inline-block w-1 h-8 md:h-10 ml-2 bg-primary"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.7, repeat: Number.POSITIVE_INFINITY }}
      />
    </motion.p>
  )
}
