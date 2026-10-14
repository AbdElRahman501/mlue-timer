import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mlue Timer — Plan Your Day, Focus, and Achieve Your Goals',
  description: 'Mlue Timer is a focused Windows desktop workspace for tasks, time, habits, and meaningful goals.',
  metadataBase: new URL('https://example.com'),
  openGraph: {
    title: 'Mlue Timer — Plan Your Day, Focus, and Achieve Your Goals',
    description: 'A focused desktop workspace for your tasks, time, habits, and goals.',
    images: ['https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-plWN7N0MXBVLNLtkq3kmYTzSbx3qMo.png'],
  },
  generator: 'v0.app',
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

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
