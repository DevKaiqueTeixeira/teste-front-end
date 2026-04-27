import type { Product } from '../../types'
import './ProductCard.css'

type ProductCardProps = {
  product: Product
  onBuyClick: () => void
}

const brlFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

function formatBRL(value: number) {
  return brlFormatter.format(value)
}

export function ProductCard({ product, onBuyClick }: ProductCardProps) {
  const oldPrice = product.price * 1.08
  const installmentPrice = product.price / 2

  return (
    <article className="product-card">
      <div className="product-card-image-wrap">
        <img
          className="product-card-image"
          src={product.photo}
          alt={product.productName}
          loading="lazy"
        />
      </div>

      <p className="product-card-description">{product.descriptionShort}</p>

      <p className="product-card-old-price">{formatBRL(oldPrice)}</p>

      <p className="product-card-current-price">{formatBRL(product.price)}</p>

      <p className="product-card-installment">
        ou 2x de {formatBRL(installmentPrice)} sem juros
      </p>

      <p className="product-card-shipping">Frete gratis</p>

      <button type="button" className="product-card-buy-button" onClick={onBuyClick}>
        COMPRAR
      </button>
    </article>
  )
}
