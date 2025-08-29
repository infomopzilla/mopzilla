"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, Mail, Phone } from "lucide-react"

const serviceOptions = [
  "House Cleaning",
  "Office Cleaning",
  "Commercial Cleaning",
  "Construction Cleaning",
  "Move-in and Move-out",
  "Airbnb",
]

const frequencyOptions = ["One-time", "Weekly", "Bi-weekly", "Monthly", "Quarterly"]

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    services: [] as string[],
    frequency: "",
    propertySize: "",
    message: "",
    preferredDate: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleServiceChange = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          services: [],
          frequency: "",
          propertySize: "",
          message: "",
          preferredDate: "",
        })
      } else {
        alert("Failed to submit quote request. Please try again.")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("Failed to submit quote request. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quote Request Submitted!</h2>
            <p className="text-gray-600 mb-6">
              Thank you for your interest in our services. We've received your quote request and will contact you within
              24 hours with a detailed estimate.
            </p>
            <Button
              onClick={() => setIsSubmitted(false)}
              className="bg-[#2a738d] hover:bg-[#236073] text-white px-8 py-3"
            >
              Submit Another Quote
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Get Your Free Quote</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Fill out the form below and we'll provide you with a detailed quote within 24 hours
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2a738d] bg-white text-gray-900 placeholder-gray-500"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2a738d] bg-white text-gray-900 placeholder-gray-500"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2a738d] bg-white text-gray-900 placeholder-gray-500"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Property Address *</label>
                  <textarea
                    required
                    value={formData.address}
                    onChange={(e) => setFormData((prev) => ({ ...prev, address: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2a738d] bg-white text-gray-900 placeholder-gray-500"
                    rows={3}
                    placeholder="Enter complete address"
                  />
                </div>
              </div>

              {/* Service Information */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Service Details</h3>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Services Needed *</label>
                  <div className="space-y-2">
                    {serviceOptions.map((service) => (
                      <label key={service} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={formData.services.includes(service)}
                          onChange={() => handleServiceChange(service)}
                          className="w-4 h-4 text-[#2a738d] border-gray-300 rounded focus:ring-[#2a738d]"
                        />
                        <span className="ml-2 text-gray-700">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Cleaning Frequency *</label>
                  <select
                    required
                    value={formData.frequency}
                    onChange={(e) => setFormData((prev) => ({ ...prev, frequency: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2a738d] bg-white text-gray-900"
                  >
                    <option value="">Select frequency</option>
                    {frequencyOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Property Size (sq ft)</label>
                  <input
                    type="text"
                    value={formData.propertySize}
                    onChange={(e) => setFormData((prev) => ({ ...prev, propertySize: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2a738d] bg-white text-gray-900 placeholder-gray-500"
                    placeholder="e.g., 2000 sq ft"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Start Date</label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData((prev) => ({ ...prev, preferredDate: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2a738d] bg-white text-gray-900 placeholder-gray-500"
                  />
                </div>
              </div>
            </div>

            {/* Additional Message */}
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Details or Special Requirements
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2a738d] bg-white text-gray-900 placeholder-gray-500"
                rows={4}
                placeholder="Tell us about any specific requirements, areas of focus, or questions you have..."
              />
            </div>

            {/* Submit Button */}
            <div className="mt-8 text-center">
              <Button
                type="submit"
                disabled={isSubmitting || formData.services.length === 0}
                className="bg-[#2a738d] hover:bg-[#236073] text-white px-12 py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Get Free Quote"}
              </Button>
              <p className="text-sm text-gray-500 mt-2">* Required fields. We'll respond within 24 hours.</p>
            </div>
          </form>
        </div>

        {/* Contact Info */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Need Immediate Assistance?</h3>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-[#2a738d]" />
              <span className="text-gray-700">+1-502-444-1740</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-[#2a738d]" />
              <span className="text-gray-700">info@mopzilla.cleaning</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
