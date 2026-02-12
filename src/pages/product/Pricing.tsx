import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Check,
  Users,
  UserCheck,
  Eye,
  FileText,
  Cloud,
  Database,
  Zap,
  Box,
  Server,
  Play,
  ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";

const valueProps = [
  {
    icon: Server,
    text: "No charge for hosting",
  },
  {
    icon: UserCheck,
    text: "No charge for reviewers",
  },
  {
    icon: Zap,
    text: "No charge for API usage",
  },
  {
    icon: Database,
    text: "No charge for file storage",
  },
  {
    icon: Box,
    text: "No charge for hosted sandbox",
  },
];

const licenseTypes = [
  {
    icon: Users,
    name: "CREATOR",
    desc: "Most roles require full Creator access to bring all development activity online. Creators can create, edit, and manage requirements, test cases, traceability, workflows, reviews, reports, dashboards, access the API, and more.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: FileText,
    name: "STAKEHOLDER",
    desc: "Limited access to view and comment on any ongoing development effort. Stakeholders are typically limited to engineering leadership.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Eye,
    name: "REVIEWER",
    desc: "Participate in formal review and approval workflows to provide input, view feedback, and digitally sign off on work. Reviewers are typically executive managers, customers, or other ad-hoc stakeholders.",
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: Play,
    name: "TEST RUNNER",
    desc: "Limited test functionality access for test and verification & validation teams to write and/or edit test plans, execute test runs, and log defects. A Creator license is required to create test cases.",
    color: "bg-teal-100 text-teal-600",
  },
];

const capabilities = [
  {
    category: "WRITE",
    rows: [
      { name: "Create projects", creator: true, stakeholder: false, reviewer: false, testRunner: false },
      { name: "Add and manage requirements", creator: true, stakeholder: false, reviewer: false, testRunner: false },
      { name: "Create reports and dashboards", creator: true, stakeholder: false, reviewer: false, testRunner: false },
      { name: "Initiate reviews", creator: true, stakeholder: false, reviewer: false, testRunner: false },
      { name: "Access API", creator: true, stakeholder: false, reviewer: false, testRunner: false },
      { name: "Create test cases", creator: true, stakeholder: false, reviewer: false, testRunner: false },
      { name: "Write / edit test plans", creator: true, stakeholder: false, reviewer: false, testRunner: true },
      { name: "Execute test runs and log defects", creator: true, stakeholder: false, reviewer: false, testRunner: true },
    ],
  },
  {
    category: "READ/COMMENT",
    rows: [
      { name: "Read access", creator: true, stakeholder: true, reviewer: false, testRunner: true },
      { name: "View reports and dashboards", creator: true, stakeholder: true, reviewer: false, testRunner: true },
      { name: "Comment within project", creator: true, stakeholder: true, reviewer: false, testRunner: true },
      { name: "View activity stream", creator: true, stakeholder: true, reviewer: false, testRunner: true },
      { name: "Participate in collaboration stream", creator: true, stakeholder: true, reviewer: false, testRunner: true },
    ],
  },
  {
    category: "REVIEW",
    rows: [
      { name: "Participate in reviews", creator: true, stakeholder: true, reviewer: true, testRunner: true },
      { name: "Provide feedback and changes", creator: true, stakeholder: true, reviewer: true, testRunner: true },
      { name: "Add electronic signature", creator: true, stakeholder: true, reviewer: true, testRunner: true },
      { name: "Reply to collaboration stream", creator: true, stakeholder: true, reviewer: true, testRunner: true },
    ],
  },
];

const customerLogos = [
  { name: "ABIOMED", url: "/logos/abiomed.png" },
  { name: "Rimac", url: "/logos/rimac.png" },
  { name: "SITA", url: "/logos/sita.png" },
  { name: "Collins Aerospace", url: "/logos/collins.png" },
  { name: "NVIDIA", url: "/logos/nvidia.png" },
  { name: "Panasonic Automotive", url: "/logos/panasonic.png" },
];

