import { useCallback, useEffect, useRef, useState } from 'react'
import './App.scss'
import { BrandNavigator } from './components/BrandNavigator'
import { BlackFridayHero } from './components/BlackFridayHero'
import { CardOptions } from './components/CardOptions'
import { Header } from './components/Header'
import { NotImplementedToast } from './components/NotImplementedToast'
import { PartnersStrip } from './components/PartnersStrip'
import { ProductShowcase } from './components/ProductShowcase'
import { SiteFooter } from './components/SiteFooter'

const NOT_IMPLEMENTED_MESSAGE = 'funcionalidade ainda não implementada'

function App() {
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
    <div className="app">
      <Header onActionClick={showNotImplementedToast} />
      <main className="app-main">
        <BlackFridayHero onActionClick={showNotImplementedToast} />
        <CardOptions onActionClick={showNotImplementedToast} />
        <ProductShowcase onActionClick={showNotImplementedToast} />
        <PartnersStrip onActionClick={showNotImplementedToast} />
        <ProductShowcase
          onActionClick={showNotImplementedToast}
          showTabs={false}
          headingSubtitle="Ver todos"
        />
        <PartnersStrip onActionClick={showNotImplementedToast} />
        <BrandNavigator onActionClick={showNotImplementedToast} />
        <ProductShowcase
          onActionClick={showNotImplementedToast}
          showTabs={false}
          headingSubtitle="Ver todos"
        />
      </main>
      <SiteFooter onActionClick={showNotImplementedToast} />
      <NotImplementedToast
        isVisible={isToastVisible}
        message={NOT_IMPLEMENTED_MESSAGE}
      />
    </div>
  )
}

export default App
