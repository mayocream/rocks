import type { Metadata } from 'next'
import { Noto_Sans_JP, Noto_Sans_SC } from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mayo Rocks!',
  description: 'Mayo Rocks!',
}

const NotoSansJP = Noto_Sans_JP({ subsets: ['latin'] })
const NotoSansSC = Noto_Sans_SC({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ja'>
      <body
        className={`${NotoSansJP.className} ${NotoSansSC.className} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
