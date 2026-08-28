import { useEffect, useState } from 'react'

import Header from './components/Header/Header'

import Home from './pages/Home/Home'
import Catalog from './pages/Catalog/Catalog'
import Shampoos from './pages/Shampoos/Shampoos'


function App() {
  const [hash, setHash] = useState(
    window.location.hash
  )


  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash)
    }

    window.addEventListener(
      'hashchange',
      handleHashChange
    )

    return () => {
      window.removeEventListener(
        'hashchange',
        handleHashChange
      )
    }
  }, [])


  useEffect(() => {
    const pageHashes = [
      '#all-categories',
      '#auto-chemistry',
      '#auto-chemistry/car-shampoos',
    ]

    if (pageHashes.includes(hash)) {
      window.scrollTo({
        top: 0,
        behavior: 'auto',
      })

      return
    }

    if (hash) {
      requestAnimationFrame(() => {
        const sectionId = hash.replace('#', '')

        const section =
          document.getElementById(sectionId)

        if (section) {
          section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
        }
      })
    }
  }, [hash])


  const renderPage = () => {
    if (hash === '#all-categories') {
      return <Catalog />
    }

    if (hash === '#auto-chemistry') {
      return <AutoChemistry />
    }

    if (
      hash === '#auto-chemistry/car-shampoos'
    ) {
      return <Shampoos />
    }

    return <Home />
  }


  return (
    <>
      <Header />

      <main>
        {renderPage()}
      </main>
    </>
  )
}

export default App