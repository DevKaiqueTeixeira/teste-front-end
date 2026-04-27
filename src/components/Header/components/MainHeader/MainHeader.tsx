import type { FormEvent } from 'react'
import { Heart, Package, Search, ShoppingCart, User } from 'lucide-react'
import './MainHeader.css'

type MainHeaderProps = {
  onActionClick: () => void
}

const iconButtons = [
  { label: 'Pedidos', Icon: Package },
  { label: 'Favoritos', Icon: Heart },
  { label: 'Minha conta', Icon: User },
  { label: 'Carrinho', Icon: ShoppingCart },
]

export function MainHeader({ onActionClick }: MainHeaderProps) {
  const handleSearch = (event: FormEvent) => {
    event.preventDefault()
    onActionClick()
  }

  return (
    <div className="main-header-wrap">
      <div className="main-header">
        <button
          type="button"
          className="logo"
          aria-label="Ir para a pagina inicial"
          onClick={onActionClick}
        >
          <span className="logo-circle">ec</span>
          <span className="logo-text">onverse</span>
        </button>

        <form className="search-box" onSubmit={handleSearch}>
          <input type="text" placeholder="o que você está buscando?" />

          <button type="submit" className="search-button" aria-label="Pesquisar">
            <Search size={20} className="search-icon" />
          </button>
        </form>

        <nav className="icons" aria-label="Acoes do usuario">
          {iconButtons.map(({ label, Icon }) => (
            <button
              key={label}
              type="button"
              className="icon-button"
              aria-label={label}
              onClick={onActionClick}
            >
              <Icon size={21} />
            </button>
          ))}
        </nav>
      </div>
    </div>
  )
}
