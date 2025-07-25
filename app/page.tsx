import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Heart, Leaf, Users, Star, Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                <Heart className="h-4 w-4 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-light text-white">God's Purpose Wellness</h1>
                <p className="text-xs text-gray-400 font-light">Holistic Health & Healing</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="#home" className="text-gray-300 hover:text-white transition-colors text-sm font-light">
                Home
              </Link>
              <Link href="#about" className="text-gray-300 hover:text-white transition-colors text-sm font-light">
                About
              </Link>
              <Link href="#services" className="text-gray-300 hover:text-white transition-colors text-sm font-light">
                Services
              </Link>
              <Link
                href="#testimonials"
                className="text-gray-300 hover:text-white transition-colors text-sm font-light"
              >
                Testimonials
              </Link>
              <Link href="#contact" className="text-gray-300 hover:text-white transition-colors text-sm font-light">
                Contact
              </Link>
            </nav>
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white border-0 font-light">
              Book Consultation
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="py-32 bg-gray-900">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-6xl md:text-7xl font-extralight text-white leading-tight tracking-tight">
                Holistic
                <br />
                <span className="text-emerald-400">Wellness</span>
              </h2>
              <p className="text-xl text-gray-300 font-light leading-relaxed max-w-2xl mx-auto">
                Experience transformative healing through faith-based wellness practices, natural remedies, and
                personalized care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white border-0 font-light">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent font-light"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 bg-gray-800">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-extralight text-white mb-6 tracking-tight">Our Mission</h2>
                <p className="text-xl text-gray-300 font-light leading-relaxed">
                  We believe in the power of faith-centered wellness, combining traditional healing wisdom with modern
                  holistic practices.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-12">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto">
                    <Heart className="h-8 w-8 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-light text-white">Faith-Based Healing</h3>
                  <p className="text-gray-400 font-light leading-relaxed">
                    Integrating spiritual principles with wellness practices for complete healing.
                  </p>
                </div>

                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto">
                    <Leaf className="h-8 w-8 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-light text-white">Natural Remedies</h3>
                  <p className="text-gray-400 font-light leading-relaxed">
                    Harnessing nature's gifts through herbal medicine and organic nutrition.
                  </p>
                </div>

                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto">
                    <Users className="h-8 w-8 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-light text-white">Community Support</h3>
                  <p className="text-gray-400 font-light leading-relaxed">
                    Building supportive communities for shared wellness journeys.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-32 bg-gray-900">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-extralight text-white mb-6 tracking-tight">Services</h2>
                <p className="text-xl text-gray-300 font-light">
                  Comprehensive holistic health services for complete well-being
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Nutritional Counseling",
                    description: "Personalized nutrition plans based on biblical principles and natural whole foods.",
                  },
                  {
                    title: "Herbal Medicine",
                    description: "Natural herbal remedies and supplements to support your body's healing processes.",
                  },
                  {
                    title: "Spiritual Wellness",
                    description: "Faith-based coaching to align your spiritual and physical health journey.",
                  },
                  {
                    title: "Detox Programs",
                    description: "Gentle, natural detoxification programs to cleanse and rejuvenate your body.",
                  },
                  {
                    title: "Wellness Workshops",
                    description: "Educational workshops on natural health, nutrition, and spiritual wellness.",
                  },
                  {
                    title: "Lifestyle Coaching",
                    description: "Comprehensive lifestyle guidance for sustainable health and wellness habits.",
                  },
                ].map((service, index) => (
                  <Card key={index} className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
                    <CardHeader className="pb-4">
                      <CardTitle className="text-white font-light text-lg">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-400 font-light leading-relaxed mb-4">{service.description}</p>
                      <Button variant="ghost" className="text-emerald-400 hover:text-emerald-300 p-0 h-auto font-light">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-32 bg-gray-800">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-extralight text-white mb-6 tracking-tight">Testimonials</h2>
                <p className="text-xl text-gray-300 font-light">Real stories of transformation and healing</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    name: "Sarah M.",
                    text: "The holistic approach here changed my life. I found not just physical healing, but spiritual renewal that I never expected.",
                  },
                  {
                    name: "Michael R.",
                    text: "After years of struggling with health issues, the natural remedies and faith-based approach helped me find healing.",
                  },
                  {
                    name: "Jennifer L.",
                    text: "The personalized nutrition plan and spiritual guidance gave me the tools to transform my health and deepen my faith.",
                  },
                ].map((testimonial, index) => (
                  <Card key={index} className="bg-gray-900 border-gray-700">
                    <CardHeader className="pb-4">
                      <div className="flex items-center space-x-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-emerald-400 text-emerald-400" />
                        ))}
                      </div>
                      <CardTitle className="text-white font-light text-lg">{testimonial.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-400 font-light leading-relaxed">"{testimonial.text}"</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 bg-gray-900">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-extralight text-white mb-6 tracking-tight">Get in Touch</h2>
                <p className="text-xl text-gray-300 font-light">Ready to experience holistic healing?</p>
              </div>

              <div className="grid lg:grid-cols-2 gap-16">
                <div className="space-y-8">
                  {[
                    { icon: Phone, label: "Phone", value: "(555) 123-4567" },
                    { icon: Mail, label: "Email", value: "info@godspurposewellness.com" },
                    { icon: MapPin, label: "Address", value: "123 Wellness Way\nHealing City, HC 12345" },
                    {
                      icon: Clock,
                      label: "Hours",
                      value: "Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM\nSunday: Closed",
                    },
                  ].map((contact, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <contact.icon className="h-5 w-5 text-emerald-400" />
                      </div>
                      <div>
                        <h3 className="font-light text-white mb-1">{contact.label}</h3>
                        <p className="text-gray-400 font-light whitespace-pre-line">{contact.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Card className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white font-light text-xl">Send Message</CardTitle>
                    <CardDescription className="text-gray-400 font-light">
                      We'd love to discuss how we can support your wellness journey.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-light text-gray-300 mb-2">
                          First Name
                        </label>
                        <Input
                          id="firstName"
                          placeholder="John"
                          className="bg-gray-900 border-gray-600 text-white placeholder-gray-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-light text-gray-300 mb-2">
                          Last Name
                        </label>
                        <Input
                          id="lastName"
                          placeholder="Doe"
                          className="bg-gray-900 border-gray-600 text-white placeholder-gray-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-light text-gray-300 mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        className="bg-gray-900 border-gray-600 text-white placeholder-gray-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-light text-gray-300 mb-2">
                        Phone
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(555) 123-4567"
                        className="bg-gray-900 border-gray-600 text-white placeholder-gray-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-light text-gray-300 mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your wellness goals..."
                        rows={4}
                        className="bg-gray-900 border-gray-600 text-white placeholder-gray-500"
                      />
                    </div>

                    <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white border-0 font-light">
                      Send Message
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                  <Heart className="h-4 w-4 text-white" />
                </div>
                <span className="text-xl font-light text-white">God's Purpose Wellness</span>
              </div>
              <p className="text-gray-400 font-light leading-relaxed">
                Empowering your journey to holistic health through faith, natural healing, and community support.
              </p>
            </div>

            {[
              {
                title: "Services",
                links: ["Nutritional Counseling", "Herbal Medicine", "Spiritual Wellness", "Detox Programs"],
              },
              {
                title: "Resources",
                links: ["Blog", "Wellness Tips", "Recipes", "Prayer Requests"],
              },
              {
                title: "Connect",
                links: ["Facebook", "Instagram", "YouTube", "Newsletter"],
              },
            ].map((section, index) => (
              <div key={index}>
                <h3 className="font-light text-white mb-6">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href="#"
                        className="text-gray-400 hover:text-emerald-400 transition-colors font-light text-sm"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400 font-light text-sm">
              &copy; {new Date().getFullYear()} God's Purpose Wellness. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
