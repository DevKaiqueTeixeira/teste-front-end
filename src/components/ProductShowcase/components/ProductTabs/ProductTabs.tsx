import './ProductTabs.scss'

type ProductTabsProps = {
  tabs: string[]
  activeTab: string
  onSelect: (tab: string) => void
}

export function ProductTabs({ tabs, activeTab, onSelect }: ProductTabsProps) {
  return (
    <div className="product-tabs" role="tablist" aria-label="Categorias da vitrine">
      {tabs.map((tab) => {
        const isActive = tab === activeTab

        return (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={isActive}
            className={isActive ? 'product-tab is-active' : 'product-tab'}
            onClick={() => onSelect(tab)}
          >
            {tab}
          </button>
        )
      })}
    </div>
  )
}
