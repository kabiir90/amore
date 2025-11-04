"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function HeartFireworks() {
  const [hearts, setHearts] = useState<Array<{ id: number; x: number; y: number }>>([])

  useEffect(() => {
    const newHearts = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
    }))
    setHearts(newHearts)
  }, [])

  const HeartSVG = ({ size = 24 }) => (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  )

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-accent"
          style={{
            left: `${heart.x}%`,
            top: `${heart.y}%`,
            width: "30px",
            height: "30px",
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1, 0.8],
            opacity: [0, 1, 0],
            y: [0, -200, -400],
            x: [(Math.random() - 0.5) * 200, 0, (Math.random() - 0.5) * 200],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 0.5,
            ease: "easeOut",
          }}
        >
          <HeartSVG />
        </motion.div>
      ))}
    </div>
  )
}
