import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, ArrowRight, Check } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const heroFeatures = [
  "Manage Complexity & Scale",
  "Auto-Detect Risk",
  "Intelligently Improve Requirements",
  "Maintain Product State Across Tools",
  "Bring All Collaboration & Reviews Online",
  "Measure and Improve Traceability",
  "Unify Test-Case Management",
];

const trialCapabilities = [
  "Invite your entire team",
  "Assign roles and permissions",
  "Import your own data",
  "Initiate review cycles and collaborate",
  "Experience award-winning ease of use",
  "Use the power of Live Traceability™",
  "Measure your traceability score",
  "Use industry-specific solution sets",
  "Leverage Live Trace Explorer (Dashboard to auto-detect risk)",
];

const companyLogos = [
  "Lyft", "Collins Aerospace", "Deloitte",
  "ABIOMED", "Panasonic", "Merck",
  "BP", "Tektronix", "NVIDIA",
];

const countries = [
  "United States", "Canada", "United Kingdom", "------",
  "Afghanistan", "Albania", "Algeria", "Argentina", "Australia", "Austria",
  "Bangladesh", "Belgium", "Brazil", "Bulgaria", "Cambodia", "Cameroon",
  "Chile", "China", "Colombia", "Costa Rica", "Croatia", "Czech Republic",
  "Denmark", "Ecuador", "Egypt", "Estonia", "Ethiopia", "Finland", "France",
  "Germany", "Ghana", "Greece", "Guatemala", "Honduras", "Hong Kong",
  "Hungary", "Iceland", "India", "Indonesia", "Ireland", "Israel", "Italy",
  "Jamaica", "Japan", "Jordan", "Kenya", "Kuwait", "Latvia", "Lebanon",
  "Lithuania", "Luxembourg", "Malaysia", "Mexico", "Morocco", "Nepal",
  "Netherlands", "New Zealand", "Nigeria", "Norway", "Pakistan", "Panama",
  "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania",
  "Russian Federation", "Saudi Arabia", "Singapore", "Slovakia", "Slovenia",
  "South Africa", "South Korea", "Spain", "Sri Lanka", "Sweden",
  "Switzerland", "Taiwan", "Thailand", "Turkey", "Ukraine",
  "United Arab Emirates", "Uruguay", "Venezuela", "Viet Nam", "Zimbabwe",
];

const industries = [
  "Aerospace / Defense",
  "Architecture Engineering and Construction",
  "Automotive",
  "Consumer Technologies",
  "Energy / Utilities",
  "Federal Government",
  "Financial Services / Insurance",
  "Healthcare",
  "Industrial Technologies",
  "Medical Devices / Life Sciences",
  "Oil and Gas",
  "Semiconductor",
  "Software",
  "State / Local Government",
  "Telecommunications",
  "Other",
];

