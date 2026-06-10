import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://invoxa.io'),
  title: {
    default: 'Invoxa — Get paid faster. Stop chasing clients.',
    template: '%s | Invoxa',
  },
  description:
    'Invoxa helps freelancers and agencies send professional invoices, automate payment reminders, and get paid 3x faster. Start free today — no credit card required.',
  keywords: [
    'invoice software',
    'online invoicing',
    'freelancer billing',
    'payment reminders',
    'small business accounting',
    'invoice generator',
    'time tracking',
    'client payments',
  ],
  authors: [{ name: 'Invoxa' }],
  creator: 'Invoxa',
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://invoxa.io',
    siteName: 'Invoxa',
    title: 'Invoxa — Get paid faster. Stop chasing clients.',
    description: 'Professional invoicing software for freelancers and agencies.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Invoxa' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Invoxa — Get paid on time, every time.',
    description: 'Send invoices, automate reminders, and get paid 3x faster.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white text-slate-900 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
