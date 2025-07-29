"use client"

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

export default function SuccessPage() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')
  const [loading, setLoading] = useState(true)
  const [orderDetails, setOrderDetails] = useState<any>(null)

  useEffect(() => {
    if (sessionId) {
      // In a real app, you might want to verify the session with your backend
      setOrderDetails({
        sessionId,
        status: 'completed',
        message: 'Thank you for your purchase!'
      })
    }
    setLoading(false)
  }, [sessionId])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-gray-300 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p>Processing your order...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 flex items-center justify-center">
      <div className="max-w-md mx-auto text-center">
        <div className="bg-gray-800 p-8 rounded-lg">
          <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h1 className="text-3xl font-bold mb-4" style={{ fontFamily: 'neue-haas-grotesk-display, sans-serif' }}>
            Payment Successful!
          </h1>
          
          <p className="text-gray-400 mb-6">
            Thank you for your purchase. You will receive a confirmation email shortly.
          </p>
          
          {orderDetails && (
            <div className="bg-gray-700 p-4 rounded mb-6">
              <p className="text-sm text-gray-400">Order ID: {orderDetails.sessionId}</p>
            </div>
          )}
          
          <div className="space-y-3">
            <Link
              href="/"
              className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded transition-colors"
            >
              Return to Home
            </Link>
            
            <Link
              href="/personal-training"
              className="block w-full bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded transition-colors"
            >
              Book Another Session
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 