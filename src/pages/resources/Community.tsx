import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { Search, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const Community = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const blogPosts = [
        {
            type: "WEBINAR RECAP",
            title: "[Webinar Recap] From Requirements to Regulatory: How AI Is Transforming Submission Readiness",
            desc: "Stop Scrambling for Submissions. Build Readiness Into Your Proces...",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400&h=250"
        },
        {
            type: "BLOG",
            title: "Navigating FDA AI Guidance for Medical Devices: A Practical Guide",
            desc: "Navigating FDA AI Guidance for Medical Devices: A Practical Guide For medical...",
            image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=400&h=250"
        },
        {
            type: "EXPERT PERSPECTIVES",
            title: "Expert Perspectives: A Method to Assess Benefit-Risk More Objectively for Healthcare Applications",
            desc: "Expert Perspectives: A Method to Assess Benefit-Risk More Objectively for...",
            image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=400&h=250"
        },
        {
            type: "WEBINAR RECAP",
            title: "[Webinar Recap] The Collapse of Requirements Quality Under System Complexity – How AI Can Help",
            desc: "Transforming Requirements Engineering with AI to Enhance Clarity, Consistenc...",
            image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=400&h=250"
        },
        {
            type: "ARTICLE",
            title: "2026 Predictions for Nuclear Energy: Innovation, Safety, and the Path to a Sustainable Future",
            desc: "2026 Predictions for Nuclear Energy: Innovation, Safety, and the Path to a Sustainab...",
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400&h=250"
        }
    ];

    return (
        <div className="min-h-screen flex flex-col font-sans bg-[#f3f4f6]">

            {/* Community Navigation Bar */}
            <div className="bg-[#007dba] text-white py-3 px-4 shadow-md sticky top-0 z-[50]">
                <div className="container mx-auto flex items-center justify-between overflow-x-auto whitespace-nowrap scrollbar-hide">
                    <div className="flex items-center space-x-6">
                        <div className="flex items-center space-x-2 mr-4">
                            <div className="w-8 h-8 bg-[#ea580c] rounded flex items-center justify-center p-1.5">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="text-white w-full h-full">
                                    <path d="M12 2L2 19H22L12 2Z" />
                                </svg>
                            </div>
                        </div>
                        {["Categories", "Events", "Ideation", "CarpacSoft 101", "Resources"].map((item) => (
                            <a key={item} href="#" className="text-xs font-medium hover:text-blue-100 transition-colors uppercase tracking-tight">
                                {item}
                            </a>
                        ))}
                    </div>
                    <div className="flex items-center space-x-4">
                        <button className="p-1 hover:text-blue-100"><Search className="w-4 h-4" /></button>
                        <button className="text-xs border border-white px-4 py-1.5 rounded hover:bg-white/10 transition-colors">Sign In</button>
                        <button className="text-xs bg-white text-[#007dba] px-4 py-1.5 rounded font-bold hover:bg-blue-50 transition-colors">Register</button>
                    </div>
                </div>
            </div>

            <main className="flex-1">

                {/* HERO SECTION */}
                <section className="bg-[#0c4a6e] py-12 text-white relative overflow-hidden">
                    {/* Abstract Pattern Background */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                                    <rect width="60" height="60" fill="none" stroke="white" strokeWidth="0.5" />
                                    <circle cx="0" cy="0" r="1.5" fill="white" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#grid)" />
                        </svg>
                    </div>

                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <AnimatedSection>
                            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-white">
                                CarpacSoft® User Community
                            </h1>
                            <div className="max-w-3xl mx-auto flex bg-white rounded overflow-hidden shadow-xl">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="flex-1 px-6 py-3 text-slate-800 focus:outline-none"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                <button className="bg-[#0c4a6e] px-8 py-3 font-bold hover:bg-[#075985] transition-colors">
                                    Search
                                </button>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* SURVEY BANNER */}
                <section className="container mx-auto px-4 -mt-10 mb-12 relative z-20">
                    <AnimatedSection delay={200}>
                        <div className="bg-[#ccfbf1] border border-[#99f6e4] py-8 px-4 rounded-lg shadow-sm text-center">
                            <h3 className="text-[#0d9488] font-bold text-lg mb-2">Tell Us What You Think!</h3>
                            <p className="text-slate-600 text-sm mb-4">Take our quick survey to help improve your  CarpacSoft Community experience.</p>
                            <button className="bg-[#007dba] text-white px-6 py-2 rounded font-bold hover:bg-[#006ca3] transition-colors">
                                Start Now
                            </button>
                        </div>
                    </AnimatedSection>
                </section>

                {/* UPCOMING EVENTS */}
                <section className="container mx-auto px-4 mb-16">
                    <AnimatedSection>
                        <h2 className="text-3xl font-bold text-center text-slate-700 mb-8">Upcoming Events</h2>
                        <div className="bg-white rounded-lg shadow-sm p-6 max-w-2xl mx-auto">
                            <div className="group cursor-pointer">
                                <div className="rounded-lg overflow-hidden relative aspect-[16/9] mb-4">
                                    <img
                                        src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&q=80&w=800&h=450"
                                        alt="Fireside Chat"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded text-[10px] font-bold text-slate-500 uppercase">
                                        Feb 10
                                    </div>
                                </div>
                                <h3 className="font-bold text-slate-800 group-hover:text-[#007dba] transition-colors">Executive Fireside Chat</h3>
                                <p className="text-xs text-slate-400 mt-1">Location: Virtual</p>
                            </div>
                        </div>
                    </AnimatedSection>
                </section>

                {/* DISCUSSIONS & ANNOUNCEMENTS */}
                <section className="container mx-auto px-4 mb-20">
                    <div className="grid lg:grid-cols-2 gap-12">
                        <div className="space-y-8">
                            <AnimatedSection>
                                <h2 className="text-2xl font-bold text-slate-700 mb-2">Welcome!</h2>
                                <p className="text-sm text-slate-500 mb-4">It looks like you're new here. Sign in or register to get started.</p>
                                <div className="flex gap-4">
                                    <button className="bg-[#007dba] text-white px-8 py-2 rounded font-bold hover:bg-[#006ca3] transition-colors">Sign In</button>
                                    <button className="border border-slate-300 text-slate-500 px-8 py-2 rounded hover:bg-slate-50 transition-colors">Register</button>
                                </div>
                            </AnimatedSection>

                            <AnimatedSection delay={100}>
                                <h2 className="text-2xl font-bold text-slate-700 mb-6 border-b border-slate-200 pb-2">Top Discussions</h2>
                                <div className="py-8 text-center text-slate-400 text-sm bg-slate-50 rounded italic border border-dashed border-slate-300">
                                    No discussions were found.
                                </div>
                            </AnimatedSection>
                        </div>

                        <div className="space-y-8">
                            <AnimatedSection>
                                <div className="relative rounded-lg overflow-hidden h-[120px] bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] group cursor-pointer shadow-lg">
                                    <div className="absolute inset-0 opacity-20">
                                        <svg width="100%" height="100%" fill="white"><path d="M0 0l200 120H0z" /></svg>
                                    </div>
                                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-8 text-center">
                                        <h4 className="text-lg font-bold mb-1">CarpacSoft Onboarding Guide</h4>
                                        <p className="text-xs opacity-90 mb-3">Get started w/ CarpacSoft®</p>
                                        <button className="bg-[#007dba] hover:bg-[#006ca3] text-white inline-flex items-center px-6 py-1.5 rounded-full text-xs font-bold transition-all shadow-md group-hover:-translate-y-0.5">
                                            Launch
                                        </button>
                                    </div>
                                </div>
                            </AnimatedSection>

                            <AnimatedSection delay={100}>
                                <h2 className="text-2xl font-bold text-slate-700 mb-6">Announcements</h2>
                                <div className="py-8 text-center text-slate-400 text-sm bg-[#e0f2fe] rounded italic border border-dashed border-[#bae6fd]">
                                    No discussions were found.
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </section>

                {/* LATEST BLOGS */}
                <section className="container mx-auto px-4 mb-20">
                    <AnimatedSection>
                        <h2 className="text-3xl font-bold text-slate-700 mb-8 pb-2 border-b-2 border-[#007dba] inline-block">Latest Blogs</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                            {blogPosts.map((post, idx) => (
                                <div key={idx} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all group flex flex-col h-full border border-slate-100">
                                    <div className="relative aspect-video overflow-hidden">
                                        <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                        <div className="absolute bottom-2 left-2 bg-[#007dba] text-white text-[9px] font-bold px-1.5 py-0.5 rounded">
                                            {post.type}
                                        </div>
                                    </div>
                                    <div className="p-3 flex flex-col flex-1">
                                        <h4 className="text-xs font-bold text-slate-800 leading-snug mb-2 group-hover:text-[#007dba] transition-colors line-clamp-3">
                                            {post.title}
                                        </h4>
                                        <p className="text-[10px] text-slate-500 leading-relaxed line-clamp-2">
                                            {post.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </section>

                {/* CTA CARDS */}
                <section className="container mx-auto px-4 mb-20">
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: "Discovery Center", desc: "Learn how CarpacSoft can help your organization achieve its goals! Start your knowledge journey at your own pace. We've put our most relevant and valuable content—from discovery to optimization—right at your fingertips!", color: "from-[#ea580c] to-[#f97316]" },
                            { title: "Get Started", desc: "Have we caught your attention? Find out all CarpacSoft® has to offer with a free demo, trial, or 1:1 consultation with our friendly specialists!", color: "from-[#3b82f6] to-[#60a5fa]" },
                            { title: "Visit Our Blog", desc: "Stay up to date with the latest trends in product development, requirements management and testing. New content is published all the time, check it out!", color: "from-[#22c55e] to-[#86efac]" }
                        ].map((card, idx) => (
                            <AnimatedSection key={idx} delay={idx * 100}>
                                <div className={cn(
                                    "p-8 text-white h-full group hover:-translate-y-1 transition-all rounded shadow-sm",
                                    `bg-gradient-to-br ${card.color}`
                                )}>
                                    <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                                    <p className="text-sm leading-relaxed opacity-95">{card.desc}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </section>

            </main>

            {/* CUSTOM COMMUNITY FOOTER */}
            <footer className="bg-white py-8 border-t border-slate-200">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center justify-between text-slate-400 text-xs">
                        <p>© CarpacSoft</p>
                        <div className="flex items-center gap-1 mt-4 md:mt-0 opacity-50 grayscale hover:opacity-100 transition-opacity">
                            <span>Powered by</span>
                            <img src="https://cdn.vanillaforums.com/vanilladotcom/logos/logo-vanilla-color.svg" alt="Higher Logic" className="h-4" />
                        </div>
                    </div>
                </div>
            </footer>

            <ChatWidget />
        </div>
    );
};

export default Community;



