import { Inter } from 'next/font/google'
import './globals.css'
import dotenv from 'dotenv';
dotenv.config();

const inter = Inter({ subsets: ['latin'] })
import Navbar from '@/components/navbar'
import Provider from '@/components/provider'
export const metadata = {
  title: 'Bibek Timilsina',
  description: 'My Portfolio Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <Provider>
          <Navbar />
          {children}
        </Provider>

      </body>
    </html>
  )
}