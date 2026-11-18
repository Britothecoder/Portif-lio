import { useState } from 'react'
import Tabs from './Tabs'

export default function AboutSlide({ tabs }) {
  const [activeId, setActiveId] = useState(tabs[0].id)
  const current = tabs.find((tab) => tab.id === activeId)

  return (
    <div className="panel">
      <h2 className="panel__title">Sobre mim</h2>
      <Tabs tabs={tabs} activeId={activeId} onChange={setActiveId} label="Sobre mim" />

      <div className="about" role="tabpanel" id={`panel-${current.id}`} aria-labelledby={`tab-${current.id}`}>
        <h3 className="about__title">{current.title}</h3>
        <p className="about__text">{current.text}</p>
      </div>
    </div>
  )
}
