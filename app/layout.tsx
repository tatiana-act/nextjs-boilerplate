import type { Metadata } from 'next'
import { Analytics } from "@vercel/analytics/next"
import './globals.css'

export const metadata: Metadata = {
  title: 'Austin City Tours - Город, который ты ещё не знаешь',
  description: 'Присоединяйтесь к экскурсиям и откройте для себя скрытые жемчужины, богатую историю и яркую культуру нашего города!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}