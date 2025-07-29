"use client"

import { useState, useEffect } from 'react'
import { Trainer } from '@/lib/supabase'

export default function PersonalTrainingPage() {
  const [trainers, setTrainers] = useState<Trainer[]>([])
  const [selectedTrainer, setSelectedTrainer] = useState<Trainer | null>(null)
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchTrainers()
  }, [])

  const fetchTrainers = async () => {
    try {
      const response = await fetch('/api/trainers')
      const data = await response.json()
      setTrainers(data)
    } catch (error) {
      console.error('Error fetching trainers:', error)
    }
  }

  const handleBooking = async () => {
    if (!selectedTrainer || !selectedDate || !selectedTime) {
      alert('Please select a trainer, date, and time')
      return
    }

    setLoading(true)

    try {
      // Create checkout session
      const response = await fetch('/api/stripe/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'training',
          items: [{
            name: `Training Session with ${selectedTrainer.name}`,
            description: `One-on-one training session on ${selectedDate} at ${selectedTime}`,
            price: selectedTrainer.hourly_rate,
            quantity: 1,
          }],
          success_url: `${window.location.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${window.location.origin}/personal-training`,
        }),
      })

      const { sessionId } = await response.json()

      // Redirect to Stripe Checkout
      const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)
      await stripe?.redirectToCheckout({ sessionId })
    } catch (error) {
      console.error('Error creating booking:', error)
      alert('Failed to create booking. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8" style={{ fontFamily: 'neue-haas-grotesk-display, sans-serif' }}>
          Personal Training
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Trainer Selection */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Select Your Trainer</h2>
            <div className="space-y-4">
              {trainers.map((trainer) => (
                <div
                  key={trainer.id}
                  className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                    selectedTrainer?.id === trainer.id
                      ? 'border-blue-500 bg-blue-900/20'
                      : 'border-gray-600 hover:border-gray-500'
                  }`}
                  onClick={() => setSelectedTrainer(trainer)}
                >
                  <h3 className="text-lg font-semibold">{trainer.name}</h3>
                  <p className="text-gray-400 text-sm">{trainer.bio}</p>
                  <p className="text-blue-400 mt-2">${trainer.hourly_rate}/hour</p>
                  <div className="mt-2">
                    <span className="text-xs text-gray-500">Specialties: </span>
                    {trainer.specialties.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Booking Form */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Book Your Session</h2>
            
            {selectedTrainer && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Selected Trainer</label>
                  <div className="p-3 bg-gray-700 rounded border">
                    {selectedTrainer.name} - ${selectedTrainer.hourly_rate}/hour
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Date</label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded focus:border-blue-500 focus:outline-none"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Time</label>
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded focus:border-blue-500 focus:outline-none"
                  >
                    <option value="">Select a time</option>
                    {selectedTrainer.available_times.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  onClick={handleBooking}
                  disabled={loading || !selectedDate || !selectedTime}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded transition-colors"
                >
                  {loading ? 'Processing...' : 'Book Session ($75)'}
                </button>
              </div>
            )}

            {!selectedTrainer && (
              <p className="text-gray-400">Please select a trainer to book a session.</p>
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