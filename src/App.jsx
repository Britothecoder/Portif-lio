import Carousel from './components/Carousel'
import IntroSlide from './components/IntroSlide'
import SkillsSlide from './components/SkillsSlide'
import AboutSlide from './components/AboutSlide'
import ExperienceSlide from './components/ExperienceSlide'
import { profile, skillGroups, aboutTabs, experiences } from './data/portfolio'

const slides = [
  { id: 'inicio', label: 'Início', Component: IntroSlide, props: { profile } },
  { id: 'habilidades', label: 'Habilidades', Component: SkillsSlide, props: { groups: skillGroups } },
  { id: 'sobre', label: 'Sobre mim', Component: AboutSlide, props: { tabs: aboutTabs } },
  { id: 'experiencias', label: 'Experiências', Component: ExperienceSlide, props: { items: experiences } },
]

export default function App() {
  return <Carousel slides={slides} />
}
