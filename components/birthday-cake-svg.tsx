"use client"

import { motion } from "framer-motion"

export default function BirthdayCakeSVG() {
  const candleVariants = {
    flicker: {
      opacity: [1, 0.7, 1, 0.8, 1],
      transition: { duration: 0.5, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1.5 },
    },
  }

  const flameDance = {
    animate: {
      y: [0, -5, 0],
      x: [0, 2, -2, 0],
      transition: { duration: 0.8, repeat: Number.POSITIVE_INFINITY },
    },
  }

  return (
    <motion.svg
      viewBox="0 0 400 400"
      className="w-full max-w-md h-auto"
      initial={{ scale: 0, rotate: -10 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <defs>
        <linearGradient id="cakeShadow" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#FFE4E8", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#FFB6C1", stopOpacity: 1 }} />
        </linearGradient>

        <linearGradient id="frostingGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#FFF0F5", stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: "#FFD1DC", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#FFC0CB", stopOpacity: 1 }} />
        </linearGradient>

        <linearGradient id="flameGradient">
          <stop offset="0%" style={{ stopColor: "#FFFF00", stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: "#FF8C00", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#FF4500", stopOpacity: 1 }} />
        </linearGradient>

        <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="4" stdDeviation="3" floodOpacity="0.3" />
        </filter>
      </defs>

      {/* Bottom layer */}
      <ellipse cx="200" cy="280" rx="160" ry="35" fill="#E75480" opacity="0.4" filter="url(#shadow)" />

      {/* Bottom cake layer */}
      <g>
        <path
          d="M 40 200 Q 40 240 60 260 L 340 260 Q 360 240 360 200 Z"
          fill="url(#cakeShadow)"
          stroke="#E75480"
          strokeWidth="1.5"
        />
        <ellipse cx="200" cy="200" rx="160" ry="40" fill="#FFE4E8" stroke="#E75480" strokeWidth="1.5" />
      </g>

      {/* Middle cake layer */}
      <g>
        <path
          d="M 80 150 Q 80 185 100 205 L 300 205 Q 320 185 320 150 Z"
          fill="url(#cakeShadow)"
          stroke="#E75480"
          strokeWidth="1.5"
        />
        <ellipse cx="200" cy="150" rx="130" ry="35" fill="#FFE4E8" stroke="#E75480" strokeWidth="1.5" />
      </g>

      {/* Top cake layer */}
      <g>
        <path
          d="M 120 100 Q 120 130 140 155 L 260 155 Q 280 130 280 100 Z"
          fill="url(#cakeShadow)"
          stroke="#E75480"
          strokeWidth="1.5"
        />
        <ellipse cx="200" cy="100" rx="100" ry="30" fill="#FFE4E8" stroke="#E75480" strokeWidth="1.5" />
      </g>

      {/* Top frosting swirl */}
      <path
        d="M 120 95 Q 140 75 160 90 Q 180 75 200 85 Q 220 75 240 90 Q 260 75 280 95"
        stroke="#FFD1DC"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />

      {/* Middle layer frosting swirl */}
      <path
        d="M 90 145 Q 110 125 130 140 Q 150 125 170 135 Q 190 120 210 135 Q 230 125 250 140 Q 270 125 310 145"
        stroke="#FFD1DC"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />

      {/* Bottom layer frosting swirl */}
      <path
        d="M 60 195 Q 85 170 110 190 Q 135 170 160 185 Q 185 165 210 185 Q 235 170 260 190 Q 285 170 340 195"
        stroke="#FFD1DC"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
      />

      {[70, 130, 200, 270, 330].map((x, idx) => (
        <g key={idx}>
          {/* Candle wax body with gradient */}
          <g filter="url(#shadow)">
            <ellipse cx={x} cy="95" rx="6" ry="25" fill="#FFFACD" />
            <ellipse cx={x - 2} cy="95" rx="3" ry="25" fill="#FFFFE0" opacity="0.6" />
          </g>

          {/* Candle base (holder) */}
          <rect x={x - 7} y="115" width="14" height="8" rx="2" fill="#E75480" />

          {/* Flame glow - outer */}
          <motion.circle cx={x} cy="65" r="15" fill="rgba(255, 165, 0, 0.2)" variants={candleVariants} />

          {/* Flame glow - middle */}
          <motion.circle cx={x} cy="65" r="10" fill="rgba(255, 140, 0, 0.3)" variants={candleVariants} />

          {/* Flame - main body */}
          <motion.path
            d={`M ${x} 58 Q ${x - 6} 45 ${x - 4} 30 Q ${x} 22 ${x + 2} 30 Q ${x + 6} 45 ${x} 58 Z`}
            fill="url(#flameGradient)"
            filter="url(#shadow)"
            variants={flameDance}
          />

          {/* Flame - inner bright core */}
          <motion.ellipse cx={x} cy="48" rx="3" ry="8" fill="#FFFF99" opacity="0.9" variants={candleVariants} />

          {/* Flame - tip highlight */}
          <motion.ellipse cx={x} cy="35" rx="2" ry="3" fill="#FFFFFF" opacity="0.8" variants={candleVariants} />
        </g>
      ))}

      {[140, 200, 260].map((cx, idx) => (
        <motion.g
          key={`heart-${idx}`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 + idx * 0.15 }}
        >
          <path
            d={`M ${cx} ${50 + idx * 15} C ${cx - 4} ${46 + idx * 15} ${cx - 6} ${44 + idx * 15} ${cx - 4} ${42 + idx * 15} C ${cx - 2} ${40 + idx * 15} ${cx} ${42 + idx * 15} ${cx} ${44 + idx * 15} C ${cx} ${42 + idx * 15} ${cx + 2} ${40 + idx * 15} ${cx + 4} ${42 + idx * 15} C ${cx + 6} ${44 + idx * 15} ${cx + 4} ${46 + idx * 15} ${cx} ${50 + idx * 15} Z`}
            fill="#E75480"
            opacity="0.8"
          />
        </motion.g>
      ))}
    </motion.svg>
  )
}
