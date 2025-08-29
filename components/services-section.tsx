import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAirbnb } from "@fortawesome/free-brands-svg-icons"
import { Home, Building2, ArrowLeftRightIcon , Waves, FactoryIcon, ConstructionIcon } from "lucide-react"

type Service = {
  title: string
  description: string
  icon: any
  isFontAwesome: boolean
  featured: boolean
}

const services: Service[] = [
  {
    title: "House Cleaning",
    description: "Thorough cleaning for every room in your home, tailored to your needs.",
    icon: Home,
    isFontAwesome: false,
    featured: false,
  },
  {
    title: "Office Cleaning",
    description: "Professional cleaning for offices and workspaces. We ensure a hygienic environment for you.",
    icon: Building2,
    isFontAwesome: false,
    featured: true,
  },
  {
    title: "Commercial Cleaning",
    description: "Professional cleaning for industries, shops, and commercial spaces.",
    icon: FactoryIcon,
    isFontAwesome: false,
    featured: false,
  },
  {
    title: "Construction Cleaning",
    description: "Post-construction and renovation cleaning to remove dust, debris, and residues. We make your new or remodeled space move-in ready.",
    icon: ConstructionIcon,
    isFontAwesome: false,
    featured: false,
  },
  {
    title: "Move-in and Move-out",
    description: "Deep cleaning to ensure your new or old place is spotless.",
    icon: ArrowLeftRightIcon ,
    isFontAwesome: false,
    featured: false,
  },
  {
    title: "Airbnb",
    description: "Fast, reliable cleaning for short-term rental turnovers.",
    icon: faAirbnb,
    isFontAwesome: true,
    featured: false,
  },
]

export default function ServicesSection() {
  return (
    <section className="py-16 lg:py-24 bg-[#2a738d] relative overflow-hidden">
      {/* Decorative sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {[
          { top: "top-20", left: "left-20", w: "w-4", h: "h-4", opacity: "text-white/20" },
          { top: "top-32", right: "right-32", w: "w-6", h: "h-6", opacity: "text-white/15" },
          { bottom: "bottom-40", left: "left-40", w: "w-3", h: "h-3", opacity: "text-white/25" },
          { top: "top-40", left: "left-1/2", w: "w-5", h: "h-5", opacity: "text-white/10" },
          { bottom: "bottom-32", right: "right-20", w: "w-4", h: "h-4", opacity: "text-white/20" },
          { top: "top-60", right: "right-60", w: "w-3", h: "h-3", opacity: "text-white/15" },
        ].map((style, idx) => (
          <div
            key={idx}
            className={`absolute ${style.top || ""} ${style.bottom || ""} ${style.left || ""} ${style.right || ""} ${style.w} ${style.h} ${style.opacity}`}
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <p className="text-white/80 text-sm font-medium mb-4 tracking-wider">WHAT WE DO</p>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
            We Offer Different Services to
            <br />
            Clean Your Area
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl text-center transition-all duration-300 hover:transform hover:scale-105 group cursor-pointer ${
                service.featured
                  ? "bg-[#1e5a6b] text-white shadow-xl hover:bg-[#2a738d]"
                  : "bg-white text-gray-800 shadow-lg hover:shadow-xl hover:bg-[#2a738d] hover:text-white"
              }`}
            >
              <div
                className={`w-16 h-16 mx-auto mb-6 rounded-lg flex items-center justify-center transition-all duration-300 ${
                  service.featured ? "bg-white/20 group-hover:bg-white/30" : "bg-[#2a738d]/10 group-hover:bg-white/20"
                }`}
              >
                {service.isFontAwesome ? (
                  <FontAwesomeIcon
                    icon={service.icon}
                    className={`w-8 h-8 transition-all duration-300 ${
                      service.featured ? "text-white" : "text-[#2a738d] group-hover:text-white"
                    }`}
                  />
                ) : (
                  <service.icon
                    className={`w-8 h-8 transition-all duration-300 ${
                      service.featured ? "text-white" : "text-[#2a738d] group-hover:text-white"
                    }`}
                  />
                )}
              </div>
              <h3
                className={`text-xl font-bold mb-4 transition-all duration-300 ${
                  service.featured ? "text-white" : "text-gray-800 group-hover:text-white"
                }`}
              >
                {service.title}
              </h3>
              <p
                className={`text-sm leading-relaxed transition-all duration-300 ${
                  service.featured ? "text-white/90" : "text-gray-600 group-hover:text-white/90"
                }`}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
