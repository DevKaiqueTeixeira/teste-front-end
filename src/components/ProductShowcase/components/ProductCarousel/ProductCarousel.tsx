import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useMemo, useState } from 'react'
import type { Product } from '../../types'
import { ProductCard } from '../ProductCard'
import './ProductCarousel.css'

type ProductCarouselProps = {
  products: Product[]
  onActionClick: () => void
}

const CARDS_PER_PAGE = 4

export function ProductCarousel({ products, onActionClick }: ProductCarouselProps) {
  const [page, setPage] = useState(0)

  const pageCount = Math.max(1, Math.ceil(products.length / CARDS_PER_PAGE))

  const visibleProducts = useMemo(() => {
    if (products.length === 0) {
      return []
    }

    const baseIndex = page * CARDS_PER_PAGE
    const totalItems = Math.min(CARDS_PER_PAGE, products.length)

    return Array.from({ length: totalItems }, (_, index) => {
      return products[(baseIndex + index) % products.length]
    })
  }, [page, products])

  const goToPreviousPage = () => {
    setPage((currentPage) => {
      if (currentPage === 0) {
        return pageCount - 1
      }

      return currentPage - 1
    })
  }

  const goToNextPage = () => {
    setPage((currentPage) => {
      if (currentPage === pageCount - 1) {
        return 0
      }

      return currentPage + 1
    })
  }

  return (
    <div className="product-carousel-wrap">
      <button
        type="button"
        className="product-carousel-arrow product-carousel-arrow-left"
        aria-label="Produtos anteriores"
        onClick={goToPreviousPage}
      >
        <ChevronLeft size={22} />
      </button>

      <div className="product-carousel-grid" role="list" aria-label="Lista de produtos">
        {visibleProducts.map((product) => (
          <div key={product.productName} role="listitem">
            <ProductCard product={product} onBuyClick={onActionClick} />
          </div>
        ))}
      </div>

      <button
        type="button"
        className="product-carousel-arrow product-carousel-arrow-right"
        aria-label="Proximos produtos"
        onClick={goToNextPage}
      >
        <ChevronRight size={22} />
      </button>
    </div>
  )
}
