"use client"

import { useEffect, useState } from "react"
import IntroSection from "@/components/intro-section"
import LetterSection from "@/components/letter-section"
import FinaleSection from "@/components/finale-section"
import FloatingParticles from "@/components/floating-particles"
import SoundToggle from "@/components/sound-toggle"
import BackgroundMusic from "@/components/background-music"

export default function Home() {
  const [audioReady, setAudioReady] = useState(false)
  const [soundEnabled, setSoundEnabled] = useState(true) // Enable sound by default
  const [currentSection, setCurrentSection] = useState<"intro" | "letter" | "finale">("intro")

  useEffect(() => {
    setAudioReady(true)
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-secondary to-background overflow-hidden">
      <FloatingParticles />

      <BackgroundMusic soundEnabled={soundEnabled} />

      <div className="fixed top-4 right-4 z-50">
        <SoundToggle enabled={soundEnabled} onChange={setSoundEnabled} />
      </div>

      <div className="min-h-screen">
        {currentSection === "intro" && (
          <IntroSection soundEnabled={soundEnabled} onNext={() => setCurrentSection("letter")} />
        )}
        {currentSection === "letter" && (
          <LetterSection onNext={() => setCurrentSection("finale")} onBack={() => setCurrentSection("intro")} />
        )}
        {currentSection === "finale" && (
          <FinaleSection soundEnabled={soundEnabled} onBack={() => setCurrentSection("letter")} />
        )}
      </div>
    </main>
  )
}
