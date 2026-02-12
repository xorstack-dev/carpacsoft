import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { DemoForm } from "@/components/sections/DemoForm";
import {
    Play,
    Check,
    ArrowRight,
    ShieldCheck,
    Shield,
    Server,
    Lock,
    Search,
    AlertTriangle,
    GitPullRequest
} from "lucide-react";

// Jira Icon
const JiraIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M11.53 2C11.73 2.5 11.9 3.03 12.03 3.59C13.25 9.06 11.02 14.19 6.88 17.5L5.70999 15.68C9.07999 13.5 10.74 9.17 9.8 4.7L11.53 2Z" fill="currentColor" />
        <path d="M11.74 22L12.91 23.82C9.54 26 7.88 30.33 8.82 34.8L7.09003 37.5C6.90003 36.99 6.72003 36.47 6.59003 35.91C5.37003 30.43 7.60003 25.31 11.74 22Z" fill="currentColor" />
        <path d="M17.65 11.36C19.78 12.57 20.53 15.28 19.32 17.41C18.11 19.54 15.4 20.29 13.27 19.08L12.1 20.9C13.5 21.7 15.06 22.09 16.6 22.09C19.86 22.09 23.01 20.1 24.5 16.53L17.65 11.36Z" fill="currentColor" />
    </svg>
);

// Simplified Jira blue diamond shape for reliability
const JiraDiamond = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M11.53 2.00003L2.00003 11.53L11.53 21.06L21.06 11.53L11.53 2.00003Z" />
    </svg>
);

const VideoThumbnail = ({ title, logo }: { title: string, logo: React.ReactNode }) => (
    <div className="relative aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg overflow-hidden group cursor-pointer border border-slate-700 shadow-xl">
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
            {logo}
            <h3 className="text-white font-bold mt-4 mb-2">{title}</h3>
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mt-4 group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 text-white ml-1 fill-white" />
            </div>
        </div>
    </div>
);

const TraceableAgileImage = ({ onClick }: { onClick: () => void }) => (
    <div className="relative w-full max-w-[600px] mx-auto cursor-pointer group" onClick={onClick}>
        <img
            src="https://www.jamasoftware.com/media/2023/10/traceable-agile-4.jpg"
            alt="Traceable Agile Process"
            className="w-full h-auto rounded-lg shadow-xl border border-slate-200 group-hover:opacity-95 transition-opacity"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 rounded-lg">
            <div className="bg-white/90 p-3 rounded-full shadow-lg">
                <Search className="w-6 h-6 text-blue-600" />
            </div>
        </div>
    </div>
);

