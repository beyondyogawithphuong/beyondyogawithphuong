import HeroNew from '@/components/sections/HeroNew'
import EntryPoints from '@/components/sections/EntryPoints'
import Story from '@/components/sections/Story'
import Benefits from '@/components/sections/Benefits'
import About from '@/components/sections/About'
import FreeResources from '@/components/sections/FreeResources'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroNew />
      <EntryPoints />
      <Story />
      <Benefits />
      <About />
      <FreeResources />
      <Footer />
    </main>
  )
}
