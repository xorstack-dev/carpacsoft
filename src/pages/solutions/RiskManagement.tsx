import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { DemoForm } from "@/components/sections/DemoForm";
import {
    ShieldCheck,
    ShieldAlert,
    FileSpreadsheet,
    Users,
    Network,
    Award,
    ListChecks,
    MessageSquare,
    Activity
} from "lucide-react";

const RiskManagement = () => {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-1">

                {/* HERO SECTION - Image 1 */}
                <section className="relative bg-[#3b41e3] text-white py-32 overflow-hidden">
                    {/* Background Overlay with isometric blocks */}
                    <div className="absolute inset-0 bg-[#3b41e3]">
                        {/* Abstract Isometric Shapes Background Placeholder */}
                        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center mix-blend-overlay"></div>
                        {/* Custom CSS Shapes to mimic the blocks */}
                        <div className="absolute top-20 right-20 w-32 h-32 bg-blue-400 opacity-20 transform rotate-45 skew-x-12"></div>
                        <div className="absolute bottom-20 left-20 w-48 h-48 bg-purple-400 opacity-20 transform -rotate-12 skew-y-12"></div>
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <AnimatedSection className="max-w-4xl">
                            <div className="flex items-center gap-2 mb-6">
                                <img src="/jama-connect-logo-white.svg" alt="CarpacSoft" className="h-8" />
                            </div>
                            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-white">
                                Align Safety Hazards, Security Threat Analysis, Risk Assessments, and Functional Safety Directly into Your Engineering Workstream
                            </h1>

                            <p className="text-sm text-blue-100 mb-10 max-w-4xl leading-relaxed">
                                Only CarpacSoft ensures risk mitigation efforts (e.g. Hazard Analysis, FMEA, HARA, TARA, ASPICE, Functional Safety, etc.) are no longer isolated, ignored, or forced to play catch up to design. Risk mitigation activity happens in the same system used by all engineering teams for functional requirements and test verification.
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

                {/* TRACK PROGRESS SECTION - Image 2 */}
                <section className="bg-[#007aff] py-24 text-white text-center">
                    <div className="container mx-auto px-4">
                        <AnimatedSection className="max-w-5xl mx-auto">
                            <h2 className="text-3xl font-bold mb-6 text-white">Track Live Progress and Engage with Product Development Teams to Address Identified Hazards & Risks</h2>
                            <p className="text-sm text-blue-100 leading-relaxed mb-12">
                                Only CarpacSoft lets you track the real-time progress of identified hazards and threats, helping you spot coverage gaps, missing test cases, and incomplete test runs. It also allows you to drill down to specific items and individuals, using @ mentions to drive action and spur progress.
                            </p>

                            <div className="flex justify-center gap-4 flex-wrap">
                                <div className="bg-white text-[#007aff] px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wide">AUTOMOTIVE</div>
                                <div className="bg-white text-[#007aff] px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wide">MEDICAL DEVICE</div>
                                <div className="bg-white text-[#007aff] px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wide">AIRBORNE SYSTEMS</div>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* FMEA VIDEO SECTION - Image 3 */}
                <section className="bg-white py-24">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="flex flex-col md:flex-row items-center gap-16">
                            <div className="md:w-1/2 relative">
                                {/* Network Graphic Placeholder */}
                                <div className="relative w-full aspect-video flex items-center justify-center">
                                    {/* Center Card */}
                                    <div className="absolute z-20 bg-[#001e4d] text-white p-6 rounded-lg shadow-2xl w-80 flex flex-col items-center text-center">
                                        <img src="/jama-connect-logo-white.svg" alt="CarpacSoft" className="h-6 mb-4" />
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="bg-blue-500 rounded-full p-2"><ShieldAlert size={20} /></div>
                                            <div className="text-left">
                                                <div className="text-[10px] text-blue-300">CarpacSoft Interchange™</div>
                                                <div className="text-xs font-bold">for Risk Management</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Satellites */}
                                    <div className="absolute top-0 left-10 animate-bounce delay-100"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" className="w-10 h-10" alt="Jira" /></div>
                                    <div className="absolute bottom-10 right-10 animate-bounce delay-200"><img src="https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg" className="w-10 h-10" alt="Excel" /></div>
                                    <div className="absolute top-10 right-20 animate-bounce delay-300"><div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xs">Git</div></div>
                                    <div className="absolute bottom-20 left-20 animate-bounce delay-500"><div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xs">Az</div></div>

                                    {/* Connecting Lines (CSS) */}
                                    <div className="absolute inset-0 border border-dashed border-slate-200 rounded-full scale-125 opacity-20 animate-spin-slow"></div>
                                </div>
                            </div>
                            <div className="md:w-1/2">
                                <AnimatedSection>
                                    <h2 className="text-2xl font-bold text-[#001e4d] mb-6">Simplify complex risk management workflows, including Failure Mode and Effects Analysis (FMEA), a critical process in many industries</h2>
                                    <p className="text-[10px] text-slate-600 leading-relaxed mb-6">
                                        Managing risk for advanced products—like airplanes, automobiles, and medical devices—often involves complex analyses requiring collaboration across multiple teams. Without a connected tool, risk management can become fragmented, leading to potential impacts on product functionality, safety, and user experience. CarpacSoft Interchange™ is purpose-built to deliver Live Traceability™ across best-of-breed tools like Jira, Excel, and ReqIF‑compliant platforms. It empowers teams to seamlessly sync traceable information, enabling them to maintain productivity while leveraging their preferred tools.
                                    </p>
                                    <p className="text-[10px] text-slate-600 leading-relaxed mb-8">
                                        In this video, Vincent Balgos – Director, Solutions & Consulting at CarpacSoft, demonstrates how CarpacSoft Interchange can simplify complex risk management workflows, including FMEA, a critical process in many industries.
                                    </p>
                                    <Button variant="outline" className="border-[#00a3cc] text-[#00a3cc] hover:bg-[#00a3cc] hover:text-white rounded-full px-8 py-3 uppercase text-[10px] font-bold tracking-wide">
                                        WATCH VIDEO
                                    </Button>
                                </AnimatedSection>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FEATURES GRID - Image 4 */}
                <section className="bg-[#001e4d] py-24 text-white text-center">
                    <div className="container mx-auto px-4">
                        <AnimatedSection className="mb-16">
                            <h2 className="text-2xl font-bold mb-4 text-white">Make Advanced Risk Calculations in Excel Traceable</h2>
                            <p className="text-xs text-blue-100 max-w-3xl mx-auto leading-relaxed mb-16">
                                Only CarpacSoft enables you to take your existing spreadsheets and integrate the calculation fields directly into the relevant fields. When you update your calculations, they automatically update in CarpacSoft. You can also maintain version control of your spreadsheets in CarpacSoft.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 max-w-5xl mx-auto mb-16">
                                {/* Feature 1 */}
                                <div className="flex flex-col items-center">
                                    <div className="w-16 h-16 mb-6">
                                        <Award size={64} className="text-[#00a3cc]" strokeWidth={1} />
                                    </div>
                                    <h3 className="text-sm font-bold text-blue-300 mb-4">Risk Management Software Built Upon Best Practices</h3>
                                    <p className="text-[10px] text-blue-100 leading-relaxed max-w-sm">
                                        CarpacSoft comes with procedure and configuration guides that minimize setup time and let you begin risk analysis sooner. Conduct tasks such as preliminary hazard analysis (PHA) and failure mode and effects analysis (FMEA) from within the platform.
                                    </p>
                                </div>

                                {/* Feature 2 */}
                                <div className="flex flex-col items-center">
                                    <div className="w-16 h-16 mb-6">
                                        <ListChecks size={64} className="text-[#ea580c]" strokeWidth={1} />
                                    </div>
                                    <h3 className="text-sm font-bold text-blue-300 mb-4">Proactive, Not Reactive, Risk Management Framework</h3>
                                    <p className="text-[10px] text-blue-100 leading-relaxed max-w-sm">
                                        Proactively avoid missed risks and the stress and uncertainty of piecing together risk management files during late stages of product development. With CarpacSoft enterprise risk management software, you can capture, analyze, evaluate and mitigate risks in one central location at each stage of the development process to avoid misses that may require costly late-stage fixes and rework.
                                    </p>
                                </div>

                                {/* Feature 3 */}
                                <div className="flex flex-col items-center">
                                    <div className="w-16 h-16 mb-6">
                                        <MessageSquare size={64} className="text-[#00c7b7]" strokeWidth={1} />
                                    </div>
                                    <h3 className="text-sm font-bold text-blue-300 mb-4">Enable Cross-Functional Reviews</h3>
                                    <p className="text-[10px] text-blue-100 leading-relaxed max-w-sm">
                                        Cross-functional teams spanning design, software testing and quality can collaborate in real time on risk analyses, even when they are remote with CarpacSoft's Review Center. A Review Moderator keeps teams focused by providing custom messages, supporting context, and real time feedback to questions, issues or proposed updates.
                                    </p>
                                </div>

                                {/* Feature 4 */}
                                <div className="flex flex-col items-center">
                                    <div className="w-16 h-16 mb-6">
                                        <Network size={64} className="text-[#00a3cc]" strokeWidth={1} />
                                    </div>
                                    <h3 className="text-sm font-bold text-blue-300 mb-4">Complete Traceability</h3>
                                    <p className="text-[10px] text-blue-100 leading-relaxed max-w-sm">
                                        End-to-end traceability is essential to demonstrating compliance with industry standards and regulations. CarpacSoft has relationship rules that guide and alert users to missing and suspect traceability when requirements or risks are missing or change—ensuring that your test results reflect the latest updates to risks. CarpacSoft allows your teams to easily connect risks, requirements and testing in one tool where requirements and test results stay live in real time.
                                    </p>
                                </div>
                            </div>

                            <Button className="bg-[#001e4d] text-white hover:bg-white hover:text-[#001e4d] rounded-full px-8 py-3 uppercase text-[10px] font-bold tracking-wide transition-colors">
                                CarpacSoft FEATURES
                            </Button>
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

export default RiskManagement;



