import { DollarSign, Clock, Shield, Sparkles, ThumbsUp, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const benefits = [
  {
    icon: DollarSign,
    title: "SAVE TIME & MONEY",
    description:
      "Our efficient cleaning processes and competitive pricing help you save both time and money while maintaining the highest standards of cleanliness.",
  },
  {
    icon: Clock,
    title: "OUR SERVICES, YOUR SCHEDULE",
    description:
      "We work around your schedule — whether it's your home, office, or rental — to ensure cleaning happens at your convenience.",
  },
  {
    icon: Shield,
    title: "VERSATILE EXPERTISE",
    description:
      "From homes and offices to Airbnbs and post-construction sites, our team is trained for all types of environments.",
  },
  {
    icon: Sparkles,
    title: "DETAILED & THOROUGH",
    description:
      "We focus on every corner — kitchens, bathrooms, workspaces — ensuring a spotless result every time.",
  },
  {
    icon: ThumbsUp,
    title: "RELIABLE & TRUSTED",
    description:
      "Our experienced, background-checked cleaners consistently deliver top-tier service you can depend on.",
  },
  {
    icon: Users,
    title: "CUSTOMER-FOCUSED APPROACH",
    description:
      "We listen to your needs and customize our service for your lifestyle or business environment.",
  },
]

export default function BenefitsSection() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-yellow-400 rounded-lg z-0"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-teal-600 rounded-lg z-0"></div>
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <Image
                src="/why.png"
                alt="Office cleaning"
                width={200}
                height={200}
                className="w-full h-auto rounded-lg"
              />
              <Image
                src="/why2.png"
                alt="Professional cleaning team"
                width={200}
                height={200}
                className="w-full h-auto rounded-lg"
              />
              <Image
                src="/why3.png"
                alt="Cleaning equipment"
                width={200}
                height={200}
                className="w-full h-auto rounded-lg"
              />
              <Image
                src="/why4.png"
                alt="Clean office space"
                width={200}
                height={200}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-700">
              BENEFITS OF OUR CLEANING SERVICES
              <br />
              FOR YOUR HOME & BUSINESS
            </h2>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#2a738d] rounded-lg flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-700 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button className="bg-[#2a738d] hover:bg-[#236073] text-white px-8 py-3">
              GET FREE ESTIMATE
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
