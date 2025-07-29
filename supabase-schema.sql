-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create trainers table
CREATE TABLE trainers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  bio TEXT,
  specialties TEXT[] DEFAULT '{}',
  hourly_rate DECIMAL(10,2) NOT NULL DEFAULT 75.00,
  available_times TEXT[] DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create users table (for Supabase Auth)
CREATE TABLE users (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email VARCHAR(255) UNIQUE NOT NULL,
  full_name VARCHAR(255),
  phone VARCHAR(20),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create bookings table
CREATE TABLE bookings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  trainer_id UUID NOT NULL REFERENCES trainers(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  time TIME NOT NULL,
  status VARCHAR(20) NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled', 'completed')),
  payment_status VARCHAR(20) NOT NULL DEFAULT 'pending' CHECK (payment_status IN ('pending', 'paid', 'refunded')),
  session_fee DECIMAL(10,2) NOT NULL DEFAULT 75.00,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create blogs table
CREATE TABLE blogs (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  type VARCHAR(20) NOT NULL CHECK (type IN ('article', 'video')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create products table
CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  category VARCHAR(20) NOT NULL CHECK (category IN ('meal', 'merchandise')),
  image_url TEXT,
  in_stock BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX idx_bookings_user_id ON bookings(user_id);
CREATE INDEX idx_bookings_trainer_id ON bookings(trainer_id);
CREATE INDEX idx_bookings_date ON bookings(date);
CREATE INDEX idx_blogs_slug ON blogs(slug);
CREATE INDEX idx_products_category ON products(category);

-- Create RLS (Row Level Security) policies
ALTER TABLE trainers ENABLE ROW LEVEL SECURITY;
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE blogs ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Trainers: Allow public read access
CREATE POLICY "Trainers are viewable by everyone" ON trainers
  FOR SELECT USING (true);

-- Users: Allow users to view their own data
CREATE POLICY "Users can view own data" ON users
  FOR SELECT USING (auth.uid() = id);

-- Bookings: Allow users to view their own bookings
CREATE POLICY "Users can view own bookings" ON bookings
  FOR SELECT USING (auth.uid() = user_id);

-- Bookings: Allow users to create their own bookings
CREATE POLICY "Users can create own bookings" ON bookings
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Blogs: Allow public read access
CREATE POLICY "Blogs are viewable by everyone" ON blogs
  FOR SELECT USING (true);

-- Products: Allow public read access
CREATE POLICY "Products are viewable by everyone" ON products
  FOR SELECT USING (true);

-- Insert sample data
INSERT INTO trainers (name, email, bio, specialties, hourly_rate, available_times) VALUES
('Sarah Johnson', 'sarah@gpw-wellness.com', 'Certified personal trainer with 8 years of experience specializing in strength training and weight loss.', ARRAY['Strength Training', 'Weight Loss', 'HIIT'], 75.00, ARRAY['09:00', '10:00', '11:00', '14:00', '15:00', '16:00']),
('Mike Chen', 'mike@gpw-wellness.com', 'Former professional athlete turned trainer, expert in functional fitness and injury rehabilitation.', ARRAY['Functional Fitness', 'Rehabilitation', 'Sports Performance'], 85.00, ARRAY['08:00', '09:00', '10:00', '13:00', '14:00', '15:00']),
('Emma Rodriguez', 'emma@gpw-wellness.com', 'Yoga and Pilates instructor with a focus on mind-body connection and flexibility training.', ARRAY['Yoga', 'Pilates', 'Flexibility', 'Mindfulness'], 70.00, ARRAY['07:00', '08:00', '09:00', '16:00', '17:00', '18:00']);

INSERT INTO blogs (title, content, slug, type) VALUES
('5 Essential Exercises for Beginners', 'Starting your fitness journey can be overwhelming, but these five fundamental exercises will help you build a solid foundation. Focus on proper form and gradually increase intensity as you progress.', '5-essential-exercises-beginners', 'article'),
('Nutrition Basics: What to Eat Before and After Workouts', 'Proper nutrition is key to maximizing your workout results. Learn what to eat before and after your training sessions to optimize performance and recovery.', 'nutrition-basics-workout', 'article'),
('Full Body HIIT Workout', 'High-intensity interval training for maximum calorie burn. This 30-minute workout will challenge your entire body and boost your metabolism.', 'full-body-hiit-workout', 'video'),
('How to Stay Motivated on Your Fitness Journey', 'Motivation is the key to long-term success in fitness. Discover proven strategies to maintain your motivation and achieve your health goals.', 'stay-motivated-fitness-journey', 'article');

INSERT INTO products (name, description, price, category, image_url) VALUES
('Grilled Chicken Bowl', 'Lean grilled chicken with quinoa, roasted vegetables, and a light lemon herb sauce. High protein, low carb meal perfect for post-workout recovery.', 15.00, 'meal', 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400'),
('Salmon with Sweet Potato', 'Wild-caught salmon with mashed sweet potato and steamed broccoli. Rich in omega-3s and complex carbohydrates.', 18.00, 'meal', 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400'),
('Turkey and Avocado Wrap', 'Sliced turkey breast with fresh avocado, mixed greens, and whole grain tortilla. Perfect for a quick, nutritious lunch.', 12.00, 'meal', 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400'),
('GPW Performance T-Shirt', 'Premium moisture-wicking fabric with our signature logo. Available in multiple sizes and colors.', 35.00, 'merchandise', 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400'),
('Fitness Tracker Watch', 'Advanced fitness tracking with heart rate monitoring, GPS, and 7-day battery life. Perfect for tracking your workouts.', 199.00, 'merchandise', 'https://images.unsplash.com/photo-1544117519-31a4b719223d?w=400'),
('Yoga Mat', 'Non-slip, eco-friendly yoga mat perfect for home workouts and studio sessions. Includes carrying strap.', 45.00, 'merchandise', 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400');

-- Create function to handle user creation
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO users (id, email, full_name)
  VALUES (NEW.id, NEW.email, NEW.raw_user_meta_data->>'full_name');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for new user creation
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user(); 