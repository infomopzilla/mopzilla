import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Check, Factory } from "lucide-react"
import Image from "next/image"
import QuoteForm from "@/components/quote-form"
import QuoteButton from "@/components/quote-button"

const industrialServices = [
  "Factory & warehouse cleaning",
  "Equipment & machinery cleaning",
  "High-level dusting & vacuuming",
  "Oil & grease removal",
  "Industrial floor scrubbing",
  "Restroom & locker room sanitation",
  "Pressure washing",
  "Hazardous waste cleanup",
]

const industries = [
  {
    title: "Manufacturing Plants",
    description: "Deep cleaning for production areas, assembly lines, and heavy machinery.",
    features: ["Machine degreasing", "Floor scrubbing", "Dust & debris removal"],
  },
  {
    title: "Warehouses",
    description: "Comprehensive cleaning for storage facilities and distribution centers.",
    features: ["High-level dusting", "Aisle & racking cleaning", "Loading dock sanitation"],
  },
  {
    title: "Food Processing Units",
    description: "Sanitization and cleaning for food safety and compliance.",
    features: ["Sanitizing surfaces", "Equipment cleaning", "Waste removal"],
  },
]

export default function IndustrialCleaningPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-[#2a738d] py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Factory className="w-8 h-8 text-yellow-400" />
                <span className="text-yellow-400 font-medium">COMMERCIAL CLEANING</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Commercial Cleaning Services</h1>
              <p className="text-xl text-white/90 mb-8">
                Reliable and professional cleaning for factories, warehouses, and Commercial facilities. We help you
                maintain a safe, productive, and compliant environment.
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
                src="/why.png"
                alt="Industrial cleaning service"
                width={500}
                height={400}
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      {/* <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Commercial Cleaning Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Specialized cleaning services tailored for Commercial environments and heavy-duty needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industrialServices.map((service, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <Check className="w-5 h-5 text-[#2a738d]" />
                <span className="text-gray-700">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Industries Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide industrial cleaning for a wide range of sectors and facilities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{industry.title}</h3>
                <p className="text-gray-600 mb-4">{industry.description}</p>
                <ul className="space-y-2">
                  {industry.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#2a738d]" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
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
