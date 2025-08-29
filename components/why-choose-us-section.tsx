import { Check, Clock, DollarSign, Users } from "lucide-react"
import Image from "next/image"

const benefits = [
  {
    icon: Check,
    title: "Satisfaction Guaranteed",
    description: "We stand behind our work. If you’re not happy, we’ll make it right—your satisfaction is our top priority.",
  },
  {
    icon: Users,
    title: "Screened & Trained Team",
    description: "Our cleaners are background-checked, fully trained, and committed to delivering the highest standards every time.",
  },
  {
    icon: Clock,
    title: "Flexible Arrival Time",
    description: "We work around your schedule and offer flexible booking slots for your convenience.",
  },
  {
    icon: DollarSign,
    title: "Competitive Pricing",
    description: "Get premium cleaning services at affordable rates with clear, upfront pricing and no hidden fees.",
  },
]

export default function WhyChooseUsSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-10">
            <div>
              <p className="text-[#2a738d] font-medium mb-2">WHY CHOOSE US</p>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
                Why Choose Our
                <br />
                Service Provider
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="space-y-3">
                  <div className="w-12 h-12 border border-gray-200 rounded-lg flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-[#2a738d]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <Image
              src="/cr3.jpeg"
              alt="Professional cleaner at work"
              width={500}
              height={600}
              className="w-full h-auto "
            />
          </div>
        </div>
      </div>
    </section>
  )
}