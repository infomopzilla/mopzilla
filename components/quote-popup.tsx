"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { X, Check, Mail, Phone } from "lucide-react"

const serviceOptions = [
  "House Cleaning",
  "Office Cleaning",
  "Commercial Cleaning",
  "Construction Cleaning",
  "Move-in and Move-out",
  "Airbnb",
]

const frequencyOptions = ["One-time", "Weekly", "Bi-weekly", "Monthly", "Quarterly"]

interface QuotePopupProps {
  isOpen: boolean
  onClose: () => void
}

export default function QuotePopup({ isOpen, onClose }: QuotePopupProps) {
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

  const handleClose = () => {
    setIsSubmitted(false)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900">
            {isSubmitted ? "Quote Request Submitted!" : "Get Your Free Quote"}
          </h2>
          <button onClick={handleClose} className="text-gray-400 hover:text-gray-600 transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Thank You!</h3>
              <p className="text-gray-600 mb-6">
                We've received your quote request and will contact you within 24 hours with a detailed estimate.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-[#2a738d] hover:bg-[#236073] text-white px-6 py-2"
                >
                  Submit Another Quote
                </Button>
                <Button
                  onClick={handleClose}
                  variant="outline"
                  className="border-[#2a738d] text-[#2a738d] hover:bg-[#2a738d]/10 px-6 py-2"
                >
                  Close
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Contact Information</h3>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2a738d] bg-white text-gray-900 placeholder-gray-500 text-sm"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2a738d] bg-white text-gray-900 placeholder-gray-500 text-sm"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2a738d] bg-white text-gray-900 placeholder-gray-500 text-sm"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Property Address *</label>
                    <textarea
                      required
                      value={formData.address}
                      onChange={(e) => setFormData((prev) => ({ ...prev, address: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2a738d] bg-white text-gray-900 placeholder-gray-500 text-sm"
                      rows={2}
                      placeholder="Enter complete address"
                    />
                  </div>
                </div>

                {/* Service Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Service Details</h3>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Services Needed *</label>
                    <div className="space-y-2 max-h-32 overflow-y-auto">
                      {serviceOptions.map((service) => (
                        <label key={service} className="flex items-center">
                          <input
                            type="checkbox"
                            checked={formData.services.includes(service)}
                            onChange={() => handleServiceChange(service)}
                            className="w-4 h-4 text-[#2a738d] border-gray-300 rounded focus:ring-[#2a738d]"
                          />
                          <span className="ml-2 text-sm text-gray-700">{service}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Cleaning Frequency *</label>
                    <select
                      required
                      value={formData.frequency}
                      onChange={(e) => setFormData((prev) => ({ ...prev, frequency: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2a738d] bg-white text-gray-900 text-sm"
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
                    <label className="block text-sm font-medium text-gray-700 mb-1">Property Size (sq ft)</label>
                    <input
                      type="text"
                      value={formData.propertySize}
                      onChange={(e) => setFormData((prev) => ({ ...prev, propertySize: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2a738d] bg-white text-gray-900 placeholder-gray-500 text-sm"
                      placeholder="e.g., 2000 sq ft"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Start Date</label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData((prev) => ({ ...prev, preferredDate: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2a738d] bg-white text-gray-900 text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Additional Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Additional Details or Special Requirements
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2a738d] bg-white text-gray-900 placeholder-gray-500 text-sm"
                  rows={3}
                  placeholder="Tell us about any specific requirements..."
                />
              </div>

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4 border-t">
                <Button
                  type="button"
                  onClick={handleClose}
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-2"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting || formData.services.length === 0}
                  className="bg-[#2a738d] hover:bg-[#236073] text-white px-8 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Get Free Quote"}
                </Button>
              </div>
              <p className="text-xs text-gray-500 text-center">* Required fields. We'll respond within 24 hours.</p>
            </form>
          )}
        </div>

        {/* Contact Info */}
        {!isSubmitted && (
          <div className="bg-gray-50 px-6 py-4 border-t">
            <div className="text-center">
              <p className="text-sm font-medium text-gray-900 mb-2">Need Immediate Assistance?</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm">
                <div className="flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4 text-[#2a738d]" />
                  <span className="text-gray-700">+1-502-444-1740</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Mail className="w-4 h-4 text-[#2a738d]" />
                  <span className="text-gray-700">info@mopzilla.cleaning</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
