import Footer from '../components/Footer'
import Gallery from '../components/Gallery'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Person from '../components/Person'
import Pricing from '../components/Pricing'
import Skills from '../components/Skills'
import Welcome from '../components/Welcome'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Person />
      <Skills />
      <Gallery />
      <Welcome />
      <Pricing />
      <Footer />
    </>
  )
}
