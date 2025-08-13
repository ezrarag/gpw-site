"use client"

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-light text-gray-800 mb-4">Payment Successful!</h1>
        <p className="text-gray-600 mb-8">Thank you for your purchase.</p>
        <a 
          href="/"
          className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Return Home
        </a>
      </div>
    </div>
  )
} 