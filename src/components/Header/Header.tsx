import { useEffect, useState } from 'react'
import {
  Menu,
  Phone,
  X,
} from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

import './Header.css'

const navigation = [
  {
    label: 'Главная',
    href: '#top',
    sectionId: 'top',
  },
  {
    label: 'Каталог',
    href: '#catalog',
    sectionId: 'catalog',
  },
  {
    label: 'О магазине',
    href: '#store',
    sectionId: 'store',
  },
  {
    label: 'Контакты',
    href: '#contacts',
    sectionId: 'contacts',
  },
]

export default function Header() {
  const [activeSection, setActiveSection] =
    useState('top')

  const [menuOpen, setMenuOpen] =
    useState(false)

  const [isCatalogPage, setIsCatalogPage] =
    useState(
      window.location.hash === '#all-categories'
    )

  // ОТСЛЕЖИВАНИЕ ПЕРЕХОДОВ МЕЖДУ ГЛАВНОЙ И КАТАЛОГОМ

  useEffect(() => {
    const handleHashChange = () => {
      setIsCatalogPage(
        window.location.hash === '#all-categories'
      )
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


  // ОПРЕДЕЛЕНИЕ АКТИВНОЙ СЕКЦИИ ПРИ СКРОЛЛЕ

  useEffect(() => {
    const handleScroll = () => {
      const currentHash = window.location.hash

      // Все отдельные страницы каталога
      if (
        currentHash === '#all-categories' ||
        currentHash.startsWith('#auto-chemistry')
      ) {
        setActiveSection('catalog')
        return
      }

      const scrollPosition = window.scrollY + 150

      let currentSection = 'top'

      navigation.forEach((item) => {
        const section = document.getElementById(
          item.sectionId
        )

        if (!section) return

        if (section.offsetTop <= scrollPosition) {
          currentSection = item.sectionId
        }
      })

      setActiveSection(currentSection)
    }

    handleScroll()

    window.addEventListener(
      'scroll',
      handleScroll
    )

    window.addEventListener(
      'hashchange',
      handleScroll
    )

    return () => {
      window.removeEventListener(
        'scroll',
        handleScroll
      )

      window.removeEventListener(
        'hashchange',
        handleScroll
      )
    }
  }, [])


  // ЗАКРЫТИЕ МОБИЛЬНОГО МЕНЮ

  const handleNavigationClick = () => {
    setMenuOpen(false)
  }


  // ПРОВЕРКА АКТИВНОГО ПУНКТА

  const getDesktopLinkClass = (
    sectionId: string
  ) => {
    if (isCatalogPage) {
      return sectionId === 'catalog'
        ? 'header__link header__link--active'
        : 'header__link'
    }

    return activeSection === sectionId
      ? 'header__link header__link--active'
      : 'header__link'
  }

  const getMobileLinkClass = (
    sectionId: string
  ) => {
    if (isCatalogPage) {
      return sectionId === 'catalog'
        ? 'header__mobile-link header__mobile-link--active'
        : 'header__mobile-link'
    }

    return activeSection === sectionId
      ? 'header__mobile-link header__mobile-link--active'
      : 'header__mobile-link'
  }


  return (
    <header className="header">
      <div className="container header__container">

        {/* ЛОГОТИП */}

        <motion.a
          href="#top"
          className="header__logo"
          initial={{
            opacity: 0,
            x: -20,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          onClick={handleNavigationClick}
        >
          <span className="header__logo-my">
            МОЙ
          </span>

          <span className="header__logo-auto">
            АВТО
          </span>
        </motion.a>


        {/* DESKTOP NAVIGATION */}

        <nav className="header__nav">
          {navigation.map((item, index) => (
            <motion.a
              href={item.href}
              key={item.label}
              className={
                getDesktopLinkClass(
                  item.sectionId
                )
              }
              initial={{
                opacity: 0,
                y: -10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
              }}
            >
              {item.label}
            </motion.a>
          ))}
        </nav>


        {/* PHONE */}

        <motion.a
          href="tel:+79323222444"
          className="header__phone"
          initial={{
            opacity: 0,
            x: 20,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.5,
          }}
        >
          <Phone size={18} />

          <span>
            Позвонить
          </span>
        </motion.a>


        {/* MOBILE MENU BUTTON */}

        <button
          type="button"
          className="header__menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={
            menuOpen
              ? 'Закрыть меню'
              : 'Открыть меню'
          }
        >
          {menuOpen
            ? <X size={26} />
            : <Menu size={26} />
          }
        </button>

      </div>


      {/* MOBILE MENU */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="header__mobile-menu"
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.25,
            }}
          >
            <nav className="header__mobile-nav">
              {navigation.map((item, index) => (
                <motion.a
                  href={item.href}
                  key={item.label}
                  className={
                    getMobileLinkClass(
                      item.sectionId
                    )
                  }
                  onClick={handleNavigationClick}
                  initial={{
                    opacity: 0,
                    x: -15,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: index * 0.06,
                  }}
                >
                  <span>
                    0{index + 1}
                  </span>

                  {item.label}
                </motion.a>
              ))}
            </nav>


            <a
              href="tel:+79323222444"
              className="header__mobile-phone"
              onClick={handleNavigationClick}
            >
              <Phone size={19} />

              +7 932 322-24-44
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}