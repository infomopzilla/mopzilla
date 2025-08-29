import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import Image from "next/image"

const locations = [
  {
    city: "New York",
    state: "NY",
    address: "123 Business Ave, New York, NY 10001",
    phone: "(212) 555-0123",
    email: "newyork@mopzilla.com",
    hours: "Mon-Fri: 7AM-7PM, Sat: 8AM-5PM",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    city: "Los Angeles",
    state: "CA",
    address: "456 Clean Street, Los Angeles, CA 90210",
    phone: "(323) 555-0456",
    email: "losangeles@mopzilla.com",
    hours: "Mon-Fri: 6AM-8PM, Sat: 8AM-6PM",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    city: "Chicago",
    state: "IL",
    address: "789 Service Blvd, Chicago, IL 60601",
    phone: "(312) 555-0789",
    email: "chicago@mopzilla.com",
    hours: "Mon-Fri: 7AM-7PM, Sat: 9AM-5PM",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    city: "Houston",
    state: "TX",
    address: "321 Cleaning Way, Houston, TX 77001",
    phone: "(713) 555-0321",
    email: "houston@mopzilla.com",
    hours: "Mon-Fri: 6AM-8PM, Sat: 8AM-6PM",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    city: "Miami",
    state: "FL",
    address: "654 Sparkle Drive, Miami, FL 33101",
    phone: "(305) 555-0654",
    email: "miami@mopzilla.com",
    hours: "Mon-Fri: 7AM-7PM, Sat: 8AM-5PM",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    city: "Seattle",
    state: "WA",
    address: "987 Fresh Lane, Seattle, WA 98101",
    phone: "(206) 555-0987",
    email: "seattle@mopzilla.com",
    hours: "Mon-Fri: 7AM-6PM, Sat: 9AM-4PM",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function FindATeamPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-[#2a738d] py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Find Your Local Team</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Locate your nearest Mopzilla cleaning team and get professional cleaning services in your area
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Enter your ZIP code"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6">Search</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Locations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We serve major cities across the country with local teams ready to help
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <Image
                  src={location.image || "/placeholder.svg"}
                  alt={`${location.city} team`}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {location.city}, {location.state}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#2a738d] mt-0.5" />
                      <span className="text-gray-600 text-sm">{location.address}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-[#2a738d]" />
                      <span className="text-gray-600 text-sm">{location.phone}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-[#2a738d]" />
                      <span className="text-gray-600 text-sm">{location.email}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-[#2a738d] mt-0.5" />
                      <span className="text-gray-600 text-sm">{location.hours}</span>
                    </div>
                  </div>
                  <Button className="w-full mt-6 bg-[#2a738d] hover:bg-[#236073] text-white">Contact This Team</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Service Areas</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide cleaning services across multiple states and are continuously expanding
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
            {[
              "California",
              "New York",
              "Texas",
              "Florida",
              "Illinois",
              "Washington",
              "Arizona",
              "Nevada",
              "Oregon",
              "Colorado",
              "Georgia",
              "North Carolina",
            ].map((state, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow">
                <span className="font-medium text-gray-800">{state}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 lg:py-24 bg-[#2a738d]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Don't See Your Area?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            We're always expanding! Contact us to inquire about service in your area or franchise opportunities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-3">Request Service</Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#2a738d] px-8 py-3">
              Franchise Inquiry
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
