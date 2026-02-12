import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { Star } from "lucide-react";

export default function ReportG2Grid() {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-1">

                {/* HERO SECTION */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col lg:flex-row items-center gap-16 max-w-7xl mx-auto">
                            {/* Left Text */}
                            <AnimatedSection className="w-full lg:w-1/2">
                                <h1 className="text-4xl md:text-[40px] font-bold text-slate-600 leading-tight mb-6">
                                    In the G2® Grid® Report for Requirements Management, Jama Connect® outranks all other platforms for implementation time, adoption, ROI, & market presence
                                </h1>
                                <p className="text-slate-500 text-sm leading-relaxed mb-8">
                                    Changing market dynamics require a modern and collaborative approach to requirements management. Once again, Jama Connect® has been named the leader in requirements management software.
                                </p>
                                <Button className="bg-[#00D16E] hover:bg-[#00C065] text-white font-bold py-4 px-8 rounded-full uppercase tracking-wider text-sm shadow-lg border-none">
                                    GET THE REPORT
                                </Button>
                            </AnimatedSection>

                            {/* Right Image */}
                            <AnimatedSection className="w-full lg:w-1/2 relative">
                                <div className="relative rounded-lg shadow-2xl overflow-hidden bg-slate-50 border border-slate-100">
                                    <img
                                        src="https://www.jamasoftware.com/media/2021/03/features-tab5-risk-and-hazard-analysis.png"
                                        alt="Jama Connect Interface"
                                        className="w-full h-auto"
                                    />
                                    {/* Badge Overlay */}
                                    <div className="absolute -bottom-10 -left-10 w-40 h-40">
                                        <img src="https://www.g2.com/shared-assets/product-badges/leader-winter-2025.svg" alt="G2 Leader" className="w-full h-full drop-shadow-xl" onError={(e) => {
                                            e.currentTarget.src = "https://images.g2crowd.com/uploads/report_medal/image/1004323/medal.svg" // Fallback
                                        }} />
                                        <div className="absolute inset-0 bg-white rounded-full shadow-lg flex flex-col items-center justify-center border-4 border-[#F28E1C] p-4 text-center transform -rotate-12 scale-90 origin-center hidden">
                                            <span className="text-[#F28E1C] font-black text-2xl leading-none">Leader</span>
                                            <span className="text-slate-500 font-bold text-[10px] uppercase">WINTER<br />2025</span>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </section>

                {/* LOGO BAR */}
                <section className="py-12 bg-[#002d5b] overflow-hidden">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-90 text-white">
                            <span className="text-2xl font-bold uppercase tracking-widest">ABIOMED</span>
                            <span className="text-2xl font-bold font-sans">Panasonic <span className="block text-[10px] font-normal tracking-[0.3em] uppercase opacity-80 text-center">Automotive</span></span>
                            <span className="text-3xl font-bold tracking-widest font-serif">MERCK</span>
                            <span className="text-3xl font-bold">RIMAC</span>
                            <div className="flex flex-col text-left leading-none">
                                <span className="text-2xl font-bold">Collins</span>
                                <span className="text-sm font-light tracking-[0.2em] uppercase opacity-80">Aerospace</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* BADGES SECTION */}
                <section className="py-24 bg-[#E0F2FE]">
                    <div className="container mx-auto px-4 text-center">
                        <AnimatedSection>
                            <h2 className="text-3xl md:text-3xl font-bold text-slate-700 mb-4 max-w-4xl mx-auto">
                                Why does Jama Connect lead the pack in the G2® Grid® for requirements management?
                            </h2>
                            <p className="text-slate-600 mb-16 max-w-4xl mx-auto text-sm">
                                Not only have we been named the leader in requirements management, but our customer reviews awarded us multiple badges in these additional G2 categories:
                            </p>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                                {[
                                    { label: "Leader", sub: "Leader" },
                                    { label: "Regional Leader", sub: "Leader EMEA", color: "#E91E63" },
                                    { label: "Best Relationship", sub: "Best Relationship", color: "#00CFD1" },
                                    { label: "Leader", sub: "Leader Enterprise" }
                                ].map((badge, i) => (
                                    <div key={i} className="flex flex-col items-center">
                                        <div className="bg-white border-2 border-slate-800 p-1 w-full max-w-[180px] aspect-[1/1.4] shadow-xl relative flex flex-col">
                                            <div className="bg-white border-b-2 border-slate-800 p-2 flex justify-between items-center">
                                                <span className="text-[10px] font-bold">WINTER 2026</span>
                                                <div className="bg-red-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded">G</div>
                                            </div>
                                            <div className="flex-1 flex items-center justify-center p-2 text-center">
                                                <span className="font-black text-xl md:text-2xl text-slate-900 leading-none">{badge.label}</span>
                                            </div>
                                            {/* Chevron Bottom */}
                                            <div className="absolute -bottom-8 left-0 right-0 h-8 bg-cyan-500 clip-path-chevron">
                                                <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="w-full h-full">
                                                    <path d="M0 0 L50 20 L100 0 Z" fill={badge.color || "#FF9900"} stroke="#1e293b" strokeWidth="1" />
                                                </svg>
                                            </div>
                                        </div>
                                        <span className="mt-12 font-bold text-slate-600">{badge.sub}</span>
                                    </div>
                                ))}
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* GRID CHART SECTION */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="flex flex-col md:flex-row items-center gap-20">
                            {/* Left Grid */}
                            <AnimatedSection className="w-full md:w-1/2">
                                <div className="aspect-square bg-white border-2 border-slate-200 relative p-8 shadow-sm">
                                    {/* Simplified Grid Visualization */}
                                    <div className="absolute inset-0 grid grid-cols-4 grid-rows-4">
                                        {[...Array(16)].map((_, i) => (
                                            <div key={i} className="border border-slate-100"></div>
                                        ))}
                                    </div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-full h-0.5 bg-slate-300"></div>
                                        <div className="h-full w-0.5 bg-slate-300 absolute"></div>
                                    </div>
                                    {/* Labels */}
                                    <span className="absolute top-2 left-2 text-xs text-slate-400 font-bold">Contenders</span>
                                    <span className="absolute top-2 right-2 text-xs text-slate-400 font-bold">Leaders</span>
                                    <span className="absolute bottom-2 left-2 text-xs text-slate-400 font-bold">Niche</span>
                                    <span className="absolute bottom-2 right-2 text-xs text-slate-400 font-bold">High Performers</span>

                                    {/* Points */}
                                    <div className="absolute top-[10%] right-[10%]">
                                        <img src="/Logo.jpg" alt="Jama" className="w-8 h-8 object-contain drop-shadow transition-transform hover:scale-125 cursor-pointer" />
                                    </div>
                                    <div className="absolute top-[30%] left-[20%] w-6 h-6 bg-blue-100 rounded border border-blue-300 flex items-center justify-center text-[8px] text-blue-800 font-bold">IBM</div>
                                    <div className="absolute top-[50%] right-[30%] w-6 h-6 bg-slate-100 rounded border border-slate-300"></div>
                                    <div className="absolute bottom-[20%] right-[20%] w-6 h-6 bg-purple-100 rounded border border-purple-300"></div>
                                </div>
                            </AnimatedSection>

                            {/* Right Content */}
                            <AnimatedSection className="w-full md:w-1/2">
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-700 mb-6 leading-tight">
                                    Jama Connect is ranked #1 over all other requirements management solutions.
                                </h2>
                                <p className="text-[#00AEEF] text-lg mb-8 font-medium leading-relaxed">
                                    Comparing Jama Connect to DOORS® Next? Download this eBook to see why customers on G2® prefer Jama Connect over DOORS® Next and what migration looks like.
                                </p>
                                <Button className="bg-[#00D16E] hover:bg-[#00C065] text-white font-bold py-4 px-10 rounded-full uppercase tracking-wider shadow-lg border-none">
                                    DOWNLOAD EBOOK
                                </Button>
                            </AnimatedSection>
                        </div>
                    </div>
                </section>

                {/* TESTIMONIALS */}
                <section className="py-24 bg-[#05003B] text-white text-center">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <AnimatedSection>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                The Users Love Us category is a testament to our commitment to our customers’ success.
                            </h2>
                            <p className="max-w-4xl mx-auto text-sm mb-16 opacity-80">
                                We live vicariously through the successes of our customers. We strive to provide the highest level of service possible and look forward to continuing to provide our clients with the support and expertise they need to reach and exceed their product development goals.
                            </p>

                            <div className="grid md:grid-cols-2 gap-12 text-left mb-16">
                                <div>
                                    <p className="text-[#F28E1C] italic font-medium leading-relaxed mb-6">
                                        “Jama Connect is an application that easily connects people in engineering and managing requirements. The fact that it is easy to share information and execute processes even when the team is not co-located (geographically dispersed). Changes are properly tracked and people notified. It is also easy to organize, review and monitor the review process.”
                                    </p>
                                    <div className="border-l-2 border-white pl-4">
                                        <p className="font-bold text-sm">Senior Systems Engineer</p>
                                        <p className="text-xs opacity-70">Mid-Market</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-[#F28E1C] italic font-medium leading-relaxed mb-6">
                                        “We came for a tool and gained a comprehensive solution with a strong partnership. It is a very well thought out and engineered solution with some very good “out of the box” regulatory reports. Jama Connect is very intuitive and easy to use by our teams. Besides the tool solution, I also really appreciate the Jama Software team that understands our core business and helps us along the way from a technical standpoint.”
                                    </p>
                                    <div className="border-l-2 border-white pl-4">
                                        <p className="font-bold text-sm">G2.com</p>
                                        <p className="text-xs opacity-70">Collected Review</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-center">
                                <Button className="bg-transparent border border-white hover:bg-white/10 text-white text-sm font-bold py-3 px-8 rounded flex items-center gap-3 transition-colors">
                                    <span className="flex text-[#F28E1C]">
                                        <Star className="w-4 h-4 fill-current" />
                                        <Star className="w-4 h-4 fill-current" />
                                        <Star className="w-4 h-4 fill-current" />
                                        <Star className="w-4 h-4 fill-current" />
                                        <Star className="w-4 h-4 fill-current" />
                                    </span>
                                    READ OUR REVIEWS ON <span className="text-[#F2441C] font-black text-lg font-serif">G2</span>
                                </Button>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* INTEGRATIONS */}
                <section className="py-24 bg-white text-center">
                    <div className="container mx-auto px-4">
                        <AnimatedSection>
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-600 mb-4">
                                Best-of-Breed Integrations for the Entire Product Development Lifecycle
                            </h2>
                            <p className="text-slate-500 mb-16">
                                Take advantage of our integration solutions with market-leading software to automate workflow and accelerate product launch.
                            </p>

                            <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24 opacity-80 grayscale hover:grayscale-0 transition-all">
                                <span className="text-2xl font-bold flex items-center gap-1"><span className="w-2 h-2 bg-green-500"></span>TestRail</span>
                                <span className="text-2xl font-bold text-[#0052CC] flex items-center gap-1"><span className="text-3xl">❖</span> Jira</span>
                                <span className="text-xl font-bold text-[#0078D7]">Azure<br /><span className="font-normal text-slate-600">DevOps</span></span>
                                <span className="text-3xl font-bold tracking-tighter text-[#FFB71B]">/ Ansys</span>
                                <span className="text-2xl font-bold text-slate-700">ops<span className="text-red-500">hub</span></span>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* BOTTOM CTA */}
                <section className="py-24 bg-[#0066CC] relative overflow-hidden">
                    {/* Wave Background Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0033a0] to-[#0099ff] opacity-90"></div>
                    <svg className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0 100 Q 50 0 100 100" stroke="white" strokeWidth="2" fill="none" />
                        <path d="M0 100 Q 50 20 100 100" stroke="white" strokeWidth="2" fill="none" />
                    </svg>

                    <div className="container mx-auto px-4 relative z-10 text-center text-white">
                        <AnimatedSection>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get a FREE 30 Day Trial!</h2>
                            <p className="text-sm font-medium mb-10 opacity-90">
                                G2 has named us the leader, but come find out for yourself! Sign up for a free 30-day trial, or register for a product demo!
                            </p>
                            <Button className="bg-[#F28E1C] hover:bg-[#D9790B] text-white font-bold py-4 px-10 rounded-full uppercase tracking-wider shadow-lg border-none text-sm">
                                FREE 30 DAY TRIAL
                            </Button>
                        </AnimatedSection>
                    </div>
                </section>
            </main>

            <Footer />
            <ChatWidget />
        </div>
    );
}
