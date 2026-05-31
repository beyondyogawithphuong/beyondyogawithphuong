import Hero from '@/components/sections/Hero'
import Relatability from '@/components/sections/Relatability'
import EntryPoints from '@/components/sections/EntryPoints'
import Products from '@/components/sections/Products'
import OngoingPractices from '@/components/sections/OngoingPractices'
import Services from '@/components/sections/Services'
import About from '@/components/sections/About'
import ContactInfo from '@/components/sections/ContactInfo'
import Newsletter from '@/components/sections/Newsletter'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Relatability />
      <EntryPoints />
      <Products />
      <Services />
      <OngoingPractices />
      <About />
      <ContactInfo />
      <Newsletter />
      <Footer />
    </main>
  )
}
