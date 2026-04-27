import './NotImplementedToast.css'

type NotImplementedToastProps = {
  isVisible: boolean
  message: string
}

export function NotImplementedToast({
  isVisible,
  message,
}: NotImplementedToastProps) {
  if (!isVisible) {
    return null
  }

  return (
    <div className="not-implemented-toast" role="status" aria-live="polite">
      <span className="not-implemented-toast-dot" aria-hidden />
      {message}
    </div>
  )
}
