import type { Metadata } from 'next'
import { lora, montserrat } from './fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'Beyond Yoga with Phương',
  description: 'Tái tạo năng lượng và tìm lại giấc ngủ. Hành trình phục hồi hệ thần kinh từ survival mode.',
  metadataBase: new URL('https://beyondyogawithphuong.vercel.app'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" className={`${lora.variable} ${montserrat.variable}`}>
      <body className="bg-white font-body">
        {children}
      </body>
    </html>
  )
}
