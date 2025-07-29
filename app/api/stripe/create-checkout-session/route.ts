import { NextResponse } from 'next/server'
import stripe from '@/lib/stripe'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { type, items, success_url, cancel_url } = body

    let lineItems = []

    if (type === 'training') {
      // For training sessions
      lineItems.push({
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Personal Training Session',
            description: 'One-on-one training session with certified trainer',
          },
          unit_amount: 7500, // $75.00 in cents
        },
        quantity: 1,
      })
    } else if (type === 'product') {
      // For meals and merchandise
      lineItems = items.map((item: any) => ({
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.name,
            description: item.description,
            images: item.image_url ? [item.image_url] : [],
          },
          unit_amount: Math.round(item.price * 100), // Convert to cents
        },
        quantity: item.quantity || 1,
      }))
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: success_url || `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: cancel_url || `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
      metadata: {
        type,
        items: JSON.stringify(items),
      },
    })

    return NextResponse.json({ sessionId: session.id })
  } catch (error) {
    console.error('Stripe checkout error:', error)
    return NextResponse.json({ error: 'Failed to create checkout session' }, { status: 500 })
  }
} 