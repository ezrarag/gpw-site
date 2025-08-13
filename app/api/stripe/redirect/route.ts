import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const sessionId = searchParams.get('session_id')

  if (!sessionId) {
    return NextResponse.redirect(new URL('/cancel', request.url))
  }

  // TODO: Verify the session with Stripe
  // const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
  // const session = await stripe.checkout.sessions.retrieve(sessionId)

  // For now, redirect to success page
  return NextResponse.redirect(new URL('/success', request.url))
}
