import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";
import { CheckCircle2, Download } from "lucide-react";
import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";

export default function BenchmarkReport() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section - matches reference layout: image left, form right */}
        <section className="bg-slate-50 py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 max-w-7xl mx-auto">
              {/* Left: PDF Thumbnail */}
              <AnimatedSection className="w-full lg:w-[45%] flex justify-center lg:justify-end">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-jama-orange/10 rounded-2xl blur-xl transition-all group-hover:bg-jama-orange/20"></div>
                  <img
                    src="https://www.jamasoftware.com/media/2023/12/requirements-traceability-benchmark-pdf.jpg"
                    alt="Requirements Traceability Benchmark PDF"
                    className="relative w-80 md:w-96 h-auto rounded-lg shadow-2xl transform lg:-rotate-2 transition-transform duration-500 group-hover:rotate-0"
                  />
                  {/* Floating Badge */}
                  <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 hidden md:block animate-up-down">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-jama-orange rounded-full flex items-center justify-center text-white">
                        <Download className="w-6 h-6" />
                      </div>
                      <div className="text-left">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Available Now</p>
                        <p className="text-sm font-bold text-[#002d5b]">Benchmark Report</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Right: Title + Form */}
              <AnimatedSection className="w-full lg:w-[55%]">
                <div className="mb-10 text-center lg:text-left">
                  <div className="inline-block bg-white px-3 py-1 rounded-full border border-slate-200 mb-6">
                    <p className="text-xs font-bold text-jama-orange uppercase tracking-[0.2em]">Research Report</p>
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-[#002d5b] mb-6 leading-[1.1]">
                    Requirements Traceability <span className="text-jama-orange">Benchmark</span>
                  </h1>
                  <p className="text-xl text-slate-600 leading-relaxed font-medium">
                    The first large-scale empirical research measuring the impact of traceability on product quality and cycle times.
                  </p>
                </div>

                {/* Form Card */}
                <div className="bg-white rounded-2xl p-8 shadow-2xl border border-slate-100 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-jama-orange to-[#FFB75E]"></div>
                  {!formSubmitted ? (
                    <>
                      <div className="mb-8">
                        <h2 className="text-2xl font-bold text-[#002d5b] mb-2 uppercase tracking-tight">Get the Full Report</h2>
                        <p className="text-sm text-slate-500">Enter your details below to access download link</p>
                      </div>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <Label htmlFor="firstName" className="text-xs font-bold text-slate-600 ml-1">First Name*</Label>
                            <Input id="firstName" placeholder="First Name" required className="bg-slate-50 border-slate-200 h-12 text-sm focus:bg-white transition-colors" />
                          </div>
                          <div className="space-y-1.5">
                            <Label htmlFor="lastName" className="text-xs font-bold text-slate-600 ml-1">Last Name*</Label>
                            <Input id="lastName" placeholder="Last Name" required className="bg-slate-50 border-slate-200 h-12 text-sm focus:bg-white transition-colors" />
                          </div>
                        </div>
                        <div className="space-y-1.5">
                          <Label htmlFor="email" className="text-xs font-bold text-slate-600 ml-1">Work Email*</Label>
                          <Input id="email" type="email" placeholder="Work Email" required className="bg-slate-50 border-slate-200 h-12 text-sm focus:bg-white transition-colors" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <Label htmlFor="company" className="text-xs font-bold text-slate-600 ml-1">Company*</Label>
                            <Input id="company" placeholder="Company Name" required className="bg-slate-50 border-slate-200 h-12 text-sm focus:bg-white transition-colors" />
                          </div>
                          <div className="space-y-1.5">
                            <Label htmlFor="industry" className="text-xs font-bold text-slate-600 ml-1">Industry</Label>
                            <Select>
                              <SelectTrigger className="bg-slate-50 border-slate-200 h-12 text-sm focus:bg-white">
                                <SelectValue placeholder="Select Industry" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="aerospace">Aerospace & Defense</SelectItem>
                                <SelectItem value="automotive">Automotive</SelectItem>
                                <SelectItem value="medical">Medical Device</SelectItem>
                                <SelectItem value="semiconductor">Semiconductor</SelectItem>
                                <SelectItem value="industrial">Industrial Manufacturing</SelectItem>
                                <SelectItem value="software">Software Development</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <Label htmlFor="country" className="text-xs font-bold text-slate-600 ml-1">Country*</Label>
                            <Select>
                              <SelectTrigger className="bg-slate-50 border-slate-200 h-12 text-sm focus:bg-white">
                                <SelectValue placeholder="Select Country" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="us">United States</SelectItem>
                                <SelectItem value="uk">United Kingdom</SelectItem>
                                <SelectItem value="ca">Canada</SelectItem>
                                <SelectItem value="de">Germany</SelectItem>
                                <SelectItem value="fr">France</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-1.5">
                            <Label htmlFor="phone" className="text-xs font-bold text-slate-600 ml-1">Phone Number</Label>
                            <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" className="bg-slate-50 border-slate-200 h-12 text-sm focus:bg-white transition-colors" />
                          </div>
                        </div>

                        <div className="pt-4">
                          <Button
                            type="submit"
                            className="w-full text-white h-14 rounded-full font-bold text-base uppercase tracking-widest shadow-lg hover:shadow-orange-500/20 transition-all transform hover:-translate-y-0.5"
                            style={{ background: "linear-gradient(279.73deg, #E25100 8.11%, #FF9900 90.47%)" }}
                          >
                            DOWNLOAD REPORT
                          </Button>
                          <p className="text-center text-[10px] text-slate-400 mt-4 leading-relaxed">
                            By clicking download, you agree to our terms and conditions. Your privacy is important to us.
                          </p>
                        </div>
                      </form>
                    </>
                  ) : (
                    <div className="text-center py-12 px-4 animate-in fade-in zoom-in duration-500">
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-10 h-10 text-green-600" />
                      </div>
                      <h2 className="text-3xl font-bold text-[#002d5b] mb-4">Submission Successful!</h2>
                      <p className="text-slate-600 mb-8 max-w-sm mx-auto">Your copy of the Requirements Traceability Benchmark is on its way to your inbox.</p>
                      <div className="flex flex-col gap-3">
                        <Button className="bg-[#0ea5e9] text-white rounded-full font-bold h-12">
                          <Download className="w-4 h-4 mr-2" /> ACCESS DOWNLOAD NOW
                        </Button>
                        <Link to="/">
                          <Button variant="ghost" className="text-slate-500 font-bold">Return to Homepage</Button>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 lg:py-32 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection className="mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-[#002d5b] mb-8 leading-tight">
                  Unlock the Power of Requirements Traceability: <span className="text-jama-orange">Benchmark Your Success</span>
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  In complex product development, ensuring that every requirement is met from design to delivery is vital. However, without effective requirements traceability, teams risk costly errors, delays, and non-compliance. CarpacSoft's <em>Requirements Traceability Benchmark</em> whitepaper offers valuable insights on how organizations can overcome these challenges and elevate their traceability practices to new levels of efficiency and accuracy.
                </p>
                <div className="h-1 w-20 bg-jama-orange rounded-full"></div>
              </AnimatedSection>

              <div className="grid grid-cols-1 gap-16">
                <AnimatedSection>
                  <h3 className="text-2xl font-bold text-[#002d5b] mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-[#0066cc]" />
                    </div>
                    Why Requirements Traceability Matters
                  </h3>
                  <div className="space-y-6 text-slate-600">
                    <p className="text-base leading-relaxed">
                      Requirements traceability is at the heart of successful project delivery. It helps teams track the lifecycle of requirements, verify alignment with stakeholder needs, ensure regulatory compliance, and mitigate risks throughout the development process.
                    </p>
                    <p className="text-base leading-relaxed">
                      With complex projects spanning multiple teams and systems, maintaining clear visibility and control over every requirement can be difficult without a robust traceability framework. Our whitepaper provides a comprehensive analysis of how top-performing organizations implement traceability practices to drive project success.
                    </p>
                  </div>
                </AnimatedSection>

                <AnimatedSection>
                  <div className="bg-[#002d5b] rounded-3xl p-10 lg:p-12 text-white shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full -mr-32 -mt-32"></div>
                    <h3 className="text-2xl font-bold mb-8 relative z-10 text-white">What You'll Gain from the Benchmark Report</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                      {[
                        { title: "Best Practices", desc: "Discover how industry leaders ensure traceability across all project stages." },
                        { title: "Key Metrics", desc: "Understand which traceability metrics matter most for your engineering teams." },
                        { title: "Overcoming Challenges", desc: "Gain insights into common obstacles and practical solutions to address them." },
                        { title: "Compliance Strategy", desc: "Learn how traceability reduces risks of costly mistakes and missed requirements." },
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-4">
                          <div className="mt-1 w-6 h-6 rounded-full bg-jama-orange flex items-center justify-center shrink-0">
                            <CheckCircle2 className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <h4 className="font-bold text-lg mb-1 text-white">{item.title}</h4>
                            <p className="text-blue-100/80 text-sm leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection>
                  <h3 className="text-2xl font-bold text-[#002d5b] mb-6">Benchmark Your Organization's Traceability Performance</h3>
                  <p className="text-slate-600 mb-8 leading-relaxed">
                    This benchmark report empowers you to assess your organization's current traceability practices against those of industry leaders. With data-driven insights, you'll be able to identify gaps in your processes and implement improvements that drive efficiency and product quality.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <h4 className="font-bold text-[#002d5b] mb-2 uppercase text-xs tracking-wider">Maturity Assessment</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">By comparing your processes with industry benchmarks, you'll gain an understanding of where your organization stands.</p>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <h4 className="font-bold text-[#002d5b] mb-2 uppercase text-xs tracking-wider">Optimized Collaboration</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">Effective traceability ensures that every team member has full visibility into the project's requirements.</p>
                    </div>
                  </div>
                </AnimatedSection>
              </div>

              {/* Business Practices Box */}
              <AnimatedSection className="mt-20">
                <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 lg:p-12 border border-blue-100 shadow-sm">
                  <h3 className="text-2xl font-bold text-[#002d5b] mb-8">
                    Examine business practices that separate top-quartile performers, including:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      "Focus on Live Traceability™",
                      "Integrate across best-of-breed tools",
                      "Data-centric Systems Engineering",
                      "Model-based requirements",
                      "Management by exception",
                      "Shortened discovery cycles"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                        <div className="w-2 h-2 rounded-full bg-jama-orange shrink-0" />
                        <span className="font-semibold text-[#002d5b] text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <AnimatedSection>
          <section className="py-24 bg-[#002d5b] relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            <div className="container mx-auto px-4 text-center relative z-10">
              <h2 className="text-3xl md:text-[40px] font-bold mb-8 text-white leading-tight max-w-4xl mx-auto">
                How CarpacSoft® Facilitates <br className="hidden md:block" /> Requirements Traceability
              </h2>
              <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
                To support your organization's traceability journey, CarpacSoft offers powerful tools that streamline requirements management. With CarpacSoft, you can easily track, link, and manage requirements across the product lifecycle.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/product/jama-connect">
                  <Button
                    className="w-full sm:w-auto text-white px-12 py-7 text-lg rounded-full font-bold uppercase tracking-widest shadow-xl hover:shadow-orange-500/20 transition-all transform hover:-translate-y-1"
                    style={{ background: "linear-gradient(279.73deg, #E25100 8.11%, #FF9900 90.47%)" }}
                  >
                    DISCOVER CarpacSoft CONNECT
                  </Button>
                </Link>
                <Link to="/company/contact">
                  <Button className="w-full sm:w-auto px-12 py-7 text-lg rounded-full font-bold text-white border-white hover:bg-white hover:text-[#002d5b] uppercase tracking-widest transition-all">
                    REQUEST A DEMO
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}



