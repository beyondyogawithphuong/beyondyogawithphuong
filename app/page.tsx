import HeroNew from '@/components/sections/HeroNew'
import Story from '@/components/sections/Story'
import EntryPoints from '@/components/sections/EntryPoints'
import About from '@/components/sections/About'
import ContactInfo from '@/components/sections/ContactInfo'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroNew />
      <Story />
      <EntryPoints />
      <About />
      <ContactInfo />
      <Footer />
    </main>
  )
}
