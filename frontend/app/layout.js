import './globals.css'

export const metadata = {
  title: 'Recyclit',
  description: 'Recycle IT',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="subpixel-antialiased">{children}</body>
    </html>
  )
}
