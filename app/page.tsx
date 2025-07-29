"use client"

import { Sun, PanelLeft, X } from "lucide-react"
import { useState } from "react"

export default function HomePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("profile")
  const [hoveredService, setHoveredService] = useState<string | null>(null)
  const [openTabs, setOpenTabs] = useState<string[]>(["gpw-wellness.js"])
  const [activePage, setActivePage] = useState("gpw-wellness.js")

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
    const tabName = `${serviceSlug}.js`
    if (!openTabs.includes(tabName)) {
      setOpenTabs([...openTabs, tabName])
    }
    setActivePage(tabName)
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
          <div className="text-xs text-gray-600 mr-6 select-none">
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
              <div className="text-8xl font-light text-gray-300 leading-none" style={{ fontFamily: 'neue-haas-grotesk-display, sans-serif' }}>
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
              <div className="text-xl font-light text-gray-300">SERVICE DETAILS</div>
              <div className="text-gray-600">========</div>
              <div className="h-6"></div>
              <div className="text-gray-600">/ SERVICE / DESCRIPTION / PRICE /</div>
              <div className="h-6"></div>
              <div className="text-gray-300">→ {service.name}</div>
              <div className="text-gray-300">{service.description}</div>
              <div className="text-gray-300">{service.price}</div>
              <div className="h-6"></div>
              <div className="text-gray-600">=================================================================================================</div>
              <div className="h-6"></div>
              <div className="text-gray-600">/</div>
              <div className="text-gray-600">/</div>
              <div className="text-gray-600">/</div>
              <div className="text-gray-600">***</div>
              <div className="text-gray-600">***</div>
              <div className="text-gray-600">***</div>
              <div className="text-gray-600">/</div>
              <div className="text-gray-600">/</div>
              <div className="text-gray-600">/</div>
              <div className="h-6"></div>
              <div className="text-gray-600">+++</div>
              <div className="text-gray-600">+++</div>
              <div className="text-gray-600">+++</div>
              <div className="h-6"></div>
              <div className="text-gray-600">===</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-300 font-mono">
      {/* Header */}
      <header className="sticky top-0 border-b border-gray-700 bg-gray-900 h-12 flex items-center justify-between px-4 z-50">
        <div className="flex items-center space-x-4">
          {sidebarOpen && (
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => setActiveTab("profile")}
                className={`text-sm px-2 py-1 rounded flex items-center space-x-2 ${
                  activeTab === "profile" 
                    ? "text-gray-300 bg-gray-800" 
                    : "text-gray-500 hover:text-gray-400"
                }`}
              >
                <span>Profile</span>
              </button>
              <button 
                onClick={() => setActiveTab("contact")}
                className={`text-sm px-2 py-1 rounded flex items-center space-x-2 ${
                  activeTab === "contact" 
                    ? "text-gray-300 bg-gray-800" 
                    : "text-gray-500 hover:text-gray-400"
                }`}
              >
                <span>Contact</span>
              </button>
              <button 
                onClick={() => setSidebarOpen(false)}
                className="hover:bg-gray-700 rounded p-0.5"
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
                      ? "text-gray-300 bg-gray-800" 
                      : "text-gray-500 hover:text-gray-400"
                  }`}
                >
                  <span>{tab}</span>
                  {tab !== "gpw-wellness.js" && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        closeTab(tab)
                      }}
                      className="hover:bg-gray-700 rounded p-0.5"
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
          <button className="p-1 hover:bg-gray-800 rounded">
            <Sun className="h-4 w-4 text-gray-400" />
          </button>
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-1 hover:bg-gray-800 rounded"
          >
            <PanelLeft className="h-4 w-4 text-gray-400" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Sidebar */}
        {sidebarOpen && (
          <div className="fixed left-0 top-12 w-96 h-[calc(100vh-48px)] bg-gray-800 border-r border-gray-700 z-40">
            <div className="h-full flex flex-col">
              {/* Primary Section */}
              <div className="flex-1 p-6 overflow-y-auto">
                <div className="flex">
                  {/* Line Numbers */}
                  <div className="text-xs text-gray-600 mr-6 select-none">
                    {Array.from({ length: 58 }, (_, i) => (
                      <div key={i + 1} className="h-6 leading-6">
                        {i + 1}
                      </div>
                    ))}
                  </div>
                  
                  {/* Profile/Contact Content */}
                  <div className="flex-1">
                    <div className="space-y-1">
                      <div className="text-gray-600">{"<!-- start scope-profile -->"}</div>
                      <div className="h-6"></div>
                      <div className="text-gray-600">{"<section class=\"scope-profile\">"}</div>
                      <div className="h-6"></div>
                      <div className="text-gray-600">{"  <h3>ABOUT GPW</h3>"}</div>
                      <div className="h-6"></div>
                      <div className="text-gray-600">{"  <p>"}</div>
                      <div className="text-gray-300">God's Purpose Wellness is a premier fitness</div>
                      <div className="text-gray-300">and wellness company dedicated to helping</div>
                      <div className="text-gray-300">individuals achieve their health goals through</div>
                      <div className="text-gray-300">personalized training, nutrition, and lifestyle</div>
                      <div className="text-gray-300">coaching.</div>
                      <div className="h-6"></div>
                      <div className="text-gray-300">Our certified trainers work with clients of</div>
                      <div className="text-gray-300">all fitness levels to create sustainable,</div>
                      <div className="text-gray-300">effective workout programs that deliver</div>
                      <div className="text-gray-300">real results.</div>
                      <div className="h-6"></div>
                      <div className="text-gray-300">We believe in a holistic approach to fitness</div>
                      <div className="text-gray-300">that includes proper nutrition, mental health,</div>
                      <div className="text-gray-300">and community support.</div>
                      <div className="h-6"></div>
                      <div className="text-gray-600">{"  </p>"}</div>
                      <div className="text-gray-600">{"</section>"}</div>
                      <div className="h-6"></div>
                      <div className="text-gray-600">{"<!-- end scope-profile -->"}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Secondary Section */}
              <div className="border-t border-gray-700 p-6">
                <div className="flex">
                  {/* Line Numbers */}
                  <div className="text-xs text-gray-600 mr-6 select-none">
                    {Array.from({ length: 20 }, (_, i) => (
                      <div key={i + 59} className="h-6 leading-6">
                        {i + 59}
                      </div>
                    ))}
                  </div>
                  
                  {/* Secondary Content */}
                  <div className="flex-1">
                    <div className="space-y-1">
                      <div className="text-gray-600">{"<!-- start scope-secondary -->"}</div>
                      <div className="h-6"></div>
                      <div className="text-gray-600">{"<section class=\"scope-secondary\">"}</div>
                      <div className="h-6"></div>
                      <div className="text-gray-600">{"  <h3>CONTACT INFO</h3>"}</div>
                      <div className="h-6"></div>
                      <div className="text-gray-600">{"  <p>"}</div>
                      <div className="text-gray-300">Email: info@gpw-wellness.com</div>
                      <div className="text-gray-300">Phone: (555) 123-4567</div>
                      <div className="text-gray-300">Address: 123 Fitness St, City, State</div>
                      <div className="h-6"></div>
                      <div className="text-gray-600">{"  </p>"}</div>
                      <div className="text-gray-600">{"</section>"}</div>
                      <div className="h-6"></div>
                      <div className="text-gray-600">{"<!-- end scope-secondary -->"}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Main Content Area */}
        <div className={`${sidebarOpen ? 'ml-96' : ''}`}>
          {activePage === "gpw-wellness.js" ? (
            <>
              {/* Section 1 - Hero */}
              <section className="flex p-6">
                {/* Left Section - Code Editor */}
                <div className="flex-1">
                  <div className="flex">
                    {/* Line Numbers */}
                    <div className="text-xs text-gray-600 mr-6 select-none">
                      {Array.from({ length: 58 }, (_, i) => (
                        <div key={i + 1} className="h-6 leading-6">
                          {i + 1}
                        </div>
                      ))}
                    </div>
                    
                    {/* Code Content */}
                    <div className="flex-1">
                      <div className="space-y-1">
                        <div className="h-6"></div>
                        <div className="h-6"></div>
                        <div className="h-6"></div>
                        <div className="text-2xl font-light text-gray-300" style={{ fontFamily: 'neue-haas-grotesk-display, sans-serif' }}>We are</div>
                        <div className="text-2xl font-light text-gray-300" style={{ fontFamily: 'neue-haas-grotesk-display, sans-serif' }}>your personal</div>
                        <div className="text-2xl font-light text-gray-300" style={{ fontFamily: 'neue-haas-grotesk-display, sans-serif' }}>trainers</div>
                        <div className="text-gray-600">===</div>
                        <div className="h-6"></div>
                        <div className="text-2xl font-light text-gray-300" style={{ fontFamily: 'neue-haas-grotesk-display, sans-serif' }}>& wellness</div>
                        <div className="text-2xl font-light text-gray-300" style={{ fontFamily: 'neue-haas-grotesk-display, sans-serif' }}>partners</div>
                        <div className="text-gray-600">===</div>
                        <div className="h-6"></div>
                        <div className="text-gray-600">/</div>
                        <div className="text-gray-600">/</div>
                        <div className="text-gray-600">/</div>
                        <div className="text-gray-600">***</div>
                        <div className="text-gray-600">***</div>
                        <div className="text-gray-600">***</div>
                        <div className="text-gray-600">/</div>
                        <div className="text-gray-600">/</div>
                        <div className="text-gray-600">/</div>
                        <div className="h-6"></div>
                        <div className="text-gray-600">+++</div>
                        <div className="text-gray-600">+++</div>
                        <div className="text-gray-600">+++</div>
                        <div className="h-6"></div>
                        <div className="text-gray-600">===</div>
                        <div className="h-6"></div>
                        <div className="text-gray-600">/</div>
                        <div className="text-gray-600">/</div>
                        <div className="text-gray-600">/</div>
                        <div className="text-gray-600">---</div>
                        <div className="text-gray-600">---</div>
                        <div className="text-gray-600">---</div>
                        <div className="text-gray-600">/</div>
                        <div className="text-gray-600">/</div>
                        <div className="text-gray-600">/</div>
                        <div className="h-6"></div>
                        <div className="text-gray-600">***</div>
                        <div className="text-gray-600">***</div>
                        <div className="text-gray-600">***</div>
                        <div className="h-6"></div>
                        <div className="text-gray-600">===</div>
                        <div className="h-6"></div>
                        <div className="text-gray-600">/</div>
                        <div className="text-gray-600">/</div>
                        <div className="text-gray-600">/</div>
                        <div className="text-gray-600">+++</div>
                        <div className="text-gray-600">+++</div>
                        <div className="text-gray-600">+++</div>
                        <div className="text-gray-600">/</div>
                        <div className="text-gray-600">/</div>
                        <div className="text-gray-600">/</div>
                        <div className="h-6"></div>
                        <div className="text-gray-600">===</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Section - Large Text */}
                <div className="flex-1 flex items-end justify-start">
                  <div className="relative">
                    {/* File name positioned over content */}
                    <div className="absolute -top-8 left-0 text-sm text-gray-400 relative">
                      gpw-wellness.js
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-400"></div>
                    </div>
                    
                    {/* ASCII Art around the text */}
                    <div className="absolute -top-4 left-0 text-gray-600">---</div>
                    <div className="absolute -bottom-4 left-0 text-gray-600">---</div>
                    <div className="absolute top-1/2 -left-4 text-gray-600">/</div>
                    <div className="absolute top-1/2 -right-4 text-gray-600">/</div>
                    
                    <div className="text-8xl font-light text-gray-300 leading-none" style={{ fontFamily: 'neue-haas-grotesk-display, sans-serif' }}>
                      <div>God's</div>
                      <div>Purpose</div>
                      <div>Wellness</div>
                    </div>
                    
                    {/* More ASCII art patterns */}
                    <div className="absolute top-1/4 -right-8 text-gray-600">===</div>
                    <div className="absolute bottom-1/4 -left-8 text-gray-600">***</div>
                    <div className="absolute top-1/2 -right-12 text-gray-600">+++</div>
                    <div className="absolute bottom-1/2 -left-12 text-gray-600">+++</div>
                  </div>
                </div>
              </section>

              {/* Section 2 - About Introduction */}
              <section className="p-6">
                <div className="flex">
                  {/* Line Numbers */}
                  <div className="text-xs text-gray-600 mr-6 select-none">
                    {Array.from({ length: 47 }, (_, i) => (
                      <div key={i + 59} className="h-6 leading-6">
                        {i + 59}
                      </div>
                    ))}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="space-y-1">
                      <div className="h-6"></div>
                      <div className="h-6"></div>
                      <div className="h-6"></div>
                      <div className="text-3xl font-light text-gray-300" style={{ fontFamily: 'neue-haas-grotesk-display, sans-serif' }}>Transform your life</div>
                      <div className="text-3xl font-light text-gray-300" style={{ fontFamily: 'neue-haas-grotesk-display, sans-serif' }}>through fitness and</div>
                      <div className="text-3xl font-light text-gray-300" style={{ fontFamily: 'neue-haas-grotesk-display, sans-serif' }}>wellness coaching</div>
                      <div className="text-3xl font-light text-gray-300" style={{ fontFamily: 'neue-haas-grotesk-display, sans-serif' }}>with certified experts</div>
                      <div className="text-3xl font-light text-gray-300" style={{ fontFamily: 'neue-haas-grotesk-display, sans-serif' }}>who care about your success</div>
                      <div className="h-6"></div>
                      <div className="h-6"></div>
                      <div className="h-6"></div>
                      <button 
                        onClick={() => {
                          setSidebarOpen(true)
                          setActiveTab("profile")
                        }}
                        className="text-xl font-light text-gray-300 hover:text-gray-200 transition-colors flex items-center space-x-2"
                      >
                        <span>→</span>
                        <span>Learn more</span>
                      </button>
                      <div className="h-6"></div>
                      <div className="h-6"></div>
                      <div className="text-gray-600">===</div>
                      <div className="h-6"></div>
                      <div className="text-gray-600">/</div>
                      <div className="text-gray-600">/</div>
                      <div className="text-gray-600">/</div>
                      <div className="text-gray-600">***</div>
                      <div className="text-gray-600">***</div>
                      <div className="text-gray-600">***</div>
                      <div className="text-gray-600">/</div>
                      <div className="text-gray-600">/</div>
                      <div className="text-gray-600">/</div>
                      <div className="h-6"></div>
                      <div className="text-gray-600">+++</div>
                      <div className="text-gray-600">+++</div>
                      <div className="text-gray-600">+++</div>
                      <div className="h-6"></div>
                      <div className="text-gray-600">===</div>
                      <div className="h-6"></div>
                      <div className="text-gray-600">/</div>
                      <div className="text-gray-600">/</div>
                      <div className="text-gray-600">/</div>
                      <div className="text-gray-600">---</div>
                      <div className="text-gray-600">---</div>
                      <div className="text-gray-600">---</div>
                      <div className="text-gray-600">/</div>
                      <div className="text-gray-600">/</div>
                      <div className="text-gray-600">/</div>
                      <div className="h-6"></div>
                      <div className="text-gray-600">***</div>
                      <div className="text-gray-600">***</div>
                      <div className="text-gray-600">***</div>
                      <div className="h-6"></div>
                      <div className="text-gray-600">===</div>
                      <div className="h-6"></div>
                      <div className="text-gray-600">/</div>
                      <div className="text-gray-600">/</div>
                      <div className="text-gray-600">/</div>
                      <div className="text-gray-600">+++</div>
                      <div className="text-gray-600">+++</div>
                      <div className="text-gray-600">+++</div>
                      <div className="text-gray-600">/</div>
                      <div className="text-gray-600">/</div>
                      <div className="text-gray-600">/</div>
                      <div className="h-6"></div>
                      <div className="text-gray-600">===</div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 3 - Services */}
              <section className="p-6">
                <div className="flex">
                  {/* Line Numbers */}
                  <div className="text-xs text-gray-600 mr-6 select-none">
                    {Array.from({ length: 58 }, (_, i) => (
                      <div key={i + 106} className="h-6 leading-6">
                        {i + 106}
                      </div>
                    ))}
                  </div>
                  
                  {/* Services Content */}
                  <div className="flex-1">
                    <div className="space-y-1">
                      <div className="h-6"></div>
                      <div className="h-6"></div>
                      <div className="h-6"></div>
                      <div className="text-8xl font-light text-gray-300 leading-none" style={{ fontFamily: 'neue-haas-grotesk-display, sans-serif' }}>Services</div>
                      <div className="h-6"></div>
                      <div className="h-6"></div>
                      <div className="h-6"></div>
                      <div className="h-6"></div>
                      <div className="h-6"></div>
                      <div className="h-6"></div>
                      <div className="h-6"></div>
                      <div className="h-6"></div>
                      <div className="text-xl font-light text-gray-300">OUR OFFERINGS</div>
                      <div className="text-gray-600">========</div>
                      <div className="h-6"></div>
                      <div className="text-gray-600">/ SERVICE / DESCRIPTION / PRICE /</div>
                      <div className="h-6"></div>
                      
                      {/* Services Table with Custom Layout */}
                      <div className="relative">
                        {services.map((service, index) => (
                          <div key={index} className="relative group">
                            <div className="flex space-x-8">
                              <div className="w-32">
                                <button 
                                  onClick={() => openServiceTab(service.slug)}
                                  className="text-gray-300 hover:text-gray-200 cursor-pointer transition-all duration-250"
                                >
                                  → {service.name}
                                </button>
                              </div>
                              <div className="w-64">
                                <div className="text-gray-300">{service.description}</div>
                              </div>
                              <div className="w-32">
                                <div className="text-gray-300">{service.price}</div>
                              </div>
                            </div>
                            
                            {/* Interactive Line */}
                            <div className="absolute top-full left-0 w-full h-px bg-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-250"></div>
                            
                            {/* Hover Modal */}
                            {hoveredService && hoveredService.includes(`-${index}`) && (
                              <div className="absolute top-8 left-0 bg-gray-800 border border-gray-600 rounded p-2 text-xs z-10 min-w-[200px]">
                                <div className="font-semibold text-gray-300 mb-1">Service Details</div>
                                <div className="text-gray-400">
                                  <div>Service: {service.name}</div>
                                  <div>Description: {service.description}</div>
                                  <div>Price: {service.price}</div>
                                </div>
                              </div>
                            )}
                            
                            {/* Divider after each service (except the last one) */}
                            {index < services.length - 1 && (
                              <div className="text-gray-600 mt-2">-----------</div>
                            )}
                          </div>
                        ))}
                      </div>
                      
                      <div className="h-6"></div>
                      <div className="text-gray-600">=================================================================================================</div>
                      <div className="h-6"></div>
                      <div className="text-gray-600">/</div>
                      <div className="text-gray-600">/</div>
                      <div className="text-gray-600">/</div>
                      <div className="text-gray-600">***</div>
                      <div className="text-gray-600">***</div>
                      <div className="text-gray-600">***</div>
                      <div className="text-gray-600">/</div>
                      <div className="text-gray-600">/</div>
                      <div className="text-gray-600">/</div>
                      <div className="h-6"></div>
                      <div className="text-gray-600">+++</div>
                      <div className="text-gray-600">+++</div>
                      <div className="text-gray-600">+++</div>
                      <div className="h-6"></div>
                      <div className="text-gray-600">===</div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 4 - Blog/Content */}
              <section className="p-6">
                <div className="flex">
                  {/* Line Numbers */}
                  <div className="text-xs text-gray-600 mr-6 select-none">
                    {Array.from({ length: 58 }, (_, i) => (
                      <div key={i + 164} className="h-6 leading-6">
                        {i + 164}
                      </div>
                    ))}
                  </div>
                  
                  {/* Blog Content */}
                  <div className="flex-1">
                    <div className="space-y-1">
                      <div className="h-6"></div>
                      <div className="h-6"></div>
                      <div className="h-6"></div>
                      <div className="text-gray-600">+++</div>
                      <div className="text-gray-600">+++</div>
                      <div className="text-gray-600">+++</div>
                      <div className="h-6"></div>
                      <div className="text-gray-600">***</div>
                      <div className="text-gray-600">***</div>
                      <div className="text-gray-600">***</div>
                      <div className="text-gray-600">/</div>
                      <div className="text-gray-600">/</div>
                      <div className="text-gray-600">/</div>
                      <div className="h-6"></div>
                      <div className="text-gray-600">+++</div>
                      <div className="text-gray-600">+++</div>
                      <div className="text-gray-600">+++</div>
                      <div className="h-6"></div>
                      <div className="text-gray-600">===</div>
                      <div className="h-6"></div>
                      <div className="text-gray-600">/</div>
                      <div className="text-gray-600">/</div>
                      <div className="text-gray-600">/</div>
                      <div className="h-6"></div>
                      
                      {/* Large Blog Title - Positioned to be partially obscured */}
                      <div className="relative">
                        <div className="text-8xl font-light text-gray-300 leading-none opacity-30" style={{ fontFamily: 'neue-haas-grotesk-display, sans-serif' }}>Blog</div>
                      </div>
                      
                      <div className="h-6"></div>
                      <div className="text-gray-600">========</div>
                      <div className="text-xl font-light text-gray-300">LATEST CONTENT</div>
                      <div className="text-gray-600">========</div>
                      <div className="h-6"></div>
                      
                      {/* Table Headers */}
                      <div className="text-gray-600">/ TITLE / TYPE / DATE /</div>
                      <div className="h-6"></div>
                      
                      {/* Blog Posts Table with Custom Layout */}
                      <div className="relative">
                        {blogPosts.map((post, index) => (
                          <div key={index} className="relative group">
                            <div className="flex space-x-8">
                              <div className="w-80">
                                <button 
                                  onClick={() => openServiceTab(post.slug)}
                                  className="text-gray-300 hover:text-gray-200 cursor-pointer transition-all duration-250"
                                >
                                  → {post.title}
                                </button>
                              </div>
                              <div className="w-32">
                                <div className="text-gray-300">{post.type}</div>
                              </div>
                              <div className="w-32">
                                <div className="text-gray-300">{post.created_at}</div>
                              </div>
                            </div>
                            
                            {/* Interactive Line */}
                            <div className="absolute top-full left-0 w-full h-px bg-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-250"></div>
                            
                            {/* Hover Modal */}
                            {hoveredService && hoveredService.includes(`-${index}`) && (
                              <div className="absolute top-8 left-0 bg-gray-800 border border-gray-600 rounded p-2 text-xs z-10 min-w-[200px]">
                                <div className="font-semibold text-gray-300 mb-1">Blog Post Details</div>
                                <div className="text-gray-400">
                                  <div>Title: {post.title}</div>
                                  <div>Type: {post.type}</div>
                                  <div>Date: {post.created_at}</div>
                                </div>
                              </div>
                            )}
                            
                            {/* Divider after each post (except the last one) */}
                            {index < blogPosts.length - 1 && (
                              <div className="text-gray-600 mt-2">-----------</div>
                            )}
                          </div>
                        ))}
                      </div>
                      
                      <div className="h-6"></div>
                      <div className="text-gray-600">=================================================================================================</div>
                      <div className="h-6"></div>
                      <div className="text-gray-600">/</div>
                      <div className="text-gray-600">/</div>
                      <div className="text-gray-600">/</div>
                      <div className="text-gray-600">***</div>
                      <div className="text-gray-600">***</div>
                      <div className="text-gray-600">***</div>
                      <div className="text-gray-600">/</div>
                      <div className="text-gray-600">/</div>
                      <div className="text-gray-600">/</div>
                      <div className="h-6"></div>
                      <div className="text-gray-600">+++</div>
                      <div className="text-gray-600">+++</div>
                      <div className="text-gray-600">+++</div>
                      <div className="h-6"></div>
                      <div className="text-gray-600">===</div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 5 - Contact */}
              <section className="p-6">
                <div className="flex">
                  {/* Line Numbers */}
                  <div className="text-xs text-gray-600 mr-6 select-none">
                    {Array.from({ length: 57 }, (_, i) => (
                      <div key={i + 222} className="h-6 leading-6">
                        {i + 222}
                      </div>
                    ))}
                  </div>
                  
                  {/* Contact Content */}
                  <div className="flex-1">
                    <div className="space-y-1">
                      <div className="h-6"></div>
                      <div className="h-6"></div>
                      <div className="h-6"></div>
                      <div className="text-gray-600">***</div>
                      <div className="text-gray-600">***</div>
                      <div className="text-gray-600">***</div>
                      <div className="text-gray-600">/</div>
                      <div className="text-gray-600">/</div>
                      <div className="text-gray-600">/</div>
                      <div className="h-6"></div>
                      <div className="text-gray-600">+++</div>
                      <div className="text-gray-600">+++</div>
                      <div className="text-gray-600">+++</div>
                      <div className="h-6"></div>
                      <div className="text-gray-600">===</div>
                      <div className="h-6"></div>
                      <div className="text-gray-600">/</div>
                      <div className="text-gray-600">/</div>
                      <div className="text-gray-600">/</div>
                      <div className="h-6"></div>
                      <div className="text-gray-300">Ready to start your fitness journey?</div>
                      <div className="text-gray-300">Book a session with one of our certified trainers</div>
                      <div className="text-gray-300">and take the first step towards your goals.</div>
                      <div className="h-6"></div>
                      <div className="h-6"></div>
                      <div className="text-gray-600">+++</div>
                      <div className="text-gray-600">+++</div>
                      <div className="text-gray-600">+++</div>
                      <div className="h-6"></div>
                      <div className="text-gray-600">===</div>
                      <div className="h-6"></div>
                      <div className="text-gray-600">/</div>
                      <div className="text-gray-600">/</div>
                      <div className="text-gray-600">/</div>
                      <div className="h-6"></div>
                      <div className="text-gray-600">***</div>
                      <div className="text-gray-600">***</div>
                      <div className="text-gray-600">***</div>
                      <div className="h-6"></div>
                      <div className="text-gray-300">Contact us today to schedule your</div>
                      <div className="text-gray-300">free consultation and assessment.</div>
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
                        className="text-xl font-light text-gray-300 hover:text-gray-200 transition-colors flex items-center space-x-2"
                      >
                        <span>→</span>
                        <span>Contact us</span>
                      </button>
                      <div className="h-6"></div>
                      <div className="h-6"></div>
                      <div className="text-gray-600">***</div>
                      <div className="text-gray-600">***</div>
                      <div className="text-gray-600">***</div>
                      <div className="h-6"></div>
                      <div className="text-gray-600">===</div>
                      <div className="h-6"></div>
                      <div className="text-gray-600">/</div>
                      <div className="text-gray-600">/</div>
                      <div className="text-gray-600">/</div>
                      <div className="text-gray-600">+++</div>
                      <div className="text-gray-600">+++</div>
                      <div className="text-gray-600">+++</div>
                      <div className="text-gray-600">/</div>
                      <div className="text-gray-600">/</div>
                      <div className="text-gray-600">/</div>
                      <div className="h-6"></div>
                      <div className="text-gray-600">===</div>
                    </div>
                  </div>
                </div>
              </section>
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