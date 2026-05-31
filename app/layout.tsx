import type { Metadata } from 'next'
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
    <html lang="vi">
      <body className="bg-white">
        {children}
      </body>
    </html>
  )
}
