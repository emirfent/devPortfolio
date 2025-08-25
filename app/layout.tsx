import React from 'react'
import './globals.css'
import 'remixicon/fonts/remixicon.css'
import { Fira_Code } from 'next/font/google'

const fira = Fira_Code({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400','500','600','700'],
})

export const metadata = {
  title: 'EMİR FENT — Bilgisayar Mühendisi Portfolio',
  description: 'AI/ML, IoT ve Full Stack geliştirme alanlarında projeler üzerinde çalışan bilgisayar mühendisi. Yeni teknolojilerle çözümler geliştirmeyi seviyorum.',
  keywords: ['bilgisayar mühendisi', 'ai/ml', 'iot', 'full stack developer', 'python', 'opencv', 'machine learning', 'emir fent'],
  authors: [{ name: 'EMİR FENT' }],
  creator: 'EMİR FENT',
  publisher: 'EMİR FENT',
  metadataBase: new URL('https://emirfent.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://emirfent.dev',
    title: 'EMİR FENT — Bilgisayar Mühendisi Portfolio',
    description: 'AI/ML, IoT ve Full Stack geliştirme alanlarında projeler üzerinde çalışan bilgisayar mühendisi.',
    siteName: 'EMİR FENT Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'EMİR FENT Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EMİR FENT — Bilgisayar Mühendisi Portfolio',
    description: 'AI/ML, IoT ve Full Stack geliştirme alanlarında projeler üzerinde çalışan bilgisayar mühendisi.',
    images: ['/og-image.png'],
    creator: '@emirfent',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${fira.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="bg-gray-900 text-white antialiased font-mono min-h-screen">
        <div className="fixed inset-0 bg-gradient-to-br from-blue-900/20 via-gray-900 to-purple-900/20 pointer-events-none"></div>
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  )
}
