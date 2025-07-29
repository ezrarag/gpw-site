# God's Purpose Wellness - Fitness Business Platform

A modern fitness business platform built with Next.js, Supabase, and Stripe for personal training, meal delivery, and merchandise sales.

## Features

- **Personal Training**: Book sessions with certified trainers
- **Premade Meals**: Order healthy, pre-cooked meals
- **Merchandise Shop**: Purchase fitness apparel and accessories
- **Blog/Content**: Educational fitness articles and videos
- **Stripe Integration**: Secure payment processing
- **Supabase Auth**: User authentication and data management
- **Responsive Design**: Works on all devices

## Tech Stack

- **Frontend**: Next.js 14 (App Router), React, TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Payments**: Stripe
- **Fonts**: Adobe Typekit (Code Saver, Neue Haas Grotesk Display)

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd gpw-site
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Set up environment variables

Create a `.env.local` file in the root directory:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Stripe Configuration
STRIPE_SECRET_KEY=your_stripe_secret_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret

# Application Configuration
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### 4. Set up Supabase

1. Create a new Supabase project
2. Run the SQL schema from `supabase-schema.sql` in your Supabase SQL editor
3. Enable Row Level Security (RLS) on all tables
4. Set up authentication providers in Supabase Auth settings

### 5. Set up Stripe

1. Create a Stripe account
2. Get your API keys from the Stripe dashboard
3. Set up webhook endpoints for payment confirmation
4. Configure your webhook URL: `https://your-domain.com/api/stripe/webhook`

### 6. Run the development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

```
gpw-site/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   │   ├── bookings/      # Booking management
│   │   ├── blogs/         # Blog content
│   │   ├── products/      # Product catalog
│   │   ├── trainers/      # Trainer data
│   │   └── stripe/        # Payment processing
│   ├── personal-training/ # Training booking page
│   ├── premade-meals/     # Meal ordering page
│   ├── merchandise/       # Shop page
│   ├── success/           # Payment success page
│   └── cancel/            # Payment cancel page
├── lib/                   # Utility libraries
│   ├── supabase.ts        # Supabase client
│   └── stripe.ts          # Stripe configuration
├── components/            # Reusable components
└── supabase-schema.sql   # Database schema
```

## API Endpoints

### Trainers
- `GET /api/trainers` - Get all trainers

### Bookings
- `GET /api/bookings` - Get user bookings
- `POST /api/bookings` - Create new booking

### Blogs
- `GET /api/blogs` - Get all blog posts

### Products
- `GET /api/products` - Get products (with optional category filter)

### Stripe
- `POST /api/stripe/create-checkout-session` - Create payment session
- `POST /api/stripe/webhook` - Handle payment webhooks

## Database Schema

### Tables
- **trainers**: Trainer profiles and availability
- **users**: User profiles (linked to Supabase Auth)
- **bookings**: Training session bookings
- **blogs**: Blog posts and videos
- **products**: Meals and merchandise

### Key Features
- Row Level Security (RLS) enabled
- Automatic user creation on signup
- Sample data included
- Optimized indexes for performance

## Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL | Yes |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anon key | Yes |
| `STRIPE_SECRET_KEY` | Your Stripe secret key | Yes |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Your Stripe publishable key | Yes |
| `STRIPE_WEBHOOK_SECRET` | Your Stripe webhook secret | Yes |
| `NEXT_PUBLIC_BASE_URL` | Your application URL | Yes |

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.