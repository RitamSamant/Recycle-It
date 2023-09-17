import './globals.css'
import { DM_Sans } from 'next/font/google'
const dmSans = DM_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Recycle It',
  description: 'Recycle IT',
  icons: {
    icon: './logo.svg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dmSans.className}>{children}</body>
    </html>
  )
}
