import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Building2, Heart, GraduationCap, ShoppingBag, Factory, Home } from "lucide-react"
import Image from "next/image"

const sectors = [
  {
    title: "Corporate Offices",
    description:
      "Professional cleaning services for corporate environments, ensuring a productive and healthy workspace.",
    icon: Building2,
    features: ["Daily office cleaning", "Conference room maintenance", "Break room sanitization", "Lobby upkeep"],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Healthcare",
    description: "Specialized cleaning for hospitals, clinics, and medical facilities with strict hygiene protocols.",
    icon: Heart,
    features: [
      "Medical-grade disinfection",
      "Patient room cleaning",
      "Operating theater maintenance",
      "Infection control",
    ],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Education",
    description: "Safe and thorough cleaning for educational institutions from kindergarten to universities.",
    icon: GraduationCap,
    features: ["Classroom cleaning", "Library maintenance", "Cafeteria sanitization", "Dormitory cleaning"],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Retail",
    description: "Maintain an attractive shopping environment that enhances customer experience.",
    icon: ShoppingBag,
    features: ["Store floor cleaning", "Fitting room maintenance", "Display area upkeep", "Customer restrooms"],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Manufacturing",
    description: "Industrial-strength cleaning solutions for manufacturing and production facilities.",
    icon: Factory,
    features: ["Equipment cleaning", "Production floor maintenance", "Warehouse cleaning", "Safety compliance"],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Residential",
    description: "Premium home cleaning services for residential properties and apartment complexes.",
    icon: Home,
    features: ["House cleaning", "Apartment maintenance", "Move-in/out cleaning", "Deep cleaning services"],
    image: "/placeholder.svg?height=300&width=400",
  },
]

export default function SectorsPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-[#2a738d] py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Industry Sectors</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Specialized cleaning solutions for every industry with tailored approaches and expert knowledge
          </p>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {sectors.map((sector, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className="w-full lg:w-1/2">
                  <Image
                    src={sector.image || "/placeholder.svg"}
                    alt={sector.title}
                    width={500}
                    height={400}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
                <div className="w-full lg:w-1/2 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#2a738d] rounded-lg flex items-center justify-center">
                      <sector.icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">{sector.title}</h2>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed">{sector.description}</p>
                  <ul className="space-y-3">
                    {sector.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-[#2a738d] rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="bg-[#2a738d] hover:bg-[#236073] text-white px-8 py-3">Learn More</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
