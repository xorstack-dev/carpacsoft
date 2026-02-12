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
    FileText,
    Activity,
    Users,
    Settings,
    Star
} from "lucide-react";

// Feature Comparison Component matching Image 3
const ComparisonTable = () => {
    const rows = [
        { label: "Reviews & Approvals", desc: "Ability to have one single and consistent review mechanism designed for the whole team and external stakeholders. Capturing and managing user comments through a review sequence in real time", jama: 5, ms: 0 },
        { label: "Live Traceability", desc: "Live Traceability enables any user at any time to see the most up to date and complete upstream and downstream information for any requirement — no matter the stage of systems development or how many siloed tools and teams it spans.", jama: 5, ms: 0 },
        { label: "Measured Process Improvement", desc: "Allows for organizations to measure and optimize their development processes, improve product quality, and accelerate time to market, in addition to providing engineering performance benchmarks.", jama: 5, ms: 0 },
        { label: "Requirements Authoring & Quality", desc: "Enables efficient requirements authoring and reduce requirements authoring errors to improve the accuracy and consistency of requirements quality.", jama: 5, ms: 0 },
        { label: "Requirements Baseline & Variant Management", desc: "Enables the user to baseline the requirements set in the event of a key milestone (i.e., a product has been released to a particular customer). Effectively manage product variants with easy-to-use variant management UX which includes categories, baselines, and version history.", jama: 5, ms: 0 },
        { label: "Flexibility & Ease of Use", desc: "An easy to adopt, friendly intuitive interface, applicable to both the casual and frequent user.", jama: 5, ms: 5 },
        { label: "Integrations", desc: "Integrates with market-leading tools across the development lifecycle to improve productivity. Enables teams to work in their preferred tools (including No Magic/Cameo, Jira, Excel, and many other best-of breed tools) while ensuring all requirements are verified and validated to achieve complete traceability.", jama: 5, ms: 2 },
        { label: "Security", desc: "Codes with Open Web Application Security Project (OWASP) best practices, hosts in a secure AWS cloud, performs regular static and dynamic scans and PEN tests (third party), and certified for SOC 2 type 2 compliance for the environment and application.", jama: 5, ms: 5 },
        { label: "In-House Expertise", desc: "Vendor has in-house (not third-party) Professional Services experts to efficiently and effectively support requirements, migration, implementation, and adoption. This should include in-house expertise in regulated markets such as Automotive, Avionics, and Medical Device.", jama: 5, ms: 0 },
    ];

    return (
        <div className="w-full bg-white rounded-lg shadow-xl overflow-hidden text-sm">
            <div className="grid grid-cols-12 bg-[#05003B] text-white py-4 px-6 font-bold uppercase tracking-wider text-xs">
                <div className="col-span-2 text-orange-400">Areas of Focus</div>
                <div className="col-span-6">Key Buying Factors to Consider When Choosing a Vendor</div>
                <div className="col-span-2 text-center text-blue-300">CarpacSoft</div>
                <div className="col-span-2 text-center text-white">Microsoft Excel & Word</div>
            </div>
            {rows.map((row, index) => (
                <div key={index} className={`grid grid-cols-12 py-6 px-6 border-b border-slate-100 items-center ${index % 2 === 0 ? 'bg-slate-50/50' : ''}`}>
                    <div className="col-span-2 font-bold text-[#ea580c] pr-4">{row.label}</div>
                    <div className="col-span-6 text-slate-600 text-[11px] leading-relaxed pr-8">{row.desc}</div>
                    <div className="col-span-2 flex justify-center gap-1">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={16} fill={i < row.jama ? "#1e3a8a" : "#e2e8f0"} stroke="none" />
                        ))}
                    </div>
                    <div className="col-span-2 flex justify-center items-center gap-1 min-h-[24px]">
                        {row.ms === 0 ? (
                            <span className="text-[10px] font-bold text-slate-400">N/A</span>
                        ) : (
                            [...Array(5)].map((_, i) => (
                                <Star key={i} size={16} fill={i < row.ms ? "#475569" : "#e2e8f0"} stroke="none" />
                            ))
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

const CalculatorIcon = ({ type }: { type: string }) => {
    // Simplified calculator icon representations with different colors
    return (
        <div className={`w-32 h-32 rounded-full flex flex-col items-center justify-center border-4 shadow-lg mb-4 bg-white relative overflow-hidden group hover:scale-105 transition-transform duration-300`}>
            <div className={`absolute inset-0 opacity-10 ${type === 'time' ? 'bg-orange-500' :
                type === 'defects' ? 'bg-teal-500' :
                    type === 'rework' ? 'bg-purple-500' : 'bg-blue-400'
                }`}></div>

            {/* Inner Icon Placeholders */}
            <div className={`mb-2 ${type === 'time' ? 'text-orange-600' :
                type === 'defects' ? 'text-teal-600' :
                    type === 'rework' ? 'text-purple-600' : 'text-blue-500'
                }`}>
                {type === 'time' && <Activity size={32} />}
                {type === 'defects' && <FileText size={32} />}
                {type === 'rework' && <Settings size={32} />}
                {type === 'review' && <Users size={32} />}
            </div>

            <div className={`text-center font-bold text-xs uppercase leading-tight ${type === 'time' ? 'text-orange-800' :
                type === 'defects' ? 'text-teal-800' :
                    type === 'rework' ? 'text-purple-800' : 'text-blue-900'
                }`}>
                {type === 'time' && <>Reclaim<br />Work Time</>}
                {type === 'defects' && <>Identify<br />Defects Early</>}
                {type === 'rework' && <>Reduce<br />Rework</>}
                {type === 'review' && <>Improve Review<br />Process</>}
            </div>
        </div>
    );
};

// Custom Icon Components for Key Benefits Section
const FeatureIcon = ({ type }: { type: string }) => {
    // Simplified SVG representations for the 4 key benefits
    return (
        <div className="h-24 mb-4 flex items-center justify-center">
            {/* Placeholder SVGs - fully custom ones would be very long */}
            {type === 'automated' && (
                <svg viewBox="0 0 100 100" className="h-20 w-20 text-orange-500 fill-current opacity-80"><rect x="20" y="20" width="60" height="60" rx="5" fill="none" stroke="currentColor" strokeWidth="2" /><path d="M30 40h40M30 60h40M30 80h20" stroke="currentColor" strokeWidth="2" /><circle cx="75" cy="75" r="15" fill="white" stroke="currentColor" strokeWidth="2" /><path d="M75 65v10h10" stroke="currentColor" strokeWidth="2" fill="none" /></svg>
            )}
            {type === 'traceability' && (
                <svg viewBox="0 0 100 100" className="h-20 w-20 text-teal-500 fill-current opacity-80"><circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="50" cy="50" r="10" fill="currentColor" /><path d="M50 20v10M50 70v10M20 50h10M70 50h10" stroke="currentColor" strokeWidth="2" /></svg>
            )}
            {type === 'compliance' && (
                <svg viewBox="0 0 100 100" className="h-20 w-20 text-blue-500 fill-current opacity-80"><path d="M50 10l30 15v30c0 20-30 35-30 35s-30-15-30-35v-30z" fill="none" stroke="currentColor" strokeWidth="2" /><path d="M35 50l10 10 20-20" fill="none" stroke="currentColor" strokeWidth="2" /></svg>
            )}
            {type === 'collaboration' && (
                <svg viewBox="0 0 100 100" className="h-20 w-20 text-purple-500 fill-current opacity-80"><circle cx="35" cy="40" r="15" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="65" cy="40" r="15" fill="none" stroke="currentColor" strokeWidth="2" /><path d="M35 55v15M65 55v15M20 70h60" stroke="currentColor" strokeWidth="2" /></svg>
            )}
            {type === 'integration' && (
                <svg viewBox="0 0 100 100" className="h-20 w-20 text-indigo-500 fill-current opacity-80"><rect x="10" y="30" width="80" height="50" rx="5" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="30" cy="55" r="5" fill="currentColor" /><circle cx="70" cy="55" r="5" fill="currentColor" /><path d="M30 55l20-15 20 15" fill="none" stroke="currentColor" strokeWidth="2" /></svg>
            )}
        </div>
    );
};

const MSWordCompare = () => {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-1">

                {/* HERO SECTION - Image 1 */}
                <section className="relative bg-[#205279] text-white py-24 overflow-hidden">
                    {/* Background Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1e4b6e] to-[#25608a] opacity-90"></div>
                    <div className="absolute right-0 top-0 h-full w-1/2 bg-[url('https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center mix-blend-overlay opacity-30"></div>

                    <div className="container mx-auto px-4 relative z-10">
                        <AnimatedSection className="max-w-4xl">
                            {/* CarpacSoft Logo */}
                            <div className="mb-8 animate-fade-in">
                                <div className="flex items-center gap-2">
                                    <img src="/Logo.jpg" alt="CarpacSoft Logo" className="h-10 w-auto rounded-full shadow-sm" />
                                    <span className="text-white text-lg font-light tracking-wide">
                                        <span className="font-bold">CarpacSoft</span> <sup className="text-[8px] ml-0.5">®</sup>
                                    </span>
                                </div>
                            </div>

                            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-white">
                                Choose CarpacSoft Over Microsoft Word and Excel Documents for Requirements Management and Traceability
                            </h1>

                            <p className="text-base text-blue-100 mb-6 max-w-3xl leading-relaxed">
                                Using documents to manage your requirements management process isn't scalable, reliable, or efficient for larger, more complex products, software, and systems development.
                            </p>

                            <p className="text-base text-blue-100 mb-10 max-w-3xl leading-relaxed font-bold">
                                CarpacSoft is the ONLY platform that enables Live Traceability™ across best-of-breed tools throughout the end-to-end development lifecycle — ensuring that everyone is always working from the most up-to-date version to achieve business goals. Benefits of this shared, real-time connectivity include faster time to market, less rework, lower risk of human error, and higher quality.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Link to="/trial">
                                    <Button className="bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold py-4 px-8 rounded-full uppercase tracking-wide border-none text-sm">
                                        GET STARTED
                                    </Button>
                                </Link>
                                <Link to="/company/contact">
                                    <Button className="bg-[#00a3cc] hover:bg-[#008fb3] text-white font-bold py-4 px-8 rounded-full uppercase tracking-wide border-none text-sm">
                                        BOOK A DEMO
                                    </Button>
                                </Link>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* KEY BENEFITS - Image 2 */}
                <section className="bg-white py-20 text-center">
                    <div className="container mx-auto px-4">
                        <AnimatedSection>
                            <h2 className="text-3xl font-bold text-[#0052CC] mb-16">Key Benefits of CarpacSoft Over Disparate Documents</h2>
                        </AnimatedSection>

                        <div className="grid md:grid-cols-5 gap-4 max-w-7xl mx-auto">
                            {[
                                {
                                    type: 'automated',
                                    title: "Automated Processes",
                                    points: [
                                        "Eliminate the hassle of an outdated, manual, time-consuming, human error prone document-based requirements management",
                                        "Modern, efficient, collaborative, item-based requirements management",
                                        "Single source of truth provides up-to-date version for all product management and development team members"
                                    ]
                                },
                                {
                                    type: 'traceability',
                                    title: "Live Traceability",
                                    points: [
                                        "Automatically track every new and changed requirement, in real time",
                                        "Trace requirements, tests, reviews, and approvals across the development lifecycle",
                                        "Detect issues early in the development lifecycle to reduce risk"
                                    ]
                                },
                                {
                                    type: 'compliance',
                                    title: "Accelerated Compliance",
                                    points: [
                                        "Customizable item types, relationships, and report templates based on expert industry knowledge, regulatory standards, and best practices",
                                        "Flexibility and customizability to fit business requirements",
                                        "Pre-built frameworks aligned to industry standards"
                                    ]
                                },
                                {
                                    type: 'collaboration',
                                    title: "Powerful Collaboration",
                                    points: [
                                        "Designed for connecting remote/distributed development teams and disciplines",
                                        "Real-time communication captured in context through processes automated that saves time for your team members",
                                        "Role-based, permissions-controlled access for internal and external stakeholders who contribute to achieving project requirements and business goals"
                                    ]
                                },
                                {
                                    type: 'integration',
                                    title: "Best-of-Breed Tool Integrations",
                                    points: [
                                        "Automatically synchronize requirements, tests, and other data",
                                        "Allow team members to continue working in their own preferred tools",
                                        "Excel Functions module allows for the full power of Excel without leaving CarpacSoft"
                                    ]
                                },
                            ].map((item, i) => (
                                <AnimatedSection key={i} delay={i * 100} className="px-2 mb-8">
                                    <FeatureIcon type={item.type} />
                                    <h3 className="font-bold text-slate-700 text-lg mb-4">{item.title}</h3>
                                    <ul className="text-[11px] text-slate-600 space-y-4 text-center">
                                        {item.points.map((pt, j) => (
                                            <li key={j} className="flex justify-center flex-col items-center">
                                                <div className="w-1 h-1 bg-slate-400 rounded-full mb-1"></div>
                                                {pt}
                                            </li>
                                        ))}
                                    </ul>
                                </AnimatedSection>
                            ))}
                        </div>

                        <div className="flex justify-center gap-6 mt-12 mb-8">
                            <Button className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-bold py-3 px-8 rounded-full uppercase text-sm shadow-md">
                                ABOUT CarpacSoft
                            </Button>
                            <Button className="bg-white text-[#0ea5e9] border border-[#0ea5e9] hover:bg-sky-50 font-bold py-3 px-8 rounded-full uppercase text-sm shadow-md">
                                GET DATASHEET
                            </Button>
                        </div>
                    </div>
                </section>

                {/* COMPARISON TABLE - Image 3 */}
                <section className="bg-gradient-to-br from-[#001e4d] to-[#003366] py-20 relative overflow-hidden">
                    {/* Abstract Lines Background */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <svg width="100%" height="100%">
                            <line x1="0" y1="0" x2="100%" y2="100%" stroke="white" strokeWidth="1" />
                            <line x1="100%" y1="0" x2="0" y2="100%" stroke="white" strokeWidth="1" />
                        </svg>
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <AnimatedSection className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-white mb-8">CarpacSoft vs. Microsoft Excel & Word Feature Comparison</h2>
                        </AnimatedSection>

                        <div className="max-w-6xl mx-auto">
                            <ComparisonTable />
                        </div>
                    </div>
                </section>

                {/* ROI / BUSINESS SENSE - Image 4 */}
                <section className="bg-sky-50/50 py-20 text-center">
                    <div className="container mx-auto px-4">
                        <AnimatedSection className="max-w-5xl mx-auto mb-16">
                            <h2 className="text-3xl font-bold text-[#0052CC] mb-6">Investing in a Requirements Management Tool Makes Good Business Sense</h2>
                            <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                                Organizations building complex products, systems, and software can always benefit from improved efficiency across the end-to-end development process. Making strategic changes that optimize development, automate processes, and improve team productivity will undoubtedly save your organization significant time and money. A modern requirements management tool like CarpacSoft® can provide a dramatic ROI in short order — making it a smart-sense move to invest in new product development software. These calculators can help estimate your organization's potential savings.
                            </p>
                            <p className="text-orange-500 font-bold text-sm">Check out these calculators to see how much you could save with CarpacSoft!</p>
                        </AnimatedSection>

                        <div className="flex flex-wrap justify-center gap-12 mb-20 max-w-5xl mx-auto">
                            <AnimatedSection delay={0}><CalculatorIcon type="time" /></AnimatedSection>
                            <AnimatedSection delay={100}><CalculatorIcon type="defects" /></AnimatedSection>
                            <AnimatedSection delay={200}><CalculatorIcon type="rework" /></AnimatedSection>
                            <AnimatedSection delay={300}><CalculatorIcon type="review" /></AnimatedSection>
                        </div>

                        {/* Ebook Banner */}
                        <AnimatedSection className="bg-[#1e3a8a] max-w-5xl mx-auto rounded-lg overflow-hidden flex flex-col md:flex-row shadow-2xl">
                            <div className="w-full md:w-1/3 bg-[#2d528f]">
                                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" alt="Ebook Cover" className="w-full h-full object-cover opacity-80 mix-blend-overlay" />
                                <div className="absolute top-0 left-0 p-8 text-white font-bold opacity-0">The Strategic Transition: From Word and Excel to Modern Requirements Management</div> {/* Simplified cover text handling */}
                            </div>
                            <div className="w-full md:w-2/3 p-10 text-left text-white">
                                <h3 className="text-2xl font-bold mb-4 text-white">Reduce Risk Across the Development Cycle</h3>
                                <p className="text-xs text-blue-100 mb-4 leading-relaxed">
                                    Trying to manage your product's requirements solely in documents carries a lot of risk of human error due to manual tasks and will gradually eat away at your company's bottom line.
                                </p>
                                <p className="text-xs text-blue-100 mb-8 leading-relaxed">
                                    Aligning product management and development teams across engineering disciplines is crucial during hardware and software integration, particularly when it concerns safety and regulatory standards. Relying solely on documents falls short in today's complex product development. For precision, context, and accountability in requirements, a modern, purpose-built approach is essential for success. Download this free eBook to learn how to supercharge your development process to save time and attain high quality as you achieve your business goals.
                                </p>
                                <Button className="bg-transparent border border-white hover:bg-white/10 text-white rounded-full px-8 py-2 uppercase text-xs font-bold tracking-wide">
                                    GET THE EBOOK
                                </Button>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* SECURITY & SLA - Image 4 Bottom */}
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
                                    <div className="w-24 h-24 mb-6 flex items-center justify-center relative border-slate-100 border-2 rounded-xl">
                                        <item.icon size={56} className={item.color} strokeWidth={1.5} />
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
                <DemoForm />

            </main>
            <Footer />
            <ChatWidget />
        </div>
    );
};

export default MSWordCompare;



