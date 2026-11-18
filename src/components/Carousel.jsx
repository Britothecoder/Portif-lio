import { useCallback, useEffect, useRef, useState } from 'react'
import Slide from './Slide'
import Tabs from './Tabs'

const SWIPE_DISTANCE = 50

// Carrossel genérico: recebe uma lista de slides { id, label, Component, props }.
export default function Carousel({ slides }) {
  const [current, setCurrent] = useState(0)
  const touchStartX = useRef(null)
  const lastIndex = slides.length - 1

  const goTo = useCallback(
    (index) => setCurrent(Math.min(Math.max(index, 0), lastIndex)),
    [lastIndex],
  )

  // Navegação pelas setas do teclado
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'ArrowRight') setCurrent((i) => Math.min(i + 1, lastIndex))
      if (event.key === 'ArrowLeft') setCurrent((i) => Math.max(i - 1, 0))
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [lastIndex])

  // Gesto de arrastar no celular
  const onTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX
  }
  const onTouchEnd = (event) => {
    if (touchStartX.current === null) return
    const distance = event.changedTouches[0].clientX - touchStartX.current
    if (distance <= -SWIPE_DISTANCE) goTo(current + 1)
    if (distance >= SWIPE_DISTANCE) goTo(current - 1)
    touchStartX.current = null
  }

  return (
    <div className="carousel">
      <header className="carousel__bar">
        <span className="carousel__brand">JVOB</span>
        <nav aria-label="Seções do portfólio">
          <Tabs tabs={slides} activeId={slides[current].id} onChange={(id) => goTo(slides.findIndex((s) => s.id === id))} label="Seções" />
        </nav>
      </header>

      <div
        className="carousel__viewport"
        aria-live="polite"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className="carousel__track" style={{ transform: `translateX(-${current * 100}%)` }}>
          {slides.map(({ id, Component, props }, index) => (
            <Slide key={id} id={`slide-${id}`} active={index === current}>
              <Component {...props} goTo={goTo} />
            </Slide>
          ))}
        </div>
      </div>

      <footer className="carousel__controls">
        <button
          type="button"
          className="arrow"
          onClick={() => goTo(current - 1)}
          disabled={current === 0}
          aria-label="Slide anterior"
        >
          ←
        </button>
        <span className="carousel__count">
          {current + 1} de {slides.length}
        </span>
        <button
          type="button"
          className="arrow"
          onClick={() => goTo(current + 1)}
          disabled={current === lastIndex}
          aria-label="Próximo slide"
        >
          →
        </button>
      </footer>
    </div>
  )
}
