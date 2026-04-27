import { Crown, LayoutGrid, type LucideIcon } from 'lucide-react'
import './Menu.css'

type MenuProps = {
  onActionClick: () => void
}

type MenuLink = {
  label: string
  isActive?: boolean
  icon?: LucideIcon
}

const links: MenuLink[] = [
  { label: 'TODAS CATEGORIAS', icon: LayoutGrid },
  { label: 'SUPERMERCADO' },
  { label: 'LIVROS' },
  { label: 'MODA' },
  { label: 'LANÇAMENTOS' },
  { label: 'OFERTAS DO DIA', isActive: true },
  { label: 'ASSINATURA', icon: Crown },
]

export function Menu({ onActionClick }: MenuProps) {
  return (
    <div className="menu-wrap">
      <nav className="menu" aria-label="Categorias">
        {links.map(({ label, isActive, icon: Icon }) => (
          <button
            key={label}
            type="button"
            className={isActive ? 'menu-button active' : 'menu-button'}
            onClick={onActionClick}
            aria-label={label}
          >
            {Icon ? <Icon size={14} /> : null}
            <span>{label}</span>
          </button>
        ))}
      </nav>
    </div>
  )
}
