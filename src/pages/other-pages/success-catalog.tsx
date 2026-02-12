import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { MessageCircle, Send, Headphones, Sparkles } from "lucide-react";

// ----------- DATA -----------

type OfferingType = "Training Resource" | "Consulting" | "Technical Service" | "Benchmark Assessment";

interface Offering {
    title: string;
    type: OfferingType;
    doubleCredit?: boolean;
}

const typeColors: Record<OfferingType, string> = {
    "Training Resource": "text-slate-500",
    "Consulting": "text-orange-600",
    "Technical Service": "text-purple-600",
    "Benchmark Assessment": "text-teal-600",
};

const onboardingItems: Offering[] = [
    { title: "CarpacSoft Connect 101 Tutorials", type: "Training Resource" },
    { title: "CarpacSoft Connect Admin Tutorials", type: "Training Resource" },
    { title: "CarpacSoft Connect Intro to the Platform", type: "Training Resource" },
    { title: "Finding Success As a CarpacSoft Connect Admin", type: "Training Resource" },
    { title: "Project Template Setup", type: "Training Resource" },
    { title: "Data Model & Configuration Consultation", type: "Consulting" },
    { title: "Importing Content", type: "Training Resource" },
    { title: "Import Guidance", type: "Consulting" },
    { title: "Ask a CarpacSoft Connect Expert", type: "Training Resource" },
    { title: "Personalized Power User Training", type: "Consulting" },
    { title: "Personalized Go-Live Training", type: "Consulting" },
    { title: "Strategic Deployment Plan", type: "Consulting" },
    { title: "Recurring Advisory Services", type: "Consulting" },
    { title: "Self-Hosted: Install / Upgrade Consultation", type: "Technical Service" },
    { title: "Self-Hosted: Environment Backup and Restore", type: "Technical Service" },
    { title: "Cloud Data Copy Service", type: "Technical Service" },
];

const requirementQualityItems: Offering[] = [
    { title: "The Essential Guide to Requirements Management", type: "Training Resource" },
    { title: "Best Practices for Writing Requirements", type: "Training Resource" },
    { title: "Requirement Quality Assessment", type: "Benchmark Assessment" },
    { title: "Requirements Authoring Workshop 101", type: "Consulting", doubleCredit: true },
    { title: "Requirements Authoring Workshop 201", type: "Consulting", doubleCredit: true },
    { title: "Collaboration and Review Workflow", type: "Consulting" },
    { title: "Optimization Session", type: "Consulting" },
    { title: "CarpacSoft Connect Advisor Setup for Requirements Analysis", type: "Consulting" },
];

const traceabilityItems: Offering[] = [
    { title: "What is a Traceability Score™?", type: "Training Resource" },
    { title: "Best Practices for Requirements Traceability", type: "Training Resource" },
    { title: "Traceability Debt Diagnostic", type: "Benchmark Assessment" },
    { title: "Traceability Score™ Assessment", type: "Benchmark Assessment" },
    { title: "Integration Hub Setup for Live Traceability™", type: "Technical Service" },
    { title: "Data Model & Configuration Consultation", type: "Consulting" },
];

const processItems: Offering[] = [
    { title: "Ask a CarpacSoft Connect Expert", type: "Training Resource" },
    { title: "Rotating Partner Expert Series", type: "Training Resource" },
    { title: "Optimization Session", type: "Consulting" },
    { title: "Variant Management & Reuse", type: "Consulting" },
    { title: "Release Management Consultation", type: "Consulting" },
    { title: "Change Management Consultation", type: "Consulting" },
    { title: "Managing Through Data", type: "Consulting" },
];

const customerValidationItems: Offering[] = [
    { title: "New Release Overview", type: "Consulting" },
    { title: "CarpacSoft Connect Validation Kit (JVK) Training", type: "Consulting" },
    { title: "Validation Guidance", type: "Consulting" },
];

