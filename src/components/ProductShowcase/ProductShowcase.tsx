import { useCallback, useEffect, useRef, useState } from 'react'
import { NotImplementedToast } from '../NotImplementedToast'
import { MOCK_CELULAR_PRODUCTS } from './mockProducts'
import { ProductCarousel } from './components/ProductCarousel'
import { ProductModal } from './components/ProductModal'
import { ProductTabs } from './components/ProductTabs'
import type { Product } from './types'
import './ProductShowcase.css'

type ProductShowcaseProps = {
  onActionClick: () => void
  showTabs?: boolean
  headingSubtitle?: string
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

export function ProductShowcase({
  onActionClick,
  showTabs = true,
  headingSubtitle,
}: ProductShowcaseProps) {
  const [activeTab, setActiveTab] = useState(CATEGORY_TABS[0])
  const [isCategoryToastVisible, setIsCategoryToastVisible] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
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
    if (!showTabs) {
      return
    }

    if (tab !== 'CELULAR' && tab !== 'VER TODOS') {
      showOutOfStockToast()
      return
    }

    setActiveTab(tab)
  }

  return (
    <section
      className={
        showTabs ? 'product-showcase-section' : 'product-showcase-section is-without-tabs'
      }
      aria-label="Vitrine de produtos"
    >
      <div className="product-showcase-container">
        <div className="product-showcase-heading">
          <span className="product-showcase-heading-line" aria-hidden />
          <h2>Produtos relacionados</h2>
          <span className="product-showcase-heading-line" aria-hidden />
        </div>

        {headingSubtitle ? (
          <p className="product-showcase-heading-subtitle">{headingSubtitle}</p>
        ) : null}

        {showTabs ? (
          <ProductTabs
            tabs={CATEGORY_TABS}
            activeTab={activeTab}
            onSelect={handleTabSelect}
          />
        ) : null}

        <div className={showTabs ? 'product-showcase-frame' : 'product-showcase-frame is-without-tabs'}>
          <ProductCarousel
            products={MOCK_CELULAR_PRODUCTS}
            onProductSelect={setSelectedProduct}
          />
        </div>

        {showTabs ? (
          <NotImplementedToast
            isVisible={isCategoryToastVisible}
            message={OUT_OF_STOCK_CATEGORY_MESSAGE}
          />
        ) : null}

        {selectedProduct ? (
          <ProductModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
            onActionClick={onActionClick}
          />
        ) : null}
      </div>
    </section>
  )
}
