import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { DemoForm } from "@/components/sections/DemoForm";
import {
    ShieldCheck,
    Shield,
    Server,
    Lock,
    ChevronRight,
    Database,
    Play,
    Check
} from "lucide-react";

// Sidebar Navigation Component - Image 3 Style
const SidebarNav = ({ active, setActive }: { active: string, setActive: (s: string) => void }) => {
    const items = [
        "Live Traceability",
        "Reports",
        "Risk Management",
        "CarpacSoft Interchange for ReqIF",
        "Reviews & Approvals",
        "Test Management"
    ];

    return (
        <div className="w-full md:w-1/4">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-slate-200">
                {items.map((item) => (
                    <div
                        key={item}
                        className={`p-4 cursor-pointer flex justify-between items-center text-sm font-bold border-b border-slate-100 last:border-none transition-colors duration-300
                            ${active === item ? 'bg-[#00a3cc] text-white' : 'bg-white text-slate-700 hover:bg-slate-50'}`}
                        onClick={() => setActive(item)}
                    >
                        <span>{item}</span>
                        <ChevronRight size={16} />
                    </div>
                ))}
            </div>
        </div>
    );
};

// Main Content Area for Features - Image 3 Style
const FeatureDisplay = ({ active }: { active: string }) => {
    return (
        <div className="w-full md:w-3/4 bg-white rounded-lg shadow-lg border border-slate-200 p-8">
            <h3 className="text-xl font-bold text-slate-800 mb-4">{active}</h3>
            <p className="text-sm text-slate-600 mb-8 max-w-2xl leading-relaxed">
                {active === "Live Traceability" && "Link high-level requirements to more detailed and sub-system requirements to assure proper validation before release."}
                {active === "Reports" && "Generate comprehensive reports to track progress and compliance with ease."}
                {active === "Risk Management" && "Identify, analyze, and mitigate risks throughout the development lifecycle."}
                {active === "CarpacSoft Interchange for ReqIF" && "seamlessly exchange requirements data with suppliers and partners using ReqIF."}
                {active === "Reviews & Approvals" && "Streamline the review process with real-time feedback and electronic signatures."}
                {active === "Test Management" && "Manage test plans, cases, and results to ensure product quality and reliability."}
            </p>

            <div className="relative w-full aspect-video bg-slate-50 rounded-lg overflow-hidden border border-slate-200 shadow-inner">
                <div className="absolute inset-0 p-4">
                    {/* Simplified UI Mockup */}
                    <div className="flex h-full gap-4">
                        <div className="w-1/4 space-y-2">
                            {[1, 2, 3, 4, 5].map(i => <div key={i} className="h-3 bg-slate-200 rounded w-full"></div>)}
                        </div>
                        <div className="w-3/4 relative">
                            <div className="h-8 bg-slate-200 mb-4 w-full rounded"></div>
                            <div className="space-y-2">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="flex gap-2 border-b border-slate-100 pb-2 mb-2">
                                        <div className="w-4 h-4 rounded-full bg-green-500"></div>
                                        <div className="h-4 bg-slate-100 w-3/4 rounded"></div>
                                    </div>
                                ))}
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-12 h-12 bg-[#001e4d]/80 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                                    <Play className="text-white fill-white ml-1" size={24} />
                                </div>
                            </div>
                            <div className="absolute bottom-4 right-4 bg-[#001e4d] text-white text-[10px] px-2 py-1 rounded font-bold uppercase">
                                EASILY DEMONSTRATE TRACEABILITY
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ul className="mt-8 text-xs text-slate-700 space-y-2 list-disc pl-4 font-medium">
                <li>Increase efficiency</li>
                <li>Drive alignment</li>
                <li>Mitigate organizational risk</li>
            </ul>
        </div>
    );
};


