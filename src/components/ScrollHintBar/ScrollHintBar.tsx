import './ScrollHintBar.scss'

type ScrollHintBarProps = {
  className?: string
}

export function ScrollHintBar({ className }: ScrollHintBarProps) {
  const rootClassName = className
    ? `scroll-hint-bar ${className}`
    : 'scroll-hint-bar'

  return (
    <div className={rootClassName} aria-hidden>
      <span className="scroll-hint-track">
        <span className="scroll-hint-indicator">
          <span className="scroll-hint-arrow scroll-hint-arrow-left" />
          <span className="scroll-hint-arrow scroll-hint-arrow-right" />
        </span>
      </span>
    </div>
  )
}