const JiraCompare = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-1">

                {/* HERO SECTION - Image 1 */}
                <section className="relative bg-gradient-to-br from-[#0c4a9e] to-[#0f62c5] text-white py-32 overflow-hidden">
                    {/* Background Image Effect */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000"
                            alt="Team collaboration"
                            className="w-full h-full object-cover opacity-20"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#0c4a9e] via-[#0c4a9e]/90 to-transparent"></div>
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <AnimatedSection className="max-w-3xl">
                            <div className="flex items-center gap-4 mb-8">
                                <img src="/Logo.jpg" alt="CarpacSoft Logo" className="h-10 w-auto rounded-full shadow-sm" />
                                <span className="text-white text-lg font-light tracking-wide">
                                    <span className="font-bold">CarpacSoft</span>
                                    <span className="text-4xl font-light">+</span>
                                    <span className="inline-flex items-center gap-2">
                                        <JiraDiamond className="w-8 h-8 text-[#0052CC] fill-[#0052CC]" />
                                        <span className="text-3xl font-bold">Jira</span>
                                    </span>
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-white">
                                CarpacSoft or Jira? Most of Our Customers use Jira AND Jama
                            </h1>

                            <p className="text-lg text-blue-100 mb-10 max-w-2xl leading-relaxed">
                                Jira is great for tasks, but once something is deleted it is gone forever. Jama syncs with Jira to ensure you don't miss requirements, test cases are successfully completed, and traceability is maintained.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Link to="/trial">
                                    <Button className="bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold py-4 px-8 rounded-full uppercase tracking-wide border-none">
                                        GET STARTED
                                    </Button>
                                </Link>
                                <Link to="/company/contact">
                                    <Button className="bg-[#00a3cc] hover:bg-[#008fb3] text-white font-bold py-4 px-8 rounded-full uppercase tracking-wide border-none">
                                        BOOK A DEMO
                                    </Button>
                                </Link>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* TRACEABLE AGILE - Image 2 */}
                <section className="bg-white py-24">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <AnimatedSection className="w-full lg:w-1/2">
                                <h3 className="text-blue-500 font-bold uppercase tracking-wider mb-8 text-sm">SOLUTION<br /><span className="text-xl text-slate-400">Traceable Agile</span></h3>
                                <TraceableAgileImage onClick={() => setModalOpen(true)} />
                            </AnimatedSection>

                            {/* Modal for Image */}
                            {isModalOpen && (
                                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" onClick={() => setModalOpen(false)}>
                                    <div className="relative max-w-5xl w-full bg-white rounded-lg p-2 overflow-hidden" onClick={(e) => e.stopPropagation()}>
                                        <button
                                            onClick={() => setModalOpen(false)}
                                            className="absolute top-2 right-2 p-2 bg-slate-100 hover:bg-slate-200 rounded-full z-10"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                        </button>
                                        <img
                                            src="https://www.jamasoftware.com/media/2023/10/traceable-agile-4.jpg"
                                            alt="Traceable Agile Process Full"
                                            className="w-full h-auto max-h-[90vh] object-contain rounded"
                                        />
                                    </div>
                                </div>
                            )}

                            <AnimatedSection delay={200} className="w-full lg:w-1/2">
                                <h2 className="text-4xl font-bold text-slate-800 mb-6">
                                    Achieve Speed AND Quality with Traceable Agile™
                                </h2>
                                <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                                    Traceable Agile <span className="text-orange-500 font-bold">speeds</span> the flow of software development and maintains the current and historical state of development <span className="text-orange-500 font-bold">quality</span> to auto-detect issues early
                                </p>
                                <Button className="bg-white text-blue-500 border border-blue-500 hover:bg-blue-50 rounded-full px-8 py-3 uppercase font-bold text-sm">
                                    LEARN MORE
                                </Button>
                            </AnimatedSection>
                        </div>
                    </div>
                </section>

                {/* NO CHANGE FOR DEVELOPERS - Image 3 */}
                <section className="bg-gradient-to-r from-sky-50 to-blue-100 py-24">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col lg:flex-row items-center gap-16 max-w-6xl mx-auto">
                            <AnimatedSection className="w-full lg:w-1/2">
                                <h2 className="text-3xl font-bold text-slate-700 mb-8">
                                    Traceable Agile = No Change for Developers
                                </h2>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1 w-2 h-2 rounded-full bg-slate-800 shrink-0"></div>
                                        <span className="text-slate-600">Developers continue to work in Jira as usual</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1 w-2 h-2 rounded-full bg-slate-800 shrink-0"></div>
                                        <span className="text-slate-600">Activity automatically syncs to Jama to track actual activity vs. expected</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1 w-2 h-2 rounded-full bg-slate-800 shrink-0"></div>
                                        <span className="text-slate-600">Jama auto-detects risk and highlights areas to inspect and take action</span>
                                    </li>
                                </ul>
                                <Button className="bg-transparent border border-blue-400 text-blue-500 hover:bg-blue-50 rounded-full px-8 py-2 uppercase font-bold text-sm">
                                    DATASHEET
                                </Button>
                            </AnimatedSection>

                            <AnimatedSection delay={200} className="w-full lg:w-1/2">
                                <p className="text-slate-600 font-bold mb-4 text-center">Traceable Agile Demo with Jira and CarpacSoft</p>
                                <VideoThumbnail
                                    title="Integration Demo"
                                    logo={
                                        <div className="flex items-center justify-center gap-4 mb-4">
                                            <JiraDiamond className="w-12 h-12 text-[#0052CC] fill-[#0052CC]" />
                                            <span className="text-4xl text-white font-bold">Jira</span>
                                            <span className="text-4xl text-white font-light">+</span>
                                            <img src="/jama-connect-logo-white.svg" className="h-8" />
                                        </div>
                                    }
                                />
                            </AnimatedSection>
                        </div>
                    </div>
                </section>

                {/* SECURITY & SLA - Image 4 */}
                <section className="py-24 bg-white text-center">
                    <div className="container mx-auto px-4">
                        <AnimatedSection>
                            <h2 className="text-3xl font-bold text-slate-700 mb-6 max-w-4xl mx-auto">
                                CarpacSoft is the Leader in Security, SLAs, High Availability, Touchless Upgrades, and Disaster Recovery
                            </h2>
                            <p className="text-slate-500 text-sm max-w-5xl mx-auto mb-16 font-medium">
                                CarpacSoft is the only vendor in the space that offers the following: SOC 2 Type 2 certified application and data center (others data center only), SLAs above 99% (others at 95% or lower), touchless upgrades (others require your IT to manually update hosted app), high availability SLA (others don't offer), disaster recovery SLA (others don't offer).
                            </p>
                        </AnimatedSection>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                            {[
                                { icon: ShieldCheck, title: "Suitably validated by TÜV SÜD for safety-related development", color: "text-[#003399]" },
                                { icon: Shield, title: "CarpacSoft® codes with OWASP best practices", color: "text-[#0077c8]" },
                                { icon: Server, title: "CarpacSoft is SOC2 Type 2 certified in both the server and application", color: "text-[#be123c]" },
                                { icon: Lock, title: "Ensures strong privacy management practices", color: "text-[#334155]" },
                            ].map((item, i) => (
                                <AnimatedSection key={i} delay={i * 100} className="flex flex-col items-center">
                                    <div className="w-24 h-24 mb-6 flex items-center justify-center relative">
                                        {/* Hexagon or Shield shape approximation */}
                                        <item.icon size={64} className={item.color} strokeWidth={1.5} />
                                    </div>
                                    <p className="text-xs font-bold text-slate-700 max-w-[200px] leading-relaxed">
                                        {item.title}
                                    </p>
                                </AnimatedSection>
                            ))}
                        </div>

                        {/* TLS Extra */}
                        <AnimatedSection className="mt-12 flex flex-col items-center justify-center">
                            <div className="flex flex-col items-center">
                                <div className="bg-[#0ea5e9] text-white font-bold px-3 py-1 text-2xl tracking-widest mb-4">TLS</div>
                                <p className="text-xs font-bold text-slate-700 max-w-[250px]">
                                    Transport Layer Security (TLS) ensures data transferred is secured and encrypted
                                </p>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* BOOK A DEMO - Image 5 */}
                <div className="bg-gradient-to-b from-[#465584] to-[#2e3b5e]">
                    <DemoForm />

                </div>

            </main>
            <Footer />
            <ChatWidget />
        </div >
    );
};

export default JiraCompare;



