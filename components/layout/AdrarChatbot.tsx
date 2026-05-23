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

interface AdrarChatbotProps {
  isOpen: boolean
  onClose: () => void
  onUnread: (v: boolean) => void
}

export default function AdrarChatbot({ isOpen, onClose, onUnread }: AdrarChatbotProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [sessionId, setSessionId] = useState('')
  const [history, setHistory] = useState<{ role: string; content: string }[]>([])
  const [isGreeting, setIsGreeting] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const greetingSent = useRef(false)

  useEffect(() => {
    setSessionId(getOrCreateSession())
  }, [])

  const focusInput = useCallback(() => {
    setTimeout(() => inputRef.current?.focus(), 50)
  }, [])

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping, scrollToBottom])

  useEffect(() => {
    if (isOpen) {
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
      focusInput()
    }

    runGreeting()
  }, [isOpen, sessionId, sendToApi, focusInput])

  const handleSend = async () => {
    const text = input.trim()
    if (!text || isTyping || isGreeting) return

    const userMsg: Message = { role: 'user', content: text }
    setMessages((prev) => [...prev, userMsg])
    const newHistory = [...history, { role: 'user', content: text }]
    setHistory(newHistory)
    setInput('')
    setIsTyping(true)
    focusInput()

    try {
      const data = await sendToApi(text, newHistory)
      setIsTyping(false)
      focusInput()

      if (data?.reply) {
        const botMsg: Message = { role: 'bot', content: data.reply }
        setMessages((prev) => [...prev, botMsg])
        setHistory((prev) => [...prev, { role: 'assistant', content: data.reply }])
        if (!isOpen) onUnread(true)
      } else {
        setMessages((prev) => [...prev, { role: 'system', content: 'Something went wrong. Please try again.' }])
      }
    } catch {
      setIsTyping(false)
      focusInput()
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
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chat-panel"
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.28, ease: [0.25, 1, 0.5, 1] }}
            className="fixed bottom-24 left-4 md:bottom-28 md:left-8 z-50 w-[calc(100vw-2rem)] max-w-[360px] rounded-2xl overflow-hidden"
            style={{ boxShadow: '0 24px 64px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.06)' }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-3.5 bg-white border-b border-[#F0F0F0]">
              <div className="w-8 h-8 rounded-full bg-[#E8500A] flex items-center justify-center shrink-0">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[#1A1A1A] font-semibold text-[13px] leading-tight">Adrar AI</p>
                <p className="text-[#6B6B6B] text-[11px] leading-tight">Ask us anything</p>
              </div>
              <button
                onClick={onClose}
                aria-label="Close chat"
                className="w-7 h-7 flex items-center justify-center rounded-full text-[#6B6B6B] hover:text-[#1A1A1A] hover:bg-[#F5F5F5] transition-colors"
              >
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                  <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div
              className="flex flex-col gap-3 px-4 py-4 overflow-y-auto"
              style={{ height: 320, background: '#FAFAFA' }}
              data-lenis-prevent
            >
              {messages.length === 0 && !isTyping && (
                <div className="flex-1 flex items-center justify-center">
                  <p className="text-[13px] text-[#aaa] text-center">How can we help you today?</p>
                </div>
              )}
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
                      className={`max-w-[82%] px-3.5 py-2.5 rounded-2xl text-[13px] leading-relaxed ${
                        msg.role === 'user'
                          ? 'bg-[#E8500A] text-white rounded-br-sm'
                          : 'bg-white text-[#111] rounded-bl-sm shadow-sm border border-[#EBEBEB]'
                      }`}
                    >
                      {msg.content}
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white border border-[#EBEBEB] rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm flex items-center gap-1">
                    {[0, 1, 2].map((i) => (
                      <span
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-[#ccc] inline-block"
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
            <div className="flex items-center gap-2 px-3 py-3 bg-white border-t border-[#F0F0F0]">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a message…"
                disabled={isTyping || isGreeting}
                maxLength={1000}
                autoComplete="off"
                className="flex-1 text-[13px] text-[#111] bg-[#F5F5F5] rounded-full px-4 py-2.5 outline-none placeholder:text-[#bbb] disabled:opacity-50 transition-all focus:ring-1 focus:ring-[#E8500A]/40 focus:bg-white"
                style={{ border: '1px solid #EBEBEB' }}
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isTyping || isGreeting}
                aria-label="Send message"
                className="w-9 h-9 flex-shrink-0 flex items-center justify-center rounded-full bg-[#E8500A] transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#C94008] active:scale-95"
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M2 8h12M9 3l5 5-5 5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes chatDot {
          0%, 80%, 100% { transform: translateY(0); opacity: 0.4; }
          40% { transform: translateY(-4px); opacity: 1; }
        }
      `}</style>
    </>
  )
}
