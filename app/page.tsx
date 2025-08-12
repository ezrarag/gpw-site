"use client"

import { Sun, PanelLeft, X, Play, Pause } from "lucide-react"
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
  const [showCart, setShowCart] = useState(false)
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

  const services = [
    {
      name: "Personal Training",
      description: "One-on-one training sessions with certified trainers",
      slug: "personal-training",
      price: "$75/session"
    },
    {
      name: "Premade Meals",
      description: "Healthy, pre-cooked meals delivered to your door",
      slug: "premade-meals",
      price: "$15/meal"
    },
    {
      name: "Merchandise Shop",
      description: "Premium fitness apparel and accessories",
      slug: "merchandise",
      price: "Various prices"
    }
  ]

  const blogPosts = [
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
    },
    {
      id: 3,
      title: "Full Body HIIT Workout",
      content: "High-intensity interval training for maximum calorie burn...",
      slug: "full-body-hiit-workout",
      type: "video",
      created_at: "2024-01-08"
    },
    {
      id: 4,
      title: "How to Stay Motivated on Your Fitness Journey",
      content: "Motivation is the key to long-term success in fitness...",
      slug: "stay-motivated-fitness-journey",
      type: "article",
      created_at: "2024-01-05"
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

  const renderServicePage = (serviceSlug: string) => {
    const service = services.find(s => s.slug === serviceSlug)
    if (!service) return null

    return (
      <div className="flex-1 p-6">
        <div className="flex">
          {/* Line Numbers */}
          <div className="text-xs text-gray-400 mr-6 select-none">
            {Array.from({ length: 58 }, (_, i) => (
              <div key={i + 1} className="h-6 leading-6">
                {i + 1}
              </div>
            ))}
          </div>
          
          {/* Service Content */}
          <div className="flex-1">
            <div className="space-y-1">
              <div className="h-6"></div>
              <div className="h-6"></div>
              <div className="h-6"></div>
              <div className="text-8xl font-light text-gray-200 leading-none" style={{ fontFamily: 'neue-haas-grotesk-display, sans-serif' }}>
                {service.name}
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
              <div className="text-xl font-light text-gray-200">SERVICE DETAILS</div>
              <div className="text-gray-400">========</div>
              <div className="h-6"></div>
              <div className="text-gray-400">/ SERVICE / DESCRIPTION / PRICE /</div>
              <div className="h-6"></div>
              <div className="text-gray-200">→ {service.name}</div>
              <div className="text-gray-200">{service.description}</div>
              <div className="text-gray-200">{service.price}</div>
              <div className="h-6"></div>
              <div className="text-gray-400">=================================================================================================</div>
              <div className="h-6"></div>
              <div className="text-gray-400">/</div>
              <div className="text-gray-400">/</div>
              <div className="text-gray-400">/</div>
              <div className="text-gray-400">***</div>
              <div className="text-gray-400">***</div>
              <div className="text-gray-400">***</div>
              <div className="text-gray-400">/</div>
              <div className="text-gray-400">/</div>
              <div className="text-gray-400">/</div>
              <div className="h-6"></div>
              <div className="text-gray-400">+++</div>
              <div className="text-gray-400">+++</div>
              <div className="text-gray-400">+++</div>
              <div className="h-6"></div>
              <div className="text-gray-400">===</div>
            </div>
          </div>
        </div>
      </div>
    )
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
      {/* Header */}
      <header className="sticky top-0 border-b border-gray-200 bg-white h-12 flex items-center justify-between px-4 z-50 relative">
        <div className="flex items-center space-x-4">
          {sidebarOpen && (
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => setActiveTab("profile")}
                className={`text-sm px-2 py-1 rounded flex items-center space-x-2 ${
                  activeTab === "profile" 
                    ? "text-gray-800 bg-gray-100" 
                    : "text-gray-500 hover:text-gray-600"
                }`}
              >
                <span>Profile</span>
              </button>
              <button 
                onClick={() => setActiveTab("contact")}
                className={`text-sm px-2 py-1 rounded flex items-center space-x-2 ${
                  activeTab === "contact" 
                    ? "text-gray-800 bg-gray-100" 
                    : "text-gray-500 hover:text-gray-600"
                }`}
              >
                <span>Contact</span>
              </button>
              <button 
                onClick={() => setActiveTab("cart")}
                className={`text-sm px-2 py-1 rounded flex items-center space-x-2 ${
                  activeTab === "cart" 
                    ? "text-gray-800 bg-gray-100" 
                    : "text-gray-500 hover:text-gray-600"
                }`}
              >
                <span>Cart</span>
              </button>
              <button 
                onClick={() => setSidebarOpen(false)}
                className="hover:bg-gray-100 rounded p-0.5"
              >
                <X className="h-3 w-3 text-gray-400" />
              </button>
            </div>
          )}
          
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
            title={videoPlaying ? "Pause Video" : "Play Video"}
          >
            {videoPlaying ? (
              <Pause className="h-4 w-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
            ) : (
              <Play className="h-4 w-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
            )}
          </button>
          <button className="p-1 hover:bg-gray-100 rounded">
            <Sun className="h-4 w-4 text-gray-400" />
          </button>
          <button 
            onClick={() => {
              console.log('Sidebar button clicked, current state:', sidebarOpen)
              const newState = !sidebarOpen
              console.log('Setting sidebar to:', newState)
              setSidebarOpen(newState)
              // Force a re-render check
              setTimeout(() => {
                console.log('Sidebar state after update:', sidebarOpen)
              }, 100)
            }}
            className={`p-1 rounded transition-all duration-200 ${
              sidebarOpen 
                ? 'bg-gray-200 text-gray-700' 
                : 'hover:bg-gray-100 text-gray-400 hover:text-gray-600'
            }`}
            title={sidebarOpen ? "Close sidebar" : "Open sidebar"}
          >
            <PanelLeft className="h-4 w-4" />
            {/* Debug indicator */}
            <span className="relative -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs text-white flex items-center justify-center pointer-events-none">
              {sidebarOpen ? 'O' : 'C'}
            </span>
          </button>
        </div>
      </header>

      {/* Background Video - Plays behind the hero section */}
      {videoPlaying && (
        <div className="fixed inset-0 z-30">
          {/* Video Background */}
          <iframe
            src="https://www.youtube.com/embed/q3C_nN-jS1Y?autoplay=1&mute=1&loop=1&playlist=q3C_nN-jS1Y&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Background Video"
          />
          
          {/* Close Button */}
          <button
            onClick={() => setVideoPlaying(false)}
            className="absolute top-4 right-4 z-50 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-3 transition-all duration-200 hover:scale-100"
          >
            <X className="h-6 w-6 text-white" />
          </button>
          
          {/* Dark Overlay for Better Text Readability */}
          <div className="absolute inset-0 bg-black bg-opacity-30" />
        </div>
      )}

      {/* Sidebar - Fixed position, doesn't move with content */}
      {sidebarOpen && (
        <div className="fixed left-0 top-12 w-96 h-[calc(100vh-48px)] bg-gray-50 border-r border-gray-200 z-40 shadow-2xl">
                <div className="h-full flex flex-col">
                  {/* Header with close button */}
                  <div className="p-4 border-b border-gray-200 bg-gray-100">
                    <div className="flex items-center justify-between">
                      <h2 className="text-lg font-semibold text-gray-800">GPW Details</h2>
                      <button
                        onClick={() => setSidebarOpen(false)}
                        className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                      >
                        <X className="h-4 w-4 text-gray-600" />
                      </button>
                    </div>
                  </div>
                  
                  {/* Dynamic Content Area */}
                  <div className="flex-1 overflow-y-auto">
                    {activeTab === "profile" && (
                      <div className="p-6">
                        <div className="flex">
                          {/* Line Numbers */}
                          <div className="text-xs text-gray-400 mr-6 select-none">
                            {Array.from({ length: 58 }, (_, i) => (
                              <div key={i + 1} className="h-6 leading-6">
                                {i + 1}
                              </div>
                            ))}
                          </div>
                          
                          {/* Profile Content */}
                          <div className="flex-1">
                            <div className="space-y-1">
                              <div className="text-gray-400">{"<!-- start scope-profile -->"}</div>
                              <div className="h-6"></div>
                              <div className="text-gray-400">{"<section class=\"scope-profile\">"}</div>
                              <div className="h-6"></div>
                              <div className="text-gray-400">{"  <h3>ABOUT GPW</h3>"}</div>
                              <div className="h-6"></div>
                              <div className="text-gray-400">{"  <p>"}</div>
                              <div className="text-gray-800">God's Purpose Wellness is a premier fitness</div>
                              <div className="text-gray-800">and wellness company dedicated to helping</div>
                              <div className="text-gray-800">individuals achieve their health goals through</div>
                              <div className="text-gray-800">personalized training, nutrition, and lifestyle</div>
                              <div className="text-gray-800">coaching.</div>
                              <div className="h-6"></div>
                              <div className="text-gray-800">Our certified trainers work with clients of</div>
                              <div className="text-gray-800">all fitness levels to create sustainable,</div>
                              <div className="text-gray-800">effective workout programs that deliver</div>
                              <div className="text-gray-800">real results.</div>
                              <div className="h-6"></div>
                              <div className="text-gray-800">We believe in a holistic approach to fitness</div>
                              <div className="text-gray-800">that includes proper nutrition, mental health,</div>
                              <div className="text-gray-800">and community support.</div>
                              <div className="h-6"></div>
                              <div className="text-gray-400">{"  </p>"}</div>
                              <div className="text-gray-400">{"</section>"}</div>
                              <div className="h-6"></div>
                              <div className="text-gray-400">{"<!-- end scope-profile -->"}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {activeTab === "contact" && (
                      <div className="p-6">
                        <div className="flex">
                          {/* Line Numbers */}
                          <div className="text-xs text-gray-400 mr-6 select-none">
                            {Array.from({ length: 20 }, (_, i) => (
                              <div key={i + 59} className="h-6 leading-6">
                                {i + 59}
                              </div>
                            ))}
                          </div>
                          
                          {/* Contact Content */}
                          <div className="flex-1">
                            <div className="space-y-1">
                              <div className="text-gray-400">{"<!-- start scope-secondary -->"}</div>
                              <div className="h-6"></div>
                              <div className="text-gray-400">{"<section class=\"scope-secondary\">"}</div>
                              <div className="h-6"></div>
                              <div className="text-gray-400">{"  <h3>CONTACT INFO</h3>"}</div>
                              <div className="h-6"></div>
                              <div className="text-gray-400">{"  <p>"}</div>
                              <div className="text-gray-800">Email: info@godspurposewellness.com</div>
                              <div className="text-gray-800">Phone: (555) 123-4567</div>
                              <div className="text-gray-800">Address: 123 Fitness St, Chattanooga, TN</div>
                              <div className="h-6"></div>
                              <div className="text-gray-400">{"  </p>"}</div>
                              <div className="text-gray-400">{"</section>"}</div>
                              <div className="h-6"></div>
                              <div className="text-gray-400">{"<!-- end scope-secondary -->"}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {activeTab === "service-details" && selectedService && (
                      <div className="p-6">
                        <div className="flex">
                          {/* Line Numbers */}
                          <div className="text-xs text-gray-400 mr-6 select-none">
                            {Array.from({ length: 40 }, (_, i) => (
                              <div key={i + 1} className="h-6 leading-6">
                                {i + 1}
                              </div>
                            ))}
                          </div>
                          
                          {/* Service Details Content */}
                          <div className="flex-1">
                            <div className="space-y-1">
                              <div className="text-gray-400">{"<!-- start service-details -->"}</div>
                              <div className="h-6"></div>
                              <div className="text-gray-400">{"<section class=\"service-details\">"}</div>
                              <div className="h-6"></div>
                              <div className="text-gray-400">{"  <h3>"}{selectedService.name.toUpperCase()}{"</h3>"}</div>
                              <div className="h-6"></div>
                              <div className="text-gray-400">{"  <p>"}</div>
                              <div className="text-gray-800">{selectedService.description}</div>
                              <div className="h-6"></div>
                              <div className="text-gray-400">{"  </p>"}</div>
                              <div className="h-6"></div>
                              <div className="text-gray-400">{"  <div class=\"pricing\">"}</div>
                              <div className="text-gray-800">Price: {selectedService.price}</div>
                              <div className="text-gray-400">{"  </div>"}</div>
                              <div className="h-6"></div>
                              <div className="text-gray-400">{"</section>"}</div>
                              <div className="h-6"></div>
                              <div className="text-gray-400">{"<!-- end service-details -->"}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                                         {activeTab === "blog-details" && (
                       <div className="p-6">
                         <div className="flex">
                           {/* Line Numbers */}
                           <div className="text-xs text-gray-400 mr-6 select-none">
                             {Array.from({ length: 30 }, (_, i) => (
                               <div key={i + 1} className="h-6 leading-6">
                                 {i + 1}
                               </div>
                             ))}
                           </div>
                           
                           {/* Blog Details Content */}
                           <div className="flex-1">
                             <div className="space-y-1">
                               <div className="text-gray-400">{"<!-- start blog-details -->"}</div>
                               <div className="h-6"></div>
                               <div className="text-gray-400">{"<section class=\"blog-details\">"}</div>
                               <div className="h-6"></div>
                               <div className="text-gray-400">{"  <h3>BLOG CONTENT</h3>"}</div>
                               <div className="h-6"></div>
                               <div className="text-gray-400">{"  <p>"}</div>
                               <div className="text-gray-800">Explore our latest fitness insights,</div>
                               <div className="text-gray-800">workout tips, and wellness advice.</div>
                               <div className="h-6"></div>
                               <div className="text-gray-400">{"  </p>"}</div>
                               <div className="h-6"></div>
                               <div className="text-gray-400">{"  <div class=\"articles\">"}</div>
                               <div className="text-gray-800">New articles published weekly</div>
                               <div className="text-gray-800">Expert advice from certified trainers</div>
                               <div className="h-6"></div>
                               <div className="text-gray-400">{"  </div>"}</div>
                               <div className="h-6"></div>
                               <div className="text-gray-400">{"</section>"}</div>
                               <div className="h-6"></div>
                               <div className="text-gray-400">{"<!-- end blog-details -->"}</div>
                             </div>
                           </div>
                         </div>
                       </div>
                     )}
                     
                     {activeTab === "cart" && (
                       <div className="p-6">
                         <div className="flex">
                           {/* Line Numbers */}
                           <div className="text-xs text-gray-400 mr-6 select-none">
                             {Array.from({ length: 25 }, (_, i) => (
                               <div key={i + 1} className="h-6 leading-6">
                                 {i + 1}
                               </div>
                             ))}
                           </div>
                           
                           {/* Cart Content */}
                           <div className="flex-1">
                             <div className="space-y-1">
                               <div className="text-gray-400">{"<!-- start cart -->"}</div>
                               <div className="h-6"></div>
                               <div className="text-gray-400">{"<section class=\"cart\">"}</div>
                               <div className="h-6"></div>
                               <div className="text-gray-400">{"  <h3>SHOPPING CART</h3>"}</div>
                               <div className="h-6"></div>
                               <div className="text-gray-400">{"  <div class=\"cart-items\">"}</div>
                               {selectedService ? (
                                 <>
                                   <div className="text-gray-800">{selectedService.name}</div>
                                   <div className="text-gray-600">{selectedService.description}</div>
                                   <div className="text-gray-800 font-semibold">{selectedService.price}</div>
                                 </>
                               ) : (
                                 <div className="text-gray-600">No items in cart</div>
                               )}
                               <div className="text-gray-400">{"  </div>"}</div>
                               <div className="h-6"></div>
                               <div className="text-gray-400">{"</section>"}</div>
                               <div className="h-6"></div>
                               <div className="text-gray-400">{"<!-- end cart -->"}</div>
                             </div>
                           </div>
                         </div>
                         
                         {/* Animated Cart Window */}
                         {showCart && selectedService && (
                           <div className="fixed bottom-0 left-0 w-96 bg-white border-t border-gray-200 shadow-2xl transform translate-y-0 transition-transform duration-500 ease-out z-50">
                             <div className="p-4">
                               <div className="flex items-center justify-between mb-4">
                                 <h3 className="text-lg font-semibold text-gray-800">Cart</h3>
                                 <button
                                   onClick={() => setShowCart(false)}
                                   className="text-gray-400 hover:text-gray-600"
                                 >
                                   <X className="h-4 w-4" />
                                 </button>
                               </div>
                               
                               <div className="space-y-3 mb-4">
                                 <div className="flex justify-between items-center">
                                   <span className="text-gray-800">{selectedService.name}</span>
                                   <span className="text-gray-600">{selectedService.price}</span>
                                 </div>
                                 <div className="text-sm text-gray-600">{selectedService.description}</div>
                               </div>
                               
                               <div className="border-t border-gray-200 pt-4">
                                 <div className="flex justify-between items-center mb-4">
                                   <span className="text-lg font-semibold text-gray-800">Total:</span>
                                   <span className="text-lg font-semibold text-gray-800">{selectedService.price}</span>
                                 </div>
                                 <button className="w-full bg-gray-800 text-white py-3 px-4 rounded-lg hover:bg-gray-700 transition-colors duration-200">
                                   Checkout
                                 </button>
                               </div>
                             </div>
                           </div>
                         )}
                       </div>
                     )}
                  </div>
                </div>
              </div>
            )}
           </div>
         </div>
       </div>
     )}

     {/* Main Content */}
     <main className="flex-1" ref={mainRef}>
       {/* Main Content Area - Slides with sidebar */}
       <div className={`transition-all duration-500 ease-in-out ${sidebarOpen ? 'ml-96' : 'ml-0'}`}>
         
         {activePage === "gpw-wellness.js" ? (
            <>
              {/* Scroll Container with Snap */}
              <div 
                ref={scrollContainerRef}
                className="h-screen overflow-y-auto snap-y snap-mandatory"
                style={{ scrollSnapType: 'y mandatory' }}
              >
                {/* Section 1 - Hero Card */}
                <section className="h-screen flex p-6 pt-20 snap-start relative z-50">
                  {/* Left Section - Code Editor */}
                  <div className="flex-1">
                    <div className="flex">
                      {/* Line Numbers */}
                      <ContinuousLineNumbers startLine={1} count={58} scrollOffset={scrollY} />
                      
                      {/* Code Content */}
                      <div className="flex-1">
                        <div className="space-y-1">
                          <div className="h-6"></div>
                                                 <div className="h-6"></div>
                       <div className="h-6"></div>
                       <div className="space-y-2">
                         {/* Service Item 1 */}
                         <div className="group relative">
                           <div 
                             onClick={() => {
                               setSelectedService({ name: "Personal Training", price: "$75/session", description: "One-on-one or group fitness coaching" })
                               setActiveTab("cart")
                               setSidebarOpen(true)
                               setShowCart(true)
                             }}
                             className="text-lg font-light text-gray-800 hover:text-gray-900 cursor-pointer transition-all duration-300 flex items-center space-x-2" 
                             style={{ fontFamily: 'neue-haas-grotesk-display, sans-serif' }}
                           >
                             <span>1. Personal Training</span>
                             <span className="text-gray-400 group-hover:text-gray-600 transition-colors">→</span>
                           </div>
                           <div className="overflow-hidden transition-all duration-500 ease-out group-hover:max-h-20 max-h-0">
                             <div className="text-sm text-gray-600 ml-4 mt-1 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                               — One-on-one or group fitness coaching.
                             </div>
                           </div>
                         </div>

                         {/* Service Item 2 */}
                         <div className="group relative">
                           <div className="text-lg font-light text-gray-800 hover:text-gray-900 cursor-pointer transition-all duration-300 group-hover:text-gray-900" style={{ fontFamily: 'neue-haas-grotesk-display, sans-serif' }}>
                             2. Wellness Coaching
                           </div>
                           <div className="overflow-hidden transition-all duration-500 ease-out group-hover:max-h-20 max-h-0">
                             <div className="text-sm text-gray-600 ml-4 mt-1 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                               — Lifestyle, nutrition, and health guidance.
                             </div>
                           </div>
                         </div>

                         {/* Service Item 3 */}
                         <div className="group relative">
                           <div className="text-lg font-light text-gray-800 hover:text-gray-900 cursor-pointer transition-all duration-300 group-hover:text-gray-900" style={{ fontFamily: 'neue-haas-grotesk-display, sans-serif' }}>
                             3. Meal Prep & Delivery
                           </div>
                           <div className="overflow-hidden transition-all duration-500 ease-out group-hover:max-h-20 max-h-0">
                             <div className="text-sm text-gray-600 ml-4 mt-1 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                               — Healthy, ready-to-eat meals.
                             </div>
                           </div>
                         </div>

                         {/* Service Item 4 */}
                         <div className="group relative">
                           <div className="text-lg font-light text-gray-800 hover:text-gray-900 cursor-pointer transition-all duration-300 group-hover:text-gray-900" style={{ fontFamily: 'neue-haas-grotesk-display, sans-serif' }}>
                             4. Merchandise
                           </div>
                           <div className="overflow-hidden transition-all duration-500 ease-out group-hover:max-h-20 max-h-0">
                             <div className="text-sm text-gray-600 ml-4 mt-1 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                               — Apparel, gear, and wellness products.
                             </div>
                           </div>
                         </div>

                         {/* Service Item 5 */}
                         <div className="group relative">
                           <div className="text-lg font-light text-gray-800 hover:text-gray-900 cursor-pointer transition-all duration-300 group-hover:text-gray-900" style={{ fontFamily: 'neue-haas-grotesk-display, sans-serif' }}>
                             5. Community & Blog
                           </div>
                           <div className="overflow-hidden transition-all duration-500 ease-out group-hover:max-h-20 max-h-0">
                             <div className="text-sm text-gray-600 ml-4 mt-1 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                               — Tips, stories, and inspiration.
                             </div>
                           </div>
                         </div>
                       </div>
                          <div className="text-gray-400">===</div>
                          <div className="h-6"></div>
                          <div className="text-gray-400">/</div>
                          <div className="text-gray-400">/</div>
                          <div className="text-gray-400">/</div>
                          <div className="text-gray-400">***</div>
                          <div className="text-gray-400">***</div>
                          <div className="text-gray-400">***</div>
                          <div className="text-gray-400">/</div>
                          <div className="text-gray-400">/</div>
                          <div className="text-gray-400">/</div>
                          <div className="h-6"></div>
                          <div className="text-gray-400">+++</div>
                          <div className="text-gray-400">+++</div>
                          <div className="text-gray-400">+++</div>
                          <div className="h-6"></div>
                          <div className="text-gray-400">===</div>
                          <div className="h-6"></div>
                          <div className="text-gray-400">/</div>
                          <div className="text-gray-400">/</div>
                          <div className="text-gray-400">/</div>
                          <div className="text-gray-400">---</div>
                          <div className="text-gray-400">---</div>
                          <div className="text-gray-400">---</div>
                          <div className="text-gray-400">/</div>
                          <div className="text-gray-400">/</div>
                          <div className="text-gray-400">/</div>
                          <div className="h-6"></div>
                          <div className="text-gray-400">***</div>
                          <div className="text-gray-400">***</div>
                          <div className="text-gray-400">***</div>
                          <div className="h-6"></div>
                          <div className="text-gray-400">===</div>
                          <div className="h-6"></div>
                          <div className="text-gray-400">/</div>
                          <div className="text-gray-400">/</div>
                          <div className="text-gray-400">/</div>
                          <div className="text-gray-400">+++</div>
                          <div className="text-gray-400">+++</div>
                          <div className="text-gray-400">+++</div>
                          <div className="text-gray-400">/</div>
                          <div className="text-gray-400">/</div>
                          <div className="text-gray-400">/</div>
                          <div className="h-6"></div>
                          <div className="text-gray-400">===</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Section - Large Text */}
                  <div className="flex-1 flex items-start justify-start pt-8">
                    <div className="relative">
                      {/* File name positioned over content */}
                      <div className="absolute -top-8 left-0 text-sm text-gray-500 relative">
                        gpw-wellness.js
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-300"></div>
                      </div>
                      
                      {/* ASCII Art around the text */}
                      <div className="absolute -top-4 left-0 text-gray-400">---</div>
                      <div className="absolute -bottom-4 left-0 text-gray-400">---</div>
                      <div className="absolute top-1/2 -left-4 text-gray-400">/</div>
                      <div className="absolute top-1/2 -right-4 text-gray-400">/</div>
                      
                      <div className="text-8xl font-light text-gray-800 leading-none" style={{ fontFamily: 'neue-haas-grotesk-display, sans-serif' }}>
                        <div>God's</div>
                        <div>Purpose</div>
                        <div>Wellness</div>
                      </div>
                      
                      {/* More ASCII art patterns */}
                      <div className="absolute top-1/4 -right-8 text-gray-400">===</div>
                      <div className="absolute bottom-1/4 -left-8 text-gray-400">***</div>
                      <div className="absolute top-1/2 -right-12 text-gray-400">+++</div>
                      <div className="absolute bottom-1/2 -left-12 text-gray-400">+++</div>
                    </div>
                  </div>
                </section>

                {/* Section 2 - About Introduction Card */}
                <section className="h-screen flex p-6 snap-start">
                  <div className="flex w-full">
                    {/* Line Numbers */}
                    <ContinuousLineNumbers startLine={59} count={47} scrollOffset={scrollY} />
                    
                    {/* Content */}
                    <div className="flex-1">
                      <div className="space-y-1 pt-20">
                        <div className="h-6"></div>
                        <div className="h-6"></div>
                        <div className="h-6"></div>
                        <div className="text-3xl font-light text-gray-800" style={{ fontFamily: 'neue-haas-grotesk-display, sans-serif' }}>Transform your life</div>
                        <div className="text-3xl font-light text-gray-800" style={{ fontFamily: 'neue-haas-grotesk-display, sans-serif' }}>through fitness and</div>
                        <div className="text-3xl font-light text-gray-800" style={{ fontFamily: 'neue-haas-grotesk-display, sans-serif' }}>wellness coaching</div>
                        <div className="text-3xl font-light text-gray-800" style={{ fontFamily: 'neue-haas-grotesk-display, sans-serif' }}>with certified experts</div>
                        <div className="text-3xl font-light text-gray-800" style={{ fontFamily: 'neue-haas-grotesk-display, sans-serif' }}>who care about your success</div>
                        <div className="h-6"></div>
                        <div className="h-6"></div>
                        <div className="h-6"></div>
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
                        <div className="h-6"></div>
                        <div className="h-6"></div>
                        <div className="text-gray-400">===</div>
                        <div className="h-6"></div>
                        <div className="text-gray-400">/</div>
                        <div className="text-gray-400">/</div>
                        <div className="text-gray-400">/</div>
                        <div className="text-gray-400">***</div>
                        <div className="text-gray-400">***</div>
                        <div className="text-gray-400">***</div>
                        <div className="text-gray-400">/</div>
                        <div className="text-gray-400">/</div>
                        <div className="text-gray-400">/</div>
                        <div className="h-6"></div>
                        <div className="text-gray-400">+++</div>
                        <div className="text-gray-400">+++</div>
                        <div className="text-gray-400">+++</div>
                        <div className="h-6"></div>
                        <div className="text-gray-400">===</div>
                        <div className="h-6"></div>
                        <div className="text-gray-400">/</div>
                        <div className="text-gray-400">/</div>
                        <div className="text-gray-400">/</div>
                        <div className="text-gray-400">---</div>
                        <div className="text-gray-400">---</div>
                        <div className="text-gray-400">---</div>
                        <div className="text-gray-400">/</div>
                        <div className="text-gray-400">/</div>
                        <div className="text-gray-400">/</div>
                        <div className="h-6"></div>
                        <div className="text-gray-400">***</div>
                        <div className="text-gray-400">***</div>
                        <div className="text-gray-400">***</div>
                        <div className="h-6"></div>
                        <div className="text-gray-400">===</div>
                        <div className="h-6"></div>
                        <div className="text-gray-400">/</div>
                        <div className="text-gray-400">/</div>
                        <div className="text-gray-400">/</div>
                        <div className="text-gray-400">+++</div>
                        <div className="text-gray-400">+++</div>
                        <div className="text-gray-400">+++</div>
                        <div className="text-gray-400">/</div>
                        <div className="text-gray-400">/</div>
                        <div className="text-gray-400">/</div>
                        <div className="h-6"></div>
                        <div className="text-gray-400">===</div>
                      </div>
                    </div>
                  </div>
                </section>

                                 {/* Section 3 - Services Card */}
                 <section className="h-screen flex p-6 snap-start">
                   <div className="flex w-full">
                     {/* Line Numbers */}
                     <ContinuousLineNumbers startLine={106} count={58} scrollOffset={scrollY} />
                     
                     {/* Services Content */}
                     <div className="flex-1">
                       <div className="space-y-1 pt-8">
                        <div className="h-6"></div>
                        <div className="h-6"></div>
                        <div className="h-6"></div>
                        <div className="text-8xl font-light text-gray-800 leading-none" style={{ fontFamily: 'neue-haas-grotesk-display, sans-serif' }}>Services</div>
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
                        <div className="text-xl font-light text-gray-800">OUR OFFERINGS</div>
                        <div className="text-gray-400">========</div>
                        <div className="h-6"></div>
                        <div className="text-gray-400">/ SERVICE / DESCRIPTION / PRICE /</div>
                        <div className="h-6"></div>
                        
                        {/* Services Table with Custom Layout */}
                        <div className="relative">
                          {services.map((service, index) => (
                            <div key={index} className="relative group">
                              <div className="flex space-x-8">
                                <div className="w-32">
                                                                  <button 
                                  onClick={() => openServiceTab(service.slug)}
                                  className="text-gray-800 hover:text-gray-600 cursor-pointer transition-all duration-250 group flex items-center space-x-2"
                                >
                                  <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                                  <span>{service.name}</span>
                                  <span className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200">(view details)</span>
                                </button>
                                </div>
                                <div className="w-64">
                                  <div className="text-gray-800">{service.description}</div>
                                </div>
                                <div className="w-32">
                                  <div className="text-gray-800">{service.price}</div>
                                </div>
                              </div>
                              
                              {/* Interactive Line */}
                              <div className="absolute top-full left-0 w-full h-px bg-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-250"></div>
                              
                              {/* Hover Modal */}
                              {hoveredService && hoveredService.includes(`-${index}`) && (
                                <div className="absolute top-8 left-0 bg-gray-100 border border-gray-300 rounded p-2 text-xs z-10 min-w-[200px]">
                                  <div className="font-semibold text-gray-800 mb-1">Service Details</div>
                                  <div className="text-gray-600">
                                    <div>Service: {service.name}</div>
                                    <div>Description: {service.description}</div>
                                    <div>Price: {service.price}</div>
                                  </div>
                                </div>
                              )}
                              
                              {/* Divider after each service (except the last one) */}
                              {index < services.length - 1 && (
                                <div className="text-gray-400 mt-2">-----------</div>
                              )}
                            </div>
                          ))}
                        </div>
                        
                        <div className="h-6"></div>
                        <div className="text-gray-400">=================================================================================================</div>
                        <div className="h-6"></div>
                        <div className="text-gray-400">/</div>
                        <div className="text-gray-400">/</div>
                        <div className="text-gray-400">/</div>
                        <div className="text-gray-400">***</div>
                        <div className="text-gray-400">***</div>
                        <div className="text-gray-400">***</div>
                        <div className="text-gray-400">/</div>
                        <div className="text-gray-400">/</div>
                        <div className="text-gray-400">/</div>
                        <div className="h-6"></div>
                        <div className="text-gray-400">+++</div>
                        <div className="text-gray-400">+++</div>
                        <div className="text-gray-400">+++</div>
                        <div className="h-6"></div>
                        <div className="text-gray-400">===</div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 4 - Blog/Content Card */}
                <section className="h-screen flex p-6 snap-start">
                  <div className="flex w-full">
                    {/* Line Numbers */}
                    <ContinuousLineNumbers startLine={164} count={58} scrollOffset={scrollY} />
                    
                    {/* Blog Content */}
                    <div className="flex-1">
                      <div className="space-y-1 pt-20">
                        <div className="h-6"></div>
                        <div className="h-6"></div>
                        <div className="h-6"></div>
                        <div className="text-gray-400">+++</div>
                        <div className="text-gray-400">+++</div>
                        <div className="text-gray-400">+++</div>
                        <div className="h-6"></div>
                        <div className="text-gray-400">***</div>
                        <div className="text-gray-400">***</div>
                        <div className="text-gray-400">***</div>
                        <div className="text-gray-400">/</div>
                        <div className="text-gray-400">/</div>
                        <div className="text-gray-400">/</div>
                        <div className="h-6"></div>
                        <div className="text-gray-400">+++</div>
                        <div className="text-gray-400">+++</div>
                        <div className="text-gray-400">+++</div>
                        <div className="h-6"></div>
                        <div className="text-gray-400">===</div>
                        <div className="h-6"></div>
                        <div className="text-gray-400">/</div>
                        <div className="text-gray-400">/</div>
                        <div className="text-gray-400">/</div>
                        <div className="h-6"></div>
                        
                        {/* Large Blog Title - Positioned to be partially obscured */}
                        <div className="relative">
                          <div className="text-8xl font-light text-gray-800 leading-none opacity-30" style={{ fontFamily: 'neue-haas-grotesk-display, sans-serif' }}>Blog</div>
                        </div>
                        
                        <div className="h-6"></div>
                        <div className="text-gray-400">========</div>
                        <div className="text-xl font-light text-gray-800">LATEST CONTENT</div>
                        <div className="text-gray-400">========</div>
                        <div className="h-6"></div>
                        
                        {/* Table Headers */}
                        <div className="text-gray-400">/ TITLE / TYPE / DATE /</div>
                        <div className="h-6"></div>
                        
                        {/* Blog Posts Table with Custom Layout */}
                        <div className="relative">
                          {blogPosts.map((post, index) => (
                            <div key={index} className="relative group">
                              <div className="flex space-x-8">
                                <div className="w-80">
                                                                  <button 
                                  onClick={() => {
                                    setActiveTab("blog-details")
                                    setSidebarOpen(true)
                                  }}
                                  className="text-gray-800 hover:text-gray-600 cursor-pointer transition-all duration-250"
                                >
                                  → {post.title}
                                </button>
                                </div>
                                <div className="w-32">
                                  <div className="text-gray-800">{post.type}</div>
                                </div>
                                <div className="w-32">
                                  <div className="text-gray-800">{post.created_at}</div>
                                </div>
                              </div>
                              
                              {/* Interactive Line */}
                              <div className="absolute top-full left-0 w-full h-px bg-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-250"></div>
                              
                              {/* Hover Modal */}
                              {hoveredService && hoveredService.includes(`-${index}`) && (
                                <div className="absolute top-8 left-0 bg-gray-100 border border-gray-300 rounded p-2 text-xs z-10 min-w-[200px]">
                                  <div className="font-semibold text-gray-800 mb-1">Blog Post Details</div>
                                  <div className="text-gray-600">
                                    <div>Title: {post.title}</div>
                                    <div>Type: {post.type}</div>
                                    <div>Date: {post.created_at}</div>
                                  </div>
                                </div>
                              )}
                              
                              {/* Divider after each post (except the last one) */}
                              {index < blogPosts.length - 1 && (
                                <div className="text-gray-400 mt-2">-----------</div>
                              )}
                            </div>
                          ))}
                        </div>
                        
                        <div className="h-6"></div>
                        <div className="text-gray-400">=================================================================================================</div>
                        <div className="h-6"></div>
                        <div className="text-gray-400">/</div>
                        <div className="text-gray-400">/</div>
                        <div className="text-gray-400">/</div>
                        <div className="text-gray-400">***</div>
                        <div className="text-gray-400">+++</div>
                        <div className="text-gray-400">+++</div>
                        <div className="text-gray-400">+++</div>
                        <div className="h-6"></div>
                        <div className="text-gray-400">===</div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 5 - Contact Card */}
                <section className="h-screen flex p-6 snap-start">
                  <div className="flex w-full">
                    {/* Line Numbers */}
                    <ContinuousLineNumbers startLine={222} count={57} scrollOffset={scrollY} />
                    
                    {/* Contact Content */}
                    <div className="flex-1">
                      <div className="space-y-1 pt-20">
                        <div className="h-6"></div>
                        <div className="h-6"></div>
                        <div className="h-6"></div>
                        <div className="text-gray-400">***</div>
                        <div className="text-gray-400">***</div>
                        <div className="text-gray-400">***</div>
                        <div className="text-gray-400">/</div>
                        <div className="text-gray-400">/</div>
                        <div className="text-gray-400">/</div>
                        <div className="h-6"></div>
                        <div className="text-gray-400">+++</div>
                        <div className="text-gray-400">+++</div>
                        <div className="text-gray-400">+++</div>
                        <div className="h-6"></div>
                        <div className="text-gray-400">===</div>
                        <div className="h-6"></div>
                        <div className="text-gray-400">/</div>
                        <div className="text-gray-400">/</div>
                        <div className="text-gray-400">/</div>
                        <div className="h-6"></div>
                        <div className="text-gray-800">Ready to start your fitness journey?</div>
                        <div className="text-gray-800">Book a session with one of our certified trainers</div>
                        <div className="text-gray-800">and take the first step towards your goals.</div>
                        <div className="h-6"></div>
                        <div className="h-6"></div>
                        <div className="text-gray-400">+++</div>
                        <div className="text-gray-400">+++</div>
                        <div className="text-gray-400">+++</div>
                        <div className="h-6"></div>
                        <div className="text-gray-400">===</div>
                        <div className="h-6"></div>
                        <div className="text-gray-400">/</div>
                        <div className="text-gray-400">/</div>
                        <div className="text-gray-400">/</div>
                        <div className="h-6"></div>
                        <div className="text-gray-400">***</div>
                        <div className="text-gray-400">***</div>
                        <div className="text-gray-400">***</div>
                        <div className="h-6"></div>
                        <div className="text-gray-800">Contact us today to schedule your</div>
                        <div className="text-gray-800">free consultation and assessment.</div>
                        <div className="h-6"></div>
                        <div className="h-6"></div>
                        <div className="h-6"></div>
                        <div className="h-6"></div>
                        <div className="h-6"></div>
                        <div className="h-6"></div>
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
                        <div className="h-6"></div>
                        <div className="h-6"></div>
                        <div className="text-gray-400">***</div>
                        <div className="text-gray-400">***</div>
                        <div className="text-gray-400">***</div>
                        <div className="h-6"></div>
                        <div className="text-gray-400">===</div>
                        <div className="h-6"></div>
                        <div className="text-gray-400">/</div>
                        <div className="text-gray-400">/</div>
                        <div className="text-gray-400">/</div>
                        <div className="text-gray-400">+++</div>
                        <div className="text-gray-400">+++</div>
                        <div className="text-gray-400">+++</div>
                        <div className="text-gray-400">/</div>
                        <div className="text-gray-400">/</div>
                        <div className="text-gray-400">/</div>
                        <div className="h-6"></div>
                        <div className="text-gray-400">===</div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </>
          ) : (
            // Render service pages
            renderServicePage(activePage.replace('.js', ''))
          )}
        </div>
      </main>
    </div>
  )
} 