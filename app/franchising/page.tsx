import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { DollarSign, Users, TrendingUp, Award, Phone, Mail } from "lucide-react"
import Image from "next/image"

const benefits = [
  {
    icon: DollarSign,
    title: "Low Investment",
    description: "Start your franchise with minimal upfront investment and flexible financing options.",
  },
  {
    icon: Users,
    title: "Proven Support",
    description: "Comprehensive training and ongoing support from our experienced team.",
  },
  {
    icon: TrendingUp,
    title: "Growing Market",
    description: "Join a rapidly expanding industry with consistent demand for cleaning services.",
  },
  {
    icon: Award,
    title: "Established Brand",
    description: "Leverage our 20+ years of experience and trusted brand recognition.",
  },
]

const steps = [
  {
    step: "01",
    title: "Initial Inquiry",
    description: "Submit your franchise application and speak with our franchise development team.",
  },
  {
    step: "02",
    title: "Discovery Process",
    description: "Learn about our business model, review financial requirements, and assess market opportunities.",
  },
  {
    step: "03",
    title: "Training Program",
    description: "Complete our comprehensive training program covering operations, marketing, and management.",
  },
  {
    step: "04",
    title: "Launch Support",
    description: "Receive ongoing support as you launch and grow your Mopzilla franchise.",
  },
]

export default function FranchisingPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-[#2a738d] py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Own a Mopzilla Franchise</h1>
              <p className="text-xl text-white/90 mb-8">
                Join our successful network of franchise owners and build a profitable cleaning business with our proven
                system.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-3">
                  Request Information
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#2a738d] px-8 py-3"
                >
                  Download Brochure
                </Button>
              </div>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Franchise opportunity"
                width={500}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Choose Mopzilla Franchise</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join a proven business model with comprehensive support and unlimited growth potential
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
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

      {/* Process Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Franchise Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Simple steps to become a Mopzilla franchise owner</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gray-900">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Investment Details</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-medium">Initial Franchise Fee</span>
                  <span className="text-[#2a738d] font-bold">$45,000</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-medium">Total Investment Range</span>
                  <span className="text-[#2a738d] font-bold">$75,000 - $150,000</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-medium">Liquid Capital Required</span>
                  <span className="text-[#2a738d] font-bold">$50,000</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-medium">Royalty Fee</span>
                  <span className="text-[#2a738d] font-bold">6% of gross revenue</span>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Investment details"
                width={500}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24 bg-[#2a738d]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact our franchise development team today to learn more about this exciting opportunity
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-8 mb-8">
            <div className="flex items-center gap-3">
              <Phone className="w-6 h-6 text-yellow-400" />
              <span className="text-white text-lg">1-800-FRANCHISE</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-6 h-6 text-yellow-400" />
              <span className="text-white text-lg">franchise@mopzilla.com</span>
            </div>
          </div>
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-3 text-lg">
            Request Information Package
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
