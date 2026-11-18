import ExperienceCard from './ExperienceCard'

export default function ExperienceSlide({ items }) {
  return (
    <div className="panel">
      <h2 className="panel__title">Experiências</h2>
      <p className="panel__hint">Clique em um cartão para ver os detalhes.</p>
      <div className="xp-list">
        {items.map((item) => (
          <ExperienceCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}
