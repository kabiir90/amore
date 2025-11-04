"use client"

import { motion } from "framer-motion"

interface SoundToggleProps {
  enabled: boolean
  onChange: (enabled: boolean) => void
}

export default function SoundToggle({ enabled, onChange }: SoundToggleProps) {
  return (
    <motion.button
      onClick={() => onChange(!enabled)}
      className={`p-3 sm:p-4 rounded-full transition-all duration-300 shadow-lg ${
        enabled
          ? "bg-gradient-to-r from-primary via-pink-400 to-primary text-white shadow-primary/40 hover:shadow-xl hover:shadow-primary/60 border border-primary/50"
          : "bg-white/40 hover:bg-white/60 text-foreground border border-white/50 hover:border-white/70 backdrop-blur-sm shadow-md hover:shadow-lg"
      }`}
      whileHover={{ scale: 1.15, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      animate={{
        scale: enabled ? [1, 1.05, 1] : 1,
        rotate: enabled ? [0, 5, -5, 0] : 0,
      }}
      transition={{
        duration: 3,
        repeat: enabled ? Number.POSITIVE_INFINITY : 0,
        ease: "easeInOut",
      }}
    >
      <motion.svg
        className="w-6 h-6 sm:w-7 sm:h-7"
        fill="currentColor"
        viewBox="0 0 24 24"
        animate={{ rotate: enabled ? [0, 0, 0] : [0, -10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        {enabled ? (
          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.31-2.5-4.06v8.12c1.48-.75 2.5-2.29 2.5-4.06zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
        ) : (
          <path d="M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.41,22.99 3.50612381,23.1 4.13399899,22.8429026 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 L4.13399899,1.16151496 C3.34915502,0.9 2.40734225,0.9 1.77946707,1.4429026 C0.994623095,2.0766443 0.837654301,3.00 1.15159189,3.99191677 L3.03521743,10.4328097 C3.03521743,10.5898071 3.19218622,10.7469045 3.50612381,10.7469045 L16.6915026,11.5323914 C16.6915026,11.5323914 17.1624089,11.5323914 17.1624089,12.0035836 C17.1624089,12.4744748 17.1624089,12.4744748 16.6915026,12.4744748 Z" />
        )}
      </motion.svg>
    </motion.button>
  )
}
