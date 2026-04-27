import './BrandNavigator.css'

type BrandNavigatorProps = {
  onActionClick: () => void
}

const BRAND_ITEMS = Array.from({ length: 5 }, (_, index) => ({
  id: `brand-item-${index + 1}`,
  name: 'Econverse',
}))

export function BrandNavigator({ onActionClick }: BrandNavigatorProps) {
  return (
    <section className="brand-navigator-section" aria-label="Navegue por marcas">
      <div className="brand-navigator-container">
        <h2>Navegue por marcas</h2>

        <div className="brand-navigator-list" role="list" aria-label="Lista de marcas">
          {BRAND_ITEMS.map((brand) => (
            <button
              key={brand.id}
              type="button"
              className="brand-navigator-item"
              onClick={onActionClick}
              aria-label={`Abrir marca ${brand.name}`}
              role="listitem"
            >
              <span className="brand-mini-logo" aria-hidden>
                <span className="brand-mini-logo-circle">ec</span>
                <span className="brand-mini-logo-text">onverse</span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
