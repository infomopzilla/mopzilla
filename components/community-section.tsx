import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function CommunitySection() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-700">
              KEEPING OUR
              <br />
              COMMUNITIES CLEAN
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We are committed to making a positive impact in the communities we serve. Through our comprehensive
              cleaning services and community involvement, we help create healthier, safer environments for everyone.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our team takes pride in contributing to the well-being of local businesses and organizations, supporting
              economic growth and community development.
            </p>
            <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3">LEARN MORE ABOUT US</Button>
          </div>

          <div className="relative">
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-yellow-400 rounded-lg z-0"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-teal-600 rounded-lg z-0"></div>
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Community cleaning 1"
                width={200}
                height={200}
                className="w-full h-auto rounded-lg"
              />
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Community cleaning 2"
                width={200}
                height={200}
                className="w-full h-auto rounded-lg"
              />
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Community cleaning 3"
                width={200}
                height={200}
                className="w-full h-auto rounded-lg"
              />
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Community cleaning 4"
                width={200}
                height={200}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
