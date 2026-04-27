import './Header.scss'
import { MainHeader } from './components/MainHeader/MainHeader'
import { Menu } from './components/Menu/Menu'
import { TopBar } from './components/TopBar/TopBar'

type HeaderProps = {
  onActionClick: () => void
}

export function Header({ onActionClick }: HeaderProps) {
  return (
    <header className="header">
      <TopBar onActionClick={onActionClick} />
      <MainHeader onActionClick={onActionClick} />
      <Menu onActionClick={onActionClick} />
    </header>
  )
}
