import Header from "@/components/header"
import Footer from "@/components/footer"
import QuoteButton from "@/components/quote-button"
import { Home, Building2, Sparkles, Shield, Heart, Users, Clock, Award } from "lucide-react"

const services = [
  {
    icon: Home,
    title: "Residential Cleaning",
    description: "Complete home cleaning services including dusting, vacuuming, mopping, and surface shining.",
    features: ["Deep cleaning", "Regular maintenance", "Pet-friendly products", "Satisfaction guarantee"],
  },
  {
    icon: Building2,
    title: "Commercial Cleaning",
    description: "Professional office and business cleaning services tailored to your commercial needs.",
    features: ["Office cleaning", "Window washing", "Airbnb Cleaning"],
  },
  {
    icon: Sparkles,
    title: "Specialized Services",
    description: "Expert cleaning solutions for specific needs and challenging cleaning situations.",
    features: ["Deep cleaning", "Post-construction cleanup", "Move-in/out cleaning", "Emergency cleaning"],
  },
]

const clientTypes = [
  {
    icon: Home,
    title: "Homeowners & Renters",
    description: "Reliable, high-quality residential cleaning for busy households",
  },
  {
    icon: Building2,
    title: "Business Professionals",
    description: "Dependable commercial cleaning services for offices and small businesses",
  },
  {
    icon: Users,
    title: "Busy Families",
    description: "Time-saving cleaning solutions for working professionals and families",
  },
  {
    icon: Heart,
    title: "Pet-Friendly Households",
    description: "Safe, non-toxic cleaning methods for homes with pets",
  },
]

const whyChooseUs = [
  {
    icon: Shield,
    title: "Safe & Reliable",
    description: "Pet-friendly, non-toxic cleaning products for your family's safety",
  },
  {
    icon: Award,
    title: "Quality Guaranteed",
    description: "Every service backed by our 100% satisfaction guarantee",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Convenient scheduling that works around your busy lifestyle",
  },
  {
    icon: Sparkles,
    title: "Precision & Care",
    description: "Meticulous attention to detail in every cleaning task",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-[#2a738d] py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Our Cleaning Services</h1>
          <p className="text-xl text-white/90 max-w-4xl mx-auto mb-8">
            At Mopzilla Cleaning, we specialize in both residential and commercial cleaning services tailored to your
            specific needs. Our dedicated team delivers top-quality, efficient, and safe cleaning with every visit.
          </p>
          <QuoteButton className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-3 text-lg">
            Get Free Estimate
          </QuoteButton>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              From office cleaning, window washing, deep cleaning, and Airbnb Cleaning to disinfecting and polishing — we
              handle it all with precision and care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-[#2a738d] rounded-full flex items-center justify-center mx-auto mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-700 flex items-center justify-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#2a738d] rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pet-Friendly Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-[#2a738d] rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Pet-Friendly Cleaning</h2>
            <p className="text-lg text-gray-600 mb-8">
              We proudly offer pet-friendly services, ensuring a clean and comfortable space for every member of your
              household. Our home cleaning includes dusting, vacuuming, mopping, and shining surface areas, all backed
              by our satisfaction guarantee.
            </p>
            <QuoteButton className="bg-[#2a738d] hover:bg-[#236073] text-white px-8 py-3">
              Learn More About Pet-Safe Cleaning
            </QuoteButton>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Who We Serve</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Mopzilla Cleaning is committed to serving a diverse range of clients, from busy families and pet owners to
              business professionals and property managers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {clientTypes.map((client, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-12 h-12 bg-[#2a738d] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <client.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{client.title}</h3>
                <p className="text-gray-600 text-sm">{client.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our clients typically include middle to upper-income households and businesses who prioritize hygiene,
              organization, and presentation. We serve working professionals and families with busy schedules who value
              time-saving solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Choose Mopzilla?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Trust Mopzilla Cleaning to leave your space spotless — every time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-lg">
                <div className="w-12 h-12 bg-[#2a738d] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <reason.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{reason.title}</h3>
                <p className="text-gray-600 text-sm">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Service Areas</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide professional cleaning services across multiple locations
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "New York",
              "Los Angeles",
              "Chicago",
              "Houston",
              "Phoenix",
              "Philadelphia",
              "San Antonio",
              "San Diego",
              "Dallas",
              "San Jose",
              "Austin",
              "Jacksonville",
            ].map((city, index) => (
              <div key={index} className="text-center py-3 px-4 bg-gray-50 rounded-lg">
                <span className="text-gray-700 font-medium text-sm">{city}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-[#2a738d]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready for a Spotless Space?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Experience the Mopzilla difference with our professional, reliable, and pet-friendly cleaning services.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <QuoteButton className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-3 text-lg">
              Get Your Free Quote
            </QuoteButton>
            <a
              href="tel:15024441740"
              className="border border-white text-white hover:bg-white hover:text-[#2a738d] px-8 py-1.5 rounded-md text-center font-semibold transition-colors inline-block"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
