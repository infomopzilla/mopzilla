'use client'
import { useState, ChangeEvent, FormEvent } from "react";
import { Button } from "@/components/ui/button";

type Position = {
  title: string;
};

type Props = {
  positions: Position[];
};

type FormState = {
  name: string;
  email: string;
  phone: string;
  position: string;
  message: string;
};

export default function ApplicationForm({ positions }: Props) {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");
    try {
      const res = await fetch("/api/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setSuccess("Application sent successfully!");
        setForm({ name: "", email: "", phone: "", position: "", message: "" });
      } else {
        setError(data.message || "Something went wrong.");
      }
    } catch (err) {
      setError("Something went wrong.");
    }
    setLoading(false);
  };

  return (
    <section className="py-16 lg:py-24 bg-gray-100">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Apply Now</h2>
          <p className="text-gray-600">Interested in joining Mopzilla? Fill out the form below and our team will contact you soon.</p>
        </div>
        <form className="bg-white rounded-lg shadow p-8 space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2a738d]"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2a738d]"
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Phone</label>
              <input
                type="tel"
                name="phone"
                required
                value={form.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2a738d]"
                placeholder="(555) 123-4567"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Position</label>
              <select
                name="position"
                required
                value={form.position}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2a738d]"
              >
                <option value="">Select Position</option>
                {positions.map((pos, idx) => (
                  <option key={idx} value={pos.title}>{pos.title}</option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Message</label>
            <textarea
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2a738d]"
              placeholder="Tell us about yourself or ask a question (optional)"
            />
          </div>
          <div className="text-center">
            <Button type="submit" className="bg-[#2a738d] hover:bg-[#236073] text-white px-8 py-3 text-lg" disabled={loading}>
              {loading ? "Submitting..." : "Submit Application"}
            </Button>
            {success && <p className="text-green-600 mt-4">{success}</p>}
            {error && <p className="text-red-600 mt-4">{error}</p>}
          </div>
        </form>
      </div>
    </section>
  );
}