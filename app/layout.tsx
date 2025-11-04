import type React from "react"
import type { Metadata } from "next"
import { Great_Vibes, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great-vibes",
})

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Buon Compleanno Giulia - 19 Anni",
  description: "Una celebrazione speciale per il 19º compleanno di Giulia",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it">
      <body className={`${poppins.variable} ${greatVibes.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
