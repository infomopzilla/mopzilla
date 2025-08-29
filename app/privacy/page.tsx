import Header from "@/components/header";
import Footer from "@/components/footer";

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="bg-gray-50 min-h-[60vh] py-12">
        <div className="container mx-auto px-4 max-w-3xl bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-4xl font-bold mb-6 text-slate-800">Privacy Policy <span className="text-teal-600">– Mopzilla Cleaning</span></h1>
          <p className="mb-4 text-gray-700 text-lg">At Mopzilla Cleaning, your privacy is very important to us. This Privacy Policy explains how we collect, use, and protect your personal information.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-2 text-slate-700">Information We Collect</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
            <li>Your name</li>
            <li>Phone number</li>
            <li>Email address</li>
            <li>Postal code</li>
            <li>Service preferences</li>
            <li>Other details you provide via forms or contact on our website/ads</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-2 text-slate-700">How We Use Your Information</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
            <li>To respond to your inquiries</li>
            <li>To provide quotes</li>
            <li>To schedule services</li>
            <li>To send occasional updates or promotions (if you agree)</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-2 text-slate-700">Information Sharing</h2>
          <p className="mb-4 text-gray-700">We do not sell, rent, or share your personal data with third parties, except as required by law or to fulfill your service request.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-2 text-slate-700">Data Security</h2>
          <p className="mb-4 text-gray-700">We take reasonable precautions to protect your data from unauthorized access, disclosure, or loss.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-2 text-slate-700">Your Choices</h2>
          <p className="mb-4 text-gray-700">You may request to access, update, or delete your personal information at any time by contacting us at <a href="mailto:mopzillacleaning@gmail.com" className="text-teal-600 underline">mopzillacleaning@gmail.com</a>.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-2 text-slate-700">Policy Updates</h2>
          <p className="mb-4 text-gray-700">We may update this policy periodically. Any changes will be posted on this page.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-2 text-slate-700">Contact Us</h2>
          <div className="mb-2 text-gray-700">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-semibold">Email:</span>
              <a href="mailto:mopzillacleaning@gmail.com" className="text-teal-600 underline">mopzillacleaning@gmail.com</a>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">Phone:</span>
              <a href="tel:+15024441740" className="text-teal-600 underline">(502) 444‑1740</a>
            </div>
          </div>

          <p className="text-gray-500 text-sm mt-8">Last updated: June 2024</p>
        </div>
      </main>
      <Footer />
    </>
  );
} 