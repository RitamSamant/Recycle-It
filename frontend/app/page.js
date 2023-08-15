import Image from 'next/image'
import Navbar from './pages/Navbar'
import Hero from './pages/Hero'
import Process from './pages/Process'
import WhyUs from './pages/WhyUs'
import Sponsors from './pages/Sponsors'
import Benefits from './pages/Benefits'
import Newsletter from './pages/Newsletter'
import Reviews from './pages/Reviews'
import Contact from './pages/Contact'

export default function Home() {
  return (
    <main className="font-osesans-medium">
      <Navbar />
      <Hero />
      <Process />
      <WhyUs />
      <Sponsors />
      <Benefits />
      <Reviews />
      <Newsletter />
      <Contact />
    </main>
  )
}
