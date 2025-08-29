import Header from "@/components/header";
import Footer from "@/components/footer";
import { FaCalendarAlt, FaTimesCircle, FaClock, FaSoap, FaHome, FaPaw, FaBan, FaLock, FaCamera, FaBomb, FaCreditCard, FaPlus, FaReceipt, FaQuestionCircle, FaMapPin, FaGlobe } from "react-icons/fa";

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="bg-gray-50 min-h-[60vh] py-12">
        <div className="container mx-auto px-4 max-w-3xl bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-4xl font-bold mb-6 text-slate-800">Terms & Conditions</h1>
          <p className="mb-6 text-gray-700 text-lg">By booking with Mopzilla Cleaning through our website, phone, or social media, you agree to the following terms and conditions. These terms are designed to ensure clarity, safety, and the highest level of service for our clients and staff.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-2 flex items-center gap-2 text-slate-700"><FaCalendarAlt className="inline" /> Scheduling</h2>
          <p className="mb-2 text-gray-700">All schedule changes must be made directly with our office. Do not contact our cleaning technicians for cancellations or rescheduling, as they do not manage appointments.</p>
          <div className="mb-4 text-gray-700">
            <span className="font-semibold">To make changes, contact us at:</span>
            <div className="flex items-center gap-2 mt-1">
              <span className="font-semibold">Email:</span>
              <a href="mailto:info@mopzilla.cleaning" className="text-teal-600 underline">info@mopzilla.cleaning</a>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">Phone:</span>
              <a href="tel:+15024441740" className="text-teal-600 underline">(502) 444-1740</a>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-2 flex items-center gap-2 text-slate-700"><FaTimesCircle className="inline" /> Cancellation & Rescheduling Policy</h2>
          <p className="mb-2 text-gray-700">To serve you better and ensure fair scheduling for our staff, we apply the following policy:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-2">
            <li><span className="font-semibold">Less than 24 hours’ notice / same-day cancellation / no-show or lockout:</span> 100% of the scheduled service fee will be charged.</li>
            <li><span className="font-semibold">24–48 hours before appointment:</span> A $50 fee per team member assigned will apply.</li>
            <li><span className="font-semibold">More than 48 hours (2+ days):</span> No charge.</li>
          </ul>
          <p className="mb-4 text-gray-700">Reminders are sent via email or text 24–72 hours before your service. Please update your contact information with us to ensure you receive reminders.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-2 flex items-center gap-2 text-slate-700"><FaClock className="inline" /> Appointment Windows</h2>
          <p className="mb-4 text-gray-700">We allow a 1-hour arrival window. For example, if your appointment is at 10:00 am, your technician may arrive between 10:00 am and 11:00 am. This helps accommodate route planning and delays.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-2 flex items-center gap-2 text-slate-700"><FaSoap className="inline" /> Satisfaction Guarantee</h2>
          <p className="mb-4 text-gray-700">If you're not satisfied with the service, you must report the issue within 24 hours of your cleaning. Contact us at <a href="mailto:info@mopzilla.cleaning" className="text-teal-600 underline">info@mopzilla.cleaning</a> with photos and a detailed explanation. A re-clean may be scheduled, but refunds are not guaranteed without prior inspection by a supervisor.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-2 flex items-center gap-2 text-slate-700"><FaHome className="inline" /> Access to Your Home</h2>
          <p className="mb-4 text-gray-700">If you won’t be home during the cleaning, please provide clear entry instructions (e.g., keypad, lockbox). Our team must be able to access the property on time. Lockouts will be considered cancellations and are subject to fees.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-2 flex items-center gap-2 text-slate-700"><FaPaw className="inline" /> Pets</h2>
          <p className="mb-4 text-gray-700">We love pets, but for safety, we ask that they be secured during cleanings. Mopzilla Cleaning is not responsible for pet behavior during visits.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-2 flex items-center gap-2 text-slate-700"><FaBan className="inline" /> We Do Not Clean</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
            <li>Human or animal waste</li>
            <li>Mold, blood, or biohazards</li>
            <li>Pest infestations</li>
            <li>Hoarding situations</li>
            <li>Heavy scrubbing of walls/ceilings</li>
            <li>Climbing higher than a 2-step ladder</li>
            <li>Moving furniture over 25 lbs</li>
            <li>Inside fragile display cabinets</li>
            <li>Excessive buildup on blinds</li>
            <li>Excessive clutter or trash (unless agreed in advance)</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-2 flex items-center gap-2 text-slate-700"><FaPaw className="inline" /> Clutter Policy</h2>
          <p className="mb-4 text-gray-700">For best results, please remove clutter, toys, laundry, or items from surfaces and floors. If not, cleaning may be limited to accessible areas, or an additional organizing fee may apply.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-2 flex items-center gap-2 text-slate-700"><FaLock className="inline" /> Safety & Confidentiality</h2>
          <p className="mb-2 text-gray-700">Please remove or store away any:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
            <li>Sharp objects (e.g., needles, blades)</li>
            <li>Firearms or weapons</li>
            <li>Confidential or sensitive documents</li>
            <li>Illicit substances</li>
          </ul>
          <p className="mb-4 text-gray-700">If our staff feels unsafe, the cleaning may be canceled immediately.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-2 flex items-center gap-2 text-slate-700"><FaCamera className="inline" /> Photos & Documentation</h2>
          <p className="mb-4 text-gray-700">We may take before-and-after photos of our work (never showing faces, addresses, or personal details) for internal training or marketing purposes.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-2 flex items-center gap-2 text-slate-700"><FaBomb className="inline" /> Damages</h2>
          <p className="mb-4 text-gray-700">If an item is accidentally damaged during service, notify us within 24 hours with photos and a description. We may request a visit to assess. Claims submitted after this period may not be honored. Liability is limited to the cost of the damaged item, or a maximum of 10x the cleaning fee.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-2 flex items-center gap-2 text-slate-700"><FaBan className="inline" /> Direct Hiring / Solicitation</h2>
          <p className="mb-4 text-gray-700">Clients agree not to hire Mopzilla Cleaning staff directly for private work during or up to 12 months after service. A $2,500 breach fee will apply if this condition is violated.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-2 flex items-center gap-2 text-slate-700"><FaCreditCard className="inline" /> Pricing</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-2">
            <li>Size of home (sq. ft.)</li>
            <li>Condition and type of cleaning</li>
            <li>Time since last professional cleaning</li>
          </ul>
          <p className="mb-4 text-gray-700">We reserve the right to adjust pricing if the home is significantly dirtier than described. Extra time will be billed at $50–$60/hour per cleaner with client approval.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-2 flex items-center gap-2 text-slate-700"><FaCreditCard className="inline" /> Fees</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
            <li>Cleaning Supply Fee: $15 per job</li>
            <li>Credit Card Processing Fee: 2.9%</li>
            <li>Sales Tax: Applied as required by state/local law</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-2 flex items-center gap-2 text-slate-700"><FaPlus className="inline" /> Add-On Services</h2>
          <p className="mb-4 text-gray-700">Services like fridge, oven, cabinet cleaning, or hand-wiped baseboards can be added at booking.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-2 flex items-center gap-2 text-slate-700"><FaClock className="inline" /> Time Limitations</h2>
          <p className="mb-4 text-gray-700">If you request a fixed time (e.g., 2 hours only), we will stop cleaning when that time ends, regardless of task completion. In such cases, the satisfaction guarantee does not apply.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-2 flex items-center gap-2 text-slate-700"><FaReceipt className="inline" /> Payments & Collections</h2>
          <p className="mb-4 text-gray-700">Payment is due on the day of service. Unpaid balances after 30 days may be referred to collections. A $50 collections fee may apply. Clients will also be responsible for legal or collection-related expenses if needed.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-2 flex items-center gap-2 text-slate-700"><FaQuestionCircle className="inline" /> Lost or Loose Items</h2>
          <p className="mb-4 text-gray-700">Please remove jewelry, cash, and personal items before the cleaning. We are not responsible for items lost or damaged due to clutter or items left in pockets.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-2 flex items-center gap-2 text-slate-700"><FaMapPin className="inline" /> Contact Information</h2>
          <div className="mb-2 text-gray-700">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-semibold">Mopzilla Cleaning</span>
            </div>
            <div className="flex items-center gap-2 mb-1">
              <FaMapPin className="text-teal-600" />
              <span>Northern Kentucky</span>
            </div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-semibold">Phone:</span>
              <a href="tel:+15024441740" className="text-teal-600 underline">(502) 444-1740</a>
            </div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-semibold">Email:</span>
              <a href="mailto:info@mopzilla.cleaning" className="text-teal-600 underline">info@mopzilla.cleaning</a>
            </div>
            <div className="flex items-center gap-2">
              <FaGlobe className="text-teal-600" />
              <a href="https://www.mopzilla.cleaning" className="text-teal-600 underline" target="_blank" rel="noopener noreferrer">www.mopzilla.cleaning</a>
            </div>
          </div>

          <p className="text-gray-500 text-sm mt-8">Last updated: June 2024</p>
        </div>
      </main>
      <Footer />
    </>
  );
} 