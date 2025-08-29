"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Jessica Oliver",
    position: "Business Owner",
    company: "Tech Solutions Inc.",
    image: "/user.png",
    rating: 5,
    text: "I have utilized my commercial to your team who has been servicing our facility for over 3 years now and they continue to exceed our expectations. Their attention to detail and professionalism is unmatched.",
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    position: "Facility Manager",
    company: "Healthcare Plus",
    image: "/user2.png",
    rating: 5,
    text: "Outstanding service! The cleaning team is reliable, thorough, and always professional. Our healthcare facility has never looked better. Highly recommend their services.",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    position: "Office Manager",
    company: "Creative Agency",
    image: "/user4.png",
    rating: 5,
    text: "Mopzilla has transformed our office environment. The team is punctual, efficient, and uses eco-friendly products. Our employees love coming to work in such a clean space.",
  },
  {
    id: 4,
    name: "David Chen",
    position: "Operations Director",
    company: "Manufacturing Corp",
    image: "/user3.png",
    rating: 5,
    text: "Exceptional industrial cleaning services. They handle our complex facility requirements with expertise and maintain the highest safety standards. Truly professional team.",
  },
]
export default function CustomerTestimonial() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-16 lg:py-24 bg-teal-600">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-1 gap-12 items-center">
          <div className="space-y-6">
            {/* Testimonial Slider */}
            <div className="bg-white rounded-lg p-6 shadow-lg relative">
              <div className="flex items-center justify-between mb-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={prevTestimonial}
                  className="text-[#2a738d] hover:bg-[#2a738d]/10"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>

                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? "bg-[#2a738d]" : "bg-gray-300"
                        }`}
                    />
                  ))}
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={nextTestimonial}
                  className="text-[#2a738d] hover:bg-[#2a738d]/10"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>

              <div className="text-center">
                <Image
                  src={currentTestimonial.image || "/placeholder.svg"}
                  alt={currentTestimonial.name}
                  width={80}
                  height={80}
                  className="w-20 h-20 rounded-full mx-auto mb-4"
                />

                <div className="flex justify-center mb-3">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <blockquote className="text-gray-700 text-lg leading-relaxed mb-4 italic">
                  "{currentTestimonial.text}"
                </blockquote>

                <div>
                  <h4 className="font-bold text-slate-700 text-lg">{currentTestimonial.name}</h4>
                  <p className="text-[#2a738d] font-medium">{currentTestimonial.position}</p>
                  <p className="text-gray-500 text-sm">{currentTestimonial.company}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
