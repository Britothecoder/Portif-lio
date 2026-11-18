// Moldura de cada slide do carrossel. Slides fora de vista ficam inertes
// (sem foco por teclado e escondidos de leitores de tela).
export default function Slide({ id, active, children }) {
  return (
    <section
      id={id}
      className="slide"
      aria-roledescription="slide"
      aria-hidden={!active}
      inert={!active}
    >
      <div className="slide__inner">{children}</div>
    </section>
  )
}
