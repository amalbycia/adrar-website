'use client'

import { motion, AnimatePresence } from 'framer-motion'

interface FloatingDockProps {
  onChatOpen: () => void
  hasUnread: boolean
}

const spring = { type: 'spring', stiffness: 480, damping: 30 } as const

export default function FloatingDock({ onChatOpen, hasUnread }: FloatingDockProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: 'spring', stiffness: 340, damping: 26, delay: 2 }}
      className="fixed bottom-6 left-6 md:bottom-8 md:left-8 z-50"
    >
      <div
        className="flex flex-row items-center gap-0 rounded-full overflow-hidden"
        style={{
          background: 'rgba(18, 18, 18, 0.72)',
          backdropFilter: 'blur(20px) saturate(1.8)',
          WebkitBackdropFilter: 'blur(20px) saturate(1.8)',
          border: '1px solid rgba(255,255,255,0.12)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.07)',
        }}
      >
        {/* WhatsApp */}
        <motion.a
          href="https://wa.me/971552217026"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={spring}
          className="relative flex items-center justify-center w-12 h-12 group"
        >
          <motion.span
            className="absolute inset-0 rounded-full"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.15 }}
            style={{ background: 'rgba(37,211,102,0.18)' }}
          />
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="relative z-10">
            <path
              d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"
              fill="#25D366"
            />
            <path
              d="M12.004 2.003C6.479 2.003 2 6.482 2 12.007c0 1.761.461 3.489 1.34 5.008L2 22l5.113-1.318A9.956 9.956 0 0012.004 22C17.53 22 22 17.521 22 12.007c0-5.516-4.47-10.004-9.996-10.004zm0 18.18a8.158 8.158 0 01-4.159-1.138l-.298-.177-3.036.782.808-2.96-.194-.306A8.131 8.131 0 013.86 12.007c0-4.492 3.655-8.147 8.144-8.147 4.489 0 8.143 3.655 8.143 8.147 0 4.493-3.654 8.176-8.143 8.176z"
              fill="#25D366"
            />
          </svg>
        </motion.a>

        {/* Divider */}
        <span className="w-px h-5 shrink-0" style={{ background: 'rgba(255,255,255,0.12)' }} />

        {/* AI Chat */}
        <motion.button
          onClick={onChatOpen}
          aria-label="Open Adrar AI chat assistant"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={spring}
          className="relative flex items-center justify-center w-12 h-12 group"
        >
          <motion.span
            className="absolute inset-0 rounded-full"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.15 }}
            style={{ background: 'rgba(232,80,10,0.18)' }}
          />
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" className="relative z-10">
            <path
              d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
              stroke="rgba(255,255,255,0.75)"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="9" cy="11" r="1" fill="rgba(255,255,255,0.6)" />
            <circle cx="12" cy="11" r="1" fill="rgba(255,255,255,0.6)" />
            <circle cx="15" cy="11" r="1" fill="rgba(255,255,255,0.6)" />
          </svg>

          <AnimatePresence>
            {hasUnread && (
              <motion.span
                key="unread"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ type: 'spring', stiffness: 600, damping: 20 }}
                className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#E8500A] border border-[rgba(18,18,18,0.9)]"
              />
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </motion.div>
  )
}

