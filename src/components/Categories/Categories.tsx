import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

import autoChemistry from '../../assets/images/categories/autohimic.png'
import autoCosmetics from '../../assets/images/categories/autocosmetic.png'
import accessories from '../../assets/images/categories/acsessuares.png'
import wheelsCare from '../../assets/images/categories/UhodZaKolesami.png'
import seasons from '../../assets/images/categories/seasons.png'
import usefulItems from '../../assets/images/categories/melochi.png'

import './Categories.css'

const categories = [
  {
    title: 'Автохимия',
    description: 'Шампуни, очистители, полироли',
    image: autoChemistry,
    href: '#auto-chemistry',
  },
  {
    title: 'Автокосметика',
    description: 'Уход за кузовом и салоном',
    image: autoCosmetics,
    href: '#auto-cosmetics',
  },
  {
    title: 'Аксессуары',
    description: 'Всё для комфорта в автомобиле',
    image: accessories,
    href: '#accessories',
  },
  {
    title: 'Уход за колёсами',
    description: 'Чернители, очистители, уход',
    image: wheelsCare,
    href: '#wheels-care',
  },
  {
    title: 'Сезонные товары',
    description: 'Всё для зимы и лета',
    image: seasons,
    href: '#seasons',
  },
  {
    title: 'Полезные мелочи',
    description: 'То, что всегда пригодится',
    image: usefulItems,
    href: '#useful-items',
  },
]

export default function Categories() {
  return (
    <section
      className="categories"
      id="catalog"
    >
      <div className="container">
        <div className="categories__header">
          <div>
            <span className="categories__eyebrow">
              МОЙ АВТО
            </span>

            <h2 className="categories__title">
              Популярные категории
            </h2>
          </div>

          <a
            href="#all-categories"
            className="categories__all"
          >
            Смотреть все

            <ArrowRight size={18} />
          </a>
        </div>

        <div className="categories__grid">
          {categories.map((category, index) => (
            <motion.a
              href={category.href}
              className="category-card"
              key={category.title}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
            >
              <div className="category-card__image">
                <img
                  src={category.image}
                  alt={category.title}
                />
              </div>

              <div className="category-card__content">
                <h3 className="category-card__title">
                  {category.title}
                </h3>

                <p className="category-card__description">
                  {category.description}
                </p>
              </div>

              <div className="category-card__arrow">
                <ArrowRight size={19} />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}