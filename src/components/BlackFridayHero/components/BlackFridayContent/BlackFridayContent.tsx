import './BlackFridayContent.scss'

type BlackFridayContentProps = {
  onActionClick: () => void
}

export function BlackFridayContent({ onActionClick }: BlackFridayContentProps) {
  return (
    <div className="black-friday-content">
      <h1 className="black-friday-title">
        <span className="black-friday-title-line">Venha conhecer nossas</span>
        <span className="black-friday-title-line">promoções</span>
      </h1>

      <p className="black-friday-subtitle">
        <strong>50% Off</strong> nos produtos
      </p>

      <button
        type="button"
        className="black-friday-button"
        onClick={onActionClick}
      >
        Ver produto
      </button>
    </div>
  )
}
