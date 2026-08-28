import { ArrowRight, Grid2X2, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'

import heroImage from '../../assets/images/hero/store-hero.png'

import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__background">
        <img
          src={heroImage}
          alt="Магазин МОЙ АВТО"
        />

        <div className="hero__overlay" />
      </div>

      <div className="container hero__container">
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
        >
          <h1 className="hero__title">
            ВСЁ ДЛЯ УХОДА
            ЗА ВАШИМ АВТОМОБИЛЕМ
          </h1>

          <p className="hero__description">
            <span>Автохимия</span>
            <span>Автокосметика</span>
            <span>Аксессуары</span>
            <span>Полезные мелочи</span>
          </p>

          <div className="hero__actions">
            <a
              href="#catalog"
              className="hero__button hero__button--primary"
            >
              <Grid2X2 size={19} />

              <span>Перейти в каталог</span>

              <ArrowRight size={19} />
            </a>

            <a
              href="#store"
              className="hero__button hero__button--secondary"
            >
              <MapPin size={20} />

              <span>Найти магазин</span>
            </a>
          </div>
        </motion.div>

        <div className="hero__slider">
          <div className="hero__slider-dots">
            <span className="hero__slider-dot hero__slider-dot--active" />
            <span className="hero__slider-dot" />
            <span className="hero__slider-dot" />
          </div>

          <button
            className="hero__slider-arrow"
            aria-label="Предыдущий слайд"
          >
            ←
          </button>

          <button
            className="hero__slider-arrow"
            aria-label="Следующий слайд"
          >
            →
          </button>
        </div>
      </div>
    </section>
  )
}