'use client'

import { useState, useCallback, useEffect } from 'react'
import FloatingDock from './FloatingDock'
import AdrarChatbot from './AdrarChatbot'

export default function FloatingUI() {
  const [chatOpen, setChatOpen] = useState(false)
  const [hasUnread, setHasUnread] = useState(false)

  const handleChatOpen = useCallback(() => {
    setChatOpen(true)
    setHasUnread(false)
  }, [])

  const handleChatClose = useCallback(() => {
    setChatOpen(false)
  }, [])

  // Listen for global open-chat events dispatched by nav/hero/etc
  useEffect(() => {
    const handler = () => handleChatOpen()
    window.addEventListener('adrar:open-chat', handler)
    return () => window.removeEventListener('adrar:open-chat', handler)
  }, [handleChatOpen])

  return (
    <>
      {!chatOpen && (
        <FloatingDock onChatOpen={handleChatOpen} hasUnread={hasUnread} />
      )}
      <AdrarChatbot
        isOpen={chatOpen}
        onClose={handleChatClose}
        onUnread={setHasUnread}
      />
    </>
  )
}
