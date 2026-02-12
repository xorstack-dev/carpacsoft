import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { cn } from "@/lib/utils";

type TabId = "discover" | "explore" | "align" | "optimize";

interface Tab {
    id: TabId;
    label: string;
    icon: string;
}

const tabs: Tab[] = [
    { id: "discover", label: "DISCOVER", icon: "https://cdn-icons-png.flaticon.com/512/3067/3067451.png" },
    { id: "explore", label: "EXPLORE", icon: "https://cdn-icons-png.flaticon.com/512/854/854929.png" },
    { id: "align", label: "ALIGN & LAUNCH", icon: "https://cdn-icons-png.flaticon.com/512/1041/1041916.png" },
    { id: "optimize", label: "OPTIMIZE", icon: "https://cdn-icons-png.flaticon.com/512/3039/3039430.png" },
];

const discoverResources = [
    {
        title: "Essential Guide to Requirements Management",
        description: "Check out this Essential Guide to Requirements Management to learn more on all things RM! In it, we cover writing, gathering, managing, tracing, tools and software, V&V, meeting regulatory compliance, and much more!",
        buttonText: "LEARN MORE",
        icon: "https://cdn-icons-png.flaticon.com/512/3209/3209265.png"
    },
    {
        title: "Selecting the Right Requirements Management Tool",
        description: "Consider potential requirements management solutions and get tips on how to get the buy-in you need to undertake the kind of change necessary to succeed with complex product development.",
        buttonText: "READ MORE",
        image: "https://www.jamasoftware.com/wp-content/uploads/2021/01/Buyers-Guide-Selecting-a-Requirements-Management-and-Traceability-Solution.png"
    },
    {
        title: "Best Practices Guide to Requirements Management",
        description: "Read this eBook to learn more about:\nThe business value of better requirements\nThe four fundamentals of requirements management\nFinding the right level of detail in requirements",
        buttonText: "READ MORE",
        image: "https://www.jamasoftware.com/wp-content/uploads/2021/01/Best-Practices-Guide-to-Requirements-and-Requirements-Management.png"
    },
    {
        title: "Reducing Project Risk",
        description: "Reduce project risk in the development process by forming a digital thread through siloed development, test, and risk activities, bridging engineering silos with Live Traceability™.",
        buttonText: "READ MORE",
        image: "https://www.jamasoftware.com/wp-content/uploads/2021/01/Live-Traceability-Featured-Image.png"
    },
    {
        title: "Centralizing Your Requirements in One Platform",
        description: "Check out this post to better understand the problems and inherent risks of having multiple versions of the \"truth\". A requirements, risk, and test management platform that centralizes everything into one system of record can provide the single source of truth missing from many product development processes.",
        buttonText: "READ MORE",
        icon: "https://cdn-icons-png.flaticon.com/512/2620/2620625.png"
    },
    {
        title: "Guide for Writing Requirements",
        description: "Learn how to write better requirements that lead to clearer, more effective communication between stakeholders, greater transparency, less rework, and accelerated development...without sacrificing quality.",
        buttonText: "READ MORE",
        image: "https://www.jamasoftware.com/wp-content/uploads/2021/01/Writing-Requirements-Featured-Image.png"
    }
];

