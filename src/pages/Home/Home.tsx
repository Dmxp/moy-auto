
import Hero from '../../components/Hero/Hero'
import Categories from '../../components/Categories/Categories'
import Store from '../../components/Store/Store'
import QuickChoice from '../../components/QuickChoice/QuickChoice'
import AboutContacts from '../../components/AboutContacts/AboutContacts'
import Footer from '../../components/Footer/Footer'

export default function Home() {
  return (
    <>
     

      <main>
        <Hero />
        <Categories />
        <Store />
        <QuickChoice />
        <AboutContacts />
      </main>
      <Footer />
    </>
  )
}