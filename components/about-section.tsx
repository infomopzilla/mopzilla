import { Button } from "@/components/ui/button"
import { Check, Shield } from "lucide-react"

const benefits = [
  "Loaded with Professional and Honest Cleaners",
  "Provide the Finest Cleaning Supplies", 
  "100% Satisfaction Cleaning Service",
  "We are bonded and insured",
]

export default function AboutSection() {
  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Decorative curved shape */}
      <div className="absolute right-0 top-0 h-full w-1/3 pointer-events-none opacity-20 hidden lg:block">
        <svg viewBox="0 0 200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M198.904 0.559143C156.081 40.5592 120.904 120.559 142.904 220.559C164.904 320.559 40.9036 400.559 4.90356 480.559C-31.0964 560.559 28.9036 640.559 100.904 720.559C172.904 800.559 198.904 800.559 198.904 800.559"
            stroke="#2a738d"
            strokeWidth="80"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left side with overlapping images */}
          <div className="w-full lg:w-1/2 relative flex items-center justify-center min-h-[420px]">
            {/* Back blue box */}

            {/* Back yellow box */}
            
            {/* Top image */}
            <div className="absolute overflow-hidden">
              <img
                src="/about.png"
                alt="Professional cleaner"
                width={220}
                height={220}
                className="w-full h-full"
              />
            </div>
            {/* Bottom image */}
          </div>

          {/* Right side with content - matching the image exactly */}
          <div className="w-full lg:w-1/2 space-y-6">
            {/* Main heading */}
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
              We use only Non-Toxic & Non-Allergenic
              <br />
              cleaning products and methods.
            </h2>
            
            {/* Description text */}
            <p className="text-gray-600 leading-relaxed mb-6">
              we help clients avoid allergic reactions and respiratory problems. Safe for babies, pets and everyone at home.
            </p>
            
            <p className="text-gray-600 leading-relaxed mb-8">
              We avoid bleaches, ammonias and toxic cleaners like the plague.
            </p>

            {/* Two feature boxes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
              {/* Left feature box */}
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-[#236073] rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg">
                  Certified Cleaning Teams
                  <br />
                  Cleaning Awesomeness
                </h3>
                <p className="text-gray-600 text-sm">
                  Your cleaning team will be consistent, dependable and professional every time.
                </p>
              </div>

              {/* Right feature box */}
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-[#236073] rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg">
                  We won't rotate your favorite cleaners.
                  <br />
                  Count on it!
                </h3>
                <p className="text-gray-600 text-sm">
                  We will NEVER rotate your cleaning team except at your request.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}