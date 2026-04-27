import { useCallback, useEffect, useRef, useState } from 'react'
import { NotImplementedToast } from '../NotImplementedToast'
import { MOCK_CELULAR_PRODUCTS } from './mockProducts'
import { ProductCarousel } from './components/ProductCarousel'
import { ProductTabs } from './components/ProductTabs'
import './ProductShowcase.css'

type ProductShowcaseProps = {
  onActionClick: () => void
}

const CATEGORY_TABS = [
  'CELULAR',
  'ACESSORIOS',
  'TABLETS',
  'NOTEBOOKS',
  'TVS',
  'VER TODOS',
]

const OUT_OF_STOCK_CATEGORY_MESSAGE = 'sem produtos no estoque dessa categoria'

export function ProductShowcase({ onActionClick }: ProductShowcaseProps) {
  const [activeTab, setActiveTab] = useState(CATEGORY_TABS[0])
  const [isCategoryToastVisible, setIsCategoryToastVisible] = useState(false)
  const timeoutRef = useRef<number | null>(null)

  const showOutOfStockToast = useCallback(() => {
    setIsCategoryToastVisible(true)

    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = window.setTimeout(() => {
      setIsCategoryToastVisible(false)
      timeoutRef.current = null
    }, 2400)
  }, [])

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const handleTabSelect = (tab: string) => {
    if (tab !== 'CELULAR' && tab !== 'VER TODOS') {
      showOutOfStockToast()
      return
    }

    setActiveTab(tab)
  }

  return (
    <section className="product-showcase-section" aria-label="Vitrine de produtos">
      <div className="product-showcase-container">
        <div className="product-showcase-heading">
          <span className="product-showcase-heading-line" aria-hidden />
          <h2>Produtos relacionados</h2>
          <span className="product-showcase-heading-line" aria-hidden />
        </div>

        <ProductTabs
          tabs={CATEGORY_TABS}
          activeTab={activeTab}
          onSelect={handleTabSelect}
        />

        <div className="product-showcase-frame">
          <ProductCarousel
            products={MOCK_CELULAR_PRODUCTS}
            onActionClick={onActionClick}
          />
        </div>

        <NotImplementedToast
          isVisible={isCategoryToastVisible}
          message={OUT_OF_STOCK_CATEGORY_MESSAGE}
        />
      </div>
    </section>
  )
}
