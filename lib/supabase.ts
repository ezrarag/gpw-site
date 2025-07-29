import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface Trainer {
  id: string
  name: string
  email: string
  bio: string
  specialties: string[]
  hourly_rate: number
  available_times: string[]
  created_at: string
}

export interface Booking {
  id: string
  user_id: string
  trainer_id: string
  date: string
  time: string
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed'
  payment_status: 'pending' | 'paid' | 'refunded'
  session_fee: number
  created_at: string
}

export interface BlogPost {
  id: number
  title: string
  content: string
  slug: string
  type: 'article' | 'video'
  created_at: string
  updated_at: string
}

export interface Product {
  id: string
  name: string
  description: string
  price: number
  category: 'meal' | 'merchandise'
  image_url: string
  in_stock: boolean
  created_at: string
}

export interface User {
  id: string
  email: string
  full_name: string
  phone?: string
  created_at: string
} 