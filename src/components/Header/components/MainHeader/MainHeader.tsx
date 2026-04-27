import { Heart, Search, ShoppingCart, User } from 'lucide-react'
import './MainHeader.css'

export function MainHeader() {
  return (
    <div className="main-header">
      <div className="logo">
        <span className="logo-circle">ec</span>
        <span className="logo-text">onverse</span>
      </div>

      <div className="search-box">
        <input type="text" placeholder="O que você está buscando?" />
        <Search size={20} className="search-icon" />
      </div>

      <nav className="icons" aria-label="Acoes do usuario">
        <User size={22} />
        <Heart size={22} />
        <ShoppingCart size={22} />
      </nav>
    </div>
  )
}
