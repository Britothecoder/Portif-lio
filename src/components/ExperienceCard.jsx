import { useState } from 'react'

// Cartão que abre e fecha os detalhes ao clicar (useState).
export default function ExperienceCard({ title, org, period, summary, details }) {
  const [open, setOpen] = useState(false)

  return (
    <article className={open ? 'xp-card xp-card--open' : 'xp-card'}>
      <button
        type="button"
        className="xp-card__head"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="xp-card__text">
          <span className="xp-card__period">{period}</span>
          <span className="xp-card__title">{title}</span>
          <span className="xp-card__org">{org}</span>
        </span>
        <span className="xp-card__icon" aria-hidden="true">
          {open ? '−' : '+'}
        </span>
      </button>
      <p className="xp-card__summary">{summary}</p>
      {open && (
        <ul className="xp-card__details">
          {details.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </article>
  )
}
