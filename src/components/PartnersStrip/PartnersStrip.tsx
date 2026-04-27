import partnerBackgroundImage from '../../assets/parceiros.jpg'
import { PartnerCarousel } from './components/PartnerCarousel'
import './PartnersStrip.css'

type PartnersStripProps = {
  onActionClick: () => void
}

const PARTNER_ITEMS = [
  {
    id: 'partner-banner-primary',
    title: 'Parceiros',
    description: 'Confira as melhores ofertas dos nossos parceiros.',
    backgroundImage: partnerBackgroundImage,
  },
  {
    id: 'partner-banner-secondary',
    title: 'Parceiros',
    description: 'Confira as melhores ofertas dos nossos parceiros.',
    backgroundImage: partnerBackgroundImage,
  },
]

export function PartnersStrip({ onActionClick }: PartnersStripProps) {
  return (
    <section className="partners-strip-section" aria-label="Parceiros em destaque">
      <PartnerCarousel items={PARTNER_ITEMS} onActionClick={onActionClick} />
    </section>
  )
}
