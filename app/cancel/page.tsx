"use client"

import Link from 'next/link'

export default function CancelPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 flex items-center justify-center">
      <div className="max-w-md mx-auto text-center">
        <div className="bg-gray-800 p-8 rounded-lg">
          <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          
          <h1 className="text-3xl font-bold mb-4" style={{ fontFamily: 'neue-haas-grotesk-display, sans-serif' }}>
            Payment Cancelled
          </h1>
          
          <p className="text-gray-400 mb-6">
            Your payment was cancelled. No charges were made to your account.
          </p>
          
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
              Try Again
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 