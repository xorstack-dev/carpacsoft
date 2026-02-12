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
    Globe,
    DoorOpen,
    Rocket,
    MessageSquare,
    ShieldCheck,
    Lock,
    Server,
    FileCheck,
    Zap,
    Layout,
    Share2,
    Shield
} from "lucide-react";

// Custom Icons/Illustrations
const GlobeGraphic = () => (
    <svg viewBox="0 0 200 200" className="w-full h-full opacity-30 animate-pulse-slow">
        <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="1" />
        <ellipse cx="100" cy="100" rx="90" ry="40" fill="none" stroke="currentColor" strokeWidth="1" />
        <ellipse cx="100" cy="100" rx="40" ry="90" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M30 50 Q 100 0 170 50" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M30 150 Q 100 200 170 150" fill="none" stroke="currentColor" strokeWidth="1" />
    </svg>
);

const GearGraphic = () => (
    <svg viewBox="0 0 100 100" className="w-24 h-24 mb-6 text-white/90">
        <path d="M50 20 A 30 30 0 0 1 80 50 A 30 30 0 0 1 50 80 A 30 30 0 0 1 20 50 A 30 30 0 0 1 50 20 Z" fill="none" stroke="currentColor" strokeWidth="8" strokeDasharray="10 5" />
        <circle cx="50" cy="50" r="15" fill="currentColor" />
        <path d="M50 5 L 50 15 M 50 85 L 50 95 M 5 50 L 15 50 M 85 50 L 95 50" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
    </svg>
);

const VideoThumbnail = ({ title, logo, videoUrl }: { title: string, logo: React.ReactNode, videoUrl?: string }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    if (isPlaying && videoUrl) {
        return (
            <div className="relative aspect-video bg-black rounded-lg overflow-hidden border border-slate-700 shadow-xl">
                <iframe
                    src={videoUrl}
                    title={title}
                    allow="autoplay; fullscreen"
                    className="absolute inset-0 w-full h-full"
                    frameBorder="0"
                />
            </div>
        );
    }

    return (
        <div
            className="relative aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg overflow-hidden group cursor-pointer border border-slate-700 shadow-xl"
            onClick={() => videoUrl && setIsPlaying(true)}
        >
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                {logo}
                <h3 className="text-white font-bold mt-4 mb-2">{title}</h3>
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mt-4 group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-white ml-1 fill-white" />
                </div>
            </div>
        </div>
    );
};

const MigrationStep = ({ number, title }: { number: number, title: string }) => (
    <div className="relative z-10 flex flex-col items-center">
        <div className="w-16 h-16 rounded-full bg-white border-4 border-blue-500 flex items-center justify-center text-blue-600 font-bold text-xl mb-4 shadow-lg">
            {number === 1 && <FileCheck size={32} />}
            {number === 2 && <Layout size={32} />}
            {number === 3 && <Zap size={32} />}
            {number === 4 && <Rocket size={32} />}
        </div>
        <div className="bg-white px-4 py-2 rounded-lg shadow font-medium text-slate-700 text-center text-sm w-40">
            {title}
        </div>
    </div>
);

