import Header from "@/components/header"
import Footer from "@/components/footer"
import QuoteForm from "@/components/quote-form"
import { Check, Home } from "lucide-react"
import Image from "next/image"
import QuoteButton from "@/components/quote-button"
import { Button } from "@/components/ui/button"

const features = [
  "Deep cleaning of all rooms",
  "Kitchen and bathroom sanitization",
  "Dusting and vacuuming",
  "Window cleaning (interior)",
  "Trash removal",
  "Eco-friendly cleaning products",
]

export default function HouseCleaningPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-[#2a738d] py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Home className="w-8 h-8 text-yellow-400" />
                <span className="text-yellow-400 font-medium">RESIDENTIAL CLEANING</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">House Cleaning Services</h1>
              <p className="text-xl text-white/90 mb-8">
                Keep your living space sparkling clean and inviting with our professional house cleaning services. Our trained team uses eco-friendly, non-toxic products to deliver a deep, reliable clean — ensuring your home not only looks great but feels fresh and safe for your family.
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
                src="/why3.png"
                alt="House cleaning service"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What's Included</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our comprehensive house cleaning service covers every area of your home
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <Check className="w-5 h-5 text-[#2a738d]" />
                <span className="text-gray-700">{feature}</span>
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