const Automotive = () => {
    const [activeFeature, setActiveFeature] = useState("Live Traceability");

    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-1">

                {/* HERO SECTION - Image 1 */}
                <section className="relative bg-[#004d60] text-white py-32 overflow-hidden">
                    {/* Background Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#003d4d] to-[#006078] opacity-95"></div>
                    <div className="absolute right-0 top-0 h-full w-2/3 bg-[url('https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center mix-blend-overlay opacity-20"></div>

                    <div className="container mx-auto px-4 relative z-10">
                        <AnimatedSection className="max-w-4xl">
                            <div className="flex items-center gap-2 mb-6">
                                <img src="/jama-connect-logo-white.svg" alt="CarpacSoft" className="h-8" />
                            </div>
                            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-white">
                                Join the Leaders Choosing CarpacSoft for Software-Defined Vehicle Development
                            </h1>

                            <p className="text-sm text-blue-100 mb-10 max-w-3xl leading-relaxed">
                                In the automotive industry, the transformation to software-defined vehicles, electric vehicles (EV's), and advanced driver assistance system (ADAS) vehicles with over the air (OTA) updates is reshaping the tools and processes by which vehicles are developed across OEMs and their partners. CarpacSoft is purpose built to improve development cycles, simplify functional safety, and accelerate time to market for organizations working across a complex supplier ecosystem.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Link to="/trial">
                                    <Button className="bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold py-3 px-8 rounded-full uppercase tracking-wide border-none text-xs">
                                        GET STARTED
                                    </Button>
                                </Link>
                                <Link to="/company/contact">
                                    <Button className="bg-[#00a3cc] hover:bg-[#008fb3] text-white font-bold py-3 px-8 rounded-full uppercase tracking-wide border-none text-xs">
                                        BOOK A DEMO
                                    </Button>
                                </Link>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* CHALLENGES - Image 2 Top */}
                <section className="bg-white py-20">
                    <div className="container mx-auto px-4">
                        <AnimatedSection className="mb-12">
                            <h2 className="text-2xl font-bold text-[#001e4d] mb-4">
                                Address the Primary Automotive Development Challenges with CarpacSoft's Unique Solution
                            </h2>
                            <p className="text-xs font-bold text-slate-700">Primary Challenges:</p>
                            <ul className="text-xs text-slate-600 list-disc pl-4 space-y-1 mt-2 mb-8">
                                <li>How to make Agile software development traceable to minimize the risk of defects, delays and recalls</li>
                                <li>How to decouple software and hardware development to go faster AND achieve quality</li>
                                <li>How to co-develop products with partners to speed time to market</li>
                            </ul>
                        </AnimatedSection>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Diagram 1 */}
                            <AnimatedSection delay={100} className="text-left">
                                <div className="h-48 border border-slate-200 rounded-lg mb-4 flex items-center justify-center p-2 bg-slate-50">
                                    <img src="https://cdn-icons-png.flaticon.com/512/10636/10636402.png" className="h-full object-contain opacity-60" alt="Process V-Model" />
                                </div>
                                <h3 className="font-bold text-[#001e4d] text-sm mb-2">Only CarpacSoft Delivers Traceable Agile™</h3>
                                <p className="text-xs text-slate-600 mb-4">Solving quality requires system engineering overlayed on top of agile development.</p>
                                <a href="#" className="text-[#00a3cc] text-xs font-bold hover:underline">&gt;&gt; Learn More</a>
                            </AnimatedSection>

                            {/* Diagram 2 */}
                            <AnimatedSection delay={200} className="text-left">
                                <div className="h-48 border border-slate-200 rounded-lg mb-4 flex items-center justify-center p-2 bg-slate-50">
                                    <img src="https://cdn-icons-png.flaticon.com/512/2103/2103633.png" className="h-full object-contain opacity-60" alt="Architecture" />
                                </div>
                                <h3 className="font-bold text-[#001e4d] text-sm mb-2">Only CarpacSoft Enables Teams to Go Faster While Maintaining Quality</h3>
                                <p className="text-xs text-slate-600 mb-4">Automotive companies gain many advantages by decoupling software and hardware development cycles while delivering coordinated software and hardware releases.</p>
                            </AnimatedSection>

                            {/* Diagram 3 */}
                            <AnimatedSection delay={300} className="text-left">
                                <div className="h-48 border border-slate-200 rounded-lg mb-4 flex items-center justify-center p-2 bg-slate-50">
                                    <img src="https://cdn-icons-png.flaticon.com/512/4230/4230873.png" className="h-full object-contain opacity-60" alt="Cloud" />
                                </div>
                                <h3 className="font-bold text-[#001e4d] text-sm mb-2">Only CarpacSoft Enables Co-Development and Supply-Chain Collaboration with Partners in a Secure, Scalable, Cloud Platform</h3>
                                <p className="text-xs text-slate-600 mb-4">OEMs and Tier 1s are already co-developing in CarpacSoft.</p>
                            </AnimatedSection>
                        </div>
                    </div>
                </section>

                {/* CUSTOMERS - Image 2 Middle */}
                <section className="bg-sky-50/50 py-16 text-center">
                    <div className="container mx-auto px-4">
                        <h2 className="text-xl font-bold text-[#001e4d] mb-8">
                            CarpacSoft is the platform of choice for <span className="text-blue-600">3 of top 5 OEMs</span>,<br />
                            <span className="text-blue-600">6 of the top 10</span> electric car startups and <span className="text-blue-600">6 of the top 10</span><br />
                            semiconductor companies.
                        </h2>

                        {/* Logo Strip Placeholder - Replace with actual SVGs or Images if available */}
                        <div className="flex flex-wrap justify-center items-center gap-12 mb-12 grayscale opacity-80">
                            <span className="font-bold text-xl text-slate-500">Panasonic</span>
                            <span className="font-bold text-xl text-slate-500">BOLLINGER MOTORS</span>
                            <span className="font-bold text-xl text-slate-500">RAYMOND</span>
                            <span className="font-bold text-xl text-slate-500">E/NRIDE</span>
                            <span className="font-bold text-xl text-slate-500">RIVIAN</span>
                            <span className="font-bold text-xl text-slate-500">DEEPMAP</span>
                            <span className="font-bold text-xl text-slate-500 bg-blue-900 text-white px-2 italic rounded-full">Ford</span>
                            <span className="font-bold text-xl text-slate-500">LUCID</span>
                            <span className="font-bold text-xl text-slate-500">NIKOLA</span>
                            <span className="font-bold text-xl text-slate-500 text-red-600">TOYOTA</span>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            <p className="text-[#001e4d] text-sm italic font-medium leading-relaxed mb-4">
                                "Now, when I have to deal with our functional-safety partners, I just give them the login credentials to CarpacSoft. They can log in and type their verification and validation plans in the project. Since they're already familiar with the software, everything works great and it's much more streamlined."
                            </p>
                            <div className="flex flex-col items-center justify-center">
                                <div className="text-xs text-slate-800 font-bold">Marko Šustić</div>
                                <div className="text-[10px] text-slate-500">Product Manager</div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <Button className="bg-white border border-[#00a3cc] text-[#00a3cc] hover:bg-sky-50 rounded-full px-8 py-2 uppercase text-[10px] font-bold tracking-wide">
                                READ CUSTOMER STORIES
                            </Button>
                        </div>
                    </div>
                </section>

                {/* INTERACTIVE FEATURES - Image 3 */}
                <section className="bg-white py-24">
                    <div className="container mx-auto px-4">
                        <AnimatedSection className="text-center mb-12">
                            <h2 className="text-2xl font-bold text-[#001e4d]">Features to Ensure Product Quality and Meet Safety-Critical Standards</h2>
                        </AnimatedSection>
                        <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto mb-16">
                            <SidebarNav active={activeFeature} setActive={setActiveFeature} />
                            <FeatureDisplay active={activeFeature} />
                        </div>
                        <div className="text-center">
                            <Button className="bg-[#0077c8] hover:bg-blue-700 text-white rounded-full px-8 py-3 uppercase text-[10px] font-bold tracking-wide shadow-lg">
                                GET THE DATASHEET
                            </Button>
                        </div>
                    </div>
                </section>

                {/* COMPLIANCE STANDARDS- Image 4 Top */}
                <section className="bg-white py-16">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <AnimatedSection>
                            <h2 className="text-2xl font-bold text-[#001e4d] mb-6">
                                Accelerate Software-Defined Vehicle Development and Simplify Compliance with Automotive Software Aligned to Automotive Manufacturing Industry Standards and Regulations
                            </h2>
                            <p className="text-xs text-slate-600 mb-8 leading-relaxed">
                                Product development in the automobile industry demands automotive software designed for compliance. CarpacSoft for Automotive is built to include key frameworks that support safety-critical standards and regulations in automotive product development, is ISO 26262 certified, and capable of meeting complex requirements management needs.
                            </p>
                            <ul className="text-xs text-[#001e4d] font-bold space-y-2 mb-8">
                                <li>• ISO 26262:2018 (functional safety)</li>
                                <li>• ISO/SAE 21434 / SAE J3061 (cybersecurity)</li>
                                <li>• Automotive SPICE (ASPICE)</li>
                                <li>• ISO/PAS 21448:2019 (Safety of the Intended Functionality (SOTIF))</li>
                                <li>• IEC (THE INTERNATIONAL ELECTROTECHNICAL COMMISSION) KEY REGULATIONS: IEC 60812 — Failure Mode and Effects Analysis (FMEA) and Failure Mode, Effects and Criticality Analysis (FMECA)</li>
                                <li>• MISRA (Motor Industry Reliability Association)</li>
                            </ul>
                            <div className="flex gap-4">
                                <Button className="bg-white border border-[#0ea5e9] text-[#0ea5e9] hover:bg-sky-50 rounded-full px-8 py-2 uppercase text-[10px] font-bold tracking-wide">
                                    WATCH WEBINAR
                                </Button>
                                <Button className="bg-white border border-[#0ea5e9] text-[#0ea5e9] hover:bg-sky-50 rounded-full px-8 py-2 uppercase text-[10px] font-bold tracking-wide">
                                    DOWNLOAD SOLUTION OVERVIEW
                                </Button>
                                <Button className="bg-white border border-[#0ea5e9] text-[#0ea5e9] hover:bg-sky-50 rounded-full px-8 py-2 uppercase text-[10px] font-bold tracking-wide">
                                    READ ASPICE DATASHEET
                                </Button>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* WHITEPAPER - Image 4 Bottom - SDVs */}
                <section className="bg-sky-50 py-20">
                    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-16 max-w-6xl mx-auto">
                        <AnimatedSection className="w-full md:w-1/3 flex justify-center">
                            <div className="relative transform rotate-3 hover:rotate-0 transition-transform duration-500">
                                <img src="https://images.unsplash.com/photo-1593642632823-8f7853670961?auto=format&fit=crop&q=80&w=400" alt="SDV Whitepaper" className="w-48 h-auto shadow-2xl rounded border-4 border-white" />
                                <div className="absolute -right-4 -bottom-4 bg-[#001e4d] rounded-full p-2 border-4 border-white shadow-lg">
                                    <Check size={20} color="white" />
                                </div>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection delay={200} className="w-full md:w-2/3">
                            <h2 className="text-2xl font-bold text-[#001e4d] mb-4">
                                Software Defined Vehicles (SDVs): A Revolutionary Approach to Transportation
                            </h2>
                            <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                                These enhanced vehicles leverage software integration and virtualization technologies to improve vehicle functionality, connectivity, and autonomy. SDVs are designed to adapt and evolve through the use of software updates, enabling new features, capabilities, and improvements without requiring extensive hardware modifications.
                            </p>
                            <p className="text-xs font-bold text-slate-700 mb-2">Download this free, information-packed paper to learn more about:</p>
                            <ul className="text-[10px] text-slate-600 space-y-1 mb-8 list-disc pl-4">
                                <li>The role of software in the modern vehicle</li>
                                <li>Fundamentals of software defined vehicle development</li>
                                <li>SDV and autonomous driving</li>
                                <li>Future trends and considerations</li>
                            </ul>
                            <a href="#" className="text-blue-500 font-bold text-xs hover:underline">
                                &gt;&gt; Download Free Whitepaper
                            </a>
                        </AnimatedSection>
                    </div>
                </section>

                {/* SECURITY & SLA - Image 5 Top */}
                <section className="py-24 bg-white text-center">
                    <div className="container mx-auto px-4">
                        <AnimatedSection>
                            <h2 className="text-xl font-bold text-slate-700 mb-6 max-w-4xl mx-auto leading-tight">
                                CarpacSoft is the Leader in Security, SLAs, High Availability, Touchless Upgrades, and Disaster Recovery
                            </h2>
                            <p className="text-slate-500 text-[10px] max-w-5xl mx-auto mb-16 font-medium">
                                CarpacSoft is the only vendor in the space that offers the following: SOC 2 Type 2 certified application and data center (others data center only), SLAs above 99% (others at 95% or lower), touchless upgrades (others require your IT to manually update hosted app), high availability SLA (others don't offer), disaster recovery SLA (others don't offer).
                            </p>
                        </AnimatedSection>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
                            {[
                                { icon: ShieldCheck, title: "Suitably validated by TÜV SÜD for safety-related development", color: "text-[#003399]" },
                                { icon: Shield, title: "CarpacSoft codes with OWASP best practices", color: "text-[#0077c8]" },
                                { icon: Server, title: "CarpacSoft is SOC2 Type 2 certified in both the server and application", color: "text-[#be123c]" },
                                { icon: Lock, title: "Ensures strong privacy management practices", color: "text-[#334155]" },
                            ].map((item, i) => (
                                <AnimatedSection key={i} delay={i * 100} className="flex flex-col items-center">
                                    <div className="w-20 h-20 mb-4 flex items-center justify-center relative border-slate-100 border-2 rounded-xl">
                                        <item.icon size={48} className={item.color} strokeWidth={1.5} />
                                    </div>
                                    <p className="text-[10px] font-bold text-slate-700 max-w-[180px] leading-relaxed">
                                        {item.title}
                                    </p>
                                </AnimatedSection>
                            ))}
                        </div>

                        {/* TLS Extra */}
                        <AnimatedSection className="mt-8 flex flex-col items-center justify-center">
                            <div className="flex flex-col items-center">
                                <div className="bg-[#0ea5e9] text-white font-bold px-3 py-1 text-2xl tracking-widest mb-4">TLS</div>
                                <p className="text-xs font-bold text-slate-700 max-w-[250px]">
                                    Transport Layer Security (TLS) ensures data transferred is secured and encrypted
                                </p>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* FUNCTIONAL SAFETY - Image 5 Bottom */}
                <section className="bg-sky-50 py-24 relative overflow-hidden">
                    {/* Decorative Triangle Background - Approximation */}
                    <div className="absolute inset-0 opacity-10" style={{
                        backgroundImage: 'conic-gradient(from 90deg at 0 0, #e0f2fe 90deg, #f0f9ff 0)',
                        backgroundSize: '50px 50px'
                    }}></div>

                    <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-16 max-w-6xl mx-auto">
                        <AnimatedSection className="w-full md:w-1/2">
                            <h2 className="text-2xl font-bold text-[#001e4d] mb-6">
                                Complying with automotive standards for functional safety is a key component of getting to market
                            </h2>
                            <p className="text-xs text-slate-600 mb-8 leading-relaxed">
                                As part of our commitment to our automotive and semiconductor customers' - and future customers' - success, CarpacSoft has developed ASPICE and Functional Safety Diagnostics where participants work directly with consultants to analyze their functional safety and product development process to identify risks to ISO 26262 and ASPICE compliance.
                            </p>
                        </AnimatedSection>

                        <AnimatedSection delay={200} className="w-full md:w-1/2">
                            <div className="bg-white/50 backdrop-blur-sm p-8 rounded-lg border border-white shadow-sm">
                                <h3 className="font-bold text-[#001e4d] text-sm mb-4">In our no-cost, guided, and efficient 60-minute process reviews we'll:</h3>
                                <ul className="text-xs text-slate-700 space-y-2 mb-8 list-disc pl-4">
                                    <li>Review engineering practices together to determine compliance risk in 30 areas</li>
                                    <li>Rate risks for many of the process areas required by ASPICE and ISO 26262 parts 2-6, 8, & 9</li>
                                    <li>Create a tailored report recommending ways to reduce risks identified</li>
                                </ul>
                                <p className="text-[10px] text-slate-500 uppercase font-bold mb-4">GET YOUR FREE DIAGNOSTIC TODAY!</p>
                                <div className="flex gap-4">
                                    <Button className="bg-white border border-[#0ea5e9] text-[#0ea5e9] hover:bg-sky-50 rounded-full px-8 py-2 uppercase text-[10px] font-bold tracking-wide">
                                        ASPICE DIAGNOSTIC
                                    </Button>
                                    <Button className="bg-white border border-[#0ea5e9] text-[#0ea5e9] hover:bg-sky-50 rounded-full px-8 py-2 uppercase text-[10px] font-bold tracking-wide">
                                        ISO 26262 DIAGNOSTIC
                                    </Button>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* BOOK A DEMO - End of Page */}
                <div className="bg-gradient-to-b from-[#465584] to-[#2e3b5e]">
                    <DemoForm />
                </div>

            </main>
            <Footer />
            <ChatWidget />
        </div>
    );
};

export default Automotive;



