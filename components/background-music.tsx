"use client"

import { useEffect, useRef } from "react"

interface BackgroundMusicProps {
  soundEnabled: boolean
}

export default function BackgroundMusic({ soundEnabled }: BackgroundMusicProps) {
  const backgroundAudioRef = useRef<HTMLAudioElement | null>(null)
  const introAudioRef = useRef<HTMLAudioElement | null>(null)
  const hasPlayedIntroRef = useRef(false)

  useEffect(() => {
    if (!soundEnabled) {
      // Stop all audio when sound is disabled
      if (backgroundAudioRef.current) {
        backgroundAudioRef.current.pause()
        backgroundAudioRef.current.currentTime = 0
      }
      if (introAudioRef.current) {
        introAudioRef.current.pause()
        introAudioRef.current.currentTime = 0
      }
      return
    }

    // Play happy-birthday.mp3 once when sound is first enabled
    if (!hasPlayedIntroRef.current) {
      const introAudio = new Audio("/happy-birthday.mp3")
      introAudio.volume = 0.7
      introAudioRef.current = introAudio

      introAudio.play().catch((error) => {
        console.error("Error playing intro audio:", error)
      })

      // Mark intro as played
      hasPlayedIntroRef.current = true

      // Start background music after intro starts
      const backgroundAudio = new Audio("/beatbirthday.mp3")
      backgroundAudio.loop = true
      backgroundAudio.volume = 0.5
      backgroundAudioRef.current = backgroundAudio

      // Start background music after a short delay
      setTimeout(() => {
        backgroundAudio.play().catch((error) => {
          console.error("Error playing background audio:", error)
        })
      }, 500)
    } else {
      // If intro already played, just resume background music
      if (backgroundAudioRef.current) {
        backgroundAudioRef.current.play().catch((error) => {
          console.error("Error playing background audio:", error)
        })
      } else {
        const backgroundAudio = new Audio("/beatbirthday.mp3")
        backgroundAudio.loop = true
        backgroundAudio.volume = 0.5
        backgroundAudioRef.current = backgroundAudio
        backgroundAudio.play().catch((error) => {
          console.error("Error playing background audio:", error)
        })
      }
    }

    return () => {
      // Cleanup when component unmounts or sound is disabled
      if (backgroundAudioRef.current) {
        backgroundAudioRef.current.pause()
        backgroundAudioRef.current.currentTime = 0
      }
      if (introAudioRef.current) {
        introAudioRef.current.pause()
        introAudioRef.current.currentTime = 0
      }
    }
  }, [soundEnabled])

  return null
}
