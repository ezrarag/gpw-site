import { NextResponse } from 'next/server'
import { headers } from 'next/headers'
import stripe from '@/lib/stripe'
import { supabase } from '@/lib/supabase'

export async function POST(request: Request) {
  const body = await request.text()
  const headersList = await headers()
  const signature = headersList.get('stripe-signature')

  if (!signature) {
    return NextResponse.json({ error: 'No signature' }, { status: 400 })
  }

  let event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (err) {
    console.error('Webhook signature verification failed:', err)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed':
        const session = event.data.object as any
        
        if (session.metadata.type === 'training') {
          // Update booking payment status
          const { error } = await supabase
            .from('bookings')
            .update({ payment_status: 'paid' })
            .eq('id', session.metadata.booking_id)

          if (error) {
            console.error('Error updating booking:', error)
          }
        } else if (session.metadata.type === 'product') {
          // Handle product purchase completion
          // You might want to update inventory or send confirmation emails
          console.log('Product purchase completed:', session.id)
        }
        break

      case 'payment_intent.payment_failed':
        const paymentIntent = event.data.object as any
        console.log('Payment failed:', paymentIntent.id)
        break

      default:
        console.log(`Unhandled event type: ${event.type}`)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Webhook handler error:', error)
    return NextResponse.json({ error: 'Webhook handler failed' }, { status: 500 })
  }
} 