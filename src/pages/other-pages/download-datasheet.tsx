import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import AnimatedSection from "@/components/AnimatedSection";
import { Server } from 'lucide-react';

export default function DownloadDatasheet() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        workEmail: '',
        company: '',
        industry: '',
        country: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-white flex flex-col font-sans text-[#333]">
            <Header />
            <main className="flex-1">
                {/* Main Datasheet Section */}
                <section style={{ background: 'linear-gradient(180deg, #edf3fa 0%, #e4ecf5 100%)' }} className="py-12 md:py-20">
                    <div className="container mx-auto px-4">
                        <AnimatedSection>
                            <div className="bg-white rounded-sm shadow-[0_2px_30px_rgba(0,0,0,0.07)] max-w-[1050px] mx-auto overflow-visible">
                                <div className="flex flex-col lg:flex-row">
                                    {/* LEFT SIDE - Datasheet Preview Images */}
                                    <div className="lg:w-[440px] flex-shrink-0 p-8 md:p-10 pb-6">
                                        <div className="relative" style={{ minHeight: '420px' }}>
                                            {/* Back page (page 2 - slightly rotated behind) */}
                                            <div
                                                className="absolute bg-white border border-gray-200 shadow-md z-[1]"
                                                style={{
                                                    width: '260px',
                                                    height: '340px',
                                                    top: '12px',
                                                    left: '30px',
                                                    transform: 'rotate(1deg)',
                                                }}
                                            >
                                                <div className="p-3 pt-4">
                                                    {/* Mini header */}
                                                    <div className="flex items-center gap-1 mb-2">
                                                        <div className="w-2 h-2 bg-[#00a7b5] rounded-sm"></div>
                                                        <span className="text-[4px] font-bold text-[#1a1a2e]">CarpacSoft</span>
                                                    </div>
                                                    {/* Text lines */}
                                                    <div className="space-y-[3px] mb-3">
                                                        <div className="h-[2px] bg-gray-100 rounded w-full"></div>
                                                        <div className="h-[2px] bg-gray-100 rounded w-11/12"></div>
                                                        <div className="h-[2px] bg-gray-100 rounded w-10/12"></div>
                                                    </div>
                                                    {/* Two column layout */}
                                                    <div className="flex gap-3 mb-3">
                                                        <div className="flex-1 space-y-[2px]">
                                                            <div className="h-[2px] bg-gray-100 rounded w-full"></div>
                                                            <div className="h-[2px] bg-gray-100 rounded w-9/12"></div>
                                                            <div className="h-[2px] bg-gray-100 rounded w-full"></div>
                                                            <div className="h-[2px] bg-gray-100 rounded w-10/12"></div>
                                                            <div className="h-[2px] bg-gray-100 rounded w-8/12"></div>
                                                        </div>
                                                        <div className="flex-1">
                                                            <div className="text-[4px] font-bold text-[#00a7b5] mb-1">CarpacSoft Connect</div>
                                                            <div className="text-[3.5px] font-bold text-[#1a1a2e] mb-1">Base Package Includes:</div>
                                                            <div className="space-y-[1px]">
                                                                <div className="flex items-center gap-0.5">
                                                                    <div className="w-0.5 h-0.5 bg-[#00a7b5] rounded-full flex-shrink-0"></div>
                                                                    <div className="h-[1.5px] bg-gray-200 rounded w-full"></div>
                                                                </div>
                                                                <div className="flex items-center gap-0.5">
                                                                    <div className="w-0.5 h-0.5 bg-[#00a7b5] rounded-full flex-shrink-0"></div>
                                                                    <div className="h-[1.5px] bg-gray-200 rounded w-10/12"></div>
                                                                </div>
                                                                <div className="flex items-center gap-0.5">
                                                                    <div className="w-0.5 h-0.5 bg-[#00a7b5] rounded-full flex-shrink-0"></div>
                                                                    <div className="h-[1.5px] bg-gray-200 rounded w-11/12"></div>
                                                                </div>
                                                                <div className="flex items-center gap-0.5">
                                                                    <div className="w-0.5 h-0.5 bg-[#00a7b5] rounded-full flex-shrink-0"></div>
                                                                    <div className="h-[1.5px] bg-gray-200 rounded w-8/12"></div>
                                                                </div>
                                                                <div className="flex items-center gap-0.5">
                                                                    <div className="w-0.5 h-0.5 bg-[#00a7b5] rounded-full flex-shrink-0"></div>
                                                                    <div className="h-[1.5px] bg-gray-200 rounded w-9/12"></div>
                                                                </div>
                                                                <div className="flex items-center gap-0.5">
                                                                    <div className="w-0.5 h-0.5 bg-[#00a7b5] rounded-full flex-shrink-0"></div>
                                                                    <div className="h-[1.5px] bg-gray-200 rounded w-full"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* More text lines */}
                                                    <div className="space-y-[2px] mb-3">
                                                        <div className="h-[2px] bg-gray-100 rounded w-full"></div>
                                                        <div className="h-[2px] bg-gray-100 rounded w-10/12"></div>
                                                        <div className="h-[2px] bg-gray-100 rounded w-full"></div>
                                                    </div>
                                                    {/* Bullet points */}
                                                    <div className="space-y-[2px] mb-3">
                                                        <div className="flex items-center gap-1">
                                                            <div className="w-0.5 h-0.5 bg-[#ff8f00] rounded-full flex-shrink-0"></div>
                                                            <div className="h-[1.5px] bg-gray-200 rounded w-9/12"></div>
                                                        </div>
                                                        <div className="flex items-center gap-1">
                                                            <div className="w-0.5 h-0.5 bg-[#ff8f00] rounded-full flex-shrink-0"></div>
                                                            <div className="h-[1.5px] bg-gray-200 rounded w-10/12"></div>
                                                        </div>
                                                    </div>
                                                    <div className="space-y-[2px]">
                                                        <div className="h-[2px] bg-gray-100 rounded w-full"></div>
                                                        <div className="h-[2px] bg-gray-100 rounded w-11/12"></div>
                                                        <div className="h-[2px] bg-gray-100 rounded w-8/12"></div>
                                                        <div className="h-[2px] bg-gray-100 rounded w-full"></div>
                                                        <div className="h-[2px] bg-gray-100 rounded w-9/12"></div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Front page (cover page) */}
                                            <div
                                                className="relative bg-white border border-gray-200 shadow-xl z-[2]"
                                                style={{
                                                    width: '260px',
                                                    height: '340px',
                                                }}
                                            >
                                                {/* Cover top banner */}
                                                <div className="bg-gradient-to-r from-[#0d3c6e] to-[#1a5fa0] px-4 py-3 flex items-center justify-between">
                                                    <div className="flex items-center gap-1.5">
                                                        <div className="w-3 h-3 bg-white/20 rounded-sm flex items-center justify-center">
                                                            <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
                                                        </div>
                                                        <div>
                                                            <span className="text-[5px] font-bold text-white">CarpacSoft</span>
                                                        </div>
                                                    </div>
                                                    <span className="text-[3.5px] text-white/60 font-bold tracking-wider uppercase border border-white/20 px-1.5 py-0.5 rounded-sm">
                                                        DATASHEET
                                                    </span>
                                                </div>
                                                <div className="px-4 py-2">
                                                    <div className="flex items-center gap-1 mb-1.5">
                                                        <div className="w-2 h-2 bg-[#00a7b5] rounded-sm"></div>
                                                        <span className="text-[5px] text-[#00a7b5] font-semibold">CarpacSoft</span>
                                                        <span className="text-[5px] font-bold text-[#1a1a2e]">Connect<sup className="text-[3px]">®</sup> Licensing</span>
                                                    </div>
                                                </div>

                                                {/* Body content */}
                                                <div className="px-4">
                                                    <div className="space-y-[2px] mb-3">
                                                        <div className="h-[1.5px] bg-gray-100 rounded w-full"></div>
                                                        <div className="h-[1.5px] bg-gray-100 rounded w-11/12"></div>
                                                        <div className="h-[1.5px] bg-gray-100 rounded w-9/12"></div>
                                                    </div>

                                                    {/* Two column with text and list */}
                                                    <div className="flex gap-2 mb-3">
                                                        <div className="flex-1 space-y-[2px]">
                                                            <div className="h-[1.5px] bg-gray-100 rounded w-full"></div>
                                                            <div className="h-[1.5px] bg-gray-100 rounded w-10/12"></div>
                                                            <div className="h-[1.5px] bg-gray-100 rounded w-full"></div>
                                                            <div className="h-[1.5px] bg-gray-100 rounded w-9/12"></div>
                                                            <div className="h-[1.5px] bg-gray-100 rounded w-full"></div>
                                                            <div className="h-[1.5px] bg-gray-100 rounded w-11/12"></div>
                                                            <div className="h-[1.5px] bg-gray-100 rounded w-7/12"></div>
                                                        </div>
                                                        <div className="flex-1">
                                                            <div className="text-[3.5px] font-bold text-[#00a7b5] mb-1">CarpacSoft Connect</div>
                                                            <div className="text-[3px] font-bold text-[#1a1a2e] mb-1">Base Package Includes:</div>
                                                            <div className="space-y-[1px]">
                                                                {[1, 2, 3, 4, 5, 6, 7].map(i => (
                                                                    <div key={i} className="flex items-center gap-0.5">
                                                                        <div className="w-[3px] h-[3px] bg-[#00a7b5] rounded-full flex-shrink-0"></div>
                                                                        <div className="h-[1px] bg-gray-200 rounded" style={{ width: `${55 + Math.random() * 30}%` }}></div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* More lines */}
                                                    <div className="space-y-[2px] mb-2">
                                                        <div className="h-[1.5px] bg-gray-100 rounded w-full"></div>
                                                        <div className="h-[1.5px] bg-gray-100 rounded w-10/12"></div>
                                                    </div>

                                                    {/* Bullet list */}
                                                    <div className="space-y-[2px] mb-2">
                                                        <div className="flex items-center gap-0.5">
                                                            <div className="w-[3px] h-[3px] bg-[#ff8f00] rounded-full flex-shrink-0"></div>
                                                            <div className="h-[1.5px] bg-gray-200 rounded w-8/12"></div>
                                                        </div>
                                                        <div className="flex items-center gap-0.5">
                                                            <div className="w-[3px] h-[3px] bg-[#ff8f00] rounded-full flex-shrink-0"></div>
                                                            <div className="h-[1.5px] bg-gray-200 rounded w-10/12"></div>
                                                        </div>
                                                        <div className="flex items-center gap-0.5">
                                                            <div className="w-[3px] h-[3px] bg-[#ff8f00] rounded-full flex-shrink-0"></div>
                                                            <div className="h-[1.5px] bg-gray-200 rounded w-9/12"></div>
                                                        </div>
                                                    </div>

                                                    <div className="space-y-[2px]">
                                                        <div className="h-[1.5px] bg-gray-100 rounded w-full"></div>
                                                        <div className="h-[1.5px] bg-gray-100 rounded w-8/12"></div>
                                                    </div>
                                                </div>

                                                {/* Bottom image area */}
                                                <div className="absolute bottom-0 left-0 right-0">
                                                    <div className="flex gap-1 px-3 pb-2">
                                                        {/* Small teal graphic */}
                                                        <div className="w-[100px] h-[55px] rounded overflow-hidden bg-gradient-to-br from-[#00796b] to-[#00a7b5] relative">
                                                            <div className="absolute inset-0 flex items-center justify-center opacity-30">
                                                                <div className="grid grid-cols-3 gap-px p-1 w-full h-full">
                                                                    {Array.from({ length: 9 }).map((_, i) => (
                                                                        <div key={i} className="bg-white/20 rounded-sm"></div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* Small blue server graphic */}
                                                        <div className="w-[100px] h-[55px] rounded overflow-hidden bg-gradient-to-br from-[#0a2540] to-[#1a5276] relative">
                                                            <div className="absolute inset-0 flex items-center justify-center">
                                                                <Server className="text-blue-300/30" size={18} />
                                                            </div>
                                                            <div className="absolute inset-0 opacity-20">
                                                                <div className="grid grid-cols-4 gap-px p-1 w-full h-full">
                                                                    {Array.from({ length: 8 }).map((_, i) => (
                                                                        <div key={i} className="bg-blue-400/40 rounded-sm"></div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* RIGHT SIDE - Form */}
                                    <div className="flex-1 p-8 md:p-10 md:pl-4 lg:pl-6">
                                        {/* DATASHEET label */}
                                        <span className="text-[#ff8f00] font-bold text-xs tracking-[0.15em] uppercase">
                                            DATASHEET
                                        </span>

                                        {/* Title */}
                                        <h1 className="text-[26px] md:text-[30px] font-bold text-[#1a1a2e] leading-tight mt-2 mb-8">
                                            CarpacSoft Connect<sup className="text-sm">®</sup> Licensing
                                        </h1>

                                        {submitted ? (
                                            <div className="py-10 text-center">
                                                <div className="w-16 h-16 bg-[#00a7b5]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                                    <svg className="w-8 h-8 text-[#00a7b5]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                                <h2 className="text-xl font-bold text-[#1a1a2e] mb-2">Thank You!</h2>
                                                <p className="text-gray-500 text-sm">Your datasheet download will begin shortly.</p>
                                            </div>
                                        ) : (
                                            <form onSubmit={handleSubmit}>
                                                {/* Row 1: First Name, Last Name */}
                                                <div className="flex gap-4 mb-4">
                                                    <input
                                                        type="text"
                                                        required
                                                        value={formData.firstName}
                                                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                                        className="flex-1 border border-gray-300 rounded px-4 py-[10px] text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#00a7b5] transition-colors bg-white"
                                                        placeholder="First Name:"
                                                    />
                                                    <input
                                                        type="text"
                                                        required
                                                        value={formData.lastName}
                                                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                                        className="flex-1 border border-gray-300 rounded px-4 py-[10px] text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#00a7b5] transition-colors bg-white"
                                                        placeholder="Last Name:"
                                                    />
                                                </div>

                                                {/* Row 2: Work Email, Company */}
                                                <div className="flex gap-4 mb-4">
                                                    <input
                                                        type="email"
                                                        required
                                                        value={formData.workEmail}
                                                        onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                                                        className="flex-1 border border-gray-300 rounded px-4 py-[10px] text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#00a7b5] transition-colors bg-white"
                                                        placeholder="Work Email:"
                                                    />
                                                    <input
                                                        type="text"
                                                        required
                                                        value={formData.company}
                                                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                                        className="flex-1 border border-gray-300 rounded px-4 py-[10px] text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#00a7b5] transition-colors bg-white"
                                                        placeholder="Company:"
                                                    />
                                                </div>

                                                {/* Row 3: Industry, Country dropdowns */}
                                                <div className="flex gap-4 mb-6">
                                                    <div className="flex-1 relative">
                                                        <select
                                                            required
                                                            value={formData.industry}
                                                            onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                                                            className="w-full border border-gray-300 rounded px-4 py-[10px] text-sm text-gray-400 focus:outline-none focus:border-[#00a7b5] transition-colors bg-white appearance-none cursor-pointer"
                                                            style={{ color: formData.industry ? '#374151' : '#9ca3af' }}
                                                        >
                                                            <option value="" disabled>Industry</option>
                                                            <option value="aerospace">Aerospace & Defense</option>
                                                            <option value="automotive">Automotive</option>
                                                            <option value="financial">Financial Services</option>
                                                            <option value="government">Government</option>
                                                            <option value="industrial">Industrial Manufacturing</option>
                                                            <option value="medical">Medical Device</option>
                                                            <option value="oil-gas">Oil & Gas</option>
                                                            <option value="semiconductor">Semiconductor</option>
                                                            <option value="software">Software Development</option>
                                                            <option value="other">Other</option>
                                                        </select>
                                                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                                                            <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className="flex-1 relative">
                                                        <select
                                                            required
                                                            value={formData.country}
                                                            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                                                            className="w-full border border-gray-300 rounded px-4 py-[10px] text-sm text-gray-400 focus:outline-none focus:border-[#00a7b5] transition-colors bg-white appearance-none cursor-pointer"
                                                            style={{ color: formData.country ? '#374151' : '#9ca3af' }}
                                                        >
                                                            <option value="" disabled>Country</option>
                                                            <option value="us">United States</option>
                                                            <option value="uk">United Kingdom</option>
                                                            <option value="de">Germany</option>
                                                            <option value="fr">France</option>
                                                            <option value="nl">Netherlands</option>
                                                            <option value="jp">Japan</option>
                                                            <option value="in">India</option>
                                                            <option value="ca">Canada</option>
                                                            <option value="au">Australia</option>
                                                            <option value="other">Other</option>
                                                        </select>
                                                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                                                            <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Privacy notice */}
                                                <p className="text-sm text-gray-600 mb-5">
                                                    All fields are required. Your{' '}
                                                    <a href="#" className="text-[#00a7b5] hover:underline font-medium">privacy</a>
                                                    {' '}is important to us.
                                                </p>

                                                {/* Submit button */}
                                                <button
                                                    type="submit"
                                                    className="bg-[#00a7b5] hover:bg-[#00929e] text-white font-bold px-8 py-[10px] rounded text-xs uppercase tracking-widest transition-colors"
                                                >
                                                    SUBMIT
                                                </button>
                                            </form>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* Bottom Text Section */}
                <section className="py-12 bg-white">
                    <div className="container mx-auto px-4 max-w-[1050px]">
                        <AnimatedSection>
                            <p className="text-sm text-gray-700 leading-relaxed mb-6">
                                CarpacSoft Connect<sup>®</sup>'s license model is fully scalable, ensuring rapid deployment and easy adoption of the solution across your product development team. The base package includes the full breadth of CarpacSoft Connect's core capabilities with access for up to 10 named Creators, and site licenses for Stakeholders and Reviewers — enough to get your product organization up and running with our industry leading solution.{' '}
                                <Link to="/product/pricing" className="font-bold text-[#1a1a2e] underline hover:text-[#00a7b5] transition-colors">
                                    Get this datasheet to learn more about our licensing
                                </Link>
                                , including:
                            </p>

                            <ul className="space-y-2 ml-6 mb-8">
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#333] rounded-full mt-[7px] flex-shrink-0"></span>
                                    <span className="text-sm font-bold text-[#1a1a2e]">What the base package includes</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#333] rounded-full mt-[7px] flex-shrink-0"></span>
                                    <span className="text-sm font-bold text-[#1a1a2e]">The four unique license types</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#333] rounded-full mt-[7px] flex-shrink-0"></span>
                                    <span className="text-sm font-bold text-[#1a1a2e]">The flexibility & scalability of CarpacSoft Connect</span>
                                </li>
                            </ul>
                        </AnimatedSection>
                    </div>
                </section>
            </main>

            <Footer />
            <ChatWidget />
        </div>
    );
}