import './CardOptionItem.css'

type CardOptionItemProps = {
  label: string
  iconSrc: string
  iconAlt: string
  isActive?: boolean
  onActionClick: () => void
}

export function CardOptionItem({
  label,
  iconSrc,
  iconAlt,
  isActive = false,
  onActionClick,
}: CardOptionItemProps) {
  return (
    <button
      type="button"
      className={isActive ? 'card-option-item is-active' : 'card-option-item'}
      onClick={onActionClick}
      aria-label={label}
    >
      <span className="card-option-box" aria-hidden>
        <img className="card-option-icon" src={iconSrc} alt={iconAlt} />
      </span>

      <span className="card-option-label">{label}</span>
    </button>
  )
}
