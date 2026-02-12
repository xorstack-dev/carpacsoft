import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    workEmail: "",
    phone: "",
    jobTitle: "",
    company: "",
    industry: "",
    country: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-1">

        {/* HERO SECTION */}
        <section className="relative bg-gradient-to-br from-[#1a4f78] to-[#003366] text-white py-16 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection className="max-w-2xl">
              <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4 text-white">
                Contact Us
              </h1>
              <p className="text-sm text-blue-100 mb-6">
                Thank you for your interest in connecting with us!
              </p>
              <ul className="text-sm text-white space-y-2 mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-white">•</span>
                  <span>For Sales Inquiries, please fill out the form.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white">•</span>
                  <span>For Support or our User Community, click the buttons below.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white">•</span>
                  <span>For Verifications of Employment, please email <a href="mailto:verifications@CarpacSoft.com" className="underline hover:text-[#f59e0b]">verifications@CarpacSoft.com</a></span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-bold py-3 px-8 rounded-full uppercase tracking-wide text-xs">
                  SUPPORT
                </Button>
                <Button className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-bold py-3 px-8 rounded-full uppercase tracking-wide text-xs">
                  USER COMMUNITY
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="bg-gradient-to-b from-[#e0f4fa] to-white py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12">

              {/* LEFT SIDE - Offices */}
              <div className="lg:w-1/2">
                <div className="flex flex-col md:flex-row gap-8 mb-12">

                  {/* Headquarters */}
                  <AnimatedSection className="flex-1">
                    <div className="rounded-lg overflow-hidden shadow-lg mb-4 group">
                      <img
                        src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=400&h=250"
                        alt="Portland Headquarters"
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="font-bold text-[#0066cc] text-lg mb-2">Headquarters</h3>
                    <p className="text-sm text-slate-600">135 SW Taylor, Suite 200</p>
                    <p className="text-sm text-slate-600 mb-2">Portland, OR 97204</p>
                    <p className="text-sm text-slate-700 font-semibold">971-930-1500</p>
                  </AnimatedSection>

                  {/* The Netherlands */}
                  <AnimatedSection delay={100} className="flex-1">
                    <div className="rounded-lg overflow-hidden shadow-lg mb-4 group">
                      <img
                        src="https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&q=80&w=400&h=250"
                        alt="Amsterdam Office"
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="font-bold text-[#0066cc] text-lg mb-2">The Netherlands</h3>
                    <p className="text-sm text-slate-600">Amsterdam Queens Tower</p>
                    <p className="text-sm text-slate-600">Delflandlaan 1, 1062EA</p>
                    <p className="text-sm text-slate-600">Amsterdam</p>
                  </AnimatedSection>
                </div>

                {/* Product Support Box */}
                <AnimatedSection delay={200}>
                  <div className="bg-gradient-to-r from-[#0066cc] to-[#0ea5e9] rounded-lg p-8 text-white">
                    <h3 className="text-xl font-bold mb-4">Looking for product support?</h3>
                    <p className="text-sm mb-4">
                      Check out our <a href="#" className="text-[#fbbf24] underline hover:text-white">Jama Community</a> to find and share solutions with CarpacSoft users around the world.
                    </p>
                    <p className="text-sm mb-4">
                      Access our <a href="#" className="text-[#fbbf24] underline hover:text-white">Help Guide</a> for product documentation.
                    </p>
                    <p className="text-sm">
                      Contact <a href="#" className="text-[#fbbf24] underline hover:text-white">Technical Support</a> to speak with one of our people.
                    </p>
                  </div>
                </AnimatedSection>
              </div>

              {/* RIGHT SIDE - Contact Form */}
              <AnimatedSection delay={300} className="lg:w-1/2">
                <div className="bg-white rounded-lg shadow-xl p-8">
                  <h2 className="text-2xl font-bold text-[#001e4d] mb-8">Contact Sales</h2>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name*"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20"
                      required
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name*"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20"
                      required
                    />
                    <input
                      type="email"
                      name="workEmail"
                      placeholder="Work Email*"
                      value={formData.workEmail}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20"
                      required
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number*"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20"
                      required
                    />
                    <input
                      type="text"
                      name="jobTitle"
                      placeholder="Job Title*"
                      value={formData.jobTitle}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20"
                      required
                    />
                    <input
                      type="text"
                      name="company"
                      placeholder="Company*"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20"
                      required
                    />
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20 text-slate-600"
                      required
                    >
                      <option value="">Industry*</option>
                      <option value="aerospace">Aerospace & Defense</option>
                      <option value="automotive">Automotive</option>
                      <option value="medical">Medical Device</option>
                      <option value="semiconductor">Semiconductor</option>
                      <option value="industrial">Industrial Manufacturing</option>
                      <option value="financial">Financial Services</option>
                      <option value="software">Software</option>
                      <option value="other">Other</option>
                    </select>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20 text-slate-600"
                      required
                    >
                      <option value="">Country*</option>
                      <option value="us">United States</option>
                      <option value="uk">United Kingdom</option>
                      <option value="de">Germany</option>
                      <option value="fr">France</option>
                      <option value="nl">Netherlands</option>
                      <option value="jp">Japan</option>
                      <option value="au">Australia</option>
                      <option value="ca">Canada</option>
                      <option value="other">Other</option>
                    </select>
                    <textarea
                      name="message"
                      placeholder="How can we help?"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20 resize-none"
                    />

                    <p className="text-xs text-slate-500">
                      Your <a href="#" className="text-[#0066cc] underline">privacy</a> is important to us.
                    </p>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#10b981] to-[#0ea5e9] hover:from-[#059669] hover:to-[#0284c7] text-white font-bold py-4 rounded-lg uppercase tracking-wide text-sm transition-all duration-300"
                    >
                      SEND
                    </Button>
                  </form>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Contact;



