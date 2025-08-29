'use client'
import { useState } from "react"
import Link from "next/link"
import { Menu, X, Search, Phone, Mail } from "lucide-react"
import QuoteButton from "./quote-button"

const services = [
  { name: "House Cleaning", href: "/services/house-cleaning" },
  { name: "Office Cleaning", href: "/services/office-cleaning" },
  { name: "Industrial Cleaning", href: "/services/industrial-cleaning" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  return (
    <header className="bg-slate-700 text-white">
      <div className="bg-slate-800 py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-row md:flex-row justify-center md:justify-end items-center text-sm">
            <div className="flex flex-row md:flex-row items-center gap-4 mb-2 md:mb-0">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+1-502-444-1740</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@mopzilla.cleaning</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-4 relative">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2">
              <img src="/logo.png" alt="Mopzilla Logo" className="h-12 w-auto sm:h-14" />
              <span className="font-bold text-xl sm:text-2xl">Mopzilla</span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-4">
              {/* <div
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button
                  type="button"
                  className="flex items-center gap-1 hover:text-yellow-400 transition-colors"
                  onClick={() => setIsServicesOpen((prev) => !prev)}
                >
                  Services
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isServicesOpen && (
                  <div className="absolute top-full left-0 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                    {services.map((service, idx) => (
                      <Link
                        key={idx}
                        href={service.href}
                        className="block px-4 py-2 text-gray-800 hover:bg-[#2a738d] hover:text-white transition-colors"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div> */}
              <a href="/services/house-cleaning" className="hover:text-yellow-400 transition-colors">
                House Cleaning
              </a>
              <a href="/services/comercial-cleaning" className="hover:text-yellow-400 transition-colors">
                Commercial Cleaning
              </a>
              <a href="/services/office-cleaning" className="hover:text-yellow-400 transition-colors">
                Office Cleaning
              </a>
              <a href="/services" className="hover:text-yellow-400 transition-colors">
                Services
              </a>
              <a href="/about" className="hover:text-yellow-400 transition-colors">
                About Us
              </a>
              <a href="/contact" className="hover:text-yellow-400 transition-colors">
                Contact Us
              </a>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <QuoteButton className="bg-[#2a738d] text-white hover:bg-[#236073] font-semibold px-6">
                Get Estimate
              </QuoteButton>
            </div>

            {/* Hamburger Icon */}
            <button
              className="lg:hidden flex items-center justify-center p-2 rounded-md hover:bg-slate-600"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-7 h-7" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 bg-black/60 flex">
            <div className="bg-slate-800 w-4/5 max-w-xs h-full p-6 flex flex-col gap-6">
              <div className="flex items-center justify-between mb-6">
                <a href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                  <img src="/logo.png" alt="Mopzilla Logo" className="h-9 w-auto" />
                  <span className="font-bold text-lg">Mopzilla</span>
                </a>
                <button
                  className="p-2 rounded-md hover:bg-slate-700"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <nav className="flex flex-col gap-4">
                <a href="/" className="hover:text-yellow-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                  Home
                </a>
                <div>
                  <button
                    className="flex items-center gap-1 hover:text-yellow-400 transition-colors w-full text-left"
                    onClick={() => setIsServicesOpen((prev) => !prev)}
                  >
                    Services
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isServicesOpen && (
                    <div className="ml-4 mt-2 flex flex-col gap-2">
                      {services.map((service, idx) => (
                        <a
                          key={idx}
                          href={service.href}
                          className="block px-2 py-1 text-gray-200 hover:bg-[#2a738d] hover:text-white rounded transition-colors"
                          onClick={() => {
                            setMobileMenuOpen(false)
                            setIsServicesOpen(false)
                          }}
                        >
                          {service.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
                <a href="/about" className="hover:text-yellow-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                  About Us
                </a>
                <a href="/contact" className="hover:text-yellow-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                  Contact Us
                </a>
              </nav>
              <div className="mt-auto flex flex-col gap-4">
                <QuoteButton className="bg-[#2a738d] text-white hover:bg-[#236073] font-semibold w-full">
                  Get Estimate
                </QuoteButton>
              </div>
            </div>
            {/* Click outside to close */}
            <div className="flex-1" onClick={() => setMobileMenuOpen(false)} />
          </div>
        )}
      </div>
    </header>
  )
}