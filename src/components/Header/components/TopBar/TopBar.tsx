import { CreditCard, ShieldCheck, Truck } from 'lucide-react'
import './TopBar.css'

export function TopBar() {
  return (
    <div className="top-bar">
      <span>
        <ShieldCheck size={14} /> Compra <strong>100% segura</strong>
      </span>
      <span>
        <Truck size={14} /> <strong>Frete grátis</strong> acima de R$ 200
      </span>
      <span>
        <CreditCard size={14} /> <strong>Parcele</strong> suas compras
      </span>
    </div>
  )
}
