import { PartnerCard } from '../PartnerCard'
import './PartnerCarousel.css'

export type PartnerCarouselItem = {
  id: string
  title: string
  description: string
  backgroundImage: string
}

type PartnerCarouselProps = {
  items: PartnerCarouselItem[]
  onActionClick: () => void
}

export function PartnerCarousel({ items, onActionClick }: PartnerCarouselProps) {
  return (
    <div className="partner-carousel" role="list" aria-label="Lista de parceiros">
      {items.map((item) => (
        <div key={item.id} className="partner-carousel-item" role="listitem">
          <PartnerCard
            title={item.title}
            description={item.description}
            backgroundImage={item.backgroundImage}
            onActionClick={onActionClick}
          />
        </div>
      ))}
    </div>
  )
}
