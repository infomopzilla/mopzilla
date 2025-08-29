import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, DollarSign, Users, Heart, TrendingUp } from "lucide-react"
import Image from "next/image"
import ApplicationForm from "@/components/applicationForm"

const positions = [
  { title: "Cleaning Technician" },
  { title: "Team Leader" },
  { title: "Operations Manager" },
  { title: "Customer Service Representative" },
  { title: "Sales Representative" },
  { title: "Quality Inspector" },
];

const benefits = [
  {
    icon: DollarSign,
    title: "Competitive Pay",
    description: "Above-market wages with performance bonuses and regular pay increases",
  },
  {
    icon: Heart,
    title: "Health Benefits",
    description: "Comprehensive health, dental, and vision insurance for you and your family",
  },
  {
    icon: Clock,
    title: "Flexible Schedule",
    description: "Work-life balance with flexible scheduling options and paid time off",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "Clear advancement opportunities and professional development programs",
  },
  {
    icon: Users,
    title: "Team Environment",
    description: "Supportive team culture with recognition and appreciation programs",
  },
]


export default function CareersPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-[#2a738d] py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Join Our Team</h1>
              <p className="text-xl text-white/90 mb-8">
                Build a rewarding career with Mopzilla. We offer competitive benefits, growth opportunities, and a
                supportive work environment.
              </p>
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-3 text-lg">
                View Open Positions
              </Button>
            </div>
            <div>
              <Image
                src="/why2.png"
                alt="Join our team"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Work With Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We believe in taking care of our employees because they take care of our clients
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6">
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

      <ApplicationForm positions={positions} />

      {/* Application Process */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Application Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Simple steps to join our team</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-gray-900">1</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Apply Online</h3>
              <p className="text-gray-600 text-sm">Submit your application through our online portal</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-gray-900">2</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Phone Interview</h3>
              <p className="text-gray-600 text-sm">Initial phone screening with our HR team</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-gray-900">3</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">In-Person Interview</h3>
              <p className="text-gray-600 text-sm">Meet with the local team manager</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-gray-900">4</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Start Working</h3>
              <p className="text-gray-600 text-sm">Begin your career with comprehensive training</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-16 lg:py-24 bg-[#2a738d]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Start Your Career?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied employees who have built successful careers with Mopzilla
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-3 text-lg">Apply Today</Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#2a738d] px-8 py-3 text-lg"
            >
              Contact HR
            </Button>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  )
}
