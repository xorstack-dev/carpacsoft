import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import AnimatedSection from "@/components/AnimatedSection";
import { Download, FileText, Server, Shield, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Datasheet() {
    const [formOpen, setFormOpen] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        phone: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setFormOpen(false);
            setSubmitted(false);
            setFormData({ firstName: '', lastName: '', email: '', company: '', phone: '' });
        }, 3000);
    };

    return (
        <div className="min-h-screen bg-white flex flex-col font-sans">
            <Header />
            <main className="flex-1">
                {/* Hero / Datasheet Section */}
                <section className="bg-gradient-to-b from-[#eef4fb] to-[#e8f0fa] py-16 md:py-24">
                    <div className="container mx-auto px-4">
                        <AnimatedSection>
                            <div className="bg-white rounded-xl shadow-[0_4px_40px_rgba(0,0,0,0.08)] max-w-6xl mx-auto overflow-hidden">
                                {/* Top Label */}
                                <div className="px-8 md:px-12 pt-10">
                                    <span className="text-[#ff8f00] font-bold text-xs tracking-[0.2em] uppercase">
                                        DATASHEET
                                    </span>
                                </div>

                                {/* Title */}
                                <div className="px-8 md:px-12 pt-4 pb-2">
                                    <h1 className="text-2xl md:text-3xl lg:text-[32px] font-bold text-[#1a1a2e] leading-tight max-w-4xl">
                                        CarpacSoft Connect<sup className="text-sm">®</sup> Best-in-Class API for Creating Interoperability Across Your Development Toolchain for Live Traceability<sup className="text-xs">™</sup>
                                    </h1>
                                </div>

                                {/* Content Area */}
                                <div className="px-8 md:px-12 py-8 flex flex-col lg:flex-row gap-10">
                                    {/* Left - Datasheet Preview Images */}
                                    <div className="lg:w-[380px] flex-shrink-0">
                                        <div className="relative">
                                            {/* Page 1 (back) */}
                                            <div className="absolute top-4 left-4 w-[280px] h-[360px] bg-white border border-gray-200 rounded shadow-lg z-[1] transform rotate-[-2deg]">
                                                {/* Mini page 2 content */}
                                                <div className="p-4">
                                                    <div className="flex items-center gap-2 mb-3">
                                                        <div className="w-16 h-1 bg-[#00a7b5] rounded"></div>
                                                        <div className="w-8 h-1 bg-[#ff8f00] rounded"></div>
                                                    </div>
                                                    <div className="space-y-1.5 mb-4">
                                                        <div className="h-1 bg-gray-100 rounded w-full"></div>
                                                        <div className="h-1 bg-gray-100 rounded w-11/12"></div>
                                                        <div className="h-1 bg-gray-100 rounded w-10/12"></div>
                                                        <div className="h-1 bg-gray-100 rounded w-full"></div>
                                                        <div className="h-1 bg-gray-100 rounded w-9/12"></div>
                                                    </div>
                                                    <div className="font-bold text-[5px] text-[#1a1a2e] mb-1.5">Data Flow Handling</div>
                                                    {/* Mini flow diagram */}
                                                    <div className="flex items-center gap-1 mb-4">
                                                        <div className="border border-[#00a7b5] rounded px-1 py-0.5 text-[4px] text-[#00a7b5]">Source</div>
                                                        <div className="w-2 h-px bg-[#00a7b5]"></div>
                                                        <div className="border border-[#00a7b5] rounded px-1 py-0.5 text-[4px] text-[#00a7b5]">API</div>
                                                        <div className="w-2 h-px bg-[#00a7b5]"></div>
                                                        <div className="border border-[#00a7b5] rounded px-1 py-0.5 text-[4px] text-[#00a7b5]">Connect</div>
                                                        <div className="w-2 h-px bg-[#00a7b5]"></div>
                                                        <div className="border border-[#00a7b5] rounded px-1 py-0.5 text-[4px] text-[#00a7b5]">Target</div>
                                                    </div>
                                                    <div className="space-y-1 mb-3">
                                                        <div className="h-1 bg-gray-100 rounded w-full"></div>
                                                        <div className="h-1 bg-gray-100 rounded w-10/12"></div>
                                                        <div className="h-1 bg-gray-100 rounded w-full"></div>
                                                    </div>
                                                    {/* Mini bar chart */}
                                                    <div className="flex items-end gap-1.5 h-12 mt-2">
                                                        <div className="w-4 bg-[#00a7b5] rounded-t" style={{ height: '60%' }}></div>
                                                        <div className="w-4 bg-[#ff8f00] rounded-t" style={{ height: '85%' }}></div>
                                                        <div className="w-4 bg-[#00a7b5] rounded-t" style={{ height: '45%' }}></div>
                                                        <div className="w-4 bg-[#ff8f00] rounded-t" style={{ height: '75%' }}></div>
                                                        <div className="w-4 bg-[#00a7b5] rounded-t" style={{ height: '90%' }}></div>
                                                        <div className="w-4 bg-[#ff8f00] rounded-t" style={{ height: '55%' }}></div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Page 2 (front) */}
                                            <div className="relative w-[280px] h-[360px] bg-white border border-gray-200 rounded shadow-xl z-[2]">
                                                {/* Mini cover page */}
                                                <div className="p-4">
                                                    <div className="flex items-center justify-between mb-3">
                                                        <div className="flex items-center gap-1">
                                                            <div className="w-3 h-3 bg-[#00a7b5] rounded-sm"></div>
                                                            <span className="text-[6px] font-bold text-[#1a1a2e]">CarpacSoft</span>
                                                            <span className="text-[5px] text-[#00a7b5] font-medium">connect</span>
                                                        </div>
                                                        <span className="text-[4px] text-gray-400 font-bold tracking-wider uppercase border border-gray-200 px-1 py-0.5 rounded">
                                                            DATASHEET
                                                        </span>
                                                    </div>
                                                    <h3 className="text-[7px] font-bold text-[#1a1a2e] leading-tight mb-3 pr-2">
                                                        CarpacSoft Connect Best-in-Class API for Creating Interoperability Across Your Development Toolchain for Live Traceability
                                                    </h3>
                                                    {/* Mini text lines */}
                                                    <div className="space-y-1 mb-3">
                                                        <div className="h-[2px] bg-gray-100 rounded w-full"></div>
                                                        <div className="h-[2px] bg-gray-100 rounded w-11/12"></div>
                                                        <div className="h-[2px] bg-gray-100 rounded w-10/12"></div>
                                                        <div className="h-[2px] bg-gray-100 rounded w-full"></div>
                                                        <div className="h-[2px] bg-gray-100 rounded w-9/12"></div>
                                                    </div>
                                                    <div className="text-[5px] font-bold text-[#1a1a2e] mb-1">Key Benefits</div>
                                                    <div className="space-y-1 mb-3">
                                                        <div className="flex items-center gap-1">
                                                            <div className="w-1 h-1 bg-[#ff8f00] rounded-full flex-shrink-0"></div>
                                                            <div className="h-[2px] bg-gray-100 rounded w-9/12"></div>
                                                        </div>
                                                        <div className="flex items-center gap-1">
                                                            <div className="w-1 h-1 bg-[#ff8f00] rounded-full flex-shrink-0"></div>
                                                            <div className="h-[2px] bg-gray-100 rounded w-10/12"></div>
                                                        </div>
                                                        <div className="flex items-center gap-1">
                                                            <div className="w-1 h-1 bg-[#ff8f00] rounded-full flex-shrink-0"></div>
                                                            <div className="h-[2px] bg-gray-100 rounded w-8/12"></div>
                                                        </div>
                                                    </div>
                                                    <div className="space-y-1 mb-3">
                                                        <div className="h-[2px] bg-gray-100 rounded w-full"></div>
                                                        <div className="h-[2px] bg-gray-100 rounded w-10/12"></div>
                                                        <div className="h-[2px] bg-gray-100 rounded w-full"></div>
                                                        <div className="h-[2px] bg-gray-100 rounded w-11/12"></div>
                                                        <div className="h-[2px] bg-gray-100 rounded w-9/12"></div>
                                                    </div>
                                                    <div className="space-y-1">
                                                        <div className="h-[2px] bg-gray-100 rounded w-full"></div>
                                                        <div className="h-[2px] bg-gray-100 rounded w-8/12"></div>
                                                    </div>
                                                </div>
                                                {/* Bottom image placeholder */}
                                                <div className="absolute bottom-0 left-0 right-0 h-[90px] bg-gradient-to-br from-[#0a2540] via-[#0d3b66] to-[#1a5276] rounded-b overflow-hidden">
                                                    <div className="absolute inset-0 opacity-30">
                                                        <div className="grid grid-cols-6 gap-1 p-2 h-full">
                                                            {Array.from({ length: 18 }).map((_, i) => (
                                                                <div
                                                                    key={i}
                                                                    className="rounded-sm"
                                                                    style={{
                                                                        background: i % 3 === 0 ? '#00a7b5' : i % 3 === 1 ? '#3b82f6' : '#1e40af',
                                                                        opacity: 0.3 + Math.random() * 0.4,
                                                                    }}
                                                                ></div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                        <Server className="text-white/20" size={32} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right - Text Content */}
                                    <div className="flex-1 pt-2">
                                        {/* Highlighted intro text */}
                                        <p className="text-[#e65100] font-semibold text-[15px] leading-relaxed mb-5">
                                            Siloed data creates significant business roadblocks and isolated information obstructs collaboration and slows critical decision-making.
                                        </p>

                                        <p className="text-gray-600 text-sm leading-relaxed mb-5">
                                            CarpacSoft<sup>®</sup> offers a best-in-class REST API for CarpacSoft Connect that provides a solution for this problem by enabling interoperability between compliant software.
                                        </p>

                                        <p className="text-[#1a1a2e] font-bold text-sm leading-relaxed mb-5">
                                            Examples of the many ways to benefit from the CarpacSoft Connect API include <span className="text-[#1a1a2e]">reporting, data & trace synchronization, and test results import.</span>
                                        </p>

                                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                            Read this datasheet to learn more about key benefits:
                                        </p>

                                        {/* Bullet points */}
                                        <ul className="space-y-2.5 mb-8">
                                            <li className="flex items-start gap-3">
                                                <span className="w-1.5 h-1.5 bg-[#ff8f00] rounded-full mt-1.5 flex-shrink-0"></span>
                                                <span className="text-sm text-gray-700 font-medium">
                                                    <span className="underline decoration-[#ff8f00] underline-offset-2 font-semibold">Streamline integration processes</span>
                                                </span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="w-1.5 h-1.5 bg-[#ff8f00] rounded-full mt-1.5 flex-shrink-0"></span>
                                                <span className="text-sm text-gray-700 font-medium">
                                                    Boost data handling efficiency
                                                </span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="w-1.5 h-1.5 bg-[#ff8f00] rounded-full mt-1.5 flex-shrink-0"></span>
                                                <span className="text-sm text-gray-700 font-medium">
                                                    Leverage strict security and authentication
                                                </span>
                                            </li>
                                        </ul>

                                        {/* CTA Button */}
                                        <button
                                            onClick={() => setFormOpen(true)}
                                            className="bg-[#00a7b5] hover:bg-[#00929e] text-white font-bold px-8 py-3 rounded text-xs uppercase tracking-wider transition-all duration-300 hover:shadow-lg hover:translate-y-[-1px] inline-flex items-center gap-2"
                                        >
                                            GET THE DATASHEET
                                            <Download size={14} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>




            </main>

            <Footer />
            <ChatWidget />

            {/* Download Form Modal */}
            {formOpen && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
                    onClick={() => setFormOpen(false)}
                >
                    <div
                        className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-200"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className="bg-gradient-to-r from-[#00a7b5] to-[#00d4aa] p-6">
                            <h3 className="text-white text-lg font-bold">Get the Datasheet</h3>
                            <p className="text-white/80 text-xs mt-1">Fill in your details to download the API datasheet.</p>
                        </div>

                        {submitted ? (
                            <div className="p-10 text-center">
                                <CheckCircle2 className="text-[#00a7b5] mx-auto mb-4" size={48} />
                                <h4 className="text-lg font-bold text-[#1a1a2e] mb-2">Thank You!</h4>
                                <p className="text-gray-500 text-sm">Your datasheet download will begin shortly.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="p-6 space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-bold text-gray-600 mb-1">First Name *</label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.firstName}
                                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00a7b5]/30 focus:border-[#00a7b5] transition-all"
                                            placeholder="John"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-600 mb-1">Last Name *</label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.lastName}
                                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00a7b5]/30 focus:border-[#00a7b5] transition-all"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-600 mb-1">Business Email *</label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00a7b5]/30 focus:border-[#00a7b5] transition-all"
                                        placeholder="john@company.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-600 mb-1">Company *</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.company}
                                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00a7b5]/30 focus:border-[#00a7b5] transition-all"
                                        placeholder="Acme Corp"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-600 mb-1">Phone</label>
                                    <input
                                        type="tel"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00a7b5]/30 focus:border-[#00a7b5] transition-all"
                                        placeholder="+1 (555) 000-0000"
                                    />
                                </div>
                                <div className="flex gap-3 pt-2">
                                    <button
                                        type="button"
                                        onClick={() => setFormOpen(false)}
                                        className="flex-1 border border-gray-200 text-gray-600 font-bold py-2.5 rounded-lg text-xs uppercase tracking-wider hover:bg-gray-50 transition-colors"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="flex-1 bg-[#ff8f00] hover:bg-[#e68200] text-white font-bold py-2.5 rounded-lg text-xs uppercase tracking-wider transition-colors shadow-md"
                                    >
                                        Download Now
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}