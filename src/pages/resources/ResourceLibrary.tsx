import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { Search, ChevronDown, Play } from "lucide-react";

// Resource Types
// Resource Types
type ResourceType = "WEBINAR" | "DATASHEET" | "WHITEPAPER" | "CUSTOMER STORY" | "FEATURES IN FIVE" | "EXPERT INTERVIEW" | "EBOOK" | "GUIDE" | "VIDEO";

interface Resource {
    type: ResourceType;
    title: string;
    image: string;
    hasVideo?: boolean;
    industries?: string[];
}

// Industry Filter Options
const industries = [
    "All Industries",
    "AECO",
    "Aerospace & Defense",
    "Automotive",
    "Energy",
    "Financial Services & Insurance",
    "Government",
    "Industrial Manufacturing",
    "Medical Device & Life Sciences",
    "Oil & Gas",
    "Semiconductor",
    "Software Development"
];

// Mock Resources Data
const resources: Resource[] = [
    // AECO Resources (from user request)
    {
        type: "DATASHEET",
        title: "Accelerate Project Data Reporting and Storage Compliance with CarpacSoft Datatap™",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400&h=250",
        industries: ["AECO", "All Industries", "Industrial Manufacturing"]
    },
    {
        type: "WHITEPAPER",
        title: "Jama Connect®: The #1 Choice for Requirements Management in G2’s Winter 2026 Report",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400&h=250",
        industries: ["AECO", "All Industries", "Software Development"]
    },
    {
        type: "DATASHEET",
        title: "Obeo Integrates Capella Models with Jama Connect® Requirements and Tests for Live Traceability™",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400&h=250",
        industries: ["AECO", "Software Development"]
    },
    {
        type: "WHITEPAPER",
        title: "Engineering Governance is a Critical Business Strategy for Product, Project, and System Development Excellence",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=400&h=250",
        industries: ["AECO", "Engineering Leadership"]
    },
    {
        type: "WHITEPAPER",
        title: "How Digital Engineering Brings Efficiency and Collaboration to Product, Project, and System Development",
        image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=400&h=250",
        industries: ["AECO", "Digital Engineering"]
    },
    {
        type: "WEBINAR",
        title: "Best Practices for Leveraging Systems Thinking in MBSE",
        image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=400&h=250",
        hasVideo: true,
        industries: ["AECO", "Aerospace & Defense"]
    },
    {
        type: "WHITEPAPER",
        title: "Jama Connect® Continues to Lead the Way in Requirements Management",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400&h=250",
        industries: ["AECO", "All Industries"]
    },
    {
        type: "FEATURES IN FIVE",
        title: "Jama Connect® Features in Five: Empowering Project Owners in the AEC Industry",
        image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=400&h=250",
        industries: ["AECO"]
    },
    {
        type: "WHITEPAPER",
        title: "Five Key Challenges AEC Project Owners Face and How to Solve Them with Jama Connect®",
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=400&h=250",
        industries: ["AECO"]
    },
    {
        type: "WHITEPAPER",
        title: "Jama Connect® Continues to Rank as the Top Leader for Requirements Management Software",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400&h=250",
        industries: ["AECO", "All Industries"]
    },
    {
        type: "WEBINAR",
        title: "Improve Traceability and Enhance Coverage with Live Trace Explorer™",
        image: "https://images.unsplash.com/photo-1553877612-8232719a2672?auto=format&fit=crop&q=80&w=400&h=250",
        hasVideo: true,
        industries: ["AECO", "All Industries"]
    },
    {
        type: "VIDEO",
        title: "Expert Perspectives: The Shift Towards Systems Engineering in the Architecture, Engineering, and Construction (AEC) Industry",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=400&h=250",
        hasVideo: true,
        industries: ["AECO"]
    },

    // Other Industry Resources
    {
        type: "DATASHEET",
        title: "Simplify Complexity, Risk Assessment, and Safety and Cybersecurity Compliance with CarpacSoft® for Industrial Machinery Development",
        image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=400&h=250",
        industries: ["Industrial Manufacturing"]
    },
    {
        type: "WEBINAR",
        title: "Enabling Multi-Phase Reviews Across the Aerospace and Defense Systems Lifecycle",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400&h=250",
        hasVideo: true,
        industries: ["Aerospace & Defense"]
    },
    {
        type: "WEBINAR",
        title: "From Requirements to Regulatory: How AI Is Transforming Submission Readiness",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=400&h=250",
        hasVideo: true,
        industries: ["Medical Device & Life Sciences"]
    },
    {
        type: "EXPERT INTERVIEW",
        title: "Bringing AI to the Road Safely: Insights from Gokul Krithivasan",
        image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=400&h=250",
        hasVideo: true,
        industries: ["Automotive"]
    },
    {
        type: "CUSTOMER STORY",
        title: "Transmutex Wastes No Time Choosing CarpacSoft® for Developing Nuclear Waste Reprocessing Systems",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400&h=250",
        industries: ["Energy"]
    },
    {
        type: "WEBINAR",
        title: "The Collapse of Requirements Quality Under System Complexity – How AI Can Help",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=400&h=250",
        hasVideo: true,
        industries: ["Software Development"]
    },
    {
        type: "WEBINAR",
        title: "Engineering for the Cyber Resilience Act: Navigating Compliance Across the Product Lifecycle",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=400&h=250",
        hasVideo: true,
        industries: ["Government", "Software Development"]
    },
    {
        type: "FEATURES IN FIVE",
        title: "CarpacSoft® Features in Five: Semiconductor Solution",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400&h=250",
        industries: ["Semiconductor"]
    },
    {
        type: "WHITEPAPER",
        title: "Accelerating Innovation: Integrating CarpacSoft® and Jira® for Enhanced Requirements Management in the Semiconductor Industry",
        image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=400&h=250",
        industries: ["Semiconductor"]
    },
    {
        type: "CUSTOMER STORY",
        title: "BrightInsight Drives Efficiency Using CarpacSoft®",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400&h=250",
        industries: ["Medical Device & Life Sciences"]
    },
    {
        type: "CUSTOMER STORY",
        title: "SPAN Electrifies Its Product Development and Safety with CarpacSoft®",
        image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=400&h=250",
        industries: ["Energy"]
    }
];

