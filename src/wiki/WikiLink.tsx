import type { AnchorHTMLAttributes } from 'react'
import { Link } from 'react-router-dom'

/**
 * Renders in-wiki links with React Router; external URLs open in a new tab.
 */
export default function WikiLink({
  href,
  children,
  ...rest
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  if (!href) {
    return <span {...rest}>{children}</span>
  }
  if (href.startsWith('http://') || href.startsWith('https://')) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...rest}
      >
        {children}
      </a>
    )
  }
  if (href.startsWith('/')) {
    return (
      <Link to={href} {...rest}>
        {children}
      </Link>
    )
  }
  return (
    <a href={href} {...rest}>
      {children}
    </a>
  )
}
