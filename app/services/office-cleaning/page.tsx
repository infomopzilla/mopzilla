import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Check, Building2, Users, Clock } from "lucide-react"
import Image from "next/image"
import QuoteButton from "@/components/quote-button"
import QuoteForm from "@/components/quote-form"

const features = [
  "Daily office maintenance",
  "Conference room cleaning",
  "Restroom sanitization",
  "Kitchen/break room cleaning",
  "Trash removal and recycling",
  "Floor care and maintenance",
  "Window cleaning",
  "Disinfection services",
]

const benefits = [
  {
    icon: Users,
    title: "Healthier Workplace",
    description: "Reduce sick days and improve employee health with professional cleaning",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "We work around your business hours to minimize disruption",
  },
  {
    icon: Building2,
    title: "Professional Image",
    description: "Maintain a clean, professional environment for clients and employees",
  },
]

export default function OfficeCleaningPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-[#2a738d] py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="w-8 h-8 text-yellow-400" />
                <span className="text-yellow-400 font-medium">COMMERCIAL CLEANING</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Office Cleaning Services</h1>
              <p className="text-xl text-white/90 mb-8">
                Professional office cleaning services to maintain a clean, healthy, and productive work environment for
                your team and clients.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <QuoteButton
                  className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-3 rounded-md text-center font-semibold transition-colors"
                >
                  Get Free Estimate
                </QuoteButton>
                <a
                  href="tel:15024441740"
                  className="border border-white text-white hover:bg-white hover:text-[#2a738d] px-8 py-1.5 rounded-md text-center font-semibold transition-colors inline-block"
                >
                  Call Now
                </a>
              </div>
            </div>
            <div>
              <Image
                src="/image.png"
                alt="Office cleaning service"
                width={500}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Office Cleaning Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive cleaning solutions for all types of office environments
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <Check className="w-5 h-5 text-[#2a738d]" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Benefits of Professional Office Cleaning
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-[#2a738d] rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Quote Form Section */}
            <div id="quote-form">
              <QuoteForm />
            </div>

      <Footer />
    </div>
  )
}
