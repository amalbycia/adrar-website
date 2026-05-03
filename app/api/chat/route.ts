import { NextRequest, NextResponse } from 'next/server'

const WEBHOOK_URL = process.env.ADRAR_CHAT_WEBHOOK_URL

export async function POST(req: NextRequest) {
  if (!WEBHOOK_URL) {
    return NextResponse.json({ reply: 'Chat is temporarily unavailable.' }, { status: 503 })
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

  // Basic server-side validation
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

  try {
    const upstream = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sessionId, message, type, history }),
    })

    const data = await upstream.json()

    // Strip the internal _c field — never forward raw lead data to the client
    const { _c, ...safe } = data as { _c?: unknown; [key: string]: unknown }
    void _c // intentionally unused — we just want to strip it

    return NextResponse.json(safe, { status: upstream.ok ? 200 : upstream.status })
  } catch {
    return NextResponse.json({ reply: 'Could not connect to chat service.' }, { status: 502 })
  }
}
