import Hero from '@/components/sections/Hero'
import Relatability from '@/components/sections/Relatability'
import EntryPoints from '@/components/sections/EntryPoints'
import Products from '@/components/sections/Products'
import OngoingPractices from '@/components/sections/OngoingPractices'
import About from '@/components/sections/About'
import Newsletter from '@/components/sections/Newsletter'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Relatability />
      <EntryPoints />
      <Products />
      <OngoingPractices />
      <About />
      <Newsletter />
      <Footer />
    </main>
  )
}
