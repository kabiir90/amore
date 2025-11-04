"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function Confetti() {
  const [confetti, setConfetti] = useState<Array<{ id: number; left: number; delay: number; color: string }>>([])

  useEffect(() => {
    const colors = ["#E75480", "#FFD1DC", "#FFC0CB", "#FFB6C1"]
    const newConfetti = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.5,
      color: colors[Math.floor(Math.random() * colors.length)],
    }))
    setConfetti(newConfetti)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {confetti.map((item) => (
        <motion.div
          key={item.id}
          className="absolute w-2 h-2 rounded-full"
          style={{
            left: `${item.left}%`,
            top: "-10px",
            backgroundColor: item.color,
          }}
          animate={{
            y: [0, window.innerHeight + 100],
            x: [0, (Math.random() - 0.5) * 200],
            rotate: [0, 720],
            opacity: [1, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: item.delay,
          }}
        />
      ))}
    </div>
  )
}
