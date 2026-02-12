import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import {
    TrendingUp,
    FlaskConical,
    Lightbulb,
    Heart,
    Monitor,
    ArrowUpRight,
    Shield,
    Users,
    Search,
    FileText,
    Award
} from "lucide-react";

// Client logos
const clientLogos = [
    { name: "RIMAC", text: "RIMAC" },
    { name: "Alight", text: "alight" },
    { name: "GRIFOLS", text: "GRIFOLS" },
    { name: "3shape", text: "3shape" },
    { name: "TELESAT", text: "TELESAT" },
];

// Partner logos
const partnerLogos = [
    { name: "TestRail", text: "TestRail" },
    { name: "Jira", text: "Jira" },
    { name: "Azure DevOps", text: "Azure DevOps" },
    { name: "Ansys", text: "Ansys" },
    { name: "CATIA", text: "CATIA" },
];

const AboutUs = () => {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-1">

                {/* HERO SECTION - Image 2 */}
                <section className="relative bg-gradient-to-br from-[#1a4f78] to-[#003366] text-white py-20 overflow-hidden">
                    <div className="container mx-auto px-4 relative z-10">
                        <AnimatedSection>
                            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4 text-white">
                                About CarpacSoft
                            </h1>
                            <p className="text-sm text-blue-100 max-w-xl text-white">
                                At CarpacSoft, our purpose and commitment is to ensure that innovators succeed.
                            </p>
                        </AnimatedSection>
                    </div>
                </section>

                {/* MISSION SECTION - Image 2 Middle */}
                <section className="bg-white py-24">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="flex flex-col md:flex-row items-center gap-16">
                            {/* Illustration */}
                            <AnimatedSection className="md:w-2/5">
                                <div className="relative w-full h-80">
                                    {/* Lightbulb */}
                                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                                        <div className="w-20 h-24 bg-[#f59e0b] rounded-full flex items-center justify-center shadow-lg">
                                            <Lightbulb size={40} className="text-white" />
                                        </div>
                                    </div>
                                    {/* Gears */}
                                    <div className="absolute top-8 right-0">
                                        <div className="w-16 h-16 bg-[#0ea5e9] rounded-lg flex items-center justify-center animate-spin shadow-lg" style={{ animationDuration: '10s' }}>
                                            <div className="w-8 h-8 border-4 border-white rounded-full"></div>
                                        </div>
                                    </div>
                                    {/* Team members */}
                                    <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-8">
                                        <div className="w-12 h-12 bg-[#10b981] rounded-full"></div>
                                        <div className="w-16 h-16 bg-[#8b5cf6] rounded-full mt-4"></div>
                                        <div className="w-12 h-12 bg-[#f59e0b] rounded-full"></div>
                                    </div>
                                    {/* Document */}
                                    <div className="absolute top-1/3 left-0">
                                        <div className="w-16 h-20 bg-white rounded-lg shadow-lg border flex items-center justify-center">
                                            <FileText className="text-[#0ea5e9]" size={24} />
                                        </div>
                                    </div>
                                    {/* Box */}
                                    <div className="absolute bottom-8 right-8">
                                        <div className="w-12 h-12 bg-[#f97316] rounded-lg shadow-lg transform rotate-12"></div>
                                    </div>
                                </div>
                            </AnimatedSection>

                            {/* Text */}
                            <AnimatedSection delay={200} className="md:w-3/5">
                                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                                    Humanity depends on successful innovation to address many of our challenges in health and the environment and to make our spirits soar with <span className="text-orange-500 font-bold">advances in space</span>, robotics, <span className="text-orange-500 font-bold">automation</span>, electrification and more.
                                </p>
                                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                                    But innovation is hard and most often fraught with delays, <span className="text-orange-500 font-bold">errors</span>, rework, <span className="text-orange-500 font-bold">cost</span> overruns, missed requirements, regulatory hurdles, and even product failures.
                                </p>
                                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                                    That is why we are committed to increasing the success rate of product innovation. We do this through our industry-leading requirements management software, CarpacSoft®, and our <span className="text-orange-500 font-bold">industry specific</span>, best practice expertise.
                                </p>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    To have the desired impact on innovation success, we need a massively capable team that works well together and with <span className="text-orange-500 font-bold">clients</span>. So, our companion commitment is to nurture an <span className="text-orange-500 font-bold underline">inclusive</span>, learning organization where a focus on professional growth thrives.
                                </p>
                            </AnimatedSection>
                        </div>
                    </div>
                </section>

                {/* OUR HABITS SECTION - Image 3 */}
                <section className="bg-gradient-to-br from-[#003366] to-[#00a3cc] py-24 text-white">
                    <div className="container mx-auto px-4">
                        <AnimatedSection className="text-center mb-16">
                            <h2 className="text-2xl font-bold mb-6">Our Habits</h2>
                            <p className="text-sm text-blue-100 max-w-4xl mx-auto">
                                We are <span className="text-orange-300 font-bold">intentional</span> in the company culture that we nurture. Our operational definition of company culture is the cumulative effect of what people do and how they do it – most often driven by habits of thought and action. We are explicit about the habits we all want to embrace and make our own.
                            </p>
                        </AnimatedSection>

                        {/* Habit Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {[
                                {
                                    icon: <TrendingUp size={40} className="text-[#f59e0b]" />,
                                    title: "Embrace a Growth Mindset",
                                    desc: "For the company to grow, we all must grow. We all share and support each other in the joy of learning."
                                },
                                {
                                    icon: <FlaskConical size={40} className="text-[#10b981]" />,
                                    title: "Follow the Scientific Method",
                                    desc: "We challenge ourselves to move past personal attachment to ideas and instead make observations and explore multiple hypotheses to improve key metric performance."
                                },
                                {
                                    icon: <Lightbulb size={40} className="text-[#f59e0b]" />,
                                    title: "Guide our Clients Through Insight",
                                    desc: "We see across hundreds of companies to determine data-driven best practices that improve our clients' performance."
                                },
                                {
                                    icon: <Heart size={40} className="text-[#ec4899]" />,
                                    title: "Lead with Empathy",
                                    desc: "We seek to understand different perspectives, we engage in constructive dialogue and we resolve differences respectfully."
                                },
                                {
                                    icon: <Monitor size={40} className="text-[#0ea5e9]" />,
                                    title: "Think Virtual-First",
                                    desc: "We optimize virtual interactions for ourselves and our clients and we cherish our purposeful in-person interactions."
                                },
                                {
                                    icon: <ArrowUpRight size={40} className="text-[#10b981]" />,
                                    title: "View Change as Opportunity",
                                    desc: "Change is a given; we respond quickly to opportunities and continuously improve our internal operations and ourselves."
                                }
                            ].map((item, i) => (
                                <AnimatedSection key={i} delay={i * 100} className="text-center">
                                    <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                                        {item.icon}
                                    </div>
                                    <h3 className="font-bold text-lg mb-4">{item.title}</h3>
                                    <p className="text-xs text-blue-100 leading-relaxed">{item.desc}</p>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>

                {/* WHY CLIENTS LOVE US SECTION - Image 4 */}
                <section className="bg-white py-24 text-center">
                    <div className="container mx-auto px-4">
                        <AnimatedSection>
                            <h2 className="text-2xl font-bold text-[#001e4d] mb-4">Why Our Clients Love Us</h2>
                            <p className="text-[#00a3cc] font-medium mb-6">We care deeply about our customers and are invested in helping them succeed.</p>
                            <p className="text-xs text-slate-600 max-w-5xl mx-auto mb-12">
                                We are proud to support visionary organizations worldwide and our growing base of more than 12.5 million users across 30 countries, primarily those representing the forefront of innovation, including key market segments of automotive, semiconductor, medical device, financial services, industrial manufacturing, and aerospace/defense.
                            </p>
                        </AnimatedSection>

                        {/* Client Logos */}
                        <AnimatedSection delay={200} className="flex flex-wrap justify-center items-center gap-12 max-w-4xl mx-auto mb-12">
                            {clientLogos.map((logo, i) => (
                                <span key={i} className="font-bold text-xl text-slate-700 hover:text-[#001e4d] transition-colors cursor-pointer">
                                    {logo.text}
                                </span>
                            ))}
                        </AnimatedSection>

                        <AnimatedSection delay={400}>
                            <Button className="bg-[#00a3cc] hover:bg-[#008fb3] text-white rounded-full px-8 py-3 uppercase text-[10px] font-bold tracking-wide">
                                VIEW CUSTOMER STORIES
                            </Button>
                        </AnimatedSection>
                    </div>
                </section>

                {/* DIGITAL TRANSFORMATION SECTION - Image 4 Bottom */}
                <section className="bg-gradient-to-br from-[#001e4d] to-[#003366] py-24 text-white text-center relative overflow-hidden">
                    {/* Network Pattern Background */}
                    <div className="absolute inset-0 opacity-10">
                        <svg className="w-full h-full" viewBox="0 0 400 400">
                            <circle cx="100" cy="100" r="4" fill="white" />
                            <circle cx="200" cy="50" r="4" fill="white" />
                            <circle cx="300" cy="150" r="4" fill="white" />
                            <circle cx="150" cy="250" r="4" fill="white" />
                            <circle cx="350" cy="300" r="4" fill="white" />
                            <line x1="100" y1="100" x2="200" y2="50" stroke="white" strokeWidth="1" />
                            <line x1="200" y1="50" x2="300" y2="150" stroke="white" strokeWidth="1" />
                            <line x1="100" y1="100" x2="150" y2="250" stroke="white" strokeWidth="1" />
                            <line x1="300" y1="150" x2="350" y2="300" stroke="white" strokeWidth="1" />
                        </svg>
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <AnimatedSection>
                            <h2 className="text-2xl font-bold mb-16">CarpacSoft is Enabling Digital Transformation, Worldwide</h2>
                        </AnimatedSection>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            {[
                                { icon: <Shield size={32} className="text-[#0ea5e9]" />, value: "50%", label: "Reduction in negative outcomes", color: "text-[#0ea5e9]" },
                                { icon: <Users size={32} className="text-[#10b981]" />, value: "70%", label: "Increase in collaborative productivity", color: "text-[#10b981]" },
                                { icon: <FileText size={32} className="text-[#f59e0b]" />, value: "50%", label: "Reuse of development & design requirements", color: "text-[#f59e0b]" },
                                { icon: <Search size={32} className="text-[#8b5cf6]" />, value: "600M", label: "Cloud API service requests per month", color: "text-[#8b5cf6]" },
                                { icon: <FileText size={32} className="text-[#0ea5e9]" />, value: "245M", label: "Individual requirement items under management in the cloud", color: "text-[#0ea5e9]" },
                                { icon: <Award size={32} className="text-[#f59e0b]" />, value: "#1", label: "Rated Requirements Management Software", color: "text-[#f59e0b]" },
                            ].map((item, i) => (
                                <AnimatedSection key={i} delay={i * 100} className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                                        {item.icon}
                                    </div>
                                    <div className="text-left">
                                        <div className={`text-3xl font-bold ${item.color}`}>{item.value}</div>
                                        <div className="text-xs text-blue-200">{item.label}</div>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>

                {/* LIVE TRACEABILITY SECTION - Image 5 */}
                <section className="bg-[#e0f7fa] py-24 text-center">
                    <div className="container mx-auto px-4">
                        <AnimatedSection>
                            <h2 className="text-2xl font-bold text-[#001e4d] mb-6">Live Requirement Traceability</h2>
                            <p className="text-sm text-slate-600 max-w-3xl mx-auto mb-12">
                                We are the only company that enables best-of-breed, live requirement traceability through our proven integrations with leading task management, MBSE, test automation, and risk management tools.
                            </p>
                        </AnimatedSection>

                        {/* Partner Logos */}
                        <AnimatedSection delay={200} className="flex flex-wrap justify-center items-center gap-12 max-w-4xl mx-auto mb-12">
                            {partnerLogos.map((logo, i) => (
                                <span key={i} className="font-bold text-xl text-slate-700 hover:text-[#001e4d] transition-colors cursor-pointer">
                                    {logo.text}
                                </span>
                            ))}
                        </AnimatedSection>

                        <AnimatedSection delay={400}>
                            <Button className="bg-[#00a3cc] hover:bg-[#008fb3] text-white rounded-full px-8 py-3 uppercase text-[10px] font-bold tracking-wide">
                                MORE ABOUT OUR PARTNERS
                            </Button>
                        </AnimatedSection>
                    </div>
                </section>

                {/* COMPANY BACKGROUND SECTION - Image 5 Bottom */}
                <section className="bg-[#001e4d] py-24 text-white text-center">
                    <div className="container mx-auto px-4">
                        <AnimatedSection>
                            <h2 className="text-2xl font-bold mb-8">Company Background</h2>
                            <p className="text-sm text-blue-100 max-w-5xl mx-auto leading-relaxed">
                                CarpacSoft® is focused on maximizing innovation success in multidisciplinary engineering organizations. Numerous firsts for humanity in fields such as fuel cells, electrification, space, software-defined vehicles, surgical robotics, and more all rely on CarpacSoft® requirements management software to minimize the risk of defects, rework, cost overruns, and recalls. Using CarpacSoft, engineering organizations can now intelligently manage the development process by leveraging Live Traceability™ across best-of-breed tools to measurably improve outcomes. Our rapidly growing customer base spans the automotive, medical device, life sciences, semiconductor, aerospace & defense, industrial manufacturing, consumer electronics, financial services, and insurance industries.
                            </p>
                        </AnimatedSection>
                    </div>
                </section>

                {/* CTA SECTION */}
                <section className="bg-gradient-to-r from-[#0ea5e9] to-[#3b82f6] py-16 text-white text-center">
                    <div className="container mx-auto px-4">
                        <AnimatedSection>
                            <h2 className="text-2xl font-bold mb-8">If you're interested in learning more, we'd love to connect with you.</h2>
                            <Link to="/company/contact">
                                <Button className="bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold py-3 px-8 rounded-full uppercase tracking-wide text-xs">
                                    LET'S TALK!
                                </Button>
                            </Link>
                        </AnimatedSection>
                    </div>
                </section>

            </main>
            <Footer />
            <ChatWidget />
        </div>
    );
};

export default AboutUs;



