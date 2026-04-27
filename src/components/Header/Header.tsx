import './Header.css'
import { MainHeader } from './components/MainHeader/MainHeader'
import { Menu } from './components/Menu/Menu'
import { TopBar } from './components/TopBar/TopBar'

export function Header() {
  return (
    <header className="header">
      <TopBar />
      <MainHeader />
      <Menu />
    </header>
  )
}