const complianceItems: Offering[] = [
    { title: "Automotive ASPICE Diagnostic", type: "Benchmark Assessment" },
    { title: "Automotive Functional Safety Diagnostic", type: "Benchmark Assessment" },
    { title: "Automotive Cybersecurity Diagnostic (ISO 21434)", type: "Benchmark Assessment" },
    { title: "Data Model & Configuration Consultation", type: "Consulting" },
    { title: "Test Management Consultation", type: "Consulting" },
    { title: "Risk Management: Get Started", type: "Consulting" },
    { title: "Risk Management: Advanced Use Cases with JCI", type: "Consulting" },
    { title: "Optimization Session", type: "Consulting" },
];

const extendItems: Offering[] = [
    { title: "Exporting Content", type: "Training Resource" },
    { title: "Basic Document Exports using Microsoft Word", type: "Technical Service" },
    { title: "Planned Weekend Support", type: "Technical Service", doubleCredit: true },
    { title: "Custom Report Training Services", type: "Technical Service" },
    { title: "Custom Report Development Services", type: "Technical Service" },
    { title: "REST API Training / Consultation Services", type: "Technical Service" },
    { title: "Custom Script Development Services", type: "Technical Service" },
];

// ----------- COMPONENTS -----------

const OfferingItem = ({ item }: { item: Offering }) => (
    <div className="py-1.5 group cursor-default">
        <span className="text-[#1a1a2e] font-medium text-sm group-hover:text-blue-700 transition-colors">
            {item.title}{item.doubleCredit ? " **" : ""}
        </span>
        <span className="text-sm"> – </span>
        <span className={`text-sm italic ${typeColors[item.type]}`}>
            {item.type}
        </span>
    </div>
);

const SectionTitle = ({ children, color = "text-orange-600" }: { children: React.ReactNode; color?: string }) => (
    <h3 className={`text-xl font-bold ${color} mb-4 mt-8`}>
        {children}
    </h3>
);

