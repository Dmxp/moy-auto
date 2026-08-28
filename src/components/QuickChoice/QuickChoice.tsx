import {
  ArrowUpRight,
  CarFront,
  CircleGauge,
  Sparkles,
  Armchair,
} from 'lucide-react'

import { motion } from 'framer-motion'

import './QuickChoice.css'

const choices = [
  {
    title: 'Кузов',
    description: 'Шампуни, очистители и защита',
    icon: CarFront,
    href: '#body-care',
  },
  {
    title: 'Салон',
    description: 'Чистота и уход внутри автомобиля',
    icon: Armchair,
    href: '#interior-care',
  },
  {
    title: 'Колёса',
    description: 'Очистка дисков и уход за резиной',
    icon: CircleGauge,
    href: '#wheels-care',
  },
  {
    title: 'Быстрый уход',
    description: 'Простые решения на каждый день',
    icon: Sparkles,
    href: '#quick-care',
  },
]

export default function QuickChoice() {
  return (
    <section className="quick-choice">
      <div className="container">
        <div className="quick-choice__wrapper">
          <div className="quick-choice__intro">
            <span className="quick-choice__eyebrow">
              МОЙ АВТО
            </span>

            <h2 className="quick-choice__title">
              Не знаешь,
              <span> с чего начать?</span>
            </h2>

            <p className="quick-choice__description">
              Выбери часть автомобиля, которой хочешь
              уделить внимание, а мы покажем всё необходимое
              для ухода.
            </p>
          </div>

          <div className="quick-choice__grid">
            {choices.map((choice, index) => {
              const Icon = choice.icon

              return (
                <motion.a
                  href={choice.href}
                  className="quick-choice__card"
                  key={choice.title}
                  initial={{
                    opacity: 0,
                    y: 30,
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
                    duration: 0.45,
                    delay: index * 0.1,
                  }}
                >
                  <div className="quick-choice__card-top">
                    <div className="quick-choice__icon">
                      <Icon size={28} />
                    </div>

                    <div className="quick-choice__arrow">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>

                  <div className="quick-choice__card-content">
                    <h3>
                      {choice.title}
                    </h3>

                    <p>
                      {choice.description}
                    </p>
                  </div>
                </motion.a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}