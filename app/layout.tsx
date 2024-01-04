import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Receitas por assinatura - Cookify',
  description: 'Cookify é um site de receitas por assinatura',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
