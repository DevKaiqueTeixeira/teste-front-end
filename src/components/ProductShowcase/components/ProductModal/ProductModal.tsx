import { X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import type { Product } from '../../types'
import './ProductModal.scss'

type ProductModalProps = {
  product: Product
  onClose: () => void
  onActionClick: () => void
}

const brlFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

const PRODUCT_INFO_TEXT =
  'Produto com design moderno, excelente desempenho e recursos ideais para o seu dia a dia.'

function formatBRL(value: number) {
  return brlFormatter.format(value)
}

export function ProductModal({ product, onClose, onActionClick }: ProductModalProps) {
  const [quantity, setQuantity] = useState(1)
  const [isAddedFeedbackVisible, setIsAddedFeedbackVisible] = useState(false)
  const feedbackTimeoutRef = useRef<number | null>(null)

  useEffect(() => {
    const previousBodyOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleEscape)

    return () => {
      document.body.style.overflow = previousBodyOverflow
      window.removeEventListener('keydown', handleEscape)
    }
  }, [onClose])

  useEffect(() => {
    return () => {
      if (feedbackTimeoutRef.current !== null) {
        window.clearTimeout(feedbackTimeoutRef.current)
      }
    }
  }, [])

  const decreaseQuantity = () => {
    setQuantity((currentQuantity) => Math.max(1, currentQuantity - 1))
  }

  const increaseQuantity = () => {
    setQuantity((currentQuantity) => Math.min(99, currentQuantity + 1))
  }

  const handleAddToCart = () => {
    setIsAddedFeedbackVisible(true)

    if (feedbackTimeoutRef.current !== null) {
      window.clearTimeout(feedbackTimeoutRef.current)
    }

    feedbackTimeoutRef.current = window.setTimeout(() => {
      setIsAddedFeedbackVisible(false)
      feedbackTimeoutRef.current = null
    }, 2000)
  }

  return (
    <div className="product-modal-overlay" onClick={onClose}>
      <article
        className="product-modal"
        role="dialog"
        aria-modal="true"
        aria-label={product.productName}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="product-modal-close"
          aria-label="Fechar modal"
          onClick={onClose}
        >
          <X size={20} />
        </button>

        <div className="product-modal-image-wrap">
          <img src={product.photo} alt={product.productName} />
        </div>

        <div className="product-modal-content">
          <h3>{product.productName}</h3>
          <p className="product-modal-price">{formatBRL(product.price)}</p>
          <p className="product-modal-description">{PRODUCT_INFO_TEXT}</p>
          <button type="button" className="product-modal-link" onClick={onActionClick}>
            Veja mais detalhes do produto {'>'}
          </button>

          <div className="product-modal-actions">
            <div className="product-modal-quantity" aria-label="Selecionar quantidade">
              <button type="button" onClick={decreaseQuantity} aria-label="Diminuir quantidade">
                -
              </button>
              <span>{String(quantity).padStart(2, '0')}</span>
              <button type="button" onClick={increaseQuantity} aria-label="Aumentar quantidade">
                +
              </button>
            </div>

            <button type="button" className="product-modal-buy-button" onClick={handleAddToCart}>
              COMPRAR
            </button>
          </div>

          {isAddedFeedbackVisible ? (
            <p className="product-modal-feedback">Produto adicionado ao carrinho.</p>
          ) : null}
        </div>
      </article>
    </div>
  )
}
