import backgroundImage from '../../assets/bg-blackfriday.jpg'
import { BlackFridayContent } from './components/BlackFridayContent'
import './BlackFridayHero.scss'

type BlackFridayHeroProps = {
  onActionClick: () => void
}

export function BlackFridayHero({ onActionClick }: BlackFridayHeroProps) {
  return (
    <section
      className="black-friday-hero"
      aria-label="Promocoes Black Friday"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="black-friday-overlay" aria-hidden />

      <div className="black-friday-inner">
        <BlackFridayContent onActionClick={onActionClick} />
      </div>
    </section>
  )
}
