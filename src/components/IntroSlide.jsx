import photo from '../assets/profile.jpg'

export default function IntroSlide({ profile, goTo }) {
  return (
    <div className="intro">
      <div className="intro__text">
        <h1 className="intro__name">{profile.name}</h1>
        <p className="intro__role">{profile.role}</p>
        <p className="intro__lead">{profile.intro}</p>
        <div className="intro__actions">
          <button type="button" className="btn btn--primary" onClick={() => goTo(1)}>
            Ver habilidades
          </button>
          <a className="btn btn--ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="btn btn--ghost" href={profile.github} target="_blank" rel="noreferrer">
            github
          </a>
        </div>
      </div>

      <div className="intro__photo">
        <img src={photo} alt={`Foto de ${profile.shortName}`} width="400" height="400" />
      </div>
    </div>
  )
}
