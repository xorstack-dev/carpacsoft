import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { Search, MessageSquare, Laptop, Rocket, FileText, Settings, Share2, Info, BookOpen, AlertCircle, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

const promotedArticles = [
    { title: "Meet Jama Llama 🦙, AI Assistant and Explore Unified Search", href: "#" },
    { title: "How to Get Started with CarpacSoft® Support and Resources", href: "#" },
    { title: "CarpacSoft® v9.28.x User Guide V3", href: "#" },
    { title: "Monitoring Float License Usage", href: "#" },
    { title: "Microsoft Gallery Application - SSO for CarpacSoft®", href: "#" },
    { title: "Supported Software for CarpacSoft® Self-Hosted 9.28.x", href: "#" },
    { title: "CarpacSoft® v9.28.x — Installation and Upgrade Instructions", href: "#" },
    { title: "REST API Throttle Limits - 429 code", href: "#" },
    { title: "Errors Upgrading to v9.22.1 using the kURL Installer", href: "#" },
    { title: "RuntimeError: The data types numeric and int are incompatible in the '&' operator.", href: "#" },
    { title: "Environment taking too long to upgrade (Reindexing is extremely slow)", href: "#" },
    { title: "Planview Hub — Jira Cloud Integration Impact due to Atlassian API Deprecation", href: "#" },
    { title: "\"License update required for PDF creation. Contact your system admin or support.\"", href: "#" },
    { title: "Which Jama Reporting Tool To Use", href: "#" },
    { title: "How We Monitor Your Cloud-Hosted CarpacSoft® Instances", href: "#" },
    { title: "Sample API calls to CarpacSoft®", href: "#" },
    { title: "Configuring CarpacSoft® to prepare for a Jira integration", href: "#" },
    { title: "CarpacSoft Interchange (JCI) Common Questions and Themes", href: "#" },
    { title: "How to Troubleshoot CarpacSoft Interchange (JCI) Connector Authentication Issues", href: "#" },
];

const Support = () => {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className="min-h-screen flex flex-col font-sans bg-[#f3f9ff]">

            {/* Custom Support Top Nav */}
            <div className="bg-white border-b border-slate-100 py-3 px-6 sticky top-0 z-[100]">
                <div className="container mx-auto flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-[#ea580c] rounded-lg flex items-center justify-center -rotate-3 p-1.5 shadow-sm">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="text-white w-full h-full">
                                <path d="M12 2L2 19H22L12 2Z" />
                            </svg>
                        </div>
                        <span className="text-slate-700 font-bold text-sm tracking-tight">CarpacSoft® Support</span>
                    </div>
                    <div className="hidden lg:flex items-center space-x-6">
                        {["Onboarding CarpacSoft®", "CarpacSoft® Labs", "CarpacSoft Status", "Categories"].map((item) => (
                            <a key={item} href="#" className="text-[11px] text-slate-500 hover:text-[#007dba] transition-colors uppercase font-semibold">
                                {item}
                            </a>
                        ))}
                        <a href="#" className="text-[11px] text-[#007dba] font-bold uppercase">Sign in</a>
                    </div>
                </div>
            </div>

            <main className="flex-1">

                {/* HERO SECTION */}
                <section className="bg-gradient-to-b from-[#e1f0ff] to-[#f3f9ff] py-16 text-center">
                    <div className="container mx-auto px-4">
                        <AnimatedSection>
                            <h1 className="text-4xl md:text-5xl font-bold text-[#001e4d] mb-10">How can we help?</h1>
                            <div className="max-w-2xl mx-auto mb-6 flex bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden group focus-within:ring-2 focus-within:ring-[#007dba]/20 transition-all">
                                <div className="px-5 flex items-center text-slate-400">
                                    <Search className="w-5 h-5" />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Ask your query or Start a Conversation..."
                                    className="flex-1 py-4 text-slate-600 focus:outline-none bg-transparent text-[15px]"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                <button className="bg-[#00a8e8] hover:bg-[#0092ca] text-white px-8 font-bold transition-colors">
                                    Search
                                </button>
                            </div>

                            <button className="inline-flex items-center space-x-3 bg-[#00004d] hover:bg-[#000066] text-white px-6 py-2 rounded-md font-bold text-sm transition-transform hover:scale-105 shadow-xl">
                                <div className="w-5 h-5 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 rounded-sm flex items-center justify-center">
                                    <Share2 className="w-3 h-3 text-white" />
                                </div>
                                <span className="flex items-center">Chat with AI <ChevronRight className="w-4 h-4 ml-1" /></span>
                            </button>
                        </AnimatedSection>
                    </div>
                </section>

                {/* PRIMARY ACTION CARDS */}
                <section className="container mx-auto px-4 -mt-12 mb-20">
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <AnimatedSection delay={100} className="bg-white rounded-xl p-10 text-center shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] border border-slate-100 group transition-all hover:-translate-y-1 hover:shadow-xl cursor-pointer">
                            <div className="w-20 h-20 mx-auto mb-6 bg-blue-50 rounded-2xl flex items-center justify-center p-4">
                                <Laptop className="w-full h-full text-[#007dba]" />
                            </div>
                            <h3 className="text-xl font-bold text-[#001e4d] mb-2 group-hover:text-[#007dba] transition-colors">CarpacSoft® User Guide</h3>
                            <p className="text-sm text-slate-500 uppercase font-semibold tracking-wider">Learn the Basics</p>
                        </AnimatedSection>

                        <AnimatedSection delay={200} className="bg-white rounded-xl p-10 text-center shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] border border-slate-100 group transition-all hover:-translate-y-1 hover:shadow-xl cursor-pointer">
                            <div className="w-20 h-20 mx-auto mb-6 bg-teal-50 rounded-2xl flex items-center justify-center p-4">
                                <div className="relative">
                                    <MessageSquare className="w-12 h-12 text-[#0d9488]" />
                                    <Heart className="w-5 h-5 text-yellow-500 absolute -bottom-1 -right-1 fill-yellow-500" />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-[#001e4d] mb-2 group-hover:text-[#0d9488] transition-colors">CarpacSoft® User Community</h3>
                            <p className="text-sm text-slate-500 uppercase font-semibold tracking-wider">Connect with Peers</p>
                        </AnimatedSection>
                    </div>
                </section>

                {/* SECONDARY GRID */}
                <section className="container mx-auto px-4 mb-24">
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-10">
                        <AnimatedSection delay={300} className="bg-white rounded-xl p-8 text-center border border-slate-100 shadow-sm transition-all hover:shadow-md cursor-pointer group">
                            <div className="w-16 h-16 mx-auto mb-6 bg-purple-50 rounded-xl flex items-center justify-center">
                                <Rocket className="w-8 h-8 text-purple-600 group-hover:rotate-12 transition-transform" />
                            </div>
                            <h3 className="text-lg font-bold text-[#007dba] mb-4">Get Started Here!</h3>
                            <p className="text-xs text-slate-500 leading-relaxed">
                                Get started with CarpacSoft® Support by learning how to use the Support Portal, manage Named Support Contacts (NSCs), and understand key support concepts, maintenance procedures, and hosting policies. Includes onboarding guidance and training resources to help new and growing teams get up to speed quickly.
                            </p>
                        </AnimatedSection>

                        <AnimatedSection delay={400} className="bg-white rounded-xl p-8 text-center border border-slate-100 shadow-sm transition-all hover:shadow-md cursor-pointer group">
                            <div className="w-16 h-16 mx-auto mb-6 bg-orange-50 rounded-xl flex items-center justify-center">
                                <div className="relative">
                                    <FileText className="w-8 h-8 text-orange-600" />
                                    <Settings className="w-4 h-4 text-orange-400 absolute -bottom-1 -right-1" />
                                </div>
                            </div>
                            <h3 className="text-lg font-bold text-[#007dba] mb-4">CarpacSoft®</h3>
                            <p className="text-xs text-slate-500 leading-relaxed">
                                Product updates, release schedules, best practices, troubleshooting, and self-hosted resources for CarpacSoft®
                            </p>
                        </AnimatedSection>

                        <AnimatedSection delay={500} className="bg-white rounded-xl p-8 text-center border border-slate-100 shadow-sm transition-all hover:shadow-md cursor-pointer group">
                            <div className="w-16 h-16 mx-auto mb-6 bg-blue-50 rounded-xl flex items-center justify-center">
                                <div className="relative">
                                    <Share2 className="w-8 h-8 text-blue-600" />
                                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                                        <span className="text-[8px] font-bold text-white">TM</span>
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-lg font-bold text-[#007dba] mb-4">CarpacSoft Interchange™</h3>
                            <p className="text-xs text-slate-500 leading-relaxed">
                                Release notes and schedules, best practices, common questions, troubleshooting, and self-hosted upgrade resources.
                            </p>
                        </AnimatedSection>
                    </div>

                    <div className="max-w-2xl mx-auto">
                        <AnimatedSection delay={600} className="bg-white rounded-xl p-8 text-center border border-slate-100 shadow-sm transition-all hover:shadow-md cursor-pointer group">
                            <div className="w-16 h-16 mx-auto mb-6 bg-cyan-50 rounded-xl flex items-center justify-center">
                                <Share2 className="w-8 h-8 text-cyan-600 transform rotate-45" />
                            </div>
                            <h3 className="text-lg font-bold text-[#007dba] mb-4">Knowledge Centered Service Resources</h3>
                            <p className="text-xs text-slate-500 leading-relaxed">
                                Resources for creating and managing knowledge articles, including content standards, templates, drafts, and Zendesk tools for agents and admins.
                            </p>
                        </AnimatedSection>
                    </div>
                </section>

                {/* PROMOTED ARTICLES */}
                <section className="bg-white py-24 mb-20 border-y border-slate-100">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <AnimatedSection>
                            <h2 className="text-2xl font-bold text-slate-800 mb-12 border-b border-slate-100 pb-4">Promoted articles</h2>
                            <div className="grid md:grid-cols-2 gap-x-16 gap-y-4">
                                {promotedArticles.map((article, idx) => (
                                    <a
                                        key={idx}
                                        href={article.href}
                                        className="text-[13px] text-slate-500 hover:text-[#007dba] transition-colors leading-snug flex items-start group"
                                    >
                                        <ChevronRight className="w-3 h-3 mt-1.5 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-[#007dba]" />
                                        <span>{article.title}</span>
                                    </a>
                                ))}
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* GET IN TOUCH SECTION */}
                <section className="container mx-auto px-4 mb-24">
                    <AnimatedSection>
                        <h2 className="text-2xl font-bold text-[#001e4d] mb-12 text-center">Get In Touch with Us</h2>
                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {[
                                {
                                    title: "Product Development Blog",
                                    desc: "Stay informed on the latest advancements, best practices, and product development and management strategies.",
                                    icon: BookOpen,
                                    color: "text-blue-600",
                                    bg: "bg-blue-50"
                                },
                                {
                                    title: "Production Outage?",
                                    desc: "EU: +31 800 2300018 / US: +1 800-236-3669",
                                    icon: AlertCircle,
                                    color: "text-red-500",
                                    bg: "bg-red-50",
                                    isUrgent: true
                                },
                                {
                                    title: "Resource Hub",
                                    desc: "Tailored resources to enhance team efficiency, align processes, and comply with industry standards.",
                                    icon: Share2,
                                    color: "text-teal-600",
                                    bg: "bg-teal-50"
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white rounded-xl p-8 text-center border border-slate-100 shadow-sm group hover:shadow-md transition-all">
                                    <div className={cn("w-14 h-14 mx-auto mb-6 rounded-xl flex items-center justify-center", item.bg)}>
                                        <item.icon className={cn("w-8 h-8", item.color)} />
                                    </div>
                                    <h3 className="text-lg font-bold text-[#007dba] mb-4">{item.title}</h3>
                                    <p className={cn("text-xs leading-relaxed", item.isUrgent ? "text-slate-800 font-bold" : "text-slate-500")}>
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </section>

            </main>

            <Footer />
            <ChatWidget />
        </div>
    );
};

// Helper for smaller icons
const ChevronRight = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24" height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="m9 18 6-6-6-6" />
    </svg>
);

export default Support;



