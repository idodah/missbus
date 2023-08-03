import './globals.css'
import { Inter } from 'next/font/google'
import Style from './page.module.css'
import Column from "@/components/Column"
import NavBar from "@/components/NavBar/NavBar"


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Missbus',
  description: 'Missbus Admin Panel',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Column className={Style.main} justifyContent='start' alignItems='start' color='white'>
          <NavBar />
            {children}
        </Column>
        
        </body>
    </html>
  )
}
