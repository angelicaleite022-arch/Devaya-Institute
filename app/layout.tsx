
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Instituto Melek Devaya',
  description: 'Axé, beleza e verdade — Instituto Melek Devaya',
  openGraph: {
    title: 'Instituto Melek Devaya',
    description: 'Axé, beleza e verdade — Instituto Melek Devaya',
    url: 'https://melekdevaya.org',
    siteName: 'Instituto Melek Devaya',
    images: ['/og.png'],
    locale: 'pt_BR',
    type: 'website',
  },
  icons: { icon: '/favicon.svg' }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="text-zinc-900">{children}</body>
    </html>
  )
}
