import Image from "next/image"

export default function CertificationsSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-700">
              CERTIFIED CLEANERS FOR
              <br />
              YOUR BUSINESS
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our team holds industry-leading certifications and undergoes continuous training to ensure we deliver the
              highest quality cleaning services. We are committed to maintaining the highest standards of
              professionalism and expertise.
            </p>
            <p className="text-gray-600 leading-relaxed">
              All our cleaning professionals are fully insured, bonded, and background-checked for your peace of mind
              and security.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-yellow-400 rounded-lg z-0"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-teal-600 rounded-lg z-0"></div>
            <Image
              src="/cr3.png"
              alt="Certified cleaning team at work"
              width={500}
              height={500}
              className="relative z-10 w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
