"use client"

import { Sun, PanelLeft, X, Play } from "lucide-react"
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
      <header className="sticky top-0 border-b border-gray-200 bg-white h-12 flex items-center justify-between px-4 z-50">
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
            onClick={() => setVideoPlaying(!videoPlaying)}
            className="p-2 hover:bg-gray-100 rounded-full transition-all duration-200 hover:scale-110 group"
            title="Play Video"
          >
            <Play className="h-4 w-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
          </button>
          <button className="p-1 hover:bg-gray-100 rounded">
            <Sun className="h-4 w-4 text-gray-400" />
          </button>
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className={`p-1 rounded transition-all duration-200 ${
              sidebarOpen 
                ? 'bg-gray-200 text-gray-700' 
                : 'hover:bg-gray-100 text-gray-400 hover:text-gray-600'
            }`}
            title={sidebarOpen ? "Close sidebar" : "Open sidebar"}
          >
            <PanelLeft className="h-4 w-4" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1" ref={mainRef}>
        {/* Main Content Area - Slides with sidebar */}
        <div className={`transition-all duration-500 ease-in-out ${sidebarOpen ? 'ml-96' : 'ml-0'}`}>
          {/* Header slides with content */}
          <div className={`transition-all duration-500 ease-in-out ${sidebarOpen ? 'ml-0' : 'ml-0'}`}>
            {/* Sidebar */}
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
                              <div className="text-gray-800">Email: info@gpw-wellness.com</div>
                              <div className="text-gray-800">Phone: (555) 123-4567</div>
                              <div className="text-gray-800">Address: 123 Fitness St, City, State</div>
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
                  </div>
                </div>
              </div>
            )}
           </div>
           
           {activePage === "gpw-wellness.js" ? (
            <>
              {/* Scroll Container with Snap */}
              <div 
                ref={scrollContainerRef}
                className="h-screen overflow-y-auto snap-y snap-mandatory"
                style={{ scrollSnapType: 'y mandatory' }}
              >
                {/* Section 1 - Hero Card */}
                <section className="h-screen flex p-6 pt-20 snap-start relative">
                  {/* Video Overlay */}
                  {videoPlaying && (
                    <div className="absolute inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-8 animate-in fade-in duration-300">
                      <div className="relative w-full h-full max-w-5xl max-h-[80vh] bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
                        <button
                          onClick={() => setVideoPlaying(false)}
                          className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-3 transition-all duration-200 hover:scale-110"
                        >
                          <X className="h-6 w-6 text-white" />
                        </button>
                        <div className="w-full h-full flex items-center justify-center">
                          <video
                            className="w-full h-full object-contain"
                            controls
                            autoPlay
                            muted
                            onError={(e) => console.log('Video error:', e)}
                          >
                            <source src="/placeholder-video.mp4" type="video/mp4" />
                            <source src="/placeholder-video.webm" type="video/webm" />
                            <div className="flex items-center justify-center h-full text-white text-lg">
                              Video not available. Please add a video file to /public/placeholder-video.mp4
                            </div>
                          </video>
                        </div>
                      </div>
                    </div>
                  )}
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
                          <div className="text-2xl font-light text-gray-800" style={{ fontFamily: 'neue-haas-grotesk-display, sans-serif' }}>We are</div>
                          <div className="text-2xl font-light text-gray-800" style={{ fontFamily: 'neue-haas-grotesk-display, sans-serif' }}>your personal</div>
                          <div className="text-2xl font-light text-gray-800" style={{ fontFamily: 'neue-haas-grotesk-display, sans-serif' }}>trainers</div>
                          <div className="text-gray-400">===</div>
                          <div className="h-6"></div>
                          <div className="text-2xl font-light text-gray-800" style={{ fontFamily: 'neue-haas-grotesk-display, sans-serif' }}>& wellness</div>
                          <div className="text-2xl font-light text-gray-800" style={{ fontFamily: 'neue-haas-grotesk-display, sans-serif' }}>partners</div>
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
                      <div className="space-y-1 pt-20">
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