import { forwardRef, useState } from 'react'
import classNames from 'classnames'

export interface ImageProps {
  src: string
  alt: string
  fallback?: string
  className?: string
  onClick?: () => void
}

const Image = forwardRef<HTMLImageElement, ImageProps>(
  ({ src, alt, fallback: customFallback = '', className, ...props }, ref) => {
    const classes = classNames('overflow-hidden', className)
    const [fallback, setFallback] = useState('')

    const handleError = () => {
      setFallback(customFallback)
    }

    return <img ref={ref} className={classes} src={fallback || src} alt={alt} {...props} onError={handleError} />
  }
)

export default Image