const Pricing = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    workEmail: "",
    phone: "",
    company: "",
    industry: "",
    country: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your interest! Our sales team will get back to you shortly.");
    setFormData({
      firstName: "",
      lastName: "",
      workEmail: "",
      phone: "",
      company: "",
      industry: "",
      country: ""
    });
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#0057b8] to-[#003c7e] py-24 lg:py-32 overflow-hidden text-white">
          <div className="absolute inset-0 bg-[url('https://www.jamasoftware.com/media/2021/02/jama-connect-laptop-img-1030x553.png')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection className="max-w-4xl mx-auto text-center">
              <img src="/Logo.jpg" alt="CarpacSoft" className="h-12 mx-auto mb-8" />
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-6 leading-tight text-white">
                Our licensing approach makes it easy and cost-effective to bring all people and files in the development process online.
              </h1>
              <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
                Only CarpacSoft offers reviewer licenses, hosting, API usage and file storage at no extra charge.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/trial">
                  <Button className="bg-[#ff8f00] hover:bg-[#e68200] text-white font-bold px-8 py-6 rounded-full uppercase tracking-wide text-sm border-none shadow-lg">
                    GET STARTED
                  </Button>
                </Link>
                <a href="#request-pricing">
                  <Button className="bg-white text-[#0057b8] hover:bg-slate-100 font-bold px-8 py-6 rounded-full uppercase tracking-wide text-sm border-none shadow-lg">
                    REQUEST PRICING
                  </Button>
                </a>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Value Props Section */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#404040] mb-4">
                Others Charge for Everything, CarpacSoft is Free to Invite All and Store All
              </h2>
              <p className="text-slate-600">
                Your success depends on bringing the development process fully online — and a licensing approach should encourage it, not block it.
              </p>
            </AnimatedSection>

            <div className="flex flex-wrap justify-center gap-8 lg:gap-16 max-w-6xl mx-auto">
              {valueProps.map((prop, i) => (
                <AnimatedSection key={i} delay={i * 100} className="flex flex-col items-center">
                  <div className="relative mb-4">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md border border-slate-100">
                      <prop.icon className="w-8 h-8 text-[#00bcc2]" strokeWidth={1.5} />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-[#00bcc2] text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm border-2 border-white transform rotate-[-10deg]">
                      FREE
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-slate-700 text-center max-w-[120px]">{prop.text}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* License Types Section */}
        <section className="py-20 bg-gradient-to-b from-[#3b99fc] to-[#0057b8] text-white">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">User License Types</h2>
              <p className="max-w-3xl mx-auto opacity-90 text-sm">
                CarpacSoft offers four unique license types to bring all development activity online across all participants (customers, leadership, product management, engineers, risk, test, development partners and more).
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {licenseTypes.map((license, i) => (
                <AnimatedSection key={i} delay={i * 100}>
                  <div className="bg-white text-slate-800 rounded-lg p-6 pt-12 relative mt-8 h-full flex flex-col shadow-xl">
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-md border-4 border-slate-50">
                      <license.icon className="w-8 h-8 text-[#0057b8]" strokeWidth={1.5} />
                      {/* Decorative dots */}
                      <div className="absolute top-2 right-4 w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                      <div className="absolute bottom-3 left-3 w-2 h-2 bg-blue-400 rounded-full"></div>
                    </div>

                    <h3 className="text-center font-bold text-sm uppercase tracking-wider mb-6 text-[#0057b8] mt-4">{license.name}</h3>
                    <p className="text-xs text-slate-600 text-center leading-relaxed">
                      {license.desc}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Table Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#003c7e]">User Capabilities</h2>
            </AnimatedSection>

            <div className="overflow-x-auto shadow-lg rounded-xl border border-slate-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-white">
                    <th className="bg-[#00929e] p-4 text-left font-bold w-1/3">CAPABILITY</th>
                    <th className="bg-[#ff8f00] p-4 text-center font-bold">CREATOR</th>
                    <th className="bg-[#e65a00] p-4 text-center font-bold">STAKEHOLDER</th>
                    <th className="bg-[#1e3a8a] p-4 text-center font-bold">REVIEWER</th>
                    <th className="bg-[#404040] p-4 text-center font-bold">TEST RUNNER</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {capabilities.map((group, groupIndex) => (
                    <>
                      <tr key={group.category} className="bg-slate-100">
                        <td colSpan={5} className="p-3 pl-4 font-bold text-[#0057b8] text-xs uppercase tracking-wider">
                          {group.category}
                        </td>
                      </tr>
                      {group.rows.map((row, rowIndex) => (
                        <tr key={row.name} className="hover:bg-slate-50 transition-colors">
                          <td className="p-4 text-slate-700 font-medium pl-8 border-r border-slate-100">{row.name}</td>
                          <td className="p-4 text-center border-r border-slate-100">{row.creator && <div className="w-4 h-4 rounded-full bg-[#ff8f00] mx-auto"></div>}</td>
                          <td className="p-4 text-center border-r border-slate-100">{row.stakeholder && <div className="w-4 h-4 rounded-full bg-[#e65a00] mx-auto"></div>}</td>
                          <td className="p-4 text-center border-r border-slate-100">{row.reviewer && <div className="w-4 h-4 rounded-full bg-[#1e3a8a] mx-auto"></div>}</td>
                          <td className="p-4 text-center">{row.testRunner && <div className="w-4 h-4 rounded-full bg-[#404040] mx-auto"></div>}</td>
                        </tr>
                      ))}
                    </>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="text-center mt-12">
              <Link to="/resources/datasheet">
                <Button className="bg-[#051c2c] hover:bg-black text-white font-bold px-8 py-3 rounded-full text-xs uppercase tracking-wider">
                  DOWNLOAD DATASHEET
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Customers Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-slate-600 mb-8">See Why Our Customers Love Us</h2>
            <AnimatedSection className="max-w-4xl mx-auto mb-16">
              <p className="text-xl text-[#0057b8] italic font-medium leading-relaxed mb-6">
                "CarpacSoft has won a Top-Rated award for application lifecycle management software based directly on feedback from their customers. Reviewers praise the product's core traceability and defect logging capabilities, and its overall superiority for requirements management and QA across development stages."
              </p>
              <p className="text-sm text-slate-500">Megan Headley, VP Research at TrustRadius</p>
            </AnimatedSection>

            <div className="flex flex-wrap justify-center gap-8 lg:gap-16 items-center opacity-70 grayscale mb-16">
              {/* Reusing text for logos if images fail, but structure supports images */}
              {customerLogos.map(logo => (
                <div key={logo.name} className="text-xl font-bold text-slate-300">{logo.name}</div>
              ))}
            </div>

            <Link to="/customers">
              <Button className="bg-[#00a7b5] hover:bg-[#00929e] text-white font-bold px-8 py-4 rounded-full text-sm uppercase tracking-wide mb-20 shadow-lg">
                READ CUSTOMER STORIES
              </Button>
            </Link>
          </div>
        </section>

        {/* Request Pricing Grid */}
        <section id="request-pricing" className="bg-[#0e1b42] py-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#1a2b5e] to-transparent opacity-50"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto items-center">
              {/* Form Card */}
              <AnimatedSection className="w-full lg:w-1/2">
                <div className="bg-white rounded-lg p-8 shadow-2xl">
                  <h3 className="text-2xl font-bold text-[#003c7e] text-center mb-2">Request Pricing</h3>
                  <p className="text-xs text-center text-slate-500 mb-8">*Required Fields</p>

                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="First Name*"
                        className="bg-[#f0f0f0] border-slate-200"
                        required
                      />
                      <Input
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Last Name*"
                        className="bg-[#f0f0f0] border-slate-200"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        name="workEmail"
                        value={formData.workEmail}
                        onChange={handleInputChange}
                        placeholder="Work Email*"
                        className="bg-[#f0f0f0] border-slate-200"
                        required
                        type="email"
                      />
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Phone Number*"
                        className="bg-[#f0f0f0] border-slate-200"
                        required
                        type="tel"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Company*"
                        className="bg-[#f0f0f0] border-slate-200"
                        required
                      />
                      <select
                        name="industry"
                        value={formData.industry}
                        onChange={handleInputChange}
                        className="flex h-10 w-full rounded-md border border-slate-200 bg-[#f0f0f0] px-3 py-2 text-sm text-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-950"
                        required
                      >
                        <option value="">Industry*</option>
                        <option value="automotive">Automotive</option>
                        <option value="aerospace">Aerospace</option>
                        <option value="medical">Medical</option>
                        <option value="software">Software</option>
                      </select>
                    </div>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="flex h-10 w-full rounded-md border border-slate-200 bg-[#f0f0f0] px-3 py-2 text-sm text-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-950"
                      required
                    >
                      <option value="">Country*</option>
                      <option value="US">United States</option>
                      <option value="UK">United Kingdom</option>
                      <option value="CA">Canada</option>
                      <option value="IN">India</option>
                    </select>

                    <p className="text-[10px] text-slate-400 text-center mt-4 leading-tight">
                      By submitting this form, you agree to the CarpacSoft Evaluation License and Privacy Policy.
                    </p>

                    <div className="flex justify-center mt-6">
                      <Button type="submit" className="bg-[#00b050] hover:bg-[#009040] text-white font-bold px-8 py-2 rounded-full text-sm uppercase shadow-lg w-auto">
                        SUBMIT
                      </Button>
                    </div>
                  </form>
                </div>
              </AnimatedSection>

              {/* Right Side Text */}
              <AnimatedSection className="w-full lg:w-1/2 text-white">
                <h2 className="text-4xl font-bold mb-6 text-white">Find out everything CarpacSoft has to offer!</h2>
                <p className="text-white/80 text-sm leading-relaxed">
                  Our experts can provide guidance even at the early stages of your exploration. We look forward to connecting.
                </p>
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

export default Pricing;
