import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import type { Product } from '../../types'
import { ProductCard } from '../ProductCard'
import './ProductCarousel.css'

type ProductCarouselProps = {
  products: Product[]
  onProductSelect: (product: Product) => void
}

const CARDS_PER_PAGE = 4

export function ProductCarousel({
  products,
  onProductSelect,
}: ProductCarouselProps) {
  const [page, setPage] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [direction, setDirection] = useState<'next' | 'previous'>('next')
  const [hasInteracted, setHasInteracted] = useState(false)
  const gridRef = useRef<HTMLDivElement | null>(null)

  const pageCount = Math.max(1, Math.ceil(products.length / CARDS_PER_PAGE))

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)')

    const updateScreenMode = () => {
      setIsMobile(mediaQuery.matches)
    }

    updateScreenMode()

    mediaQuery.addEventListener('change', updateScreenMode)

    return () => {
      mediaQuery.removeEventListener('change', updateScreenMode)
    }
  }, [])

  const visibleProducts = useMemo(() => {
    if (products.length === 0) {
      return []
    }

    if (isMobile) {
      return products
    }

    const baseIndex = page * CARDS_PER_PAGE
    const totalItems = Math.min(CARDS_PER_PAGE, products.length)

    return Array.from({ length: totalItems }, (_, index) => {
      return products[(baseIndex + index) % products.length]
    })
  }, [isMobile, page, products])

  const goToPreviousPage = () => {
    setHasInteracted(true)
    setDirection('previous')

    if (isMobile) {
      gridRef.current?.scrollBy({ left: -270, behavior: 'smooth' })
      return
    }

    setPage((currentPage) => {
      if (currentPage === 0) {
        return pageCount - 1
      }

      return currentPage - 1
    })
  }

  const goToNextPage = () => {
    setHasInteracted(true)
    setDirection('next')

    if (isMobile) {
      gridRef.current?.scrollBy({ left: 270, behavior: 'smooth' })
      return
    }

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

      <div
        key={isMobile ? 'mobile' : page}
        ref={gridRef}
        className={
          hasInteracted
            ? direction === 'next'
              ? 'product-carousel-grid is-sliding-next'
              : 'product-carousel-grid is-sliding-previous'
            : 'product-carousel-grid'
        }
        role="list"
        aria-label="Lista de produtos"
      >
        {visibleProducts.map((product) => (
          <div key={product.productName} role="listitem">
            <ProductCard
              product={product}
              onOpenDetails={onProductSelect}
            />
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