const DiscoveryCenter = () => {
    const [activeTab, setActiveTab] = useState<TabId>("discover");

    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-1">

                {/* Hero Section */}
                <section className="relative bg-[#0ea5e9] py-16 overflow-hidden">
                    {/* Geometric Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern id="pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                                    <path d="M0 40L40 0H20L0 20M40 40V20L20 40" fill="white" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#pattern)" />
                        </svg>
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto">
                            <AnimatedSection className="flex-shrink-0">
                                <div className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-full flex items-center justify-center border-4 border-blue-200">
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/2866/2866952.png"
                                        alt="Discovery Icon"
                                        className="w-20 md:w-28 h-20 md:h-28"
                                    />
                                </div>
                            </AnimatedSection>
                            <AnimatedSection delay={100}>
                                <h1 className="text-2xl md:text-4xl font-bold text-white mb-4">
                                    Welcome to the CarpacSoft Discovery Center
                                </h1>
                                <p className="text-white text-sm md:text-base leading-relaxed">
                                    Interested in learning more about how CarpacSoft® can help your organization achieve its goals? The CarpacSoft Discovery Center lets you control your knowledge journey and get your questions answered, all at your own pace. We've put our most relevant and valuable content—from discovery to optimization—right at your fingertips!
                                </p>
                            </AnimatedSection>
                        </div>
                    </div>
                </section>

                {/* Tabs Section */}
                <section className="bg-white border-b border-slate-100 shadow-sm relative z-20">
                    <div className="container mx-auto px-4">
                        <div className="flex justify-center flex-wrap gap-8 md:gap-16">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={cn(
                                        "flex flex-col items-center py-8 px-4 border-b-4 transition-all duration-300",
                                        activeTab === tab.id
                                            ? "border-[#f59e0b] scale-105"
                                            : "border-transparent opacity-40 hover:opacity-100"
                                    )}
                                >
                                    <div className="w-16 h-16 md:w-24 md:h-24 mb-4 flex items-center justify-center grayscale">
                                        <img src={tab.icon} alt={tab.label} className="max-w-full max-h-full" />
                                    </div>
                                    <span className={cn(
                                        "text-xs md:text-sm font-black tracking-widest uppercase",
                                        activeTab === tab.id ? "text-[#f59e0b]" : "text-slate-600"
                                    )}>
                                        {tab.label}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Active Tab Content - DISCOVER (Default) */}
                <section className="bg-[#f59e0b] py-16 text-white min-h-[600px]">
                    <div className="container mx-auto px-4">

                        {/* Tab Header */}
                        <AnimatedSection className="max-w-4xl mb-16">
                            <h2 className="text-3xl md:text-4xl font-black uppercase mb-6 tracking-wide">
                                {activeTab === "discover" ? "DISCOVER" : activeTab.toUpperCase()}
                            </h2>
                            <p className="text-lg md:text-xl font-bold mb-4">
                                {activeTab === "discover"
                                    ? "Just getting started on learning more about the benefits of modern requirements management?"
                                    : `Learn more about ${activeTab}ing with CarpacSoft.`}
                            </p>
                            <p className="text-sm md:text-base opacity-90 leading-relaxed font-medium">
                                {activeTab === "discover" && "Begin your discovery journey here! We've developed a robust buyer's guide to help you with the basics of what to look for in a requirements management (RM) tool. In addition, here you can get RM best practices, learn how to reduce risk in product development by optimizing your processes, and understand how centralizing your RM can help."}
                            </p>
                        </AnimatedSection>

                        {/* Resources Grid */}
                        {activeTab === "discover" && (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20 max-w-6xl mx-auto">
                                {discoverResources.map((resource, index) => (
                                    <AnimatedSection key={index} delay={index * 100} className="text-center group">
                                        <div className="relative mb-8 flex justify-center">
                                            <div className="w-48 h-48 md:w-56 md:h-56 bg-white/20 rounded-full flex items-center justify-center p-4 backdrop-blur-sm group-hover:scale-105 transition-transform duration-500 overflow-hidden">
                                                {resource.image ? (
                                                    <img
                                                        src={resource.image}
                                                        alt={resource.title}
                                                        className="w-full h-full object-contain -rotate-6 group-hover:rotate-0 transition-transform duration-500 shadow-xl"
                                                    />
                                                ) : (
                                                    <img
                                                        src={resource.icon}
                                                        alt={resource.title}
                                                        className="w-32 h-32 object-contain group-hover:rotate-12 transition-transform duration-500"
                                                    />
                                                )}
                                            </div>
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-bold mb-4 leading-tight min-h-[64px]">
                                            {resource.title}
                                        </h3>
                                        <p className="text-sm opacity-90 mb-8 leading-relaxed line-clamp-4 min-h-[80px]">
                                            {resource.description}
                                        </p>
                                        <Button className="bg-gradient-to-r from-[#0066cc] to-[#0ea5e9] hover:from-[#004499] hover:to-[#0284c7] text-white font-black py-4 px-10 rounded-full uppercase tracking-widest text-xs transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                                            {resource.buttonText}
                                        </Button>
                                    </AnimatedSection>
                                ))}
                            </div>
                        )}

                        {/* Placeholder for other tabs */}
                        {activeTab !== "discover" && (
                            <AnimatedSection className="text-center py-20">
                                <div className="w-24 h-24 mx-auto mb-6 opacity-50 grayscale">
                                    <img src={tabs.find(t => t.id === activeTab)?.icon} alt="Coming Soon" />
                                </div>
                                <h3 className="text-2xl font-bold">Content for {activeTab.toUpperCase()} is coming soon!</h3>
                            </AnimatedSection>
                        )}

                    </div>
                </section>

            </main>
            <Footer />
            <ChatWidget />
        </div>
    );
};

export default DiscoveryCenter;



