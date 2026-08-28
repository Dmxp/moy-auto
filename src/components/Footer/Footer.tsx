import {
  ArrowUp,
  MapPin,
  Phone,
} from 'lucide-react'

import './Footer.css'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <footer className="footer">
      <div className="container">

        <div className="footer__main">

          {/* БРЕНД */}

          <div className="footer__brand">
            <a
              href="#top"
              className="footer__logo"
            >
              МОЙ <span>АВТО</span>
            </a>

            <p className="footer__description">
              Всё необходимое для чистоты,
              ухода и комфорта вашего автомобиля.
            </p>

            <a
              href="https://go.2gis.com/Gl8mk"
              target="_blank"
              rel="noreferrer"
              className="footer__address"
            >
              <MapPin size={18} />

              <span>
                Тюмень, 50 лет ВЛКСМ, 107а
              </span>
            </a>
          </div>


          {/* НАВИГАЦИЯ */}

          <div className="footer__column">
            <h3>
              Навигация
            </h3>

            <nav className="footer__nav">
              <a href="#top">
                Главная
              </a>

              <a href="#catalog">
                Каталог
              </a>

              <a href="#store">
                О магазине
              </a>

              <a href="#contacts">
                Контакты
              </a>
            </nav>
          </div>


          {/* КОНТАКТЫ */}

          <div className="footer__column">
            <h3>
              Связаться с нами
            </h3>

            <div className="footer__contacts">

              <a href="tel:+79323222444">
                <Phone size={17} />

                +7 932 322-24-44
              </a>

              <a href="tel:+79199490933">
                <Phone size={17} />

                +7 919 949-09-33
              </a>

            </div>

            <div className="footer__schedule">
              <span>
                Пн — Вс
              </span>

              <strong>
                10:00–20:00
              </strong>

              <small>
                Перерыв 12:00–13:00
              </small>
            </div>
          </div>


          {/* НАВЕРХ */}

          <button
            type="button"
            className="footer__top"
            onClick={scrollToTop}
            aria-label="Наверх"
          >
            <ArrowUp size={21} />
          </button>

        </div>


        {/* НИЖНЯЯ ЧАСТЬ */}

        <div className="footer__bottom">

          <p>
            © {new Date().getFullYear()} МОЙ АВТО
          </p>

          <p>
            Магазин автохимии и автотоваров
          </p>

        </div>

      </div>
    </footer>
  )
}