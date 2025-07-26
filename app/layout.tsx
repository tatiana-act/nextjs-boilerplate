import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'City Tours - Discover Your City Like Never Before',
  description: 'Join our expert-guided tours and explore the hidden gems, rich history, and vibrant culture of our beautiful city. Book your adventure today!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}