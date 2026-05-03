'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Message {
  role: 'user' | 'bot' | 'system'
  content: string
}

const SESSION_KEY = 'adrar_chat_session'

function getOrCreateSession(): string {
  if (typeof window === 'undefined') return ''
  let id = sessionStorage.getItem(SESSION_KEY)
  if (!id) {
    id = crypto.randomUUID()
    sessionStorage.setItem(SESSION_KEY, id)
  }
  return id
}

export default function AdrarChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [sessionId, setSessionId] = useState('')
  const [history, setHistory] = useState<{ role: string; content: string }[]>([])
  const [hasUnread, setHasUnread] = useState(false)
  const [isGreeting, setIsGreeting] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const greetingSent = useRef(false)

  useEffect(() => {
    setSessionId(getOrCreateSession())
  }, [])

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping, scrollToBottom])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 350)
    }
  }, [isOpen])

  const sendToApi = useCallback(
    async (message: string, currentHistory: { role: string; content: string }[]) => {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId, message, history: currentHistory }),
      })
      return res.json()
    },
    [sessionId]
  )

  // Send greeting on first open
  useEffect(() => {
    if (!isOpen || !sessionId || greetingSent.current) return
    greetingSent.current = true

    const runGreeting = async () => {
      setIsGreeting(true)
      setIsTyping(true)
      try {
        const data = await sendToApi('hi', [])
        setIsTyping(false)
        if (data?.reply) {
          setMessages([{ role: 'bot', content: data.reply }])
          setHistory([{ role: 'assistant', content: data.reply }])
        }
      } catch {
        setIsTyping(false)
        setMessages([{ role: 'system', content: 'Could not connect. Please try again.' }])
      }
      setIsGreeting(false)
    }

    runGreeting()
  }, [isOpen, sessionId, sendToApi])

  const handleOpen = () => {
    setIsOpen(true)
    setHasUnread(false)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleSend = async () => {
    const text = input.trim()
    if (!text || isTyping || isGreeting) return

    const userMsg: Message = { role: 'user', content: text }
    setMessages((prev) => [...prev, userMsg])
    const newHistory = [...history, { role: 'user', content: text }]
    setHistory(newHistory)
    setInput('')
    setIsTyping(true)

    try {
      const data = await sendToApi(text, newHistory)
      setIsTyping(false)

      if (data?.reply) {
        const botMsg: Message = { role: 'bot', content: data.reply }
        setMessages((prev) => [...prev, botMsg])
        setHistory((prev) => [...prev, { role: 'assistant', content: data.reply }])
        if (!isOpen) setHasUnread(true)
      } else {
        setMessages((prev) => [...prev, { role: 'system', content: 'Something went wrong. Please try again.' }])
      }
    } catch {
      setIsTyping(false)
      setMessages((prev) => [...prev, { role: 'system', content: 'Connection error. Please try again.' }])
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chat-panel"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
            className="fixed bottom-28 right-4 md:right-8 z-50 w-[calc(100vw-2rem)] max-w-[380px] rounded-2xl overflow-hidden shadow-2xl"
            style={{ boxShadow: '0 32px 80px rgba(0,0,0,0.45)' }}
          >
            {/* Header */}
            <div
              className="flex items-center gap-3 px-5 py-4"
              style={{ background: 'linear-gradient(135deg, #E8500A 0%, #c43d06 100%)' }}
            >
              {/* Avatar */}
              <div className="relative flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white text-lg font-bold">
                  A
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-semibold text-sm leading-tight truncate">Amir</p>
                <p className="text-white/75 text-xs leading-tight">Adrar AI Assistant · Online</p>
              </div>
              <button
                onClick={handleClose}
                aria-label="Close chat"
                className="w-8 h-8 flex items-center justify-center rounded-full text-white/80 hover:text-white hover:bg-white/15 transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div
              className="flex flex-col gap-3 px-4 py-4 overflow-y-auto"
              style={{ height: 340, background: '#FAFAFA' }}
              data-lenis-prevent
            >
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : msg.role === 'system' ? 'justify-center' : 'justify-start'}`}
                >
                  {msg.role === 'system' ? (
                    <span className="text-[11px] text-[#999] bg-[#F0F0F0] rounded-full px-3 py-1">
                      {msg.content}
                    </span>
                  ) : (
                    <div
                      className={`max-w-[82%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                        msg.role === 'user'
                          ? 'bg-[#E8500A] text-white rounded-br-sm'
                          : 'bg-white text-[#111] rounded-bl-sm shadow-sm border border-[#eee]'
                      }`}
                    >
                      {msg.content}
                    </div>
                  )}
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white border border-[#eee] rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm flex items-center gap-1">
                    {[0, 1, 2].map((i) => (
                      <span
                        key={i}
                        className="w-2 h-2 rounded-full bg-[#bbb] inline-block"
                        style={{
                          animation: 'chatDot 1.2s ease-in-out infinite',
                          animationDelay: `${i * 0.2}s`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div
              className="flex items-center gap-2 px-3 py-3 border-t border-[#E8E8E8]"
              style={{ background: '#fff' }}
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a message…"
                disabled={isTyping || isGreeting}
                maxLength={1000}
                className="flex-1 text-sm text-[#111] bg-[#F5F5F5] rounded-full px-4 py-2.5 outline-none placeholder:text-[#aaa] disabled:opacity-60 transition-colors focus:bg-[#EEEEE] focus:ring-2 focus:ring-[#E8500A]/30"
                style={{ border: '1px solid #E8E8E8' }}
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isTyping || isGreeting}
                aria-label="Send message"
                className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed hover:scale-105 active:scale-95"
                style={{ background: '#E8500A' }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 8h12M9 3l5 5-5 5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {/* Footer brand */}
            <div className="bg-white px-4 pb-3 text-center">
              <span className="text-[10px] text-[#bbb]">Powered by Adrar AI</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Trigger Button */}
      <motion.button
        onClick={handleOpen}
        aria-label="Open Adrar chat assistant"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.5, duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.93 }}
        className="fixed bottom-6 right-4 md:bottom-8 md:right-8 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-xl"
        style={{
          background: 'linear-gradient(135deg, #E8500A 0%, #c43d06 100%)',
          boxShadow: '0 8px 32px rgba(232,80,10,0.45)',
          display: isOpen ? 'none' : 'flex',
        }}
      >
        {/* Chat icon */}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M20 2H4C2.9 2 2 2.9 2 4v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"
            fill="white"
          />
          <circle cx="8" cy="11" r="1.2" fill="#E8500A" />
          <circle cx="12" cy="11" r="1.2" fill="#E8500A" />
          <circle cx="16" cy="11" r="1.2" fill="#E8500A" />
        </svg>

        {/* Unread badge */}
        <AnimatePresence>
          {hasUnread && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-green-500 border-2 border-white"
            />
          )}
        </AnimatePresence>
      </motion.button>

      {/* Typing dot keyframes */}
      <style>{`
        @keyframes chatDot {
          0%, 80%, 100% { transform: translateY(0); opacity: 0.4; }
          40% { transform: translateY(-5px); opacity: 1; }
        }
      `}</style>
    </>
  )
}
