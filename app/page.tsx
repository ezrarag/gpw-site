"use client"

import { Sun, PanelLeft, X, Play, Square } from "lucide-react"
import { useState, useEffect, useRef } from "react"

export default function HomePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("profile")
  const [hoveredService, setHoveredService] = useState<string | null>(null)
  const [openTabs, setOpenTabs] = useState<string[]>(["gpw-wellness.js"])
  const [activePage, setActivePage] = useState("gpw-wellness.js")
  const [scrollY, setScrollY] = useState(0)
  const [videoPlaying, setVideoPlaying] = useState(false)
  const [selectedService, setSelectedService] = useState<any>(null)
  const [cartItems, setCartItems] = useState<any[]>([])
  const [cartCount, setCartCount] = useState(0)
  const [showConsultationModal, setShowConsultationModal] = useState(false)
  const [consultationForm, setConsultationForm] = useState({
    time: '',
    day: '',
    phone: ''
  })
  const [blogPosts, setBlogPosts] = useState<any[]>([])
  const [loadingBlog, setLoadingBlog] = useState(false)
  const [checkoutOpen, setCheckoutOpen] = useState(false)
  const mainRef = useRef<HTMLDivElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  // Scroll animation effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Fetch blog posts on component mount
  useEffect(() => {
    fetchBlogPosts()
  }, [])

  const services = [
    {
      name: "Personal Training",
      description: "One-on-one or group fitness coaching.",
      slug: "personal-training",
      price: "$75/session"
    },
    {
      name: "Wellness Coaching",
      description: "Lifestyle, nutrition, and health guidance.",
      slug: "wellness-coaching",
      price: "$60/session"
    },
    {
      name: "Meal Prep & Delivery",
      description: "Healthy, ready-to-eat meals.",
      slug: "meal-prep",
      price: "$15/meal"
    },
    {
      name: "Merchandise",
      description: "Apparel, gear, and wellness products.",
      slug: "merchandise",
      price: "Various prices"
    },
    {
      name: "Community & Blog",
      description: "Tips, stories, and inspiration.",
      slug: "community-blog",
      price: "Free"
    }
  ]



  const openServiceTab = (serviceSlug: string) => {
    const service = services.find(s => s.slug === serviceSlug)
    if (service) {
      setSelectedService(service)
      setActiveTab("service-details")
      setSidebarOpen(true)
    }
  }

  const closeTab = (tabName: string) => {
    if (openTabs.length > 1) {
      const newTabs = openTabs.filter(tab => tab !== tabName)
      setOpenTabs(newTabs)
      if (activePage === tabName) {
        setActivePage(newTabs[newTabs.length - 1])
      }
    }
  }

  const addToCart = (service: any) => {
    setCartItems([...cartItems, service])
    setCartCount(cartCount + 1)
    setSelectedService(service)
    setActiveTab("cart")
    setSidebarOpen(true)
  }

  const removeFromCart = (index: number) => {
    const newCartItems = cartItems.filter((_, i) => i !== index)
    setCartItems(newCartItems)
    setCartCount(cartCount - 1)
  }

  const initiateFaceTimeCall = () => {
    window.open('facetime://4049739860', '_blank')
  }

  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    // For now, we'll just close the modal and show a success message
    console.log('Consultation requested:', consultationForm)
    setShowConsultationModal(false)
    setConsultationForm({ time: '', day: '', phone: '' })
    // In production, you would send an SMS notification to 404-973-9860
    alert('Consultation request submitted! We will contact you soon.')
  }

  const openCheckout = () => {
    if (!openTabs.includes("checkout")) {
      setOpenTabs([...openTabs, "checkout"])
    }
    setActivePage("checkout")
    setCheckoutOpen(true)
    setSidebarOpen(false)
  }

  const fetchBlogPosts = async () => {
    setLoadingBlog(true)
    try {
      // TODO: Replace with actual Supabase query
      // const { data, error } = await supabase
      //   .from('blog_posts')
      //   .select('*')
      //   .order('created_at', { ascending: false })
      //   .limit(10)
      
      // For now, using mock data
      const mockData = [
        {
          id: 1,
          title: "5 Essential Exercises for Beginners",
          content: "Starting your fitness journey can be overwhelming...",
          slug: "5-essential-exercises-beginners",
          type: "article",
          created_at: "2024-01-15"
        },
        {
          id: 2,
          title: "Nutrition Basics: What to Eat Before and After Workouts",
          content: "Proper nutrition is key to maximizing your workout results...",
          slug: "nutrition-basics-workout",
          type: "article",
          created_at: "2024-01-10"
        }
      ]
      setBlogPosts(mockData)
    } catch (error) {
      console.error('Error fetching blog posts:', error)
    } finally {
      setLoadingBlog(false)
    }
  }

  // Continuous scrolling line numbers component
  const ContinuousLineNumbers = ({ startLine, count, scrollOffset = 0 }: { startLine: number, count: number, scrollOffset?: number }) => {
    const continuousOffset = scrollOffset * 0.5 // Faster, more noticeable movement
    return (
      <div className="text-xs text-gray-400 mr-6 select-none">
        {Array.from({ length: count }, (_, i) => (
          <div 
            key={i + startLine} 
            className="h-6 leading-6 transition-all duration-200 ease-out"
            style={{
              transform: `translateY(${continuousOffset}px)`,
              opacity: Math.max(0.2, 1 - (Math.abs(continuousOffset) * 0.002))
            }}
          >
            {i + startLine}
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800 font-mono scroll-smooth">
      {/* Video Overlay */}
      {videoPlaying && (
        <div className="fixed inset-0 z-30 bg-black bg-opacity-30">
          <div className="absolute inset-0 flex items-center justify-center">
            <iframe
              src="https://www.youtube.com/embed/q3C_nN-jS1Y?autoplay=1&mute=1&loop=1&playlist=q3C_nN-jS1Y&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
              className="w-full h-full"
              title="Background Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
            <button
              onClick={() => setVideoPlaying(false)}
              className="absolute top-4 right-4 p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-all"
            >
              <X className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
      )}

      {/* Header */}
      <div className={`transition-all duration-500 ease-in-out ${sidebarOpen ? 'ml-80 md:ml-96' : 'ml-0'}`}>
        <header className={`sticky top-0 border-b border-gray-200 h-12 flex items-center justify-between px-4 z-50 relative transition-all duration-500 ease-in-out ${
          videoPlaying ? 'bg-white/20 backdrop-blur-sm border-gray-200/20' : 'bg-white'
        }`}>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className={`p-2 rounded transition-all duration-200 relative md:hidden ${
                sidebarOpen ? 'bg-gray-200 text-gray-700' : 'hover:bg-gray-100'
              }`}
              title="Toggle Mobile Menu"
            >
              <PanelLeft className="h-4 w-4" />
              {cartCount > 0 && (
                <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  {cartCount}
                </div>
              )}
            </button>
            
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className={`p-2 rounded transition-all duration-200 relative hidden md:block ${
                sidebarOpen ? 'bg-gray-200 text-gray-700' : 'hover:bg-gray-100'
              }`}
              title="Toggle Sidebar"
            >
              <PanelLeft className="h-4 w-4" />
              {cartCount > 0 && (
                <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  {cartCount}
                </div>
              )}
            </button>
            
            {/* Tab Bar */}
            <div className="flex items-center space-x-1">
              {openTabs.map((tab) => (
                <div key={tab} className="flex items-center space-x-2">
                  <button
                    onClick={() => setActivePage(tab)}
                    className={`text-sm px-3 py-1 rounded flex items-center space-x-2 ${
                      activePage === tab 
                        ? "text-gray-800 bg-gray-100" 
                        : "text-gray-500 hover:text-gray-600"
                    }`}
                  >
                    <span>{tab}</span>
                    {tab !== "gpw-wellness.js" && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          closeTab(tab)
                        }}
                        className="hover:bg-gray-100 rounded p-0.5"
                      >
                        <X className="h-3 w-3 text-gray-400" />
                      </button>
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <button 
              onClick={() => {
                console.log('Video button clicked, current state:', videoPlaying)
                setVideoPlaying(!videoPlaying)
              }}
              className="p-2 hover:bg-gray-100 rounded-full transition-all duration-200 hover:scale-110 group"
              title={videoPlaying ? "Stop Video" : "Play Video"}
            >
              {videoPlaying ? (
                <Square className="h-4 w-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
              ) : (
                <Play className="h-4 w-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
              )}
            </button>
            <button className="p-1 hover:bg-gray-100 rounded">
              <Sun className="h-4 w-4 text-gray-400" />
            </button>
          </div>
        </header>
      </div>

      {/* Sidebar */}
      <div className={`fixed left-0 top-12 h-[calc(100vh-3rem)] w-80 md:w-96 border-r border-gray-200 transform transition-transform duration-500 ease-in-out z-40 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } ${
        videoPlaying ? 'bg-white/20 backdrop-blur-sm border-gray-200/20' : 'bg-white'
      }`}>
        
        {/* Mobile Overlay */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
        <div className={`p-4 ${videoPlaying ? 'bg-white/40 backdrop-blur-sm rounded-lg' : ''}`}>
          <div className="flex items-center justify-between mb-4">
            <h2 className={`text-lg font-semibold ${videoPlaying ? 'text-gray-800' : 'text-gray-800'}`}>Sidebar</h2>
            <button
              onClick={() => setSidebarOpen(false)}
              className="p-1 hover:bg-gray-100 rounded"
            >
              <X className="h-4 w-4 text-gray-400" />
            </button>
          </div>
          
          {/* Tab Navigation */}
          <div className="flex space-x-2 mb-4">
            <button
              onClick={() => setActiveTab("profile")}
              className={`px-3 py-2 rounded text-sm ${
                activeTab === "profile" 
                  ? "bg-gray-200 text-gray-800" 
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Profile
            </button>
            <button
              onClick={() => setActiveTab("contact")}
              className={`px-3 py-2 rounded text-sm ${
                activeTab === "contact" 
                  ? "bg-gray-200 text-gray-800" 
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Contact
            </button>
            <button
              onClick={() => setActiveTab("cart")}
              className={`px-3 py-2 rounded text-sm ${
                activeTab === "cart" 
                  ? "bg-gray-200 text-gray-800" 
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Cart
            </button>
          </div>
          
          {/* Dynamic Content */}
          <div className="space-y-4">
            {activeTab === "profile" && (
              <div>
                {/* Speak with Us */}
                <div className="group relative mb-6">
                  <div 
                    className="text-2xl font-light text-gray-800 hover:text-gray-900 transition-colors cursor-pointer flex items-center space-x-2"
                    onClick={initiateFaceTimeCall}
                  >
                    <span>→ Speak with Us</span>
                    <span className="text-xl group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </div>
                  <div className="overflow-hidden max-h-0 transition-all duration-500 ease-out group-hover:max-h-20">
                    <div className="text-lg text-gray-600 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                      — Call (404) 973-9860 • Click to initiate FaceTime
                    </div>
                  </div>
                </div>
                
                {/* Menu */}
                <div className="group relative mb-6">
                  <div className="text-2xl font-light text-gray-800 hover:text-gray-900 transition-colors cursor-pointer flex items-center space-x-2">
                    <span>→ Menu</span>
                    <span className="text-xl group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </div>
                  <div className="overflow-hidden max-h-0 transition-all duration-500 ease-out group-hover:max-h-20">
                    <div className="text-lg text-gray-600 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                      — Browse our menu and cooking-related content for meal delivery
                    </div>
                  </div>
                </div>
                
                {/* Platinum Plan */}
                <div className="group relative mb-6">
                  <div className="text-2xl font-light text-gray-800 hover:text-gray-900 transition-colors cursor-pointer flex items-center space-x-2">
                    <span>→ Platinum Plan</span>
                    <span className="text-xl group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </div>
                  <div className="overflow-hidden max-h-0 transition-all duration-500 ease-out group-hover:max-h-20">
                    <div className="text-lg text-gray-600 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                      — Premium meal prep and mobile delivery service
                    </div>
                  </div>
                </div>
                
                {/* Service Plans */}
                <div className="group relative mb-6">
                  <div className="text-2xl font-light text-gray-800 hover:text-gray-900 transition-colors cursor-pointer flex items-center space-x-2">
                    <span>→ Service Plans</span>
                    <span className="text-xl group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </div>
                  <div className="overflow-hidden max-h-0 transition-all duration-500 ease-out group-hover:max-h-20">
                    <div className="text-lg text-gray-600 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                      — Get a custom quote for your wellness needs
                    </div>
                  </div>
                </div>
                
                {/* Complimentary Consultation */}
                <div className="group relative mb-6">
                  <div 
                    className="text-2xl font-light text-gray-800 hover:text-gray-900 transition-colors cursor-pointer flex items-center space-x-2"
                    onClick={() => setShowConsultationModal(true)}
                  >
                    <span>→ Complimentary Consultation</span>
                    <span className="text-xl group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </div>
                  <div className="overflow-hidden max-h-0 transition-all duration-500 ease-out group-hover:max-h-20">
                    <div className="text-lg text-gray-600 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                      — Schedule a free consultation to discuss your goals
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === "contact" && (
              <div>
                <div className="space-y-2 text-sm">
                  <div className="text-gray-800">Email: info@godspurposewellness.com</div>
                  <div className="text-gray-800">Address: 123 Fitness St, Chattanooga, TN</div>
                </div>
              </div>
            )}
            
            {activeTab === "cart" && (
              <div>
                <h3 className="text-lg font-semibold mb-2">Cart ({cartCount} items)</h3>
                {cartItems.length > 0 ? (
                  <div className="space-y-2">
                    {cartItems.map((item, index) => (
                      <div key={index} className="p-3 bg-gray-50 rounded relative">
                        <button
                          onClick={() => removeFromCart(index)}
                          className="absolute top-2 right-2 p-1 hover:bg-gray-200 rounded-full transition-colors"
                          title="Remove item"
                        >
                          <X className="h-3 w-3 text-gray-500" />
                        </button>
                        <div className="font-medium pr-8">{item.name}</div>
                        <div className="text-sm text-gray-600">{item.description}</div>
                        <div className="text-sm font-medium text-gray-800">{item.price}</div>
                      </div>
                    ))}
                    
                    {/* Cart Summary - Fixed position within sidebar */}
                    <div className="mt-4 p-4 bg-gray-50 rounded border">
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-medium">Total: ${cartItems.reduce((sum, item) => {
                          const price = parseInt(item.price.replace(/\D/g, ''))
                          return sum + price
                        }, 0)}</span>
                        <button 
                          onClick={openCheckout}
                          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                        >
                          Checkout
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <p className="text-gray-600">No items in cart</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={`flex-1 transition-all duration-500 ease-in-out ${sidebarOpen ? 'ml-80 md:ml-96' : 'ml-0'}`}>
        <main ref={mainRef} className="min-h-screen">
          {activePage === "checkout" ? (
            /* Checkout Page */
            <div className="flex w-full h-screen">
              {/* Line Numbers */}
              <ContinuousLineNumbers startLine={1} count={40} scrollOffset={scrollY} />
              
              {/* Checkout Content */}
              <div className="flex-1 p-6">
                <div className="space-y-1">
                  <div className="h-6"></div>
                  <div className="h-6"></div>
                  <div className="h-6"></div>
                  <div className="text-8xl font-light text-gray-800 leading-none">
                    Checkout
                  </div>
                  <div className="h-6"></div>
                  <div className="h-6"></div>
                  <div className="h-6"></div>
                  <div className="h-6"></div>
                  <div className="h-6"></div>
                  <div className="h-6"></div>
                  <div className="h-6"></div>
                  <div className="h-6"></div>
                  <div className="h-6"></div>
                  <div className="h-6"></div>
                  <div className="text-xl font-light text-gray-800">PAYMENT</div>
                  <div className="text-gray-400">========</div>
                  <div className="h-6"></div>
                  <div className="text-gray-400">/ ITEM / PRICE / TOTAL /</div>
                  <div className="h-6"></div>
                  
                  {/* Cart Items Display */}
                  <div className="space-y-4">
                    {cartItems.map((item, index) => (
                      <div key={index} className="text-gray-800">
                        → {item.name} • {item.price}
                      </div>
                    ))}
                    <div className="h-6"></div>
                    <div className="text-gray-400">+++</div>
                    <div className="text-gray-400">+++</div>
                    <div className="text-gray-400">+++</div>
                    <div className="h-6"></div>
                    <div className="text-gray-400">===</div>
                    <div className="h-6"></div>
                    <div className="text-gray-400">/</div>
                    <div className="text-gray-400">/</div>
                    <div className="h-6"></div>
                    <div className="text-2xl font-light text-gray-800">
                      Total: ${cartItems.reduce((sum, item) => {
                        const price = parseInt(item.price.replace(/\D/g, ''))
                        return sum + price
                      }, 0)}
                    </div>
                    <div className="h-6"></div>
                    <div className="h-6"></div>
                    
                    {/* Stripe Checkout Button */}
                    <button 
                      onClick={async () => {
                        try {
                          // TODO: Import and use createCheckoutSession from lib/stripe
                          // const sessionId = await createCheckoutSession(cartItems)
                          // await redirectToCheckout(sessionId)
                          alert('Stripe integration coming soon! Check lib/stripe.ts for setup instructions.')
                        } catch (error) {
                          console.error('Checkout error:', error)
                          alert('Checkout failed. Please try again.')
                        }
                      }}
                      className="px-8 py-4 bg-blue-600 text-white text-xl rounded hover:bg-blue-700 transition-colors"
                    >
                      Proceed to Payment
                    </button>
                    
                    <div className="h-6"></div>
                    <div className="text-gray-400">***</div>
                    <div className="text-gray-400">***</div>
                    <div className="text-gray-400">***</div>
                    <div className="h-6"></div>
                    <div className="text-gray-400">===</div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Main Content - Original Sections */
            <div 
              ref={scrollContainerRef}
              className="min-h-screen overflow-y-auto"
            >
              {/* Mobile-Responsive Combined Layout */}
              <div className={`p-6 ${videoPlaying ? 'bg-white/80 backdrop-blur-sm rounded-lg' : ''}`}>
                {/* Line Numbers - Hidden on mobile */}
                <div className="hidden md:block">
                  <ContinuousLineNumbers startLine={1} count={200} scrollOffset={scrollY} />
                </div>
                
                {/* Combined Content */}
                <div className="space-y-16 md:space-y-24">
                  
                  {/* Hero Section */}
                  <div className="space-y-8">
                    <h1 className="text-4xl md:text-6xl font-light text-gray-800 leading-tight">
                      God's Purpose Wellness
                    </h1>
                    <div className="space-y-6">
                      <div className="group relative">
                        <div className="text-2xl md:text-4xl font-light text-gray-800 hover:text-gray-900 transition-colors cursor-pointer">
                          1. Personal Training
                        </div>
                        <div className="overflow-hidden max-h-0 transition-all duration-500 ease-out group-hover:max-h-20">
                          <div className="text-lg text-gray-600 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                            — One-on-one or group fitness coaching.
                          </div>
                        </div>
                      </div>
                      
                      <div className="group relative">
                        <div className="text-2xl md:text-4xl font-light text-gray-800 hover:text-gray-900 transition-colors cursor-pointer">
                          2. Wellness Coaching
                        </div>
                        <div className="overflow-hidden max-h-0 transition-all duration-500 ease-out group-hover:max-h-20">
                          <div className="text-lg text-gray-600 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                            — Lifestyle, nutrition, and health guidance.
                          </div>
                        </div>
                      </div>
                      
                      <div className="group relative">
                        <div className="text-2xl md:text-4xl font-light text-gray-800 hover:text-gray-900 transition-colors cursor-pointer">
                          3. Meal Prep & Delivery
                        </div>
                        <div className="overflow-hidden max-h-0 transition-all duration-500 ease-out group-hover:max-h-20">
                          <div className="text-lg text-gray-600 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                            — Healthy, ready-to-eat meals.
                          </div>
                        </div>
                      </div>
                      
                      <div className="group relative">
                        <div className="text-2xl md:text-4xl font-light text-gray-800 hover:text-gray-900 transition-colors cursor-pointer">
                          4. Merchandise
                        </div>
                        <div className="overflow-hidden max-h-0 transition-all duration-500 ease-out group-hover:max-h-20">
                          <div className="text-lg text-gray-600 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                            — Apparel, gear, and wellness products.
                          </div>
                        </div>
                      </div>
                      
                      <div className="group relative">
                        <div 
                          className="text-2xl md:text-4xl font-light text-gray-800 hover:text-gray-900 transition-colors cursor-pointer flex items-center space-x-2"
                          onClick={() => {
                            setSelectedService({ name: "Personal Training", price: "$75/session", description: "One-on-one or group fitness coaching" })
                            setActiveTab("cart")
                            setSidebarOpen(true)
                          }}
                        >
                          <span>5. Community & Blog</span>
                          <span className="text-2xl group-hover:translate-x-1 transition-transform duration-200">→</span>
                        </div>
                        <div className="overflow-hidden max-h-0 transition-all duration-500 ease-out group-hover:max-h-20">
                          <div className="text-lg text-gray-600 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                            — Tips, stories, and inspiration.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* About Section */}
                  <div className="space-y-6">
                    <h2 className="text-3xl md:text-6xl font-light text-gray-800 leading-tight">
                      Transform your life
                    </h2>
                    <div className="space-y-4">
                      <div className="text-xl font-light text-gray-800">ABOUT US</div>
                      <div className="text-gray-400">========</div>
                      <div className="text-gray-400">/ MISSION / VISION / VALUES /</div>
                      <div className="text-gray-800">→ We believe in empowering individuals</div>
                      <div className="text-gray-800">to achieve their health and wellness goals</div>
                      <div className="text-gray-800">through personalized guidance and support.</div>
                      <div className="text-gray-400">+++</div>
                      <div className="text-gray-400">+++</div>
                      <div className="text-gray-400">+++</div>
                      <div className="text-gray-400">===</div>
                      <div className="text-gray-400">/</div>
                      <div className="text-gray-400">/</div>
                      <div className="text-gray-400">/</div>
                      <div className="text-gray-400">***</div>
                      <div className="text-gray-400">***</div>
                      <div className="text-gray-400">***</div>
                      <div className="text-gray-400">===</div>
                    </div>
                    <button 
                      onClick={() => {
                        setSidebarOpen(true)
                        setActiveTab("profile")
                      }}
                      className="text-xl font-light text-gray-800 hover:text-gray-600 transition-colors flex items-center space-x-2 group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                      <span>Learn more</span>
                      <span className="text-sm text-gray-400 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">(opens sidebar)</span>
                    </button>
                  </div>

                  {/* Services Section */}
                  <div className="space-y-6">
                    <h2 className="text-3xl md:text-6xl font-light text-gray-800 leading-tight">
                      Our Services
                    </h2>
                    <div className="space-y-4">
                      <div className="text-xl font-light text-gray-800">SERVICES</div>
                      <div className="text-gray-400">========</div>
                      <div className="text-gray-400">/ SERVICE / DESCRIPTION / PRICE /</div>
                      <div className="group relative">
                        <div 
                          className="text-2xl md:text-4xl font-light text-gray-800 hover:text-gray-900 transition-colors cursor-pointer flex items-center space-x-2"
                          onClick={() => addToCart({ name: "Personal Training", price: "$75/session", description: "One-on-one or group fitness coaching" })}
                        >
                          <span>→ Personal Training</span>
                          <span className="text-2xl group-hover:translate-x-1 transition-transform duration-200">→</span>
                        </div>
                        <div className="overflow-hidden max-h-0 transition-all duration-500 ease-out group-hover:max-h-20">
                          <div className="text-lg text-gray-600 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                            — One-on-one or group fitness coaching • $75/session
                          </div>
                        </div>
                      </div>
                      
                      <div className="group relative">
                        <div 
                          className="text-2xl md:text-4xl font-light text-gray-800 hover:text-gray-900 transition-colors cursor-pointer flex items-center space-x-2"
                          onClick={() => addToCart({ name: "Wellness Coaching", price: "$60/session", description: "Lifestyle, nutrition, and health guidance" })}
                        >
                          <span>→ Wellness Coaching</span>
                          <span className="text-2xl group-hover:translate-x-1 transition-transform duration-200">→</span>
                        </div>
                        <div className="overflow-hidden max-h-0 transition-all duration-500 ease-out group-hover:max-h-20">
                          <div className="text-lg text-gray-600 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                            — Lifestyle, nutrition, and health guidance • $60/session
                          </div>
                        </div>
                      </div>
                      
                      <div className="group relative">
                        <div className="text-2xl md:text-4xl font-light text-gray-800 hover:text-gray-900 transition-colors cursor-pointer flex items-center space-x-2">
                          <span>→ Meal Prep & Delivery</span>
                          <span className="text-2xl group-hover:translate-x-1 transition-transform duration-200">→</span>
                        </div>
                        <div className="overflow-hidden max-h-0 transition-all duration-500 ease-out group-hover:max-h-20">
                          <div className="text-lg text-gray-600 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                            — Healthy, ready-to-eat meals • $15/meal
                          </div>
                        </div>
                      </div>
                      
                      <div className="group relative">
                        <div className="text-2xl md:text-4xl font-light text-gray-800 hover:text-gray-900 transition-colors cursor-pointer flex items-center space-x-2">
                          <span>→ Merchandise</span>
                          <span className="text-2xl group-hover:translate-x-1 transition-transform duration-200">→</span>
                        </div>
                        <div className="overflow-hidden max-h-0 transition-all duration-500 ease-out group-hover:max-h-20">
                          <div className="text-lg text-gray-600 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                            — Apparel, gear, and wellness products • Various prices
                          </div>
                        </div>
                      </div>
                      
                      <div className="group relative">
                        <div className="text-2xl md:text-4xl font-light text-gray-800 hover:text-gray-900 transition-colors cursor-pointer flex items-center space-x-2">
                          <span>→ Community & Blog</span>
                          <span className="text-2xl group-hover:translate-x-1 transition-transform duration-200">→</span>
                        </div>
                        <div className="overflow-hidden max-h-0 transition-all duration-500 ease-out group-hover:max-h-20">
                          <div className="text-lg text-gray-600 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                            — Tips, stories, and inspiration • Free
                          </div>
                        </div>
                      </div>
                      <div className="text-gray-400">+++</div>
                      <div className="text-gray-400">+++</div>
                      <div className="text-gray-400">+++</div>
                      <div className="text-gray-400">===</div>
                      <div className="text-gray-400">/</div>
                      <div className="text-gray-400">/</div>
                      <div className="text-gray-400">***</div>
                      <div className="text-gray-400">***</div>
                      <div className="text-gray-400">***</div>
                      <div className="text-gray-400">===</div>
                    </div>
                  </div>

                  {/* Blog Section */}
                  <div className="space-y-6">
                    <h2 className="text-3xl md:text-6xl font-light text-gray-800 leading-tight">
                      Latest Insights
                    </h2>
                    <div className="space-y-4">
                      <div className="text-xl font-light text-gray-800">BLOG</div>
                      <div className="text-gray-400">========</div>
                      <div className="text-gray-400">/ TITLE / TYPE / DATE /</div>
                      {loadingBlog ? (
                        <div className="text-gray-600">Loading blog posts...</div>
                      ) : blogPosts.length > 0 ? (
                        blogPosts.map((post) => (
                          <div key={post.id} className="group relative">
                            <div className="text-2xl md:text-4xl font-light text-gray-800 hover:text-gray-900 transition-colors cursor-pointer flex items-center space-x-2">
                              <span>→ {post.title}</span>
                              <span className="text-2xl group-hover:translate-x-1 transition-transform duration-200">→</span>
                            </div>
                            <div className="overflow-hidden max-h-0 transition-all duration-500 ease-out group-hover:max-h-20">
                              <div className="text-lg text-gray-600 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                                — {post.type} • {post.created_at} • {post.content.substring(0, 60)}...
                              </div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="text-gray-600">No blog posts available</div>
                      )}
                      <div className="text-gray-400">***</div>
                      <div className="text-gray-400">***</div>
                      <div className="text-gray-400">***</div>
                      <div className="text-gray-400">===</div>
                    </div>
                  </div>

                  {/* Contact Section */}
                  <div className="space-y-6">
                    <h2 className="text-3xl md:text-6xl font-light text-gray-800 leading-tight">
                      Get Started
                    </h2>
                    <div className="space-y-4">
                      <div className="text-xl font-light text-gray-800">CONTACT</div>
                      <div className="text-gray-400">========</div>
                      <div className="text-gray-400">/ READY / TO / START /</div>
                      <div className="text-gray-800">→ Ready to start your fitness journey?</div>
                      <div className="text-gray-800">Book a session with one of our certified trainers</div>
                      <div className="text-gray-800">and take the first step towards your goals.</div>
                      <div className="text-gray-400">+++</div>
                      <div className="text-gray-400">+++</div>
                      <div className="text-gray-400">+++</div>
                      <div className="text-gray-400">===</div>
                      <div className="text-gray-400">/</div>
                      <div className="text-gray-400">/</div>
                      <div className="text-gray-400">/</div>
                      <div className="text-gray-800">→ Contact us today to schedule your</div>
                      <div className="text-gray-800">free consultation and assessment.</div>
                      <div className="text-gray-400">***</div>
                      <div className="text-gray-400">***</div>
                      <div className="text-gray-400">***</div>
                      <div className="text-gray-400">===</div>
                      <div className="text-gray-400">/</div>
                      <div className="text-gray-400">/</div>
                      <div className="text-gray-400">+++</div>
                      <div className="text-gray-400">+++</div>
                      <div className="text-gray-400">+++</div>
                      <div className="text-gray-400">/</div>
                      <div className="text-gray-400">/</div>
                      <div className="text-gray-400">/</div>
                      <div className="text-gray-400">===</div>
                    </div>
                    <button 
                      onClick={() => {
                        setSidebarOpen(true)
                        setActiveTab("contact")
                      }}
                      className="text-xl font-light text-gray-800 hover:text-gray-600 transition-colors flex items-center space-x-2 group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                      <span>Contact us</span>
                      <span className="text-sm text-gray-400 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">(opens sidebar)</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            )}
        </main>
      </div>
      
      {/* Consultation Modal */}
      {showConsultationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg max-w-md w-full mx-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Schedule Consultation</h3>
              <button
                onClick={() => setShowConsultationModal(false)}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <X className="h-4 w-4 text-gray-400" />
              </button>
            </div>
            
            <form onSubmit={handleConsultationSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Preferred Time
                </label>
                <select
                  value={consultationForm.time}
                  onChange={(e) => setConsultationForm({...consultationForm, time: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select a time</option>
                  <option value="9:00 AM">9:00 AM</option>
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="11:00 AM">11:00 AM</option>
                  <option value="2:00 PM">2:00 PM</option>
                  <option value="3:00 PM">3:00 PM</option>
                  <option value="4:00 PM">4:00 PM</option>
                  <option value="5:00 PM">5:00 PM</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Preferred Day
                </label>
                <select
                  value={consultationForm.day}
                  onChange={(e) => setConsultationForm({...consultationForm, day: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select a day</option>
                  <option value="Monday">Monday</option>
                  <option value="Tuesday">Tuesday</option>
                  <option value="Wednesday">Wednesday</option>
                  <option value="Thursday">Thursday</option>
                  <option value="Friday">Friday</option>
                  <option value="Saturday">Saturday</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={consultationForm.phone}
                  onChange={(e) => setConsultationForm({...consultationForm, phone: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="(555) 123-4567"
                  required
                />
              </div>
              
              <div className="flex space-x-3 pt-2">
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
                >
                  Schedule Consultation
                </button>
                <button
                  type="button"
                  onClick={() => setShowConsultationModal(false)}
                  className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
