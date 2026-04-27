import { useCallback, useEffect, useRef, useState } from 'react'
import './Header.css'
import { MainHeader } from './components/MainHeader/MainHeader'
import { Menu } from './components/Menu/Menu'
import { TopBar } from './components/TopBar/TopBar'

const NOT_IMPLEMENTED_MESSAGE = 'funcionalidade ainda não implementada'

export function Header() {
  const [isToastVisible, setIsToastVisible] = useState(false)
  const timeoutRef = useRef<number | null>(null)

  const showNotImplementedToast = useCallback(() => {
    setIsToastVisible(true)

    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = window.setTimeout(() => {
      setIsToastVisible(false)
      timeoutRef.current = null
    }, 2400)
  }, [])

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <header className="header">
      <TopBar onActionClick={showNotImplementedToast} />
      <MainHeader onActionClick={showNotImplementedToast} />
      <Menu onActionClick={showNotImplementedToast} />

      {isToastVisible ? (
        <div className="header-toast" role="status" aria-live="polite">
          <span className="header-toast-dot" aria-hidden />
          {NOT_IMPLEMENTED_MESSAGE}
        </div>
      ) : null}
    </header>
  )
}
