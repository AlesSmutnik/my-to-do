import Header from "./components/Header" 
import Footer from "./components/Footer"
import "./globals.css"

export default function RootLayout({ children }: {children: React.ReactNode}) {
  return (
    <html lang="cs">
      <body>
        <Header />
        <main>
          {children}         
        </main>
        <Footer />
      </body>
    </html>
  );
}
