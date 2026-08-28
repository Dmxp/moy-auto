import { useState } from 'react'
import { ArrowUpRight, ChevronDown } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

import './Catalog.css'


type Subcategory = {
  id: string
  title: string
}


type Category = {
  id: string
  number: string
  title: string
  description: string
  subcategories: Subcategory[]
}


const categories: Category[] = [
  {
    id: 'auto-chemistry',
    number: '01',
    title: 'Автохимия',
    description:
      'Шампуни, очистители, полироли и специальные составы.',
    subcategories: [
      {
        id: 'car-shampoos',
        title: 'Автошампуни',
      },
      {
        id: 'cleaners',
        title: 'Очистители',
      },
      {
        id: 'polishes',
        title: 'Полироли',
      },
      {
        id: 'degreasers',
        title: 'Обезжириватели',
      },
      {
        id: 'dirt-removers',
        title: 'Удалители загрязнений',
      },
      {
        id: 'anti-rain',
        title: 'Антидождь',
      },
      {
        id: 'special-compounds',
        title: 'Специальные составы',
      },
    ],
  },

  {
    id: 'autocosmetics',
    number: '02',
    title: 'Автокосметика',
    description:
      'Средства для ухода за кузовом и салоном автомобиля.',
    subcategories: [
      {
        id: 'body-care',
        title: 'Уход за кузовом',
      },
      {
        id: 'plastic-care',
        title: 'Уход за пластиком',
      },
      {
        id: 'leather-care',
        title: 'Уход за кожей',
      },
      {
        id: 'protective-coatings',
        title: 'Защитные покрытия',
      },
      {
        id: 'quick-detailers',
        title: 'Быстрые детейлеры',
      },
    ],
  },

  {
    id: 'accessories',
    number: '03',
    title: 'Аксессуары',
    description:
      'Всё необходимое для комфорта и удобства в автомобиле.',
    subcategories: [
      {
        id: 'organizers',
        title: 'Органайзеры',
      },
      {
        id: 'interior-accessories',
        title: 'Аксессуары для салона',
      },
      {
        id: 'phone-holders',
        title: 'Держатели для телефона',
      },
      {
        id: 'air-fresheners',
        title: 'Ароматизаторы',
      },
      {
        id: 'car-accessories',
        title: 'Автомобильные аксессуары',
      },
    ],
  },

  {
    id: 'wheels-care',
    number: '04',
    title: 'Уход за колёсами',
    description:
      'Чернители, очистители и средства для ухода за шинами и дисками.',
    subcategories: [
      {
        id: 'wheel-cleaners',
        title: 'Очистители дисков',
      },
      {
        id: 'tire-blackeners',
        title: 'Чернители резины',
      },
      {
        id: 'tire-care',
        title: 'Средства для шин',
      },
      {
        id: 'wheel-accessories',
        title: 'Щётки и аксессуары',
      },
    ],
  },

  {
    id: 'seasonal',
    number: '05',
    title: 'Сезонные товары',
    description:
      'Всё необходимое для автомобиля зимой и летом.',
    subcategories: [
      {
        id: 'winter-chemistry',
        title: 'Зимняя автохимия',
      },
      {
        id: 'defrosters',
        title: 'Размораживатели',
      },
      {
        id: 'anti-ice',
        title: 'Антиобледенители',
      },
      {
        id: 'summer-products',
        title: 'Летние товары',
      },
      {
        id: 'insect-removers',
        title: 'Средства от насекомых',
      },
    ],
  },

  {
    id: 'useful',
    number: '06',
    title: 'Полезные мелочи',
    description:
      'То, что всегда пригодится автомобилисту.',
    subcategories: [
      {
        id: 'microfibers',
        title: 'Микрофибры',
      },
      {
        id: 'sponges',
        title: 'Губки',
      },
      {
        id: 'brushes',
        title: 'Щётки',
      },
      {
        id: 'wipes',
        title: 'Салфетки',
      },
      {
        id: 'care-kits',
        title: 'Наборы для ухода',
      },
    ],
  },
]


export default function Catalog() {
  const [openCategory, setOpenCategory] =
    useState<string | null>(null)


  const handleCategoryClick = (id: string) => {
    setOpenCategory((current) =>
      current === id ? null : id
    )
  }


  const handleSubcategoryClick = (
    categoryId: string,
    subcategoryId: string
  ) => {
    window.location.hash =
      `#${categoryId}/${subcategoryId}`
  }


  return (
    <>
      <Header />

      <main className="catalog-page">
        <div className="container">

          {/* INTRO */}

          <section className="catalog-page__intro">
            <motion.span
              className="catalog-page__eyebrow"
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
              }}
            >
              МОЙ АВТО / КАТАЛОГ
            </motion.span>


            <motion.h1
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.1,
              }}
            >
              ВЕСЬ
              <span>КАТАЛОГ</span>
            </motion.h1>


            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
            >
              Выберите категорию и найдите всё необходимое
              для ухода, чистоты и комфорта вашего автомобиля.
            </motion.p>
          </section>


          {/* CATEGORY LIST */}

          <section className="catalog-page__list">
            {categories.map((category, index) => {
              const isOpen =
                openCategory === category.id

              return (
                <motion.div
                  key={category.id}
                  className={
                    isOpen
                      ? 'catalog-page__category catalog-page__category--open'
                      : 'catalog-page__category'
                  }
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2 + index * 0.08,
                  }}
                >

                  {/* CATEGORY */}

                  <button
                    type="button"
                    className="catalog-page__item"
                    onClick={() =>
                      handleCategoryClick(category.id)
                    }
                  >

                    {/* NUMBER */}

                    <span className="catalog-page__number">
                      {category.number}
                    </span>


                    {/* TITLE */}

                    <div className="catalog-page__title">
                      <h2>
                        {category.title}
                      </h2>

                      <p>
                        {category.description}
                      </p>
                    </div>


                    {/* META */}

                    <div className="catalog-page__meta">
                      <span>
                        {category.subcategories.length} КАТЕГОРИЙ
                      </span>

                      <div className="catalog-page__arrow">
                        {isOpen ? (
                          <ChevronDown size={24} />
                        ) : (
                          <ArrowUpRight size={24} />
                        )}
                      </div>
                    </div>
                  </button>


                  {/* SUBCATEGORIES */}

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        className="catalog-page__subcategories"
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: 'auto',
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.35,
                          ease: 'easeInOut',
                        }}
                      >
                        <div className="catalog-page__subcategories-inner">

                          {category.subcategories.map(
                            (subcategory, subIndex) => (
                              <motion.button
                                type="button"
                                key={subcategory.id}
                                className="catalog-page__subcategory"
                                initial={{
                                  opacity: 0,
                                  x: -20,
                                }}
                                animate={{
                                  opacity: 1,
                                  x: 0,
                                }}
                                transition={{
                                  duration: 0.3,
                                  delay: subIndex * 0.05,
                                }}
                                onClick={() =>
                                  handleSubcategoryClick(
                                    category.id,
                                    subcategory.id
                                  )
                                }
                              >
                                <span>
                                  {String(
                                    subIndex + 1
                                  ).padStart(2, '0')}
                                </span>

                                <strong>
                                  {subcategory.title}
                                </strong>

                                <ArrowUpRight size={20} />
                              </motion.button>
                            )
                          )}

                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </motion.div>
              )
            })}
          </section>

        </div>
      </main>

      <Footer />
    </>
  )
}