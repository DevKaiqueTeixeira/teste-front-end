import type { FormEvent } from 'react'
import { RiFacebookLine, RiInstagramLine, RiLinkedinLine } from 'react-icons/ri'
import './SiteFooter.css'

type SiteFooterProps = {
  onActionClick: () => void
}

const INSTITUTIONAL_LINKS = ['Sobre Nos', 'Movimento', 'Trabalhe conosco']
const SUPPORT_LINKS = ['Suporte', 'Fale Conosco', 'Perguntas Frequentes']
const TERMS_LINKS = ['Termos e Condicoes', 'Politica de Privacidade', 'Troca e Devolucao']

export function SiteFooter({ onActionClick }: SiteFooterProps) {
  const handleNewsletterSubmit = (event: FormEvent) => {
    event.preventDefault()
    onActionClick()
  }

  return (
    <section className="site-footer-section" aria-label="Rodape do site">
      <div className="site-footer-main">
        <div className="site-footer-newsletter">
          <div className="site-footer-newsletter-inner">
            <div className="site-footer-newsletter-copy">
              <h2>Inscreva-se na nossa newsletter</h2>
              <p>
                Assine a nossa newsletter e receba as novidades e conteudos exclusivos da
                Econverse.
              </p>
            </div>

            <form className="site-footer-newsletter-form" onSubmit={handleNewsletterSubmit}>
              <div className="site-footer-newsletter-fields">
                <input type="text" placeholder="Digite seu nome" />
                <input type="email" placeholder="Digite seu e-mail" />
                <button type="submit">INSCREVER</button>
              </div>

              <label className="site-footer-newsletter-terms">
                <input type="checkbox" />
                <span>Aceito os termos e condicoes</span>
              </label>
            </form>
          </div>
        </div>

        <div className="site-footer-info">
          <div className="site-footer-info-inner">
            <div className="site-footer-brand">
              <button type="button" className="site-footer-logo" onClick={onActionClick}>
                <span className="site-footer-logo-circle">ec</span>
                <span className="site-footer-logo-text">onverse</span>
              </button>

              <p>Conteudos e novidades para voce acompanhar tudo em um so lugar.</p>

              <div className="site-footer-socials" aria-label="Redes sociais">
                <button type="button" onClick={onActionClick} aria-label="Instagram">
                  <RiInstagramLine />
                </button>
                <button type="button" onClick={onActionClick} aria-label="Facebook">
                  <RiFacebookLine />
                </button>
                <button type="button" onClick={onActionClick} aria-label="Linkedin">
                  <RiLinkedinLine />
                </button>
              </div>
            </div>

            <span className="site-footer-divider" aria-hidden />

            <div className="site-footer-links" aria-label="Links institucionais e termos">
              <nav
                className="site-footer-column site-footer-column-institutional"
                aria-label="Institucional"
              >
                <h3>Institucional</h3>
                <div className="site-footer-column-links">
                  {INSTITUTIONAL_LINKS.map((item) => (
                    <button key={item} type="button" onClick={onActionClick}>
                      {item}
                    </button>
                  ))}
                </div>
              </nav>

              <nav className="site-footer-column site-footer-column-help" aria-label="Ajuda">
                <h3>Ajuda</h3>
                <div className="site-footer-column-links">
                  {SUPPORT_LINKS.map((item) => (
                    <button key={item} type="button" onClick={onActionClick}>
                      {item}
                    </button>
                  ))}
                </div>
              </nav>

              <nav className="site-footer-column site-footer-column-terms" aria-label="Termos">
                <h3>Termos</h3>
                <div className="site-footer-column-links">
                  {TERMS_LINKS.map((item) => (
                    <button key={item} type="button" onClick={onActionClick}>
                      {item}
                    </button>
                  ))}
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="site-footer-bottom">
        <p> 2026 Econverse. Todos os direitos reservados.</p>
      </div>
    </section>
  )
}
