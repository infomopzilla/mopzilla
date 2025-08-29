import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Check, Armchair } from "lucide-react"
import Image from "next/image"

const services = [
  "Upholstery deep cleaning",
  "Stain removal",
  "Fabric protection",
  "Leather conditioning",
  "Odor elimination",
  "Mattress cleaning",
  "Curtain and drape cleaning",
  "Carpet cleaning",
]

const furnitureTypes = [
  { name: "Sofas & Couches", price: "$80-150" },
  { name: "Chairs & Recliners", price: "$40-80" },
  { name: "Mattresses", price: "$60-120" },
  { name: "Curtains & Drapes", price: "$30-60" },
  { name: "Carpets & Rugs", price: "$50-100" },
  { name: "Leather Furniture", price: "$100-200" },
]

export default function FurnitureCleaningPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-[#2a738d] py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Armchair className="w-8 h-8 text-yellow-400" />
                <span className="text-yellow-400 font-medium">FURNITURE CARE</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Furniture Cleaning Services</h1>
              <p className="text-xl text-white/90 mb-8">
                Professional furniture and upholstery cleaning to restore and protect your valuable furniture
                investments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-3">Get Free Quote</Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#2a738d] px-8 py-3"
                >
                  Book Service
                </Button>
              </div>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Furniture cleaning service"
                width={500}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Furniture Cleaning Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Specialized cleaning techniques for all types of furniture and upholstery
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <Check className="w-5 h-5 text-[#2a738d]" />
                <span className="text-gray-700">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Pricing Guide</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Transparent pricing for all furniture cleaning services</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {furnitureTypes.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.name}</h3>
                <div className="text-2xl font-bold text-[#2a738d] mb-4">{item.price}</div>
                <Button className="w-full bg-[#2a738d] hover:bg-[#236073] text-white">Book Now</Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
