import './Menu.css'

const links = [
  'TODAS CATEGORIAS',
  'SUPERMERCADO',
  'LIVROS',
  'MODA',
  'LANÇAMENTOS',
  'OFERTAS DO DIA',
  'ASSINATURA',
]

export function Menu() {
  return (
    <nav className="menu" aria-label="Categorias">
      {links.map((link) => (
        <a
          key={link}
          href="#"
          className={link === 'OFERTAS DO DIA' ? 'active' : undefined}
        >
          {link}
        </a>
      ))}
    </nav>
  )
}
