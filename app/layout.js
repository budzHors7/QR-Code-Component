import './globals.css'

export const metadata = {
  title: 'QR code component | Frontend Mentor',
  description: 'QR Code Component Challenge on Frontend Mentor',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
