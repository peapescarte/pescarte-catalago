import { Header } from '@/components/my-ui/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Work_Sans } from 'next/font/google'

const workSans = Work_Sans({ subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Pescarte',
  description: 'Pescarte - Uma rede social regional integrada por pescadores artesanais',
  icons: {
    icon: '/logo.svg'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={workSans.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
