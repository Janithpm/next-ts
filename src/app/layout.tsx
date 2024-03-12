import React from 'react'
import type { Metadata } from 'next'
import Providers from '@/providers'
import { Roboto } from 'next/font/google'
import './globals.scss'

const roboto = Roboto({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'Next Js Starter',
  description: 'Next Js Starter'
}

type RootLayoutProps = {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang='en' className='light'>
      <body className={roboto.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
