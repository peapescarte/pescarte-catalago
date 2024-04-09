import { SideBar } from '@/components/my-ui/SideBar'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pescarte',
  description: 'Pescarte - Uma rede social regional integrada por pescadores artesanais',
  icons: {
    icon: '/logo.svg'
  }
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full min-h-screen flex">
      <SideBar />
      <main className="flex-1 p-10 space-y-6">
        {children}
      </main>
    </div>
  )
}
