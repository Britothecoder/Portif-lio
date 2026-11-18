import { useState } from 'react'
import Tabs from './Tabs'
import SkillCard from './SkillCard'

export default function SkillsSlide({ groups }) {
  const [activeId, setActiveId] = useState(groups[0].id)
  const group = groups.find((item) => item.id === activeId)

  return (
    <div className="panel">
      <h2 className="panel__title">Habilidades</h2>
      <Tabs tabs={groups} activeId={activeId} onChange={setActiveId} label="Categorias de habilidades" />

      <div className="panel__body" role="tabpanel" id={`panel-${group.id}`} aria-labelledby={`tab-${group.id}`}>
        <p className="panel__hint">{group.description}</p>
        <ul className="skill-grid">
          {group.skills.map((skill) => (
            <SkillCard key={skill.name} name={skill.name} level={skill.level} />
          ))}
        </ul>
      </div>
    </div>
  )
}
