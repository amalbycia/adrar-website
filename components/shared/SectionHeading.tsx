import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        align === 'center' && 'items-center text-center',
        className
      )}
    >
      {eyebrow && (
        <span
          className="text-[12px] font-body font-medium uppercase tracking-[0.12em] text-[#E8500A]"
        >
          {eyebrow}
        </span>
      )}
      <h2
        className="font-heading font-extrabold text-white text-4xl md:text-5xl lg:text-[56px] leading-[1.05]"
      >
        {title}
      </h2>
      {description && (
        <p className="font-body text-white/70 text-base md:text-lg leading-relaxed max-w-xl">
          {description}
        </p>
      )}
    </div>
  )
}
