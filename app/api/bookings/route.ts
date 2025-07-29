import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET() {
  try {
    const { data: bookings, error } = await supabase
      .from('bookings')
      .select(`
        *,
        trainers(name, email),
        users(full_name, email)
      `)
      .order('created_at', { ascending: false })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json(bookings)
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { user_id, trainer_id, date, time, session_fee } = body

    const { data: booking, error } = await supabase
      .from('bookings')
      .insert({
        user_id,
        trainer_id,
        date,
        time,
        session_fee,
        status: 'pending',
        payment_status: 'pending'
      })
      .select()
      .single()

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json(booking)
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
} 