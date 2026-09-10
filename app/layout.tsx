import type { Metadata, Viewport } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: 'SASSY_FINANCE_OS v1.0 // AI that roasts your spending',
  description:
    'Confess your worst purchase to the terminal. Get roasted by an AI with zero chill. Join the waitlist before your bank account files a restraining order.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} bg-background`}>
      <body className="font-mono antialiased">{children}</body>
    </html>
  )
}
