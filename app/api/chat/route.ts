import { NextRequest, NextResponse } from 'next/server'

const WEBHOOK_URL = process.env.ADRAR_CHAT_WEBHOOK_URL

// In-memory rate limiter: 30 requests per minute per IP
// Works per-instance on Vercel — sufficient protection since each instance
// handles its own slice of traffic and abuse patterns are still detectable.
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()
const WINDOW_MS = 60_000 // 1 minute
const MAX_REQUESTS = 30  // generous for real users, blocks bot floods

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + WINDOW_MS })
    return false
  }

  entry.count++
  if (entry.count > MAX_REQUESTS) return true
  return false
}

// Prevent unbounded memory growth — prune stale entries periodically
let lastPrune = Date.now()
function maybePrune() {
  const now = Date.now()
  if (now - lastPrune < 5 * 60_000) return
  lastPrune = now
  for (const [ip, entry] of rateLimitMap.entries()) {
    if (now > entry.resetAt) rateLimitMap.delete(ip)
  }
}

export async function POST(req: NextRequest) {
  if (!WEBHOOK_URL) {
    return NextResponse.json({ reply: 'Chat is temporarily unavailable.' }, { status: 503 })
  }

  maybePrune()

  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    req.headers.get('x-real-ip') ??
    'unknown'

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { reply: 'Too many messages. Please wait a moment before continuing.' },
      { status: 429, headers: { 'Retry-After': '60' } }
    )
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ reply: 'Invalid request.' }, { status: 400 })
  }

  const { sessionId, message, type, history } = body as {
    sessionId?: string
    message?: string
    type?: string
    history?: unknown[]
  }

  if (!sessionId || typeof sessionId !== 'string') {
    return NextResponse.json({ reply: 'Invalid session.' }, { status: 400 })
  }

  const uuidRx = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
  if (!uuidRx.test(sessionId)) {
    return NextResponse.json({ reply: 'Invalid session.' }, { status: 400 })
  }

  if (type !== 'session-end') {
    if (!message || typeof message !== 'string' || message.length > 1000) {
      return NextResponse.json({ reply: 'Invalid message.' }, { status: 400 })
    }
  }

  // Cap history to last 20 entries to prevent payload bloat
  const safeHistory = Array.isArray(history) ? history.slice(-20) : []

  // Allowlist the type field
  const allowedTypes = ['message', 'session-end', 'session-start']
  const safeType = type && allowedTypes.includes(type) ? type : 'message'

  try {
    const upstream = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sessionId, message, type: safeType, history: safeHistory }),
    })

    const data = await upstream.json()

    // Strip the internal _c field — never forward raw lead data to the client
    const { _c, ...safe } = data as { _c?: unknown; [key: string]: unknown }
    void _c

    return NextResponse.json(safe, { status: upstream.ok ? 200 : upstream.status })
  } catch {
    return NextResponse.json({ reply: 'Could not connect to chat service.' }, { status: 502 })
  }
}
