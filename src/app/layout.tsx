import { ThemeProvider } from '../components/theme-provider'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MAPRE - Mantenimiento Industrial y Proyectos Eléctricos',
  description: 'Soluciones expertas en mantenimiento de equipos industriales y proyectos eléctricos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

