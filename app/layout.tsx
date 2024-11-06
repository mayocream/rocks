import type { Metadata } from 'next'
import { Noto_Serif } from 'next/font/google'
import './globals.css'
import Logo from '@/app/icon.png'

export const metadata: Metadata = {
  title: 'Mayo Rocks!',
  description: `Mayo's Portfolio and Blog`,
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://mayo.rocks',
    siteName: 'Mayo Rocks!',
    images: [
      {
        url: Logo.src,
        alt: 'Mayo Rocks!',
      },
    ],
  },
}

const NotoSerif = Noto_Serif({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ja'>
      <body className={`${NotoSerif.className} antialiased`}>{children}</body>
    </html>
  )
}
