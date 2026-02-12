import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { ChevronDown, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

const chapterLinks = [
  {
    id: 1,
    title: "Requirements Management",
    subChapters: [
      { title: "Overview", isOverview: true },
      { title: "What is Requirements Management?", number: 1 },
      { title: "Why do you need Requirements Management?", number: 2 },
      { title: "Four Stages of Requirements Management Processes", number: 3 },
      { title: "Adopting an Agile Approach to Requirements Management", number: 4 },
      { title: "Status Request Changes", number: 5 },
      { title: "Conquering the 5 Biggest Challenges of Requirements Management", number: 6 },
      { title: "Three Reasons You Need a Requirements Management Solution", number: 7 },
      { title: "Guide to Poor Requirements: Identify Causes, Repercussions, and How to Fix Them", number: 8 },
    ]
  },
  {
    id: 2,
    title: "Writing Requirements",
    subChapters: [
      { title: "Overview", isOverview: true },
      { title: "Functional vs Non-Functional Requirements", number: 1 },
      { title: "How to Write High Quality Requirements", number: 2 },
      { title: "Requirements Gathering Techniques", number: 3 },
      { title: "Writing Requirements for Agile Teams", number: 4 },
      { title: "The Ear's Pattern for Requirements", number: 5 },
    ]
  },
  { id: 3, title: <>Requirements Gathering and<br />  Management Processes</> },
  { id: 4, title: "Requirements Traceability" },
  { id: 5, title: <>Requirements Management Tools and<br /> Software</> },
  { id: 6, title: "Requirements Validation and Verification" },
  { id: 7, title: <>Meeting Regulatory Compliance and<br /> Industry Standards</> },
  { id: 8, title: "Systems Engineering" },
  { id: 9, title: "Automotive Development" },
  { id: 10, title: <>Medical Device & Life Sciences<br /> Development</> },
  { id: 11, title: "Aerospace & Defense Development" },
  { id: 12, title: <>Architecture, Engineering, and<br /> Construction (AEC industry) Development</> },
  { id: 13, title: <>Industrial Manufacturing & Machinery,<br /> Automation & Robotics,<br /> Consumer Electronics,<br /> and Energy</> },
  { id: 14, title: "Semiconductor Development" },
  { id: 15, title: "AI in Product Development" },
];

const cards = [
  {
    id: 1,
    title: "Requirements Management",
    desc: "An introduction to requirements management and how it helps product teams get releases out the door on time.",
    color: "bg-[#00a36c]", // Green
  },
  {
    id: 2,
    title: "Writing Requirements",
    desc: "Learn more about functional requirements, non-functional requirements, and the best practices for writing high quality product and software requirements.",
    color: "bg-[#0396e6]", // Blue
  },
  {
    id: 3,
    title: "Requirements Gathering & Management Processes",
    desc: "Learn more about best practices for requirements gathering, defining and implementing requirements baselines, requirements gathering techniques for Agile teams.",
    color: "bg-[#f59e0b]", // Orange
  },
  {
    id: 4,
    title: "Requirements Traceability",
    desc: "Learn more about what requirements traceability is and why it matters, best practices for requirements traceability, and the benefits having end-to-end traceability.",
    color: "bg-[#a855f7]", // Purple
  },
  {
    id: 5,
    title: "Requirements Management Tools and Software",
    desc: "Learn more about the benefits of implementing a formal requirements management tool or software, the risks of outdated or legacy solutions, and tips on how to select the right solution for your team.",
    color: "bg-[#64748b]", // Gray
  },
  {
    id: 6,
    title: "Requirements Validation and Verification",
    desc: "Learn more about verification and validation – including the similarities and differences – best practices, and leveraging requirements management software to streamline V&V activities.",
    color: "bg-[#1e293b]", // Dark Blue
  },
  {
    id: 7,
    title: "Meeting Regulatory Compliance and Industry Standards",
    desc: "Learn more about best practices for compliance management, understanding ISO standards, creating a design history file (DHF), and Failure Mode and Effects Analysis (FMEA).",
    color: "bg-[#be185d]", // Crimson
  },
  {
    id: 8,
    title: "Systems Engineering",
    desc: "Learn more about what systems engineering is, fundamentals and best practices, the Systems Engineering Body of Knowledge (SEBoK), and the V-Model.",
    color: "bg-[#0d9488]", // Teal
  },
  {
    id: 9,
    title: "Automotive Development",
    desc: "Learn more about best practice and industry thought leadership and get up-to-date information on key automotive standards.",
    color: "bg-[#84cc16]", // Lime
  },
  {
    id: 10,
    title: "Medical Device & Life Sciences Development",
    desc: "Learn more about best practice and industry thought leadership and get up-to-date information on key medical device & life sciences.",
    color: "bg-[#ea580c]", // Deep Orange
  },
  {
    id: 11,
    title: "Aerospace & Defense Development",
    desc: "Learn more about best practice and industry thought leadership and get up-to-date information on key aerospace & defense standards.",
    color: "bg-[#0066cc]", // Strong Blue
  },
  {
    id: 12,
    title: "AEC",
    desc: "Learn more about best practice and industry thought leadership and get up-to-date information on AEC.",
    color: "bg-[#6b21a8]", // Purple
  },
  {
    id: 13,
    title: "Industrial Manufacturing Development",
    desc: "Learn more about best practice and industry thought leadership and get up-to-date information on ICE",
    color: "bg-[#059669]", // Medium Green
  },
  {
    id: 14,
    title: "Semiconductor Development",
    desc: "Learn more about best practice and industry thought leadership and get up-to-date information on requirements management for semiconductor development",
    color: "bg-[#eab308]", // Yellow
  },
  {
    id: 15,
    title: "AI in Product Development",
    desc: "Learn about best practices for leveraging artificial intelligence in modern product and systems development.",
    color: "bg-[#be123c]", // Red
  },
  {
    id: "?",
    title: "Glossary of Product Development Terms and Definitions",
    desc: "A handy guide to common product development terms, acronyms, and definitions",
    color: "bg-[#064e3b]", // Dark Green
  },
];

export default function EssentialGuide() {
  const [activeChapter, setActiveChapter] = useState(1);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative h-[250px] md:h-[300px] bg-gradient-to-r from-[#4ade80] to-[#0d9488] overflow-hidden flex items-center">
          {/* Subtle Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <div className="container mx-auto px-4 flex items-center justify-center gap-8 relative z-10">
            <AnimatedSection className="flex-shrink-0">
              <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-white/30">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-[#22c55e] rounded-xl flex items-center justify-center -rotate-3 group relative">
                  <BookOpen className="text-white w-10 md:w-12 h-10 md:h-12" />
                  <div className="absolute top-1 right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-[#22c55e] rounded-full"></div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <h2 className="text-white italic text-xl md:text-3xl font-light mb-1">
                The Essential Guide to
              </h2>
              <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
                Requirements Management<br />and Traceability
              </h1>
            </AnimatedSection>
          </div>
        </section>

        {/* CONTENT AREA */}
        <section className="bg-white py-12">
          <div className="container mx-auto px-4 lg:px-12">
            <div className="flex flex-col lg:flex-row gap-16">

              {/* SIDEBAR */}
              <aside className="w-full lg:w-[350px]">
                <AnimatedSection>
                  <h3 className="text-[#22c55e] font-black uppercase tracking-wider mb-6 text-sm">
                    CHAPTERS
                  </h3>
                  <div className="space-y-1">
                    {chapterLinks.map((chapter) => (
                      <div key={chapter.id} className="border-b border-transparent">
                        <button
                          onClick={() => setActiveChapter(activeChapter === chapter.id ? -1 : chapter.id)}
                          className={cn(
                            "w-full flex items-start gap-3 p-3 text-left transition-all group",
                            activeChapter === chapter.id
                              ? "bg-slate-50 text-[#001e4d] font-bold"
                              : "text-[#001e4d] hover:text-[#0066cc] font-medium"
                          )}
                        >
                          <span className="flex-shrink-0 font-bold">{chapter.id}. {chapter.title}</span>
                          <ChevronDown className={cn(
                            "w-4 h-4 mt-1 ml-auto text-[#22c55e] transition-transform",
                            activeChapter === chapter.id ? "" : "-rotate-90"
                          )} />
                        </button>

                        {/* Sub-chapters Accordion */}
                        {activeChapter === chapter.id && chapter.subChapters && (
                          <div className="pl-6 pr-2 py-2">
                            <div className="border-l border-slate-300 ml-3 space-y-4 pt-2">
                              {chapter.subChapters.map((sub, sIdx) => (
                                <div key={sIdx} className="pl-6 relative group cursor-pointer transition-colors hover:text-[#0066cc]">
                                  {sub.isOverview ? (
                                    <>
                                      {/* Active Indicator Line for Overview */}
                                      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-slate-500 -ml-[2px]"></div>
                                      <span className="text-slate-700 font-medium text-sm block">Overview</span>
                                    </>
                                  ) : (
                                    <div className="flex gap-4 text-slate-500 group-hover:text-[#0066cc]">
                                      <span className="font-bold text-sm text-slate-400 w-4 text-center group-hover:text-[#0066cc]">{sub.number}</span>
                                      <span className="text-sm font-medium leading-tight flex-1">{sub.title}</span>
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                    <Link to="/glossary" className="block p-3 text-left font-bold text-[#22c55e] hover:text-[#16a34a] transition-colors">
                      Glossary
                    </Link>
                  </div>
                </AnimatedSection>
              </aside>

              {/* MAIN CONTENT */}
              <div className="flex-1">
                <AnimatedSection>
                  <h2 className="text-[#0066cc] text-2xl md:text-3xl font-bold mb-6">
                    What is Requirements Management?
                  </h2>
                  <p className="text-slate-600 text-[15px] leading-relaxed mb-12">
                    Requirements management is the process of gathering, analyzing, and validating the needs and wants for the given product or system being developed. Successful requirements management ensures that completed deliverables meet the expectations of key stakeholders. Requirements can be managed using documents, however, complex systems or products in highly regulated industries mitigate risk by using trusted requirements management tools.
                  </p>
                </AnimatedSection>

                {/* CARD GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {cards.map((card, idx) => (
                    <AnimatedSection key={card.id} delay={idx * 50}>
                      <Link to={`/resources/guide`} className={cn(
                        "block h-full min-h-[160px] p-6 rounded-lg transition-transform hover:-translate-y-1 cursor-pointer group shadow-sm hover:shadow-md",
                        card.color
                      )}>
                        <div className="flex gap-6">
                          <div className="flex-shrink-0 w-14 h-14 bg-white rounded-full flex items-center justify-center text-[#1e293b] text-2xl font-black">
                            {card.id}
                          </div>
                          <div className="flex-1 text-white">
                            <h4 className="font-bold text-lg mb-2 group-hover:underline">
                              {card.title}
                            </h4>
                            <p className="text-white/90 text-sm leading-snug">
                              {card.desc}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </AnimatedSection>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="bg-gradient-to-r from-[#4ade80] to-[#0ea5e9] py-16 text-white text-center">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <h2 className="text-3xl md:text-5xl font-black mb-6">
                Ready to Find Out More?
              </h2>
              <p className="text-lg md:text-xl font-medium mb-10 max-w-3xl mx-auto opacity-95">
                Our team of experts is here to answer any questions and learn how we can help enable your continued success. Get started with a free 30-day trial, or book a demo!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/trial">
                  <Button className="bg-[#000033] hover:bg-[#000055] text-white font-black py-4 px-12 rounded-full uppercase tracking-widest text-sm transition-all shadow-xl hover:-translate-y-1">
                    FREE 30-DAY TRIAL
                  </Button>
                </Link>
                <Link to="/company/contact">
                  <Button className="bg-white hover:bg-slate-50 text-[#0d9488] font-black py-4 px-12 rounded-full uppercase tracking-widest text-sm transition-all shadow-xl hover:-translate-y-1">
                    BOOK A DEMO
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}



