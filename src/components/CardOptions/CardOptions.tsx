import bebidasIcon from '../../assets/Bebidas.png'
import corridaIcon from '../../assets/Corrida.png'
import ferramentasIcon from '../../assets/Ferramentas.png'
import modaIcon from '../../assets/Moda.png'
import saudeIcon from '../../assets/Saude.png'
import supermercadoIcon from '../../assets/Supermercado.png'
import tecnologiaIcon from '../../assets/Tecnologia.png'
import { ScrollHintBar } from '../ScrollHintBar'
import { CardOptionItem } from './components/CardOptionItem'
import './CardOptions.css'

type CardOptionsProps = {
  onActionClick: () => void
}

const optionItems = [
  { label: 'Tecnologia', iconSrc: tecnologiaIcon, isActive: true },
  { label: 'Supermercado', iconSrc: supermercadoIcon },
  { label: 'Bebidas', iconSrc: bebidasIcon },
  { label: 'Ferramentas', iconSrc: ferramentasIcon },
  { label: 'Saúde', iconSrc: saudeIcon },
  { label: 'Esportes e Fitness', iconSrc: corridaIcon },
  { label: 'Moda', iconSrc: modaIcon },
]

export function CardOptions({ onActionClick }: CardOptionsProps) {
  return (
    <section className="card-options-section" aria-label="Categorias em destaque">
      <div className="card-options-layout">
        {optionItems.map(({ label, iconSrc, isActive }) => (
          <CardOptionItem
            key={label}
            label={label}
            iconSrc={iconSrc}
            iconAlt={label}
            isActive={isActive}
            onActionClick={onActionClick}
          />
        ))}
      </div>

      <ScrollHintBar className="card-options-scroll-hint" />
    </section>
  )
}
