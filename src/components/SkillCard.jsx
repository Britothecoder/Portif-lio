export default function SkillCard({ name, level }) {
  return (
    <li className="skill-card">
      <span className="skill-card__name">{name}</span>
      {level && <span className="skill-card__level">{level}</span>}
    </li>
  )
}
