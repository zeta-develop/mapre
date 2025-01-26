import Header from "./components/Header"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Features from "./components/Features"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <Features />
      <Footer />
    </main>
  )
}

