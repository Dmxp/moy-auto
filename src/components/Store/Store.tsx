import {
  BadgeCheck,
  Car,
  PackageCheck,
  Sparkles,
} from 'lucide-react'

import { motion } from 'framer-motion'

import carCareImage from '../../assets/images/store/car-care.png'

import './Store.css'

const advantages = [
  {
    icon: PackageCheck,
    title: 'Всё в одном месте',
    text: 'Средства для кузова, салона, колёс и других деталей автомобиля.',
  },
  {
    icon: BadgeCheck,
    title: 'Проверенные товары',
    text: 'Подбираем ассортимент, который действительно помогает ухаживать за автомобилем.',
  },
  {
    icon: Sparkles,
    title: 'Забота в деталях',
    text: 'От быстрой уборки салона до полноценного детейлинга.',
  },
]

export default function Store() {
  return (
    <section className="store" id="store">
      <div className="container">
        <div className="store__wrapper">

          <motion.div
            className="store__content"
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <span className="store__eyebrow">
              МОЙ АВТО
            </span>

            <h2 className="store__title">
              Уход за автомобилем —
              <span> это просто</span>
            </h2>

            <p className="store__description">
              Не нужно искать всё в разных местах.
              В «МОЙ АВТО» собрали средства для чистоты,
              защиты и ухода за вашим автомобилем.
            </p>

            <div className="store__advantages">
              {advantages.map((advantage, index) => {
                const Icon = advantage.icon

                return (
                  <motion.div
                    className="store__advantage"
                    key={advantage.title}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.1,
                    }}
                  >
                    <div className="store__advantage-icon">
                      <Icon size={21} />
                    </div>

                    <div>
                      <h3>
                        {advantage.title}
                      </h3>

                      <p>
                        {advantage.text}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            <a
              href="#catalog"
              className="store__button"
            >
              <Car size={20} />

              Перейти в каталог
            </a>
          </motion.div>

          <motion.div
            className="store__visual"
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
          >
            <div className="store__glow" />

            <img
              src={carCareImage}
              alt="Уход за автомобилем"
            />

            <div className="store__visual-badge">
              <Sparkles size={17} />

              <span>
                Всё для ухода
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}