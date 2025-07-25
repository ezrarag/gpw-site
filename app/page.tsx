import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Heart, Leaf, Users, Star, Phone, Mail, MapPin, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-green-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">God's Purpose Wellness</h1>
                <p className="text-sm text-gray-600">Holistic Health & Healing</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="#home" className="text-gray-700 hover:text-green-600 transition-colors">
                Home
              </Link>
              <Link href="#about" className="text-gray-700 hover:text-green-600 transition-colors">
                About
              </Link>
              <Link href="#services" className="text-gray-700 hover:text-green-600 transition-colors">
                Services
              </Link>
              <Link href="#testimonials" className="text-gray-700 hover:text-green-600 transition-colors">
                Testimonials
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-green-600 transition-colors">
                Contact
              </Link>
            </nav>
            <Button className="bg-green-600 hover:bg-green-700">Book Consultation</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-5xl font-bold text-gray-900 leading-tight">
                  Discover Your Path to
                  <span className="text-green-600"> Holistic Wellness</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Experience transformative healing through faith-based wellness practices, natural remedies, and
                  personalized care that nurtures your body, mind, and spirit.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700">
                    Start Your Journey
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="Wellness Center"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">About Our Mission</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We believe in the power of faith-centered wellness, combining traditional healing wisdom with modern
                holistic practices to help you achieve optimal health.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center border-green-100">
                <CardHeader>
                  <Heart className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <CardTitle className="text-xl">Faith-Based Healing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Integrating spiritual principles with wellness practices for complete healing of body, mind, and
                    soul.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-green-100">
                <CardHeader>
                  <Leaf className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <CardTitle className="text-xl">Natural Remedies</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Harnessing the power of nature's gifts through herbal medicine, essential oils, and organic
                    nutrition.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-green-100">
                <CardHeader>
                  <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <CardTitle className="text-xl">Community Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Building a supportive community where individuals can share their wellness journey and grow
                    together.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Wellness Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive holistic health services designed to support your complete well-being
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Nutritional Counseling"
                    width={300}
                    height={200}
                    className="rounded-lg mb-4"
                  />
                  <CardTitle>Nutritional Counseling</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Personalized nutrition plans based on biblical principles and natural whole foods.
                  </p>
                  <Button variant="outline" className="w-full bg-transparent">
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Herbal Medicine"
                    width={300}
                    height={200}
                    className="rounded-lg mb-4"
                  />
                  <CardTitle>Herbal Medicine</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Natural herbal remedies and supplements to support your body's healing processes.
                  </p>
                  <Button variant="outline" className="w-full bg-transparent">
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Spiritual Wellness"
                    width={300}
                    height={200}
                    className="rounded-lg mb-4"
                  />
                  <CardTitle>Spiritual Wellness</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Faith-based coaching to align your spiritual and physical health journey.
                  </p>
                  <Button variant="outline" className="w-full bg-transparent">
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Detox Programs"
                    width={300}
                    height={200}
                    className="rounded-lg mb-4"
                  />
                  <CardTitle>Detox Programs</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Gentle, natural detoxification programs to cleanse and rejuvenate your body.
                  </p>
                  <Button variant="outline" className="w-full bg-transparent">
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Wellness Workshops"
                    width={300}
                    height={200}
                    className="rounded-lg mb-4"
                  />
                  <CardTitle>Wellness Workshops</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Educational workshops on natural health, nutrition, and spiritual wellness.
                  </p>
                  <Button variant="outline" className="w-full bg-transparent">
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Lifestyle Coaching"
                    width={300}
                    height={200}
                    className="rounded-lg mb-4"
                  />
                  <CardTitle>Lifestyle Coaching</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Comprehensive lifestyle guidance for sustainable health and wellness habits.
                  </p>
                  <Button variant="outline" className="w-full bg-transparent">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
              <p className="text-xl text-gray-600">Real stories of transformation and healing</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-green-100">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">Sarah M.</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    "The holistic approach here changed my life. I found not just physical healing, but spiritual
                    renewal that I never expected. Truly a blessing!"
                  </p>
                </CardContent>
              </Card>

              <Card className="border-green-100">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">Michael R.</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    "After years of struggling with health issues, the natural remedies and faith-based approach helped
                    me find the healing I was searching for."
                  </p>
                </CardContent>
              </Card>

              <Card className="border-green-100">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">Jennifer L.</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    "The personalized nutrition plan and spiritual guidance gave me the tools to transform my health and
                    deepen my faith journey."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-green-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Start Your Wellness Journey</h2>
              <p className="text-xl text-gray-600">Ready to experience holistic healing? Get in touch with us today.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">info@godspurposewellness.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-600">
                      123 Wellness Way
                      <br />
                      Healing City, HC 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 10:00 AM - 4:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                  <CardDescription>
                    We'd love to hear from you and discuss how we can support your wellness journey.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name
                      </label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name
                      </label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your wellness goals and how we can help..."
                      rows={4}
                    />
                  </div>

                  <Button className="w-full bg-green-600 hover:bg-green-700">Send Message</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="h-6 w-6 text-green-400" />
                <span className="text-xl font-bold">God's Purpose Wellness</span>
              </div>
              <p className="text-gray-400">
                Empowering your journey to holistic health through faith, natural healing, and community support.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-green-400 transition-colors">
                    Nutritional Counseling
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-green-400 transition-colors">
                    Herbal Medicine
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-green-400 transition-colors">
                    Spiritual Wellness
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-green-400 transition-colors">
                    Detox Programs
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-green-400 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-green-400 transition-colors">
                    Wellness Tips
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-green-400 transition-colors">
                    Recipes
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-green-400 transition-colors">
                    Prayer Requests
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-green-400 transition-colors">
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-green-400 transition-colors">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-green-400 transition-colors">
                    YouTube
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-green-400 transition-colors">
                    Newsletter
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} God's Purpose Wellness. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
