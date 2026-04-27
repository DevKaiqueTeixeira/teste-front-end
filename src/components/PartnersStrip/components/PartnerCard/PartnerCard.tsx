import type { CSSProperties } from 'react'
import './PartnerCard.css'

type PartnerCardProps = {
  title: string
  description: string
  backgroundImage: string
  onActionClick: () => void
}

export function PartnerCard({
  title,
  description,
  backgroundImage,
  onActionClick,
}: PartnerCardProps) {
  const cardStyle = {
    '--partner-card-image': `url(${backgroundImage})`,
  } as CSSProperties

  return (
    <article className="partner-card" style={cardStyle}>
      <div className="partner-card-content">
        <h3>{title}</h3>
        <p>{description}</p>

        <button type="button" onClick={onActionClick}>
          CONFIRA
        </button>
      </div>
    </article>
  )
}
