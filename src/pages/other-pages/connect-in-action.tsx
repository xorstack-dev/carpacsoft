import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { useToast } from "@/hooks/use-toast";

const webinarDates = [
    "February 18, 2026 — 8:00 a.m. PT / 5:00 p.m. CET",
    "February 25, 2026 — 8:00 a.m. PT / 5:00 p.m. CET",
    "March 4, 2026 — 8:00 a.m. PT / 5:00 p.m. CET",
    "March 11, 2026 — 8:00 a.m. PT / 5:00 p.m. CET",
    "March 18, 2026 — 8:00 a.m. PT / 5:00 p.m. CET",
    "March 25, 2026 — 8:00 a.m. PT / 5:00 p.m. CET",
];

const countries = [
    "United States", "United Kingdom", "Canada", "Germany", "France",
    "India", "Australia", "Japan", "Brazil", "Mexico", "Other"
];

const industries = [
    "Aerospace & Defense", "Automotive", "Consumer Electronics",
    "Financial Services", "Healthcare & Life Sciences", "Industrial Manufacturing",
    "Medical Devices", "Semiconductor", "Software & Technology", "Other"
];

const ConnectInAction = () => {
    const { toast } = useToast();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        workEmail: "",
        company: "",
        industry: "",
        webinarDate: "",
        country: "",
    });

    const handleChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Validate required fields
        if (!formData.firstName || !formData.lastName || !formData.workEmail || !formData.company || !formData.industry || !formData.webinarDate || !formData.country) {
            toast({
                title: "Please fill all required fields",
                description: "All fields are required to register for the webinar.",
                variant: "destructive",
            });
            return;
        }
        toast({
            title: "Registration Successful! 🎉",
            description: "You've been registered for the webinar. Check your email for confirmation details.",
        });
        setFormData({
            firstName: "", lastName: "", workEmail: "", company: "",
            industry: "", webinarDate: "", country: "",
        });
    };

    const scrollToForm = () => {
        const formEl = document.getElementById("registration-form");
        if (formEl) formEl.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-1">

                {/* HERO SECTION + FORM */}
                <section className="relative bg-[#0a1628] overflow-hidden">
                    {/* Background image overlay */}
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-30"

                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/95 via-[#0a1628]/80 to-[#0a1628]/60" />

                    <div className="relative container mx-auto px-4 py-16 lg:py-24">
                        <div className="grid lg:grid-cols-2 gap-12 items-start">

                            {/* Left: Hero Content */}
                            <AnimatedSection className="text-white pt-4 lg:pt-8">
                                <span className="inline-block text-orange-400 font-bold text-sm uppercase tracking-widest mb-4">
                                    DEMINAR
                                </span>
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-white">
                                    A Quick Tour of CarpacSoft Connect for Modern Requirements Management
                                </h1>
                                <p className="text-blue-200 text-lg mb-2">
                                    8:00 a.m. – 8:30 a.m. PT | 5:00 p.m. – 5:30 p.m. CET
                                </p>
                                <p className="text-blue-300 text-base">
                                    Select your preferred date and time from the menu
                                </p>
                            </AnimatedSection>

                            {/* Right: Registration Form */}
                            <AnimatedSection delay={200} id="registration-form">
                                <form onSubmit={handleSubmit} className="space-y-1">
                                    {/* First Name */}
                                    <div>
                                        <label className="block text-white text-sm font-semibold mb-1">First Name</label>
                                        <input
                                            type="text"
                                            value={formData.firstName}
                                            onChange={e => handleChange("firstName", e.target.value)}
                                            className="w-full bg-[#2a3a5c] border border-[#3a4a6c] text-blue-300 placeholder-blue-300/50 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all"
                                            required
                                        />
                                    </div>
                                    {/* Last Name */}
                                    <div>
                                        <label className="block text-white text-sm font-semibold mb-1">Last Name</label>
                                        <input
                                            type="text"
                                            value={formData.lastName}
                                            onChange={e => handleChange("lastName", e.target.value)}
                                            className="w-full bg-[#2a3a5c] border border-[#3a4a6c] text-blue-300 placeholder-blue-300/50 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all"
                                            required
                                        />
                                    </div>
                                    {/* Work Email */}
                                    <div>
                                        <label className="block text-white text-sm font-semibold mb-1">Work Email</label>
                                        <input
                                            type="email"
                                            value={formData.workEmail}
                                            onChange={e => handleChange("workEmail", e.target.value)}
                                            className="w-full bg-[#2a3a5c] border border-[#3a4a6c] text-blue-300 placeholder-blue-300/50 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all"
                                            required
                                        />
                                    </div>
                                    {/* Company */}
                                    <div>
                                        <label className="block text-white text-sm font-semibold mb-1">Company</label>
                                        <input
                                            type="text"
                                            value={formData.company}
                                            onChange={e => handleChange("company", e.target.value)}
                                            className="w-full bg-[#2a3a5c] border border-[#3a4a6c] text-white placeholder-blue-300/50 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all"
                                            required
                                        />
                                    </div>
                                    {/* Industry */}
                                    <div>
                                        <label className="block text-white text-sm font-semibold mb-1">Industry</label>
                                        <select
                                            value={formData.industry}
                                            onChange={e => handleChange("industry", e.target.value)}
                                            className="w-full bg-[#2a3a5c] border border-[#3a4a6c] text-white rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all appearance-none cursor-pointer"
                                            required
                                        >
                                            <option value="" className="text-slate-400">Select...</option>
                                            {industries.map(ind => (
                                                <option key={ind} value={ind} className="bg-[#1a2a4c] text-white">{ind}</option>
                                            ))}
                                        </select>
                                    </div>
                                    {/* Webinar Date */}
                                    <div>
                                        <label className="block text-white text-sm font-semibold mb-1">Webinar Date</label>
                                        <select
                                            value={formData.webinarDate}
                                            onChange={e => handleChange("webinarDate", e.target.value)}
                                            className="w-full bg-[#2a3a5c] border border-[#3a4a6c] text-white rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all appearance-none cursor-pointer"
                                            required
                                        >
                                            <option value="" className="text-slate-400">Select...</option>
                                            {webinarDates.map(date => (
                                                <option key={date} value={date} className="bg-[#1a2a4c] text-white">{date}</option>
                                            ))}
                                        </select>
                                    </div>
                                    {/* Country */}
                                    <div>
                                        <label className="block text-white text-sm font-semibold mb-1">Country</label>
                                        <select
                                            value={formData.country}
                                            onChange={e => handleChange("country", e.target.value)}
                                            className="w-full bg-[#2a3a5c] border border-[#3a4a6c] text-white rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all appearance-none cursor-pointer"
                                            required
                                        >
                                            <option value="" className="text-slate-400">Select...</option>
                                            {countries.map(c => (
                                                <option key={c} value={c} className="bg-[#1a2a4c] text-white">{c}</option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Privacy + Submit */}
                                    <div className="pt-3">
                                        <p className="text-sm text-blue-300 mb-4">
                                            All fields are required. Your{" "}
                                            <Link to="/privacy" className="text-orange-400 hover:text-orange-300 underline transition-colors">
                                                privacy
                                            </Link>{" "}
                                            is important to us.
                                        </p>
                                        <Button
                                            type="submit"
                                            className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-bold py-4 px-8 rounded text-sm uppercase tracking-wider shadow-lg transition-all duration-300 hover:shadow-teal-500/30 hover:shadow-xl"
                                        >
                                            SUBMIT
                                        </Button>
                                    </div>
                                </form>
                            </AnimatedSection>
                        </div>
                    </div>
                </section>

                {/* CONTENT SECTION */}
                <section className="bg-[#0a1628] py-16 px-4">
                    <div className="container mx-auto">
                        <div className="max-w-3xl">
                            <AnimatedSection>
                                <p className="text-blue-100 text-base leading-relaxed mb-6">
                                    Discover how CarpacSoft Connect® brings consistency, collaboration, and clarity to complex
                                    product development by delivering a continuous flow of accurate, up-to-date
                                    requirements across your organization.
                                </p>
                                <p className="text-blue-100 text-base leading-relaxed mb-8">
                                    In this 30-minute product demo, you'll get a guided overview of the CarpacSoft Connect
                                    platform and see how it helps teams align people, processes, and technology around a
                                    single source of truth for digital requirements management.
                                </p>

                                <h3 className="text-white font-bold text-lg mb-5">You'll learn how to:</h3>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-start gap-3">
                                        <span className="text-orange-400 mt-1 shrink-0 text-lg">•</span>
                                        <span className="text-blue-100 text-base">Drive alignment across teams with centralized, accessible requirements</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-orange-400 mt-1 shrink-0 text-lg">•</span>
                                        <span className="text-blue-100 text-base">Collaborate effectively with internal and external stakeholders using Review Center</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-orange-400 mt-1 shrink-0 text-lg">•</span>
                                        <span className="text-blue-100 text-base">Gain full visibility into the product development lifecycle through powerful traceability views</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-orange-400 mt-1 shrink-0 text-lg">•</span>
                                        <span className="text-blue-100 text-base">Extend platform capabilities with key integrations—including JIRA</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-orange-400 mt-1 shrink-0 text-lg">•</span>
                                        <span className="text-blue-100 text-base">Support testing, manage change, and perform impact analysis with confidence</span>
                                    </li>
                                </ul>

                                <p className="text-white font-semibold text-base">
                                    Multiple demo dates are available—choose the one that best fits your schedule.
                                </p>
                            </AnimatedSection>
                        </div>
                    </div>
                </section>

                {/* TESTIMONIAL QUOTE + REGISTER NOW SECTION */}
                <section className="bg-[#0d1b30] py-16 px-4">
                    <div className="container mx-auto text-center">
                        <AnimatedSection>
                            <div className="max-w-4xl mx-auto mb-10">
                                <p className="text-blue-200 text-lg md:text-xl italic leading-relaxed mb-4">
                                    "CarpacSoft Connect enables faster and more accurate requirements engineering and management and traceability."
                                </p>
                                <p className="text-blue-300 italic text-base">
                                    - Mark Morgan, Lead Systems/MBSE Engineer, L3Harris
                                </p>
                            </div>
                            <Button
                                onClick={scrollToForm}
                                className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-bold py-4 px-12 rounded-full text-sm uppercase tracking-wider shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-teal-500/30 hover:shadow-xl"
                            >
                                Register Now!
                            </Button>
                        </AnimatedSection>
                    </div>
                </section>

                {/* FEATURED EXPERTS SECTION */}
                <section className="bg-[#dce6f0] py-16 px-4">
                    <div className="container mx-auto">
                        <AnimatedSection>
                            <h2 className="text-center text-[#0a1628] font-bold text-sm uppercase tracking-widest mb-12">
                                FEATURED EXPERTS:
                            </h2>
                            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
                                {/* Expert Photo */}
                                <div className="shrink-0">
                                    <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-[#0a1628]/20 shadow-lg">
                                        <img
                                            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face"
                                            alt="Steven Pink - Senior Solutions Architect"
                                            className="w-full h-full object-cover grayscale"
                                        />
                                    </div>
                                </div>
                                {/* Expert Bio */}
                                <div className="text-center md:text-left">
                                    <h3 className="text-[#0a1628] text-xl font-bold mb-1">Steven Pink</h3>
                                    <p className="text-[#0a1628]/70 text-sm mb-4">Senior Solutions Architect - CarpacSoft®</p>
                                    <p className="text-[#0a1628]/80 text-sm leading-relaxed">
                                        Steven brings extensive experience in requirements gathering, process optimization, prototyping,
                                        and project management. As a Senior Solutions Architect at CarpacSoft®, he plays a key role
                                        in helping organizations adopt and scale modern requirements management practices. With a
                                        strong focus on delivering measurable ROI through technology-driven solutions, Steven is known
                                        for his professionalism, adaptability, and commitment to driving success in Agile environments.
                                    </p>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* Accessibility Icon */}
                <div className="fixed bottom-4 left-4 z-50">
                    <div className="w-10 h-10 bg-[#2563eb] rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:bg-blue-600 transition-colors">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z" />
                        </svg>
                    </div>
                </div>

            </main>
            <Footer />
            <ChatWidget />
        </div>
    );
};

export default ConnectInAction;
