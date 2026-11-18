// Abas reutilizáveis. Quem usa o componente guarda qual aba está ativa (useState)
// e passa o valor por props.
export default function Tabs({ tabs, activeId, onChange, label }) {
  return (
    <div className="tabs" role="tablist" aria-label={label}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          role="tab"
          id={`tab-${tab.id}`}
          aria-selected={tab.id === activeId}
          aria-controls={`panel-${tab.id}`}
          className={tab.id === activeId ? 'tab tab--active' : 'tab'}
          onClick={() => onChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}
