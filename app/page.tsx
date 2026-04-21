import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Gallery from '@/components/Gallery'
import Admission from '@/components/Admission'
import Address from '@/components/Address'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Admission />
        <Address />
      </main>
      <Footer />
    </div>
  )
}
