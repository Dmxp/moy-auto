import {
  ArrowUpRight,
  Car,
  Clock3,
  MapPin,
  Phone,
  Sparkles,
} from 'lucide-react'

import { motion } from 'framer-motion'

import './AboutContacts.css'

const contacts = [
  {
    icon: MapPin,
    label: 'Адрес',
    content: (
      <>
        г. Тюмень
        <br />
        50 лет ВЛКСМ, 107а
      </>
    ),
  },
  {
    icon: Phone,
    label: 'Телефон',
    content: (
      <>
        <a href="tel:+79323222444">
          +7 932 322-24-44
        </a>

        <a href="tel:+79199490933">
          +7 919 949-09-33
        </a>
      </>
    ),
  },
  {
    icon: Clock3,
    label: 'Режим работы',
    content: (
      <>
        Пн — Вс: 10:00–20:00
        <br />
        Перерыв: 12:00–13:00
      </>
    ),
  },
]

export default function AboutContacts() {
  return (
    <section
      className="about-contacts"
      id="contacts"
    >
      <div className="container">

        <div className="about-contacts__wrapper">

          {/* О МАГАЗИНЕ */}

          <motion.div
            className="about-contacts__about"
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
            <span className="about-contacts__eyebrow">
              МОЙ АВТО • ТЮМЕНЬ
            </span>

            <h2 className="about-contacts__title">
              Больше, чем
              <span> просто магазин</span>
            </h2>

            <p className="about-contacts__description">
              «МОЙ АВТО» — место для тех, кто любит
              свой автомобиль и хочет заботиться о нём
              правильно.
            </p>

            <p className="about-contacts__description">
              Мы собрали всё необходимое для чистоты,
              ухода, защиты и комфорта вашего автомобиля
              в одном месте.
            </p>

            <div className="about-contacts__features">

              <div className="about-contacts__feature">
                <Car size={20} />

                <span>
                  Всё необходимое для автомобиля
                </span>
              </div>

              <div className="about-contacts__feature">
                <Sparkles size={20} />

                <span>
                  Автохимия, косметика и аксессуары
                </span>
              </div>

              <div className="about-contacts__feature">
                <MapPin size={20} />

                <span>
                  Удобный магазин в Тюмени
                </span>
              </div>

            </div>
          </motion.div>


          {/* КОНТАКТЫ */}

          <motion.div
            className="about-contacts__card"
            initial={{
              opacity: 0,
              x: 40,
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
              delay: 0.1,
            }}
          >

            <div className="about-contacts__card-header">

              <div>
                <span className="about-contacts__eyebrow">
                  КОНТАКТЫ
                </span>

                <h3>
                  Как нас найти
                </h3>
              </div>

              <div className="about-contacts__pin">
                <MapPin size={25} />
              </div>

            </div>


            <div className="about-contacts__list">

              {contacts.map((contact) => {
                const Icon = contact.icon

                return (
                  <div
                    className="about-contacts__item"
                    key={contact.label}
                  >
                    <div className="about-contacts__item-icon">
                      <Icon size={21} />
                    </div>

                    <div className="about-contacts__item-content">

                      <span>
                        {contact.label}
                      </span>

                      <div>
                        {contact.content}
                      </div>

                    </div>
                  </div>
                )
              })}

            </div>


            <a
              href="https://go.2gis.com/Gl8mk"
              target="_blank"
              rel="noreferrer"
              className="about-contacts__route"
            >
              <MapPin size={20} />

              Построить маршрут

              <ArrowUpRight size={19} />
            </a>

          </motion.div>

        </div>


        {/* НИЖНЯЯ ВИЗУАЛЬНАЯ ПАНЕЛЬ */}

        <motion.div
          className="about-contacts__location"
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
          }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
        >
          <div className="about-contacts__location-bg" />

          <div className="about-contacts__location-content">

            <div>
              <span>
                МОЙ АВТО
              </span>

              <h3>
                Ждём вас
                <br />
                в нашем магазине
              </h3>
            </div>

            <a
              href="https://go.2gis.com/Gl8mk"
              target="_blank"
              rel="noreferrer"
            >
              Открыть в 2ГИС

              <ArrowUpRight size={19} />
            </a>

          </div>
        </motion.div>

      </div>
    </section>
  )
}