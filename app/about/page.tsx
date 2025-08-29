import Header from "@/components/header"
import Footer from "@/components/footer"
import QuoteButton from "@/components/quote-button"
import { Users, Clock, Shield, Target, Eye, Heart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import CertificationsSection from "@/components/certifications-section"

const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "500K+", label: "Happy Customers" },
  { value: "2450", label: "Active Clients" },
  { value: "1745", label: "Team Members" },
]

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To provide exceptional cleaning services that create healthier, more productive environments for our clients while building lasting relationships based on trust and reliability.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To be the leading cleaning service provider, setting industry standards for quality, innovation, and customer satisfaction across all markets we serve.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "Integrity, excellence, reliability, and respect guide everything we do. We believe in treating our clients, employees, and communities with the highest level of care.",
  },
]

const timeline = [
  {
    year: "2001",
    title: "Company Founded",
    description: "Mopzilla was established with a small team and big dreams in New York City.",
  },
  {
    year: "2005",
    title: "First Expansion",
    description: "Expanded operations to 5 major cities across the East Coast.",
  },
  {
    year: "2010",
    title: "National Presence",
    description: "Achieved nationwide coverage with operations in 15 states.",
  },
  {
    year: "2015",
    title: "Franchise Program",
    description: "Launched franchise program to accelerate growth and local market penetration.",
  },
  {
    year: "2020",
    title: "Technology Integration",
    description: "Implemented advanced scheduling and quality management systems.",
  },
  {
    year: "2024",
    title: "Industry Leader",
    description: "Recognized as one of the top commercial cleaning companies in North America.",
  },
]

const certifications = [
  "ISSA Certified",
  "IICRC Certified",
  "Green Seal Approved",
  "OSHA Compliant",
  "EPA Registered",
  "BBB Accredited",
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-[#2a738d] py-16 lg:py-24">
  <div className="container mx-auto px-4 text-center">
    <div className="flex justify-center mb-6">
      <Image
        src="/owner.png"
        alt="Owner"
        width={280}    // apni required width set karein
        height={220}   // apni required height set karein
        className="rounded-xl object-cover"
      />
    </div>
    <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Who We Are</h1>
    <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
      At Mopzilla Cleaning, we’re more than just a cleaning company — we’re a family-owned business built on trust, care, and attention to detail.
Founded in Burlington, Kentucky, by Marcio and Mariam, Mopzilla was born from a desire to bring reliable, high-quality cleaning services to homes and businesses in our community. With a strong work ethic and a love for cleanliness, we’ve made it our mission to help our clients feel comfortable, refreshed, and confident in their spaces.
We specialize in residential cleaning, office maintenance, post-construction cleanups, and more — always delivered with professionalism and heart. We proudly serve Northern Kentucky, including Florence, Burlington, and surrounding areas.
When you choose Mopzilla, you’re not just hiring a service — you’re partnering with a team that truly cares about your space
    </p>
    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <QuoteButton className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-3">
        Get Free Estimate
      </QuoteButton>
      <a href="/contact">
        <button
          className="border-white bg-white text-[#2a738d] px-8 py-1.5 rounded-md"
        >
          Contact Us
        </button>
      </a>
    </div>
  </div>
</section>

      {/* Stats Section */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-[#2a738d] mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Mission, Vision, Values */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Foundation</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Built on strong principles and driven by a clear vision for the future
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="w-16 h-16 bg-[#2a738d] rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      {/* <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">From humble beginnings to industry leadership</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div key={index} className="border-l-4 border-[#2a738d] pl-6 pb-6">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-2xl font-bold text-[#2a738d]">{item.year}</span>
                    <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Certifications */}
      {/* <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Certifications & Standards</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence is recognized by leading industry organizations
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="text-center py-4 px-6 bg-white rounded-lg border border-gray-200">
                  <span className="text-gray-700 font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      <CertificationsSection/>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-[#2a738d]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Why Choose Mopzilla?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            With decades of experience, industry-leading certifications, and a commitment to excellence, we're the
            trusted choice for businesses nationwide.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Users className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Expert Team</h3>
              <p className="text-white/90">Trained, certified, and experienced professionals</p>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Fully Insured</h3>
              <p className="text-white/90">Complete coverage for your peace of mind</p>
            </div>
            <div className="text-center">
              <Clock className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">24/7 Support</h3>
              <p className="text-white/90">Always available when you need us</p>
            </div>
          </div>
          <QuoteButton className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-3 text-lg">
            Start Your Partnership Today
          </QuoteButton>
        </div>
      </section>

      <Footer />
    </div>
  )
}
