import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ButtonProps {
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  className?: string
  external?: boolean
  type?: 'button' | 'submit'
}

export default function Button({
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  children,
  className,
  external,
  type = 'button',
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-body font-medium rounded-full transition-all duration-200 cursor-pointer select-none'

  const variants = {
    primary: 'bg-[#E8500A] text-white hover:bg-[#C94208] active:scale-[0.98]',
    outline:
      'border border-white/20 text-white hover:bg-white hover:text-[#111111] active:scale-[0.98]',
    ghost: 'text-white/70 hover:text-white underline-offset-4 hover:underline',
  }

  const sizes = {
    sm: 'text-sm px-5 py-2.5',
    md: 'text-sm px-7 py-3.5',
    lg: 'text-base px-9 py-4',
  }

  const classes = cn(base, variants[variant], sizes[size], className)

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