const Trial = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    company: "", country: "", industry: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    toast({ title: "Trial Request Submitted!", description: "Check your email for login credentials." });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 bg-slate-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-xl mx-auto text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold text-jama-navy mb-4">Welcome to Your Free Trial!</h1>
              <p className="text-lg text-slate-600 mb-8">We've sent your login credentials to your email address.</p>
              <Link to="/dashboard">
                <Button className="bg-jama-orange hover:bg-orange-600 text-white">
                  Go to Dashboard <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
        <ChatWidget />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section - Dark Navy */}
        <section className="bg-[#05003B] py-12 lg:py-16 relative overflow-hidden">
          <div className="container mx-auto px-4">
            {/* CarpacSoft Logo */}
            <div className="mb-8 animate-fade-in">
              <div className="flex items-center gap-2">
                <img src="/Logo.jpg" alt="CarpacSoft Logo" className="h-10 w-auto rounded-full shadow-sm" />
                <span className="text-white text-lg font-light tracking-wide">
                  <span className="font-bold">CarpacSoft</span> <sup className="text-[8px] ml-0.5">®</sup>
                </span>
              </div>
            </div>

            <div className="grid lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_440px] gap-8 lg:gap-12 items-start">
              {/* Left Content */}
              <div className="animate-fade-in">
                <h1 className="text-3xl lg:text-4xl xl:text-[2.6rem] font-bold text-white mb-6 leading-tight">
                  Intelligently improve your development process with CarpacSoft.
                </h1>
                <p className="text-blue-200/80 mb-8 leading-relaxed text-[15px]">
                  Measure and minimize the risk of delays, defects, cost overruns, and the manual effort created by fragmented development processes and legacy solutions. CarpacSoft is the ONLY requirements management software solution that delivers Live Traceability™ across integrated workflows with best-of-breed tooling. CarpacSoft makes it easy to:
                </p>
                <ul className="space-y-3 mb-10">
                  {heroFeatures.map((feature, i) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 animate-fade-in"
                      style={{ animationDelay: `${i * 100}ms` }}
                    >
                      <Check className="w-5 h-5 text-jama-orange shrink-0" />
                      <span className="text-white/90 font-medium text-[15px]">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="hidden lg:block relative max-w-[600px] mx-auto">
                  {/* Realistic MacBook Pro Mockup */}
                  <div className="relative z-10 transition-transform duration-700 hover:scale-[1.01]">
                    {/* Top Case / Bezel */}
                    <div className="relative bg-[#000] rounded-[24px] p-[10px] shadow-[0_0_0_1px_#a1a1a1,0_25px_50px_-12px_rgba(0,0,0,0.5)] border-[1px] border-[#333]">
                      {/* Screen Content */}
                      <div className="relative bg-white rounded-[10px] overflow-hidden border border-[#222] aspect-[16/10] flex flex-col">
                        {/* Browser Bar */}
                        <div className="bg-[#f1f1f1] px-4 py-2 flex items-center justify-between border-b border-slate-300">
                          <div className="flex items-center gap-2">
                            <div className="flex gap-1.5">
                              <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                              <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                              <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                            </div>
                            <div className="ml-4 bg-white px-3 py-0.5 rounded text-[8px] text-slate-500 flex items-center gap-2 border border-slate-200 min-w-[280px]">
                              <span className="truncate opacity-50">jamasoftware.com/faster-requirements-management</span>
                            </div>
                          </div>
                        </div>

                        {/* App Primary Header */}
                        <div className="bg-[#1e293b] text-white px-4 py-1.5 flex items-center justify-between">
                          <div className="flex items-center gap-5">
                            <div className="h-3.5 w-3.5 text-blue-400">
                              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 19H22L12 2Z" /></svg>
                            </div>
                            <div className="flex gap-4 text-[8px] items-center font-bold tracking-tight uppercase opacity-90">
                              <span className="flex items-center gap-1 opacity-60">🏠 STREAM</span>
                              <span className="text-white border-b border-blue-400 pb-0.5">PROJECTS</span>
                              <span className="opacity-60">REVIEWS</span>
                              <span className="opacity-60">ADMIN</span>
                            </div>
                          </div>
                          <div className="text-[8px] flex items-center gap-2.5">
                            <span className="font-bold">Jamaland</span>
                            <span className="opacity-40">Kat Moss | Reports | Help | Log out</span>
                          </div>
                        </div>

                        {/* Breadcrumbs Strip */}
                        <div className="bg-[#f8f9fa] border-b border-slate-200 px-4 py-1.5 flex items-center justify-between relative z-10">
                          <div className="flex items-center gap-2">
                            <div className="bg-white border border-slate-200 rounded px-2 py-0.5 flex items-center gap-1.5 shadow-sm">
                              <div className="h-2.5 w-2.5 text-blue-500">
                                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 19H22L12 2Z" /></svg>
                              </div>
                              <span className="text-[10px] font-bold text-slate-700">Live Trace Explorer</span>
                            </div>
                            <div className="bg-white border border-slate-200 rounded px-2 py-0.5 flex items-center gap-1.5 shadow-sm">
                              <span className="text-[10px] text-slate-500 font-medium">Semiconductor Product</span>
                              <span className="text-[7px] text-slate-300">⋮</span>
                            </div>
                          </div>
                          <div className="bg-[#fee2e2] text-[#ef4444] px-2.5 py-1 rounded-sm border border-[#fecaca] font-bold text-[9px]">
                            Trace score: <span className="text-base leading-none">40.87%</span>
                          </div>
                        </div>

                        {/* Dashboard Canvas */}
                        <div className="flex-1 bg-white relative p-5 overflow-hidden">
                          {/* Dot Grid */}
                          <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'radial-gradient(#94a3b8 0.5px, transparent 0)', backgroundSize: '18px 18px' }}></div>

                          <div className="grid grid-cols-2 gap-x-20 gap-y-12 relative z-10 p-2">
                            {/* Card 1 */}
                            <div className="bg-white border border-slate-200 rounded shadow-sm overflow-hidden text-[8px]">
                              <div className="bg-[#f1f5f9] px-2.5 py-1 border-b border-slate-200 flex items-center justify-between">
                                <span className="font-bold flex items-center gap-1 text-slate-700 uppercase tracking-tight">
                                  <span className="text-[10px]">📋</span> Stakeholder Requirements
                                </span>
                                <span className="text-slate-300">↗️</span>
                              </div>
                              <div className="p-2.5 space-y-2">
                                <div className="border-b border-slate-50 pb-1.5">
                                  <p className="text-slate-900 font-bold mb-1">Container details</p>
                                  <div className="flex justify-between items-center py-0.5 text-slate-600">
                                    <span>Stakeholder Requirement</span> <span className="font-bold text-slate-900">2,096</span>
                                  </div>
                                  <div className="flex justify-between items-center py-0.5 text-slate-600">
                                    <span>Open conversations</span> <span className="font-bold text-slate-900">1</span>
                                  </div>
                                </div>
                                <div className="space-y-1">
                                  <p className="text-slate-900 font-bold">Coverage</p>
                                  <div className="flex justify-between items-center py-0.5">
                                    <span className="text-slate-600">Product Requirement</span>
                                    <span className="bg-[#fff7ed] text-[#ea580c] px-1 rounded font-bold">80.06%</span>
                                  </div>
                                  <div className="flex justify-between items-center py-0.5">
                                    <span className="text-slate-600">Validation</span>
                                    <span className="bg-[#fff7ed] text-[#ea580c] px-1 rounded font-bold">50.57%</span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-white border border-slate-200 rounded shadow-sm overflow-hidden text-[8px]">
                              <div className="bg-[#f1f5f9] px-2.5 py-1 border-b border-slate-200 font-bold text-slate-700 uppercase tracking-tight flex items-center gap-1">
                                <span className="text-[10px] text-red-500">✔️</span> Related test cases
                              </div>
                              <div className="p-2.5 space-y-2">
                                <div className="border-b border-slate-50 pb-1.5">
                                  <p className="text-slate-900 font-bold mb-1">Container details</p>
                                  <div className="flex justify-between items-center py-0.5 text-slate-600">
                                    <span>Validation</span> <span className="font-bold text-slate-900">457</span>
                                  </div>
                                  <div className="flex justify-between items-center py-0.5 text-slate-600">
                                    <span>Open conversations</span> <span className="font-bold text-slate-900">0</span>
                                  </div>
                                </div>
                                <div className="pt-0.5">
                                  <p className="text-slate-900 font-bold mb-1">Test plan coverage</p>
                                  <div className="flex justify-between items-center py-0.5">
                                    <span className="text-slate-600">Validation</span>
                                    <span className="text-[#16a34a] font-bold bg-[#f0fdf4] px-1 rounded">100%</span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-white border border-slate-200 rounded shadow-sm overflow-hidden text-[8px]">
                              <div className="bg-[#f1f5f9] px-2.5 py-1 border-b border-slate-200 flex items-center justify-between">
                                <span className="font-bold flex items-center gap-1 text-slate-700 uppercase tracking-tight">
                                  <span className="text-[10px]">📋</span> Product Requirements
                                </span>
                                <span className="text-slate-300">↗️</span>
                              </div>
                              <div className="p-2.5 space-y-2">
                                <div className="border-b border-slate-50 pb-1.5">
                                  <p className="text-slate-900 font-bold mb-1">Container details</p>
                                  <div className="flex justify-between items-center py-0.5 text-slate-600">
                                    <span>Product Requirement</span> <span className="font-bold text-slate-900">4,911</span>
                                  </div>
                                  <div className="flex justify-between items-center py-0.5 text-slate-600">
                                    <span>Open conversations</span> <span className="font-bold text-slate-900">0</span>
                                  </div>
                                </div>
                                <div className="space-y-0.5">
                                  <p className="text-slate-900 font-bold mb-0.5">Coverage</p>
                                  <div className="grid grid-cols-[1fr_auto] gap-x-2">
                                    <span className="text-slate-500 text-[7px]">Datasheet</span> <span className="bg-[#fdf2f8] text-[#be123c] px-1 rounded font-bold">41.13%</span>
                                    <span className="text-slate-500 text-[7px]">System Architecture</span> <span className="bg-[#fdf2f8] text-[#be123c] px-1 rounded font-bold">10.73%</span>
                                    <span className="text-slate-500 text-[7px]">Block Requirement</span> <span className="bg-[#f0fdf4] text-[#16a34a] px-1 rounded font-bold">99.17%</span>
                                    <span className="text-slate-500 text-[7px]">Verification</span> <span className="bg-[#fdf2f8] text-[#be123c] px-1 rounded font-bold">0.43%</span>
                                    <span className="text-slate-500 text-[7px]">Validation</span> <span className="bg-[#fdf2f8] text-[#be123c] px-1 rounded font-bold">2.06%</span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Card 4 */}
                            <div className="bg-white border border-slate-200 rounded shadow-sm overflow-hidden text-[8px]">
                              <div className="bg-[#f1f5f9] px-2.5 py-1 border-b border-slate-200 font-bold text-slate-700 uppercase tracking-tight flex items-center gap-1">
                                <span className="text-[10px] text-red-500">✔️</span> Related test cases
                              </div>
                              <div className="p-2.5 space-y-2">
                                <div className="border-b border-slate-50 pb-1">
                                  <p className="text-slate-900 font-bold mb-1">Container details</p>
                                  <div className="flex justify-between items-center py-0.5 text-slate-600">
                                    <span>Item count</span> <span className="font-bold text-slate-900">289</span>
                                  </div>
                                  <div className="flex justify-between items-center py-0.5 text-slate-600">
                                    <span>Validation</span> <span className="font-bold text-slate-900">10</span>
                                  </div>
                                  <div className="flex justify-between items-center py-0.5 text-slate-600">
                                    <span>Verification</span> <span className="font-bold text-slate-900">279</span>
                                  </div>
                                </div>
                                <div>
                                  <p className="text-slate-900 font-bold mb-1">Test plan coverage</p>
                                  <div className="flex justify-between items-center py-0.5">
                                    <span className="text-slate-600">Verification</span> <span className="text-[#16a34a] font-bold bg-[#f0fdf4] px-1 rounded">99.64%</span>
                                  </div>
                                  <div className="flex justify-between items-center py-0.5">
                                    <span className="text-slate-600">Validation</span> <span className="text-[#16a34a] font-bold bg-[#f0fdf4] px-1 rounded">100%</span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Connection Badges */}
                            <div className="absolute top-[64px] left-[50%] -translate-x-1/2 flex gap-1 items-center z-10">
                              <span className="bg-white border border-green-500 text-green-600 px-1 py-0.5 rounded-sm text-[6px] font-bold shadow-sm">77.13%</span>
                              <span className="bg-white border border-red-400 text-red-500 px-1 py-0.5 rounded-sm text-[6px] font-bold shadow-sm">22.87%</span>
                              <div className="w-1.5 h-1.5 rounded-full bg-red-500 -ml-1 border border-white"></div>
                            </div>
                            <div className="absolute top-[185px] left-[135px] flex flex-col items-center z-10">
                              <span className="bg-white border border-green-500 text-green-600 px-1 py-0.5 rounded-sm text-[6px] font-bold shadow-sm mb-1">99.93%</span>
                              <span className="bg-white border border-red-400 text-red-500 px-1 py-0.5 rounded-sm text-[6px] font-bold shadow-sm">0.07%</span>
                              <div className="w-1.5 h-1.5 rounded-full bg-red-500 -mt-0.5 border border-white"></div>
                            </div>
                            <div className="absolute bottom-[105px] left-[50%] -translate-x-1/2 flex gap-1 items-center z-10">
                              <span className="bg-white border border-green-500 text-green-600 px-1 py-0.5 rounded-sm text-[6px] font-bold shadow-sm">32.43%</span>
                              <span className="bg-white border border-red-400 text-red-500 px-1 py-0.5 rounded-sm text-[6px] font-bold shadow-sm">67.57%</span>
                              <div className="w-1.5 h-1.5 rounded-full bg-red-500 -ml-1 border border-white"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* MacBook Base */}
                    <div className="relative h-[16px] bg-[#a1a1a1] w-[106%] -ml-[3%] rounded-b-[40px] shadow-2xl flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-b from-[#a1a1a1] to-[#888] rounded-b-[40px]"></div>
                      <div className="w-[100px] h-[5px] bg-[#666] rounded-full mt-[-8px] relative z-20"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Dark Form */}
              <div className="bg-[#05003B] border border-white/10 rounded-lg p-6 lg:p-8 animate-fade-in shadow-2xl" style={{ animationDelay: "200ms" }}>
                <h2 className="text-2xl font-normal text-white text-center mb-2">
                  Start your 30-day free trial
                </h2>
                <p className="text-[#00c0ff] text-center text-sm mb-6">* Required fields</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="First Name*"
                    value={formData.firstName}
                    onChange={(e) => handleChange("firstName", e.target.value)}
                    required
                    className="w-full bg-[#ededed] border border-[#55585a] rounded px-4 py-2.5 text-[#55585a] placeholder:text-[#999] text-sm focus:outline-none focus:ring-2 focus:ring-jama-blue"
                  />
                  <input
                    type="text"
                    placeholder="Last Name*"
                    value={formData.lastName}
                    onChange={(e) => handleChange("lastName", e.target.value)}
                    required
                    className="w-full bg-[#ededed] border border-[#55585a] rounded px-4 py-2.5 text-[#55585a] placeholder:text-[#999] text-sm focus:outline-none focus:ring-2 focus:ring-jama-blue"
                  />
                  <input
                    type="email"
                    placeholder="Email Address*"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    required
                    className="w-full bg-[#ededed] border border-[#55585a] rounded px-4 py-2.5 text-[#55585a] placeholder:text-[#999] text-sm focus:outline-none focus:ring-2 focus:ring-jama-blue"
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className="w-full bg-[#ededed] border border-[#55585a] rounded px-4 py-2.5 text-[#55585a] placeholder:text-[#999] text-sm focus:outline-none focus:ring-2 focus:ring-jama-blue"
                  />
                  <input
                    type="text"
                    placeholder="Company*"
                    value={formData.company}
                    onChange={(e) => handleChange("company", e.target.value)}
                    required
                    className="w-full bg-[#ededed] border border-[#55585a] rounded px-4 py-2.5 text-[#55585a] placeholder:text-[#999] text-sm focus:outline-none focus:ring-2 focus:ring-jama-blue"
                  />

                  <select
                    value={formData.country}
                    onChange={(e) => handleChange("country", e.target.value)}
                    required
                    className={`w-full bg-[#ededed] border border-[#55585a] rounded px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-jama-blue ${formData.country ? "text-[#55585a]" : "text-[#999]"}`}
                  >
                    <option value="" disabled>Country*</option>
                    {countries.map((c) => (
                      <option key={c} value={c} disabled={c === "------"}>{c}</option>
                    ))}
                  </select>

                  <select
                    value={formData.industry}
                    onChange={(e) => handleChange("industry", e.target.value)}
                    required
                    className={`w-full bg-[#ededed] border border-[#55585a] rounded px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-jama-blue ${formData.industry ? "text-[#55585a]" : "text-[#999]"}`}
                  >
                    <option value="" disabled>Industry*</option>
                    {industries.map((i) => (
                      <option key={i} value={i}>{i}</option>
                    ))}
                  </select>

                  <p className="text-white/80 text-xs text-center leading-relaxed">
                    By submitting this form, you agree to the CarpacSoft{" "}
                    <a href="#" className="text-[#00c0ff] hover:underline">Evaluation License</a>{" "}and{" "}
                    <a href="#" className="text-[#00c0ff] hover:underline">Privacy Policy</a>.
                  </p>

                  <button
                    type="submit"
                    className="w-full py-3 rounded font-bold text-white text-base"
                    style={{ background: "linear-gradient(279.73deg, #E25100 8.11%, #FF9900 90.47%)" }}
                  >
                    GET STARTED
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* What Can I Do + Logos Section - Dark BG */}
        <section className="bg-[#0a0a3c] py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left: Capabilities */}
              <AnimatedSection>
                <h4 className="text-2xl font-bold text-white mb-6">What can I do with my free trial?</h4>
                <ul className="space-y-3">
                  {trialCapabilities.map((cap, i) => (
                    <li key={cap} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-jama-orange shrink-0 mt-1" />
                      <span className="text-white/80 text-sm">{cap}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="text-xl font-bold text-white mt-10 mb-6">
                  Join the more than 1,000 companies already leveraging CarpacSoft
                </h4>
                <div className="grid grid-cols-3 gap-6">
                  {companyLogos.map((company) => (
                    <div key={company} className="flex items-center justify-center py-3">
                      <span className="text-white/40 font-bold text-sm tracking-wider uppercase">{company}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Footer bar */}
        <div className="bg-[#05003B] py-4 border-t border-white/10">
          <div className="container mx-auto px-4">
            <p className="text-white/50 text-sm">© 2026 CarpacSoft</p>
          </div>
        </div>
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Trial;



