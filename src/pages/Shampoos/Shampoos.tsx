import { useState } from 'react'
import {
  ArrowLeft,
  ArrowUpRight,
  SlidersHorizontal,
} from 'lucide-react'
import { motion } from 'framer-motion'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

import './Shampoos.css'

type Product = {
  id: number
  title: string
  description: string
  volume: string
  category: string
  image?: string
}

const products: Product[] = [
  {
    id: 1,
    title: 'Автошампунь для ручной мойки',
    description:
      'Эффективно удаляет загрязнения и бережно очищает лакокрасочное покрытие.',
    volume: '500 мл',
    category: 'Ручная мойка',
  },
  {
    id: 2,
    title: 'Концентрированный автошампунь',
    description:
      'Подходит для регулярного ухода за автомобилем.',
    volume: '1 л',
    category: 'Концентрат',
  },
  {
    id: 3,
    title: 'Автошампунь с воском',
    description:
      'Очищает поверхность и придаёт кузову дополнительный блеск.',
    volume: '500 мл',
    category: 'С воском',
  },
  {
    id: 4,
    title: 'Активная пена',
    description:
      'Средство для эффективного удаления дорожных загрязнений.',
    volume: '1 л',
    category: 'Бесконтактная мойка',
  },
  {
    id: 5,
    title: 'Нейтральный автошампунь',
    description:
      'Мягкий состав для бережной очистки автомобиля.',
    volume: '750 мл',
    category: 'Ручная мойка',
  },
  {
    id: 6,
    title: 'Автошампунь для зимнего периода',
    description:
      'Разработан для эффективной мойки автомобиля в холодное время года.',
    volume: '1 л',
    category: 'Сезонный',
  },
]