const UserCommunity = () => {
    const [requestModalOpen, setRequestModalOpen] = useState(false);

    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-1">

                {/* HERO SECTION */}
                <section className="relative overflow-hidden">
                    {/* Colorful illustration background */}
                    <div className="relative bg-gradient-to-br from-[#4ec6e0] via-[#2d9cdb] to-[#27ae60] min-h-[320px] flex items-center justify-center">
                        {/* Decorative landscape SVG */}
                        <div className="absolute inset-0 overflow-hidden">
                            <svg viewBox="0 0 1200 400" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                                {/* Sky gradient */}
                                <defs>
                                    <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="#56c5d6" />
                                        <stop offset="100%" stopColor="#3aab85" />
                                    </linearGradient>
                                </defs>
                                <rect width="1200" height="400" fill="url(#skyGrad)" />

                                {/* Clouds */}
                                <ellipse cx="200" cy="80" rx="80" ry="30" fill="white" opacity="0.25" />
                                <ellipse cx="240" cy="70" rx="60" ry="25" fill="white" opacity="0.2" />
                                <ellipse cx="800" cy="60" rx="70" ry="25" fill="white" opacity="0.2" />

                                {/* Mountains */}
                                <polygon points="0,300 150,120 300,300" fill="#358a5f" opacity="0.5" />
                                <polygon points="100,300 300,80 500,300" fill="#2d7d53" opacity="0.6" />
                                <polygon points="700,300 900,100 1100,300" fill="#358a5f" opacity="0.4" />
                                <polygon points="900,300 1050,150 1200,300" fill="#2d7d53" opacity="0.5" />

                                {/* Hills / ground */}
                                <ellipse cx="600" cy="400" rx="700" ry="150" fill="#4caf50" opacity="0.7" />
                                <ellipse cx="200" cy="380" rx="300" ry="100" fill="#66bb6a" opacity="0.6" />
                                <ellipse cx="1000" cy="390" rx="350" ry="120" fill="#43a047" opacity="0.5" />

                                {/* Trees */}
                                <rect x="150" y="230" width="8" height="40" fill="#5d4037" />
                                <polygon points="120,240 154,180 188,240" fill="#2e7d32" />
                                <polygon points="125,215 154,160 183,215" fill="#388e3c" />

                                <rect x="350" y="240" width="8" height="35" fill="#5d4037" />
                                <polygon points="320,250 354,190 388,250" fill="#2e7d32" />

                                <rect x="850" y="220" width="10" height="45" fill="#5d4037" />
                                <polygon points="815,230 855,165 895,230" fill="#2e7d32" />
                                <polygon points="822,205 855,145 888,205" fill="#388e3c" />

                                <rect x="1050" y="235" width="8" height="35" fill="#5d4037" />
                                <polygon points="1020,245 1054,185 1088,245" fill="#2e7d32" />

                                {/* Llama 1 - left */}
                                <g transform="translate(250, 210) scale(0.8)">
                                    <rect x="15" y="30" width="4" height="30" fill="#8B6914" rx="2" />
                                    <rect x="35" y="30" width="4" height="30" fill="#8B6914" rx="2" />
                                    <ellipse cx="27" cy="25" rx="18" ry="12" fill="#A0522D" />
                                    <rect x="24" y="-10" width="6" height="35" fill="#A0522D" rx="3" />
                                    <circle cx="27" cy="-15" r="8" fill="#A0522D" />
                                    <circle cx="24" cy="-17" r="2" fill="#1a1a1a" />
                                    <ellipse cx="22" cy="-25" rx="3" ry="6" fill="#A0522D" />
                                    <ellipse cx="32" cy="-25" rx="3" ry="6" fill="#A0522D" />
                                </g>

                                {/* Llama 2 - right (pink) */}
                                <g transform="translate(850, 200) scale(0.9)">
                                    <rect x="15" y="35" width="5" height="35" fill="#c0588d" rx="2" />
                                    <rect x="40" y="35" width="5" height="35" fill="#c0588d" rx="2" />
                                    <ellipse cx="30" cy="28" rx="20" ry="14" fill="#e91e7e" />
                                    <rect x="26" y="-8" width="8" height="38" fill="#e91e7e" rx="4" />
                                    <circle cx="30" cy="-13" r="10" fill="#e91e7e" />
                                    <circle cx="26" cy="-15" r="2.5" fill="#1a1a1a" />
                                    <ellipse cx="24" cy="-24" rx="4" ry="7" fill="#e91e7e" />
                                    <ellipse cx="36" cy="-24" rx="4" ry="7" fill="#e91e7e" />
                                    {/* Backpack */}
                                    <rect x="18" y="14" width="24" height="18" rx="3" fill="#1565c0" />
                                    <rect x="22" y="18" width="16" height="4" rx="1" fill="#42a5f5" />
                                    <rect x="22" y="24" width="16" height="4" rx="1" fill="#42a5f5" />
                                </g>

                                {/* Flowers */}
                                <circle cx="100" cy="310" r="4" fill="#ff7043" />
                                <circle cx="500" cy="320" r="3" fill="#ffeb3b" />
                                <circle cx="700" cy="315" r="4" fill="#e91e63" />
                                <circle cx="1100" cy="305" r="3" fill="#ab47bc" />
                            </svg>
                        </div>

                        {/* Hero Content */}
                        <AnimatedSection className="relative z-10 text-center px-4 py-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-lg" style={{ fontFamily: "'Georgia', serif" }}>
                                CarpacSoft Connect<sup className="text-lg">®</sup> Customer Success Journey
                            </h1>
                            <Button
                                onClick={() => setRequestModalOpen(true)}
                                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full uppercase text-sm tracking-wider shadow-lg transition-all duration-300 hover:scale-105"
                            >
                                REQUEST SOLUTION OFFERING
                            </Button>
                        </AnimatedSection>
                    </div>
                </section>

                {/* CREDITS INFO BAR */}
                <section className="bg-white py-6 px-4 border-b border-slate-200">
                    <div className="container mx-auto">
                        <AnimatedSection>
                            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-600 max-w-3xl">
                                <div className="border border-slate-300 rounded px-3 py-1.5">
                                    <span className="font-semibold text-slate-800">Credits per offering:**</span>
                                </div>
                                <span>Training Resources - <strong className="text-slate-800">0</strong></span>
                                <span>Consulting - <strong className="text-slate-800">1</strong></span>
                                <span>Technical Service - <strong className="text-slate-800">1</strong></span>
                                <span>Benchmark Assessment - <strong className="text-slate-800">1</strong></span>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* MAIN CATALOG CONTENT */}
                <section className="bg-white py-8 px-4">
                    <div className="container mx-auto">
                        <div className="grid md:grid-cols-2 gap-x-16 gap-y-4 max-w-6xl mx-auto">

                            {/* LEFT COLUMN */}
                            <div>
                                <AnimatedSection>
                                    <SectionTitle>Onboarding CarpacSoft Connect</SectionTitle>
                                    {onboardingItems.map((item, i) => (
                                        <OfferingItem key={`onboard-${i}`} item={item} />
                                    ))}
                                </AnimatedSection>

                                <AnimatedSection delay={100}>
                                    <SectionTitle>Improving Your Process</SectionTitle>
                                    {processItems.map((item, i) => (
                                        <OfferingItem key={`process-${i}`} item={item} />
                                    ))}
                                </AnimatedSection>

                                <AnimatedSection delay={200}>
                                    <SectionTitle>Evaluating Your Compliance</SectionTitle>
                                    {complianceItems.map((item, i) => (
                                        <OfferingItem key={`compliance-${i}`} item={item} />
                                    ))}
                                </AnimatedSection>
                            </div>

                            {/* RIGHT COLUMN */}
                            <div>
                                <AnimatedSection>
                                    <SectionTitle>Improving Your Requirement Quality</SectionTitle>
                                    {requirementQualityItems.map((item, i) => (
                                        <OfferingItem key={`quality-${i}`} item={item} />
                                    ))}
                                </AnimatedSection>

                                <AnimatedSection delay={100}>
                                    <SectionTitle>Improving Your Traceability Score™</SectionTitle>
                                    {traceabilityItems.map((item, i) => (
                                        <OfferingItem key={`trace-${i}`} item={item} />
                                    ))}
                                </AnimatedSection>

                                <AnimatedSection delay={200}>
                                    <SectionTitle>Support Customer Validation</SectionTitle>
                                    {customerValidationItems.map((item, i) => (
                                        <OfferingItem key={`validation-${i}`} item={item} />
                                    ))}
                                </AnimatedSection>

                                <AnimatedSection delay={300}>
                                    <SectionTitle>Extend CarpacSoft Connect</SectionTitle>
                                    {extendItems.map((item, i) => (
                                        <OfferingItem key={`extend-${i}`} item={item} />
                                    ))}
                                </AnimatedSection>
                            </div>
                        </div>

                        {/* FOOTNOTES */}
                        <AnimatedSection className="max-w-6xl mx-auto mt-12">
                            <div className="text-sm text-slate-500 space-y-1">
                                <p>* Training Resources <strong className="text-slate-700">do not</strong> use any credits, they are self service.</p>
                                <p>** Offerings with "**" in the title require 2 credits</p>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* QUICK LINKS SECTION */}
                <section className="bg-white py-16 px-4 border-t border-slate-200">
                    <div className="container mx-auto">
                        <AnimatedSection className="text-center">
                            <h2 className="text-2xl md:text-3xl font-bold text-[#0a1628] mb-12">Quick Links</h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
                                {/* Community / Knowledge Base */}
                                <Link to="/resources/community" className="flex flex-col items-center gap-3 group">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                                        <MessageCircle className="w-7 h-7 text-white" />
                                    </div>
                                    <span className="text-sm font-semibold text-slate-700 text-center group-hover:text-green-600 transition-colors">
                                        Community / knowledge base
                                    </span>
                                </Link>

                                {/* Submit a Ticket */}
                                <Link to="/resources/support" className="flex flex-col items-center gap-3 group">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                                        <Send className="w-7 h-7 text-white" />
                                    </div>
                                    <span className="text-sm font-semibold text-slate-700 text-center group-hover:text-teal-600 transition-colors">
                                        Submit a Ticket
                                    </span>
                                </Link>

                                {/* Contact an Agent */}
                                <Link to="/company/contact" className="flex flex-col items-center gap-3 group">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                                        <Headphones className="w-7 h-7 text-white" />
                                    </div>
                                    <span className="text-sm font-semibold text-slate-700 text-center group-hover:text-emerald-600 transition-colors">
                                        Contact an Agent
                                    </span>
                                </Link>

                                {/* What's New? */}
                                <Link to="/blog" className="flex flex-col items-center gap-3 group">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                                        <Sparkles className="w-7 h-7 text-white" />
                                    </div>
                                    <span className="text-sm font-semibold text-slate-700 text-center group-hover:text-orange-600 transition-colors">
                                        What's New?
                                    </span>
                                </Link>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* CTA SECTION */}
                <section className="bg-gradient-to-r from-[#0d8f8f] to-[#1a9e8e] py-16 px-4">
                    <div className="container mx-auto text-center">
                        <AnimatedSection>
                            <p className="text-white text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mb-8">
                                Learn more about our Success Programs by contacting us below! If you're an existing CarpacSoft Connect customer, please reach out to your Customer Success Manager directly.
                            </p>
                            <Link to="/other-pages/success-catalog">
                                <Button className="bg-transparent hover:bg-white/10 text-white font-bold py-3 px-10 rounded-full uppercase text-sm tracking-wider border-2 border-white shadow-lg transition-all duration-300 hover:scale-105">
                                    CONTACT US
                                </Button>
                            </Link>
                        </AnimatedSection>
                    </div>
                </section>

                {/* REQUEST SOLUTION OFFERING MODAL */}
                {requestModalOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" onClick={() => setRequestModalOpen(false)}>
                        <div
                            className="bg-white rounded-xl shadow-2xl max-w-lg w-full p-8 relative animate-in fade-in zoom-in-95"
                            onClick={e => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setRequestModalOpen(false)}
                                className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 transition-colors text-2xl leading-none"
                                aria-label="Close modal"
                            >
                                ×
                            </button>
                            <h2 className="text-2xl font-bold text-[#0a1628] mb-2">Request a Solution Offering</h2>
                            <p className="text-slate-500 text-sm mb-6">Fill out the form below and a member of our Success team will reach out within 1 business day.</p>
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    setRequestModalOpen(false);
                                    alert("Thank you! Your request has been submitted. A member of our Success team will reach out shortly.");
                                }}
                                className="space-y-4"
                            >
                                <div className="grid grid-cols-2 gap-4">
                                    <input type="text" placeholder="First Name*" required className="bg-slate-100 border border-slate-300 rounded px-4 py-3 w-full text-sm focus:outline-none focus:ring-2 focus:ring-orange-400" />
                                    <input type="text" placeholder="Last Name*" required className="bg-slate-100 border border-slate-300 rounded px-4 py-3 w-full text-sm focus:outline-none focus:ring-2 focus:ring-orange-400" />
                                </div>
                                <input type="email" placeholder="Work Email*" required className="bg-slate-100 border border-slate-300 rounded px-4 py-3 w-full text-sm focus:outline-none focus:ring-2 focus:ring-orange-400" />
                                <input type="text" placeholder="Company*" required className="bg-slate-100 border border-slate-300 rounded px-4 py-3 w-full text-sm focus:outline-none focus:ring-2 focus:ring-orange-400" />
                                <select required className="bg-slate-100 border border-slate-300 rounded px-4 py-3 w-full text-sm text-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-400">
                                    <option value="">Select Offering*</option>
                                    <option>Onboarding CarpacSoft Connect</option>
                                    <option>Improving Your Requirement Quality</option>
                                    <option>Improving Your Traceability Score</option>
                                    <option>Improving Your Process</option>
                                    <option>Support Customer Validation</option>
                                    <option>Evaluating Your Compliance</option>
                                    <option>Extend CarpacSoft Connect</option>
                                </select>
                                <textarea placeholder="Message (optional)" rows={3} className="bg-slate-100 border border-slate-300 rounded px-4 py-3 w-full text-sm resize-none focus:outline-none focus:ring-2 focus:ring-orange-400" />
                                <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-full uppercase text-sm tracking-wider shadow-lg">
                                    SUBMIT REQUEST
                                </Button>
                            </form>
                        </div>
                    </div>
                )}

                {/* Accessibility Icon */}
                <div className="fixed bottom-4 left-4 z-50">
                    <div className="w-10 h-10 bg-[#2563eb] rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:bg-blue-600 transition-colors">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z" />
                        </svg>
                    </div>
                </div>

            </main>
            <Footer />
            <ChatWidget />
        </div>
    );
};

export default UserCommunity;