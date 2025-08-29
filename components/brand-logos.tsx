import Image from "next/image"

export default function BrandLogos() {
  return (
    <section className="bg-[#2a738d] py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          <div className="w-32 md:w-36 lg:w-40">
            <Image
              src="/brand-1.png"
              alt="Client Logo 1"
              width={150}
              height={40}
              className="w-full h-auto brightness-0 invert opacity-90"
            />
          </div>
          <div className="w-32 md:w-36 lg:w-40">
            <Image
              src="/brand-2.png"
              alt="Client Logo 2"
              width={150}
              height={40}
              className="w-full h-auto brightness-0 invert opacity-90"
            />
          </div>
          <div className="w-32 md:w-36 lg:w-40">
            <Image
              src="/brand-3.png"
              alt="Client Logo 3"
              width={150}
              height={40}
              className="w-full h-auto brightness-0 invert opacity-90"
            />
          </div>
          <div className="w-32 md:w-36 lg:w-40">
            <Image
              src="/brand-4.png"
              alt="Client Logo 4"
              width={150}
              height={40}
              className="w-full h-auto brightness-0 invert opacity-90"
            />
          </div>
          <div className="w-32 md:w-36 lg:w-40">
            <Image
              src="/brand-5.png"
              alt="Client Logo 5"
              width={150}
              height={40}
              className="w-full h-auto brightness-0 invert opacity-90"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
