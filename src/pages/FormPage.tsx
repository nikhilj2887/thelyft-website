import { useState } from 'react';
import { Send, User, Building, Mail, Phone, MessageSquare, Briefcase } from 'lucide-react';
import Navbar from '../components/Navbar';
import emailjs from '@emailjs/browser';

export default function FormPage() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault();
    setIsSubmitting(true);

    try {

      await emailjs.send(
        "service_mpv2zhy",
        "template_3wocfs1",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          role: formData.role,
          service: formData.service,
          message: formData.message,
        },
        "eJavp4TkqXR9RoRJR"
      );

      setSubmitStatus('success');

      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        role: '',
        service: '',
        message: '',
      });

    } catch (error) {

      console.error("Email send error:", error);
      setSubmitStatus('error');

    }

    setIsSubmitting(false);

    setTimeout(() => {
      setSubmitStatus('idle');
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">

      <Navbar />

      <div className="relative z-10 min-h-screen flex flex-col pt-28">

        <div className="flex-1 flex justify-center px-4 sm:px-6 lg:px-8 py-12">

          <div className="max-w-2xl w-full">

            <div className="bg-white border border-[#5392d5]/20 rounded-3xl p-8 shadow-2xl">

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
                  Request submitted successfully. We will contact you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg">
                  Something went wrong. Please try again.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">

                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#5392d5] outline-none"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border rounded-lg"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border rounded-lg"
                />

                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full p-4 border rounded-lg"
                />

                <input
                  type="text"
                  name="role"
                  placeholder="Your Role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full p-4 border rounded-lg"
                />

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border rounded-lg"
                >
                  <option value="">Select Service</option>
                  <option value="permanent-staffing">Permanent Staffing</option>
                  <option value="temporary-staffing">Temporary Staffing</option>
                  <option value="executive-search">Executive Search</option>
                  <option value="rpo">Recruitment Process Outsourcing</option>
                  <option value="consulting">Consulting Services</option>
                </select>

                <textarea
                  name="message"
                  placeholder="Tell us about your needs"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full p-4 border rounded-lg"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#5392d5] text-white py-4 rounded-lg flex items-center justify-center gap-2"
                >
                  {isSubmitting ? "Sending..." : "Submit Request"}
                  <Send className="w-5 h-5" />
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}