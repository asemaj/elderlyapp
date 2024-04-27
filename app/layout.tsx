import type { Metadata } from 'next';

import './globals.css'
import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'BioLink',
  description: 'transportaion app for elderlies',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="relative overflow-hidden">
          {children}
        </main>
      </body>
    </html>
  )
}
