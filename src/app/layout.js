import '../Styles/globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