const ITEMS_PER_PAGE = 10;

const ResourceLibrary = () => {
    const [selectedIndustry, setSelectedIndustry] = useState("All Industries");
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedTopic, setSelectedTopic] = useState("All Topics");
    const [selectedType, setSelectedType] = useState("All Types");
    const [currentPage, setCurrentPage] = useState(1);

    const getTypeColor = (type: ResourceType) => {
        switch (type) {
            case "WEBINAR":
                return "text-[#0066cc]";
            case "DATASHEET":
                return "text-[#0066cc]";
            case "WHITEPAPER":
                return "text-[#0066cc]";
            case "CUSTOMER STORY":
                return "text-[#ea580c]";
            case "FEATURES IN FIVE":
                return "text-[#0066cc]";
            case "EXPERT INTERVIEW":
                return "text-[#0066cc]";
            case "VIDEO":
                return "text-[#0066cc]";
            default:
                return "text-[#0066cc]";
        }
    };

    // Normalize the dropdown type value to match the resource type format
    const normalizeType = (typeValue: string): string => {
        if (typeValue === "All Types") return "All Types";
        const mapping: Record<string, string> = {
            "Webinar": "WEBINAR",
            "Datasheet": "DATASHEET",
            "Whitepaper": "WHITEPAPER",
            "Customer Story": "CUSTOMER STORY",
            "eBook": "EBOOK",
            "Features In Five": "FEATURES IN FIVE",
            "Video": "VIDEO",
            "Expert Interview": "EXPERT INTERVIEW",
        };
        return mapping[typeValue] || typeValue.toUpperCase();
    };

    const filteredResources = resources.filter(resource => {
        const matchesIndustry = selectedIndustry === "All Industries" || resource.industries?.includes(selectedIndustry);
        const matchesSearch = searchTerm === "" || resource.title.toLowerCase().includes(searchTerm.toLowerCase());
        const normalizedType = normalizeType(selectedType);
        const matchesType = normalizedType === "All Types" || resource.type === normalizedType;

        return matchesIndustry && matchesSearch && matchesType;
    });

    // Pagination logic
    const totalPages = Math.max(1, Math.ceil(filteredResources.length / ITEMS_PER_PAGE));
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginatedResources = filteredResources.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    // Reset to page 1 when filters change
    const handleIndustryChange = (industry: string) => {
        setSelectedIndustry(industry);
        setCurrentPage(1);
    };

    const handleClearAll = () => {
        setSelectedIndustry("All Industries");
        setSearchTerm("");
        setSelectedTopic("All Topics");
        setSelectedType("All Types");
        setCurrentPage(1);
    };

    // Whether to show the featured banner and promo cards (only for "All Industries")
    const showFeaturedContent = selectedIndustry === "All Industries" && searchTerm === "" && selectedType === "All Types";

    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-1 bg-white">

                <div className="container mx-auto px-4 py-12">
                    <div className="flex flex-col lg:flex-row gap-12">

                        {/* LEFT SIDEBAR - Filters */}
                        <div className="lg:w-1/5">
                            <AnimatedSection>
                                <nav className="space-y-3 mb-12">
                                    {industries.map((industry, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleIndustryChange(industry)}
                                            className={`block text-sm transition-colors w-full text-left ${selectedIndustry === industry
                                                ? "text-[#ea580c] font-bold"
                                                : "text-[#001e4d] hover:text-[#0066cc]"
                                                }`}
                                        >
                                            {industry}
                                        </button>
                                    ))}
                                </nav>

                                {/* Social Links */}
                                <div>
                                    <h4 className="text-sm font-bold text-[#001e4d] mb-4">FOLLOW US:</h4>
                                    <div className="flex gap-3">
                                        <a href="#" className="w-8 h-8 bg-[#0ea5e9] rounded-full flex items-center justify-center text-white hover:bg-[#0284c7] transition-colors">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                                        </a>
                                        <a href="#" className="w-8 h-8 bg-[#0ea5e9] rounded-full flex items-center justify-center text-white hover:bg-[#0284c7] transition-colors">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                                        </a>
                                        <a href="#" className="w-8 h-8 bg-[#0ea5e9] rounded-full flex items-center justify-center text-white hover:bg-[#0284c7] transition-colors">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                                        </a>
                                    </div>
                                </div>
                            </AnimatedSection>
                        </div>

                        {/* MAIN CONTENT */}
                        <div className="lg:w-4/5">

                            {/* Search and Filters */}
                            <AnimatedSection className="mb-8">
                                <div className="space-y-4">
                                    {/* Search Bar */}
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="What are you looking for?"
                                            value={searchTerm}
                                            onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
                                            className="w-full px-4 py-3 border-b border-slate-300 text-sm focus:outline-none focus:border-[#0066cc] bg-transparent"
                                        />
                                    </div>

                                    {/* Dropdowns */}
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <div className="flex-1">
                                            <label className="block text-xs text-slate-500 mb-1">Topic</label>
                                            <div className="relative">
                                                <select
                                                    value={selectedTopic}
                                                    onChange={(e) => { setSelectedTopic(e.target.value); setCurrentPage(1); }}
                                                    className="w-full appearance-none bg-white border-b border-slate-300 py-2 pr-8 text-sm text-slate-600 focus:outline-none focus:border-[#0066cc] cursor-pointer"
                                                >
                                                    <option>All Topics</option>
                                                    <option>Requirements Management</option>
                                                    <option>Traceability</option>
                                                    <option>Risk Management</option>
                                                    <option>Test Management</option>
                                                    <option>Compliance</option>
                                                </select>
                                                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                                            </div>
                                        </div>

                                        <div className="flex-1">
                                            <label className="block text-xs text-slate-500 mb-1">Type</label>
                                            <div className="relative">
                                                <select
                                                    value={selectedType}
                                                    onChange={(e) => { setSelectedType(e.target.value); setCurrentPage(1); }}
                                                    className="w-full appearance-none bg-white border-b border-slate-300 py-2 pr-8 text-sm text-slate-600 focus:outline-none focus:border-[#0066cc] cursor-pointer"
                                                >
                                                    <option>All Types</option>
                                                    <option>Webinar</option>
                                                    <option>Datasheet</option>
                                                    <option>Whitepaper</option>
                                                    <option>Customer Story</option>
                                                    <option>Features In Five</option>
                                                    <option>Video</option>
                                                    <option>eBook</option>
                                                </select>
                                                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Clear All Button */}
                                    <Button
                                        onClick={handleClearAll}
                                        className="bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold text-xs px-6 py-2 rounded"
                                    >
                                        Clear All
                                    </Button>
                                </div>
                            </AnimatedSection>

                            {/* Featured Banner - only show when no specific filter is active */}
                            {showFeaturedContent && (
                                <AnimatedSection delay={100} className="mb-8">
                                    <div className="relative h-[350px] rounded-lg overflow-hidden group cursor-pointer">
                                        <img
                                            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1200&h=400"
                                            alt="Best Practices Guide"
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                                        <div className="absolute bottom-8 left-8 right-8">
                                            <h3 className="text-white text-2xl font-bold mb-3">
                                                Best Practices Guide to Requirements & Requirements Management
                                            </h3>
                                            <a href="#" className="text-[#fbbf24] font-bold text-sm hover:text-white transition-colors">
                                                &gt;&gt; GET THE EBOOK
                                            </a>
                                        </div>
                                        {/* Pagination Dots */}
                                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                            <div className="w-2 h-2 rounded-full bg-[#0ea5e9]"></div>
                                            <div className="w-2 h-2 rounded-full bg-white/50"></div>
                                            <div className="w-2 h-2 rounded-full bg-white/50"></div>
                                        </div>
                                    </div>
                                </AnimatedSection>
                            )}

                            {/* Two Promotional Cards - only show when no specific filter is active */}
                            {showFeaturedContent && (
                                <AnimatedSection delay={150} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                                    <div className="relative h-[200px] rounded-lg overflow-hidden group cursor-pointer">
                                        <img
                                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600&h=300"
                                            alt="Data Diagnostic"
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-[#001e4d]/70"></div>
                                        <div className="absolute inset-0 flex flex-col justify-center p-6">
                                            <h4 className="text-white text-xl font-bold mb-2">What shape is your data in?</h4>
                                            <a href="#" className="text-[#fbbf24] font-bold text-sm hover:text-white transition-colors">
                                                &gt;&gt; FREE DIAGNOSTIC
                                            </a>
                                        </div>
                                    </div>

                                    <div className="relative h-[200px] rounded-lg overflow-hidden group cursor-pointer">
                                        <img
                                            src="https://images.unsplash.com/photo-1573497161161-c3e73707e25c?auto=format&fit=crop&q=80&w=600&h=300"
                                            alt="Essential Guide"
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-[#0ea5e9]/80"></div>
                                        <div className="absolute inset-0 flex flex-col justify-center p-6">
                                            <h4 className="text-white text-xl font-bold mb-2 leading-tight">
                                                The Essential<br />Guide to<br />Requirements<br />Management
                                            </h4>
                                            <a href="#" className="text-[#fbbf24] font-bold text-sm hover:text-white transition-colors">
                                                &gt;&gt; GET STARTED
                                            </a>
                                        </div>
                                    </div>
                                </AnimatedSection>
                            )}

                            {/* Resource Cards Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                                {paginatedResources.length > 0 ? (
                                    paginatedResources.map((resource, index) => (
                                        <AnimatedSection key={`${currentPage}-${index}`} delay={index * 50}>
                                            <div className="group cursor-pointer">
                                                {/* Thumbnail */}
                                                <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                                                    <img
                                                        src={resource.image}
                                                        alt={resource.title}
                                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                    />
                                                    {resource.hasVideo && (
                                                        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                                                            <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                                                <Play className="w-6 h-6 text-[#001e4d] ml-1" fill="currentColor" />
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>

                                                {/* Content */}
                                                <span className={`text-xs font-bold uppercase tracking-wider ${getTypeColor(resource.type)}`}>
                                                    {resource.type}
                                                </span>
                                                <h3 className="text-[#001e4d] font-bold text-base mt-2 leading-tight group-hover:text-[#0066cc] transition-colors">
                                                    {resource.title}
                                                </h3>
                                            </div>
                                        </AnimatedSection>
                                    ))
                                ) : (
                                    <div className="col-span-2 text-center py-12 text-slate-500">
                                        No resources found matching your filters.
                                    </div>
                                )}
                            </div>

                            {/* Pagination - dynamic based on filtered results */}
                            {filteredResources.length > 0 && totalPages > 0 && (
                                <div className="flex items-center justify-center gap-1">
                                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                        <button
                                            key={page}
                                            onClick={() => { setCurrentPage(page); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                                            className={`w-8 h-8 flex items-center justify-center text-sm rounded transition-all ${currentPage === page
                                                ? "bg-[#0ea5e9] text-white font-bold"
                                                : "text-slate-600 hover:bg-slate-100 border border-slate-300"
                                                }`}
                                        >
                                            {page}
                                        </button>
                                    ))}
                                    {currentPage < totalPages && (
                                        <button
                                            onClick={() => { setCurrentPage(currentPage + 1); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                                            className="px-3 py-2 text-sm text-slate-600 hover:text-[#0066cc] font-medium transition-colors border border-slate-300 rounded"
                                        >
                                            Next.
                                        </button>
                                    )}
                                </div>
                            )}

                        </div>
                    </div>
                </div>

            </main>
            <Footer />
            <ChatWidget />
        </div>
    );
};

export default ResourceLibrary;



