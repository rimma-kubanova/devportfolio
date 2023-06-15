import Navbar from '@components/Navbar'
import '@styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rimma | Front-End Developer',
}

export default function RootLayout({ children }) {
  return (
      <>
      {/* <Navbar /> */}
      {children}
      </>
  )
}
