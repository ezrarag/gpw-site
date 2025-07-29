"use client"

import { useState, useEffect } from 'react'
import { Product } from '@/lib/supabase'

export default function MerchandisePage() {
  const [products, setProducts] = useState<Product[]>([])
  const [cart, setCart] = useState<{ [key: string]: number }>({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/products?category=merchandise')
      const data = await response.json()
      setProducts(data)
    } catch (error) {
      console.error('Error fetching products:', error)
    }
  }

  const addToCart = (productId: string) => {
    setCart(prev => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1
    }))
  }

  const removeFromCart = (productId: string) => {
    setCart(prev => {
      const newCart = { ...prev }
      if (newCart[productId] > 1) {
        newCart[productId] -= 1
      } else {
        delete newCart[productId]
      }
      return newCart
    })
  }

  const getCartItems = () => {
    return products.filter(product => cart[product.id])
  }

  const getTotalPrice = () => {
    return getCartItems().reduce((total, product) => {
      return total + (product.price * cart[product.id])
    }, 0)
  }

  const handleCheckout = async () => {
    if (Object.keys(cart).length === 0) {
      alert('Please add items to your cart')
      return
    }

    setLoading(true)

    try {
      const cartItems = getCartItems().map(product => ({
        name: product.name,
        description: product.description,
        price: product.price,
        quantity: cart[product.id],
        image_url: product.image_url,
      }))

      const response = await fetch('/api/stripe/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'product',
          items: cartItems,
          success_url: `${window.location.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${window.location.origin}/merchandise`,
        }),
      })

      const { sessionId } = await response.json()

      // Redirect to Stripe Checkout
      const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)
      await stripe?.redirectToCheckout({ sessionId })
    } catch (error) {
      console.error('Error creating checkout session:', error)
      alert('Failed to create checkout session. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8" style={{ fontFamily: 'neue-haas-grotesk-display, sans-serif' }}>
          Merchandise Shop
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Products Grid */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold mb-6">Premium Fitness Apparel & Accessories</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {products.map((product) => (
                <div key={product.id} className="bg-gray-800 rounded-lg overflow-hidden">
                  {product.image_url && (
                    <div className="h-48 bg-gray-700 flex items-center justify-center">
                      <img
                        src={product.image_url}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-blue-400">${product.price}</span>
                      <button
                        onClick={() => addToCart(product.id)}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cart */}
          <div className="bg-gray-800 p-6 rounded-lg h-fit">
            <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
            
            {getCartItems().length === 0 ? (
              <p className="text-gray-400">Your cart is empty</p>
            ) : (
              <div className="space-y-4">
                {getCartItems().map((product) => (
                  <div key={product.id} className="flex items-center justify-between p-3 bg-gray-700 rounded">
                    <div>
                      <h4 className="font-medium">{product.name}</h4>
                      <p className="text-sm text-gray-400">${product.price} each</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => removeFromCart(product.id)}
                        className="bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded text-sm"
                      >
                        -
                      </button>
                      <span className="w-8 text-center">{cart[product.id]}</span>
                      <button
                        onClick={() => addToCart(product.id)}
                        className="bg-green-600 hover:bg-green-700 text-white px-2 py-1 rounded text-sm"
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
                
                <div className="border-t border-gray-600 pt-4">
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total:</span>
                    <span>${getTotalPrice().toFixed(2)}</span>
                  </div>
                  
                  <button
                    onClick={handleCheckout}
                    disabled={loading}
                    className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded mt-4 transition-colors"
                  >
                    {loading ? 'Processing...' : 'Checkout'}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// Helper function to load Stripe
async function loadStripe(publishableKey: string) {
  const { loadStripe } = await import('@stripe/stripe-js')
  return loadStripe(publishableKey)
} 