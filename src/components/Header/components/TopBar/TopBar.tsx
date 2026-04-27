import { CreditCard, ShieldCheck, Truck } from 'lucide-react'
import './TopBar.scss'

type TopBarProps = {
  onActionClick: () => void
}

export function TopBar({ onActionClick }: TopBarProps) {
  return (
    <div className="top-bar-wrap">
      <div className="top-bar">
        <button type="button" className="top-bar-item" onClick={onActionClick}>
          <ShieldCheck size={14} />
          <span>
            Compra <strong>100% segura</strong>
          </span>
        </button>

        <button type="button" className="top-bar-item" onClick={onActionClick}>
          <Truck size={14} />
          <span>
            <strong>Frete grátis</strong> acima de R$ 200
          </span>
        </button>

        <button type="button" className="top-bar-item" onClick={onActionClick}>
          <CreditCard size={14} />
          <span>
            <strong>Parcele</strong> suas compras
          </span>
        </button>
      </div>
    </div>
  )
}
