// Stripe configuration and utilities
// Note: You'll need to install @stripe/stripe-js and stripe packages

export const stripeConfig = {
  publishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '',
  // Add your Stripe publishable key to .env.local
}

export const createCheckoutSession = async (cartItems: any[]) => {
  try {
    const response = await fetch('/api/stripe/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        items: cartItems.map(item => ({
          name: item.name,
          price: item.price,
          description: item.description,
        })),
      }),
    })

    if (!response.ok) {
      throw new Error('Failed to create checkout session')
    }

    const { sessionId } = await response.json()
    return sessionId
  } catch (error) {
    console.error('Error creating checkout session:', error)
    throw error
  }
}

export const redirectToCheckout = async (sessionId: string) => {
  // This will be implemented with @stripe/stripe-js
  // For now, we'll just redirect to a placeholder
  window.location.href = `/api/stripe/redirect?session_id=${sessionId}`
} 