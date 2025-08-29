import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import BrandLogos from "@/components/brand-logos"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import BenefitsSection from "@/components/benefits-section"
import CertificationsSection from "@/components/certifications-section"
import StatsSection from "@/components/stats-section"
import TestimonialsSection from "@/components/testimonials-section"
import FranchiseCards from "@/components/franchise-cards"
import CustomerTestimonial from "@/components/customer-testimonial"
import CommunitySection from "@/components/community-section"
import Footer from "@/components/footer"
import WhyChooseUsSection from "@/components/why-choose-us-section"
import HowWeWorkSection from "@/components/how-we-work-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      {/* <BrandLogos /> */}
      <CertificationsSection/>
      <AboutSection />
      <ServicesSection />
      <BenefitsSection />
      <WhyChooseUsSection/>
      {/* <StatsSection /> */}
      <TestimonialsSection />
      <FranchiseCards />
      <CustomerTestimonial />
      <HowWeWorkSection/>
      <Footer />
    </div>
  )
}
