import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Chauhan Computer - Laptop & Computer Store in Jaipur',
  description: 'Best laptop and computer store in Jaipur. New & used laptops, desktops, repair services. Apple, HP, Dell, Lenovo - affordable pricing, fast service, genuine parts.',
  keywords: 'laptop store Jaipur, used laptop Jaipur, MacBook repair, computer repair, HP laptop, Dell laptop, Lenovo laptop, printer repair',
  generator: 'v0.app',
  openGraph: {
    title: 'Chauhan Computer - Laptop & Computer Store',
    description: 'Shop new and used laptops, desktops, and repair services in Jaipur',
    type: 'website',
    locale: 'en_IN',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
