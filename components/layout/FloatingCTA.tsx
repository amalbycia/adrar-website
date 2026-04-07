'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

export default function FloatingCTA() {
  const [scrolledPast, setScrolledPast] = useState(false)
  const [footerVisible, setFooterVisible] = useState(false)

  // Show button once user scrolls 500px
  useEffect(() => {
    const onScroll = () => setScrolledPast(window.scrollY > 500)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Hide button when footer comes into view
  useEffect(() => {
    const footer = document.getElementById('site-footer')
    if (!footer) return

    const observer = new IntersectionObserver(
      ([entry]) => setFooterVisible(entry.isIntersecting),
      {
        // Trigger as soon as any pixel of the footer enters the viewport
        threshold: 0,
        rootMargin: '0px 0px 0px 0px',
      }
    )

    observer.observe(footer)
    return () => observer.disconnect()
  }, [])

  const isVisible = scrolledPast && !footerVisible

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
          className="fixed bottom-6 right-6 md:bottom-8 md:right-10 z-50"
        >
          <Link
            href="/contact"
            className="group flex items-center justify-center gap-3 px-6 py-4 rounded-full bg-bor-primary text-bor-foreground-inverted font-heading font-bold text-[14px] uppercase tracking-wide shadow-2xl hover:scale-105 transition-transform duration-300"
            style={{ boxShadow: '0 20px 40px rgba(5,26,23,0.3)' }}
          >
            Get a Quote
            <span className="w-8 h-8 rounded-full bg-bor-foreground-inverted text-white flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 12L12 2M12 2H4M12 2v8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
