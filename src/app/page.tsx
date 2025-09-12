import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Solutions from '@/components/Solutions'
import Security from '@/components/Security'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Solutions />
      <Security />
      <About />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  )
}