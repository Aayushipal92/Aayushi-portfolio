import { cn } from '@/lib/utils'

const variants = {
  default: 'btn btn-primary',
  outline: 'btn btn-outline',
}

/**
 * @param {{
 *   variant?: 'default' | 'outline',
 *   className?: string,
 *   href?: string,
 *   children: import('react').ReactNode,
 * } & import('react').ButtonHTMLAttributes<HTMLButtonElement> &
 *   import('react').AnchorHTMLAttributes<HTMLAnchorElement>} props
 */
export function Button({ variant = 'default', className, href, children, ...props }) {
  const classes = cn(variants[variant], className)

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}
