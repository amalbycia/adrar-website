import { cn } from '@/lib/utils'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export default function AnimatedSection({
  children,
  className,
  delay,
}: AnimatedSectionProps) {
  return (
    <div className={cn(className)}>
      {children}
    </div>
  )
}