export default function Shampoos() {
  const [washProgress, setWashProgress] =
    useState(0)

  /*
    Логика перехода:

    0–50:
    грязная машина постепенно сменяется пеной

    50–100:
    пена постепенно исчезает,
    появляется чистая машина
  */

  const dirtyOpacity =
    washProgress <= 50
      ? 1 - washProgress / 50
      : 0

  const foamOpacity =
    washProgress <= 50
      ? washProgress / 50
      : 1 - (washProgress - 50) / 50

  const cleanOpacity =
    washProgress >= 50
      ? (washProgress - 50) / 50
      : 0

  return (
    <>
      <Header />

      <main className="shampoos-page">

        <div className="container">

          {/* BREADCRUMBS */}

          <motion.div
            className="shampoos-page__breadcrumbs"
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.4,
            }}
          >
            <a href="#all-categories">
              Каталог
            </a>

            <span>/</span>

            <a href="#auto-chemistry">
              Автохимия
            </a>

            <span>/</span>

            <strong>
              Автошампуни
            </strong>
          </motion.div>


          {/* HERO */}

          <section className="shampoos-page__hero">

            <motion.div
              className="shampoos-page__hero-content"
              initial={{
                opacity: 0,
                y: 30,
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
              <span className="shampoos-page__eyebrow">
                АВТОХИМИЯ / КАТАЛОГ
              </span>

              <h1>
                АВТО
                <span>ШАМПУНИ</span>
              </h1>

              <p>
                Всё необходимое для бережной и эффективной мойки автомобиля.
                Средства для ручной и бесконтактной мойки, концентраты,
                активная пена и специальные составы.
              </p>
            </motion.div>

            <motion.div
              className="shampoos-page__hero-number"
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.6,
                delay: 0.25,
              }}
            >
              01
            </motion.div>

          </section>


          {/* INTERACTIVE WASH */}

          <motion.section
            className="wash-demo"
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
          >

            <div className="wash-demo__header">

              <div>
                <span className="wash-demo__eyebrow">
                  ПРОВЕРЬТЕ В ДЕЛЕ
                </span>

                <h2>
                  ОТ ГРЯЗИ
                  <span> К ЧИСТОТЕ</span>
                </h2>
              </div>

              <p>
                Потяните ползунок и посмотрите,
                как автомобиль проходит весь процесс мойки.
              </p>

            </div>


            {/* IMAGES */}

            <div className="wash-demo__image">

              <img
                src="/images/shampoos/car-dirty.png"
                alt="Грязный автомобиль"
                className="wash-demo__car"
                style={{
                  opacity: dirtyOpacity,
                }}
              />

              <img
                src="/images/shampoos/car-foam.png"
                alt="Автомобиль в пене"
                className="wash-demo__car wash-demo__car--layer"
                style={{
                  opacity: foamOpacity,
                }}
              />

              <img
                src="/images/shampoos/car-clean.png"
                alt="Чистый автомобиль"
                className="wash-demo__car wash-demo__car--layer"
                style={{
                  opacity: cleanOpacity,
                }}
              />


              {/* STATUS */}

              <div className="wash-demo__status">

                {washProgress < 25 && (
                  <span>
                    ГРЯЗНЫЙ
                  </span>
                )}

                {washProgress >= 25 &&
                  washProgress < 75 && (
                    <span>
                      МОЙКА
                    </span>
                  )}

                {washProgress >= 75 && (
                  <span>
                    ЧИСТЫЙ
                  </span>
                )}

              </div>

            </div>


            {/* SLIDER */}

            <div className="wash-demo__controls">

              <span>
                ГРЯЗНЫЙ
              </span>

              <input
                type="range"
                min="0"
                max="100"
                value={washProgress}
                onChange={(event) =>
                  setWashProgress(
                    Number(event.target.value)
                  )
                }
                className="wash-demo__slider"
                aria-label="Процесс мойки автомобиля"
              />

              <span>
                ЧИСТЫЙ
              </span>

            </div>


            {/* PROGRESS */}

            <div className="wash-demo__progress">

              <span>
                01 / ГРЯЗЬ
              </span>

              <span>
                02 / ПЕНА
              </span>

              <span>
                03 / ЧИСТО
              </span>

            </div>

          </motion.section>


          {/* BACK */}

          <motion.a
            href="#auto-chemistry"
            className="shampoos-page__back"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.3,
            }}
          >
            <ArrowLeft size={18} />

            Вернуться в автохимию
          </motion.a>


          {/* CATALOG HEADER */}

          <section className="shampoos-page__catalog-header">

            <div>
              <span>
                КАТАЛОГ
              </span>

              <h2>
                ВСЕ ШАМПУНИ
              </h2>
            </div>

            <div className="shampoos-page__catalog-info">
              <span>
                {products.length} ТОВАРОВ
              </span>

              <button
                type="button"
                className="shampoos-page__filter"
              >
                <SlidersHorizontal size={18} />

                Фильтры
              </button>
            </div>

          </section>


          {/* PRODUCTS */}

          <section className="shampoos-page__products">

            {products.map((product, index) => (
              <motion.article
                key={product.id}
                className="product-card"
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.45,
                  delay: 0.1 + index * 0.08,
                }}
              >

                <div className="product-card__image">

                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.title}
                    />
                  ) : (
                    <div className="product-card__placeholder">
                      <span>
                        МОЙ
                      </span>

                      <strong>
                        АВТО
                      </strong>
                    </div>
                  )}

                  <span className="product-card__category">
                    {product.category}
                  </span>

                </div>


                <div className="product-card__content">

                  <span className="product-card__volume">
                    {product.volume}
                  </span>

                  <h3>
                    {product.title}
                  </h3>

                  <p>
                    {product.description}
                  </p>

                  <button
                    type="button"
                    className="product-card__button"
                  >
                    Подробнее

                    <ArrowUpRight size={19} />
                  </button>

                </div>

              </motion.article>
            ))}

          </section>

        </div>

      </main>

      <Footer />
    </>
  )
}