const IBMDoors = () => {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-1">

                {/* HERO SECTION - Image 1 */}
                <section className="relative bg-gradient-to-r from-[#001e4d] to-[#003366] text-white py-24 overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/2 h-full text-blue-400">
                        <GlobeGraphic />
                    </div>
                    <div className="container mx-auto px-4 relative z-10">
                        <AnimatedSection>
                            {/* CarpacSoft Logo */}
                            <div className="mb-8 animate-fade-in">
                                <div className="flex items-center gap-2">
                                    <img src="/Logo.jpg" alt="CarpacSoft Logo" className="h-10 w-auto rounded-full shadow-sm" />
                                    <span className="text-white text-lg font-light tracking-wide">
                                        <span className="font-bold">CarpacSoft</span> <sup className="text-[8px] ml-0.5">®</sup>
                                    </span>
                                </div>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 max-w-4xl text-white">
                                IBM DOORS' Customers Switch to CarpacSoft More than Any Other Tool, Including DOORS Next (DNG)
                            </h1>
                            <p className="text-lg text-blue-100 mb-8 max-w-3xl leading-relaxed">
                                Organizations are choosing CarpacSoft for its unrivaled usability, seamless integrations, migration expertise, and superior traceability. Discover why CarpacSoft consistently outperforms IBM DOORS and DOORS Next in delivering modern requirements management, driving innovation, and ensuring efficient team collaboration across industries.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link to="/trial">
                                    <Button className="bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold py-4 px-8 rounded-full uppercase tracking-wide">
                                        GET STARTED
                                    </Button>
                                </Link>
                                <Link to="/company/contact">
                                    <Button className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-bold py-4 px-8 rounded-full uppercase tracking-wide">
                                        BOOK A DEMO
                                    </Button>
                                </Link>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* CUSTOMER BANNER - Image 2 */}
                <section className="bg-gradient-to-r from-[#e0f2fe] to-[#bae6fd] py-16 text-center">
                    <div className="container mx-auto px-4">
                        <AnimatedSection>
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-700 mb-8 max-w-5xl mx-auto">
                                Hundreds of companies in the last few years have moved from IBM DOORS to CarpacSoft including some of the largest and most complex, including dSpace, Rockwell Automation, and Jet Propulsion Lab (JPL).
                            </h2>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Button className="bg-[#1e3a8a] text-white hover:bg-[#172554] rounded-full px-6 py-2 text-xs font-bold uppercase tracking-wider">
                                    DSPACE CUSTOMER STORY
                                </Button>
                                <Button className="bg-[#1e3a8a] text-white hover:bg-[#172554] rounded-full px-6 py-2 text-xs font-bold uppercase tracking-wider">
                                    JPL PAPER
                                </Button>
                                <Button className="bg-[#1e3a8a] text-white hover:bg-[#172554] rounded-full px-6 py-2 text-xs font-bold uppercase tracking-wider">
                                    WATCH WEBINAR
                                </Button>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* NO UPGRADE POSSIBLE - Image 2 bottom */}
                <section className="bg-[#002b5c] py-16 text-white">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
                            <AnimatedSection className="w-full md:w-1/3">
                                <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg p-1 overflow-hidden shadow-2xl skew-y-1 transform hover:skew-y-0 transition-transform duration-500">
                                    <div className="bg-[#1e293b] p-6 text-center">
                                        <DoorOpen className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                                        <h3 className="font-bold text-lg mb-2 ">Why Migration Efforts Fail</h3>
                                        <p className="text-sm text-slate-400">The hidden costs of staying with legacy tools.</p>
                                    </div>
                                </div>
                            </AnimatedSection>
                            <AnimatedSection delay={200} className="w-full md:w-2/3">
                                <h2 className="text-3xl font-bold mb-4 text-white">No Upgrade Possible from IBM DOORS to DNG</h2>
                                <p className="text-white mb-8 leading-relaxed">
                                    IBM DOORS customers are surprised to learn that DNG is a completely different product, database, architecture, and code base from DOORS — and no upgrade is possible. In fact, most companies find that trying to migrate from IBM DOORS to DNG is harder than migrating to CarpacSoft.
                                </p>
                                <Button className="bg-transparent border border-white text-white hover:bg-white/10 rounded-full px-8 py-3 uppercase text-sm font-bold tracking-wider">
                                    LEARN MORE
                                </Button>
                            </AnimatedSection>
                        </div>
                    </div>
                </section>

                {/* INTEGRATIONS - Image 3 */}
                <section className="py-20 bg-white text-center">
                    <div className="container mx-auto px-4">
                        <AnimatedSection>
                            <h2 className="text-3xl font-bold text-slate-800 mb-4 max-w-4xl mx-auto">
                                CarpacSoft Solves IBM Customer Frustration with Market-Leading Integrations to Jira, Cameo, and other Top Tools
                            </h2>
                            <p className="text-slate-600 mb-12 max-w-5xl mx-auto">
                                Take advantage of our integration solutions with market-leading tools for design and simulation, task management, lifecycle management, quality assurance, and testing. Teams can work in their preferred tools while ensuring all requirements are verified and validated to achieve complete traceability. <a href="#" className="text-blue-600 hover:underline">Learn More</a>
                            </p>
                        </AnimatedSection>

                        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
                            <AnimatedSection delay={100}>
                                <p className="text-blue-600 font-bold mb-2">CATIA Magic (Cameo) - CarpacSoft Integration Demo</p>
                                <VideoThumbnail
                                    title="CATIA System Modeling Apps"
                                    logo={<div className="text-4xl font-bold text-white mb-2">CATIA</div>}
                                    videoUrl="https://fast.wistia.net/embed/iframe/m4srcfehz4?autoPlay=true"
                                />
                            </AnimatedSection>
                            <AnimatedSection delay={200}>
                                <p className="text-blue-600 font-bold mb-2">Jira - CarpacSoft Integration Demo</p>
                                <VideoThumbnail
                                    title="Integration Demo"
                                    logo={<div className="flex items-center justify-center gap-2 mb-2"><div className="bg-blue-500 w-8 h-8 rounded"></div><span className="text-2xl font-bold text-white">Jira</span></div>}
                                    videoUrl="https://fast.wistia.net/embed/iframe/m4srcfehz4?autoPlay=true"
                                />
                            </AnimatedSection>
                        </div>

                        {/* Logos Grid */}
                        <AnimatedSection className="max-w-4xl mx-auto">
                            <p className="text-slate-500 mb-8">In addition to Jira and Cameo, CarpacSoft enables Live Traceability across more best-of-breed tools than anyone else.</p>
                            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 grayscale opacity-70">
                                <span className="font-bold text-xl">Ansys</span>
                                <span className="font-bold text-xl text-blue-600">Azure DevOps</span>
                                <span className="font-bold text-xl text-green-600">TEAMCENTER</span>
                                <span className="font-bold text-xl">TestRail</span>
                                <span className="font-bold text-xl">XRAY</span>
                                <span className="font-bold text-xl text-blue-500">Jira</span>
                                <span className="font-bold text-xl">windchill</span>
                                <span className="font-bold text-xl text-purple-600">LDRA</span>
                                <span className="font-bold text-xl text-red-600">aras</span>
                                <span className="font-bold text-xl">TRICENTIS</span>
                                <span className="font-bold text-xl text-orange-600">git</span>
                                <span className="font-bold text-xl">MathWorks</span>
                                <span className="font-bold text-xl">VECTOR</span>
                                <span className="font-bold text-xl">Cameo</span>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* MIGRATE WITH CONFIDENCE - Image 4 Top */}
                <section className="bg-[#465584] py-20 text-white relative overflow-hidden">
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="flex flex-col gap-12 max-w-6xl mx-auto">
                            {/* Top part */}
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <AnimatedSection>
                                    <div className="flex justify-center items-center h-full">
                                        <img
                                            src="https://www.jamasoftware.com/media/2024/09/migration-icon-ibm-1.png"
                                            alt="Migration Process"
                                            className="w-full max-w-[400px] h-auto object-contain drop-shadow-2xl"
                                        />
                                    </div>
                                </AnimatedSection>
                                <AnimatedSection delay={200}>
                                    <h2 className="text-3xl font-bold mb-4 text-white">Migrate with Confidence to CarpacSoft</h2>
                                    <p className="text-blue-100 mb-6 leading-relaxed">
                                        We have more experience migrating IBM DOORS deployments than any other vendor. We follow a four-phase approach that ensures migrated data retains its integrity and traceable relationships. Many customers find that migration is a great time to establish consistent item type definitions, best practice templates, and traceability models.
                                    </p>
                                    <Button className="bg-transparent border border-white hover:bg-white/10 rounded-full px-8 uppercase font-bold text-sm">
                                        LEARN MORE
                                    </Button>
                                </AnimatedSection>
                            </div>
                        </div>
                    </div>
                </section>

                {/* COLLABORATION - Image 4 Middle */}
                <section className="bg-[#f0f9ff] py-20">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                            <AnimatedSection>
                                <h2 className="text-3xl font-bold text-slate-800 mb-4">Improve Collaboration with Partners</h2>
                                <p className="text-slate-600 leading-relaxed mb-6">
                                    Unlike DOORS, CarpacSoft enables you to invite partners to participate in reviews and provide comments at no additional cost. Co-development is also made easy by CarpacSoft with container-level permissions, threaded conversations, and @mentioning. With ReqIF support, file-based exchanges with partners are now even easier.
                                </p>
                            </AnimatedSection>
                            <AnimatedSection delay={200} className="flex justify-center">
                                <div className="relative">
                                    <img
                                        src="https://www.jamasoftware.com/media/2024/09/cross-team-collaboration-300x238.png"
                                        alt="Collaboration and Co-development"
                                        className="w-full max-w-[400px] h-auto object-contain drop-shadow-2xl"
                                    />
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </section>

                {/* WHY SWITCH - Image 4 Bottom */}
                <section className="py-20 bg-white text-center">
                    <div className="container mx-auto px-4">
                        <AnimatedSection>
                            <h2 className="text-3xl font-bold text-slate-700 mb-16">Why Are Teams Making the Switch from DOORS to CarpacSoft?</h2>
                        </AnimatedSection>

                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
                            {[
                                {
                                    title: "Easy",
                                    subtitle: "Simple, intuitive user experience",
                                    desc: "CarpacSoft requirements management software supports multiple development methodologies and engineering disciplines to drive cross-team collaboration and alignment. Achieve quick cross-departmental adoption with minimal training."
                                },
                                {
                                    title: "Flexible",
                                    subtitle: "Customizable, scalable, and secure",
                                    desc: "CarpacSoft offers flexible license and deployment models with unlimited stakeholder access for better collaboration across product development teams. Deployed in the cloud or on-premises, the solution ensures flexible access for distributed teams anywhere."
                                },
                                {
                                    title: "Open",
                                    subtitle: "Accessible architecture to integrate",
                                    desc: "CarpacSoft enables integration with best-of-breed tools across the entire product development lifecycle. You'll have access to a powerful network of options to get the right technology stack aligned to your unique business needs."
                                }
                            ].map((item, i) => (
                                <AnimatedSection key={i} delay={i * 100} className="text-left">
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="bg-green-500 rounded-full p-1 text-white"><Check size={16} strokeWidth={4} /></div>
                                        <h3 className="text-2xl font-bold text-slate-800">{item.title}</h3>
                                    </div>
                                    <h4 className="text-blue-600 font-bold mb-4">{item.subtitle}</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed border-t border-slate-200 pt-4">
                                        {item.desc}
                                    </p>
                                </AnimatedSection>
                            ))}
                        </div>

                        <div className="flex justify-center gap-6">
                            <Button className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-bold py-3 px-8 rounded-full uppercase text-sm shadow-md">
                                GET DATASHEET
                            </Button>
                            <Button className="bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold py-3 px-8 rounded-full uppercase text-sm shadow-md">
                                GET STARTED
                            </Button>
                        </div>
                    </div>
                </section>

                {/* MARKET DYNAMICS - Image 5 */}
                <section className="bg-[#0070e0] py-16 text-white overflow-hidden relative">
                    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
                        <AnimatedSection className="shrink-0 relative flex justify-center">
                            <div className="relative">
                                <img
                                    src="https://www.jamasoftware.com/media/2024/06/legacy-tools-wp-thumb.png"
                                    alt="Moving Away from Legacy Tools Whitepaper"
                                    className="w-48 md:w-64 h-auto shadow-2xl rotate-[-5deg] border-4 border-white/20 relative z-10 hover:rotate-0 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-blue-900/50 rotate-[-5deg] translate-x-4 translate-y-4 blur-sm z-0 rounded-lg"></div>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={200}>
                            <h2 className="text-3xl font-bold mb-4 text-white">Changing Market Dynamics Require a New Approach to Accelerate Innovation</h2>
                            <p className="text-lg font-medium mb-4 text-white">CarpacSoft enables digital transformation with a more efficient and user-friendly approach to managing risk and compliance.</p>
                            <p className="text-blue-100 mb-8 max-w-3xl">
                                Download this whitepaper to find out why organizations are moving away from legacy requirements management tools, the benefits of making the switch, and how to successfully migrate to a modern solution.
                            </p>
                            <Button className="bg-transparent border-2 border-white hover:bg-white/10 rounded-full px-8 py-3 uppercase font-bold text-sm tracking-wide">
                                GET THE WHITEPAPER
                            </Button>
                        </AnimatedSection>
                    </div>
                </section>

                {/* SECURITY & SLA - Image 6 */}
                <section className="py-20 bg-white text-center">
                    <div className="container mx-auto px-4">
                        <AnimatedSection>
                            <h2 className="text-3xl font-bold text-slate-700 mb-2">
                                CarpacSoft is the Leader in Security, SLAs, High Availability, Touchless Upgrades, and Disaster Recovery
                            </h2>
                            <p className="text-slate-500 text-sm max-w-5xl mx-auto mb-16">
                                CarpacSoft is the only vendor in the space that offers the following: SOC 2 Type 2 certified application and data center (others data center only), SLAs above 99% (others at 95% or lower), touchless upgrades (others require your IT to manually update hosted app), high availability SLA (others don't offer), disaster recovery SLA (others don't offer).
                            </p>
                        </AnimatedSection>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                            {[
                                { icon: ShieldCheck, title: "Suitably validated by TÜV SÜD for safety-related development", color: "text-blue-800" },
                                { icon: Shield, title: "CarpacSoft® codes with OWASP best practices", color: "text-blue-600" },
                                { icon: Server, title: "CarpacSoft is SOC2 Type 2 certified in both the server and application", color: "text-red-600" },
                                { icon: Lock, title: "Ensures strong privacy management practices", color: "text-slate-700" },
                            ].map((item, i) => (
                                <AnimatedSection key={i} delay={i * 100} className="flex flex-col items-center">
                                    <div className="w-20 h-20 mb-6 flex items-center justify-center border-2 border-slate-100 rounded-xl shadow-sm">
                                        <item.icon size={40} className={item.color} />
                                    </div>
                                    <p className="text-xs font-bold text-slate-700 max-w-[200px] leading-relaxed">
                                        {item.title}
                                    </p>
                                </AnimatedSection>
                            ))}
                        </div>

                        {/* TLS Extra */}
                        <AnimatedSection className="mt-12 flex flex-col items-center">
                            <div className="bg-blue-500 text-white font-bold px-4 py-2 text-xl tracking-widest mb-4">TLS</div>
                            <p className="text-xs font-bold text-slate-700 max-w-[250px]">
                                Transport Layer Security (TLS) ensures data transferred is secured and encrypted
                            </p>
                        </AnimatedSection>
                    </div>
                </section>

                {/* BOOK A DEMO - Image 7 */}
                <div className="bg-[#465584]">
                    <DemoForm />
                    <div>

                    </div>
                </div>

            </main>
            <Footer />
            <ChatWidget />
        </div>
    );
};

export default IBMDoors;



