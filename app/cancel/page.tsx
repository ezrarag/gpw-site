"use client"

import Link from 'next/link'

export default function CancelPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-light text-gray-800 mb-4">Payment Cancelled</h1>
        <p className="text-gray-600 mb-8">Your payment was not completed.</p>
        <a 
          href="/"
          className="px-6 py-3 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
        >
          Return Home
        </a>
      </div>
    </div>
  )
} 