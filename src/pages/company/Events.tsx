import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { Search } from "lucide-react";

// Event Types
type EventType = "CUSTOMER-ONLY" | "WEBINAR" | "DEMINAR" | "ONLINE TRAINING" | "SPONSORED EVENT" | "HOSTED EVENT";

interface Event {
  type: EventType;
  title: string;
  date: string;
  description: string;
  linkText: string;
}

// Mock Data
const upcomingEvents: Event[] = [
  {
    type: "CUSTOMER-ONLY",
    title: "Join Us for an Exclusive Fireside Chat with CarpacSoft",
    date: "February 10 | 8:00 a.m. PT | 5:00 p.m. CET",
    description: "Dive into an engaging conversation with a leading executive from CarpacSoft. This unique event is your chance to gain firsthand insights into how CarpacSoft is empowering innovation and driving impactful results.",
    linkText: "Register here"
  },
  {
    type: "WEBINAR",
    title: "Requirements Under Construction: Bringing Control and Traceability to AECO Projects",
    date: "February 12 | 8:00 a.m. PT | 5:00 p.m. CET",
    description: "In this webinar, learn why AECO teams struggle with requirements visibility and traceability, and how to manage change, reduce rework, and improve project outcomes.",
    linkText: "Register here"
  },
  {
    type: "DEMINAR",
    title: "A Quick Tour of CarpacSoft for Modern Requirements Management",
    date: "February 17 | 8:00 a.m. PT | 5:00 p.m. CET",
    description: "Join us for this 30-minute product demonstration and move from traditional documents and Excel files to a modern requirements solution.",
    linkText: "Register here"
  },
  {
    type: "WEBINAR",
    title: "Best Practices for Test Management",
    date: "February 18 | 8:00 a.m. PT | 5:00 p.m. CET",
    description: "Discover how modern test management boosts traceability, collaboration, and decision-making. Join our webinar on Feb 18 to transform your lifecycle. Register now.",
    linkText: "Register here"
  },
  {
    type: "ONLINE TRAINING",
    title: "CarpacSoft 101 Training: An Introduction Into the Platform",
    date: "February 26 | 8:00 a.m. PT | 5:00 p.m. CEST",
    description: "Register now for our CarpacSoft 101 Training to get an overview of the platform's functionality, learn best practices, and get training on test management and conducting reviews.",
    linkText: "Register here"
  },
  {
    type: "DEMINAR",
    title: "A Quick Tour of CarpacSoft for Modern Requirements Management",
    date: "March 10 | 8:00 a.m. PT | 5:00 p.m. CET",
    description: "Join us for this 30-minute product demonstration and move from traditional documents and Excel files to a modern requirements solution.",
    linkText: "Register here"
  },
  {
    type: "ONLINE TRAINING",
    title: "Finding Success as a CarpacSoft Organizational Administrator",
    date: "March 12 | 8:00 a.m. PT | 5:00 p.m. CET",
    description: "Join us for our online training to learn more about key administrative functions performed by Organization Administrators.",
    linkText: "Register here"
  },
  {
    type: "DEMINAR",
    title: "A Quick Tour of CarpacSoft for Modern Requirements Management",
    date: "March 24 | 8:00 a.m. PT | 4:00 p.m. CEST",
    description: "Join us for this 30-minute product demonstration and move from traditional documents and Excel files to a modern requirements solution.",
    linkText: "Register here"
  },
  {
    type: "ONLINE TRAINING",
    title: "CarpacSoft 101 Training: An Introduction Into the Platform",
    date: "March 26 | 8:00 a.m. PT | 5:00 p.m. CEST",
    description: "Register now for our CarpacSoft 101 Training to get an overview of the platform's functionality, learn best practices, and get training on test management and conducting reviews.",
    linkText: "Register here"
  },
  {
    type: "DEMINAR",
    title: "A Quick Tour of CarpacSoft for Modern Requirements Management",
    date: "April 7 | 8:00 a.m. PT | 5:00 p.m. CEST",
    description: "Join us for this 30-minute product demonstration and move from traditional documents and Excel files to a modern requirements solution.",
    linkText: "Register here"
  },
  {
    type: "SPONSORED EVENT",
    title: "Space Symposium",
    date: "April 13 Colorado Springs, CO",
    description: "Join us at Space Symposium, the premier event uniting global space professionals from all sectors, providing a unique platform to explore critical space issues, foster dialogue, and drive innovation across the space industry. Visit us at booth #72!",
    linkText: "Learn more"
  },
  {
    type: "DEMINAR",
    title: "A Quick Tour of CarpacSoft for Modern Requirements Management",
    date: "April 21 | 8:00 a.m. PT | 5:00 p.m. CEST",
    description: "Join us for this 30-minute product demonstration and move from traditional documents and Excel files to a modern requirements solution.",
    linkText: "Register here"
  },
  {
    type: "ONLINE TRAINING",
    title: "CarpacSoft 101 Training: An Introduction Into the Platform",
    date: "April 23 | 8:00 a.m. PT | 5:00 p.m. CEST",
    description: "Register now for our CarpacSoft 101 Training to get an overview of the platform's functionality, learn best practices, and get training on test management and conducting reviews.",
    linkText: "Register here"
  },
  {
    type: "SPONSORED EVENT",
    title: "11th Annual INCOSE Systems Engineering in Healthcare Conference",
    date: "April 28 Minneapolis, MN",
    description: "Join us at the 11th Annual INCOSE Healthcare Systems Conference in Minneapolis, MN! The INCOSE Conference on Systems Engineering in Healthcare enables participants to share the best practices in the latest Systems Engineering topics as applied to Healthcare.",
    linkText: "Learn more"
  },
  {
    type: "SPONSORED EVENT",
    title: "Offshore Technology Conference (OTC)",
    date: "May 4 Houston, TX",
    description: "Join us at Offshore Technology Conference (OTC) 2026, the world's leading event for offshore energy, bringing together global experts across oil & gas, offshore wind, and emerging energy technologies in Houston, TX",
    linkText: "Learn more"
  },
  {
    type: "SPONSORED EVENT",
    title: "International MedTech Safety Conference",
    date: "June 2 Boston, MA",
    description: "Join us at the International Conference on Medical Device Safety Risk Management, where we'll be connecting with industry leaders and experts to shape the future of medical device safety. Visit us to discuss the latest challenges and opportunities in the field!",
    linkText: "Learn more"
  }
];

const pastEvents: Event[] = [
  {
    type: "DEMINAR",
    title: "A Quick Tour of CarpacSoft for Modern Requirements Management",
    date: "February 3 | 8:00 a.m. PT | 5:00 p.m. CST",
    description: "Join us for this 30-minute product demonstration and move from traditional documents and Excel files to a modern requirements solution.",
    linkText: "Watch Recording"
  },
  {
    type: "ONLINE TRAINING",
    title: "CarpacSoft 101 Training: An Introduction Into the Platform",
    date: "January 29 | 8:00 a.m. PT | 5:00 p.m. CEST",
    description: "Register now for our CarpacSoft 101 Training to get an overview of the platform's functionality, learn best practices, and get training on test management and conducting reviews.",
    linkText: "Watch Recording"
  },
  {
    type: "WEBINAR",
    title: "From Requirements to Regulatory: How AI is Transforming Submission Readiness",
    date: "January 28 | 8:00 a.m. PT | 5:00 p.m. CST",
    description: "In this webinar, learn how AI helps medical device teams build submission readiness earlier by connecting requirements, traceability, and regulatory compliance across the lifecycle.",
    linkText: "Watch Recording"
  },
  {
    type: "WEBINAR",
    title: "Enabling Multi-Phase Reviews Across the Aerospace and Defense Systems Lifecycle",
    date: "January 27 | 8:00 a.m. PT | 5:00 p.m. CET",
    description: "In this webinar, learn how Aerospace & Defense teams enable efficient, high-rigor multi-phased reviews across the engineering lifecycle.",
    linkText: "Watch Recording"
  },
  {
    type: "CUSTOMER-ONLY",
    title: "Join Us for Lean Coffee with CarpacSoft",
    date: "January 22 | 8:00 a.m. PT | 5:00 p.m. CST",
    description: "Kick off your 2026 by connecting with an expert in CarpacSoft during an engaging and interactive Lean Coffee session. This event offers a unique opportunity to collaborate, share insights, and deepen your understanding of product, systems, and software development and requirements management.",
    linkText: "Watch Recording"
  },
  {
    type: "WEBINAR",
    title: "Bringing AI to the Road Safely: Insights from Gokul Krithivasan",
    date: "January 21 | 8:00 a.m. PT | 5:00 p.m. CST",
    description: "Explore how AI is reshaping automotive safety, governance, and regulation in this live expert interview with SeculAlSafe's Gokul Krithivasan.",
    linkText: "Watch Recording"
  },
  {
    type: "DEMINAR",
    title: "A Quick Tour of CarpacSoft for Modern Requirements Management",
    date: "January 20 | 8:00 a.m. PT | 5:00 p.m. CST",
    description: "Join us for this 30-minute product demonstration and move from traditional documents and Excel files to a modern requirements solution.",
    linkText: "Watch Recording"
  },
  {
    type: "ONLINE TRAINING",
    title: "Finding Success as a CarpacSoft Organizational Administrator",
    date: "January 15 | 8:00 a.m. PT | 5:00 p.m. CET",
    description: "Join us for our online training to learn more about key administrative functions performed by Organization Administrators.",
    linkText: "Watch Recording"
  },
  {
    type: "WEBINAR",
    title: "The Collapse of Requirements Quality Under System Complexity - How AI Can Help",
    date: "January 14 | 8:00 a.m. PT | 5:00 p.m. CET",
    description: "Discover how AI is transforming requirements engineering by amplifying cognitive capacity, reducing complexity, and redefining workflows.",
    linkText: "Watch Recording"
  }
];

const Events = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTypes, setSelectedTypes] = useState<Record<string, boolean>>({
    "All Events": false,
    "Customer-Only": false,
    "Deminar": false,
    "Hosted Event": false,
    "Online Training": false,
    "Sponsored Event": false,
    "Webinar": false
  });

  const handleTypeChange = (type: string) => {
    setSelectedTypes(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const getFilteredEvents = () => {
    // Basic filtering logic placeholder
    // In a real app, this would filter based on search term and selected checkboxes
    return upcomingEvents;
  };

  const filteredUpcomingEvents = getFilteredEvents();

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-1">

        {/* HERO FEATURED EVENT */}
        <section className="relative h-[400px] bg-[#001e4d] overflow-hidden">
          {/* Background Image with Overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1600')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#001e4d]/95 via-[#001e4d]/80 to-transparent"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center">
            <AnimatedSection className="max-w-2xl">
              <span className="text-[#f59e0b] font-bold text-sm tracking-wider mb-2 block uppercase">Featured Event</span>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                A Quick Tour of CarpacSoft® for Modern Requirements Management
              </h1>
              <p className="text-white/90 text-sm mb-8 leading-relaxed max-w-xl">
                CarpacSoft enables consistency, collaboration, and alignment across the enterprise by providing a continuous flow of accurate requirements information. This 30 minutes webinar demonstration tour provides an overview of the CarpacSoft platform.
              </p>
              <Button className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-bold py-3 px-8 rounded-full uppercase tracking-wide text-xs">
                REGISTER NOW
              </Button>
            </AnimatedSection>
          </div>
        </section>

        {/* UPCOMING EVENTS */}
        <section className="bg-[#f8f9fa] py-16">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-[#001e4d] mb-12">Upcoming Events</h2>
            </AnimatedSection>

            <div className="flex flex-col lg:flex-row gap-12">

              {/* Events List (Left Column) */}
              <div className="lg:w-3/4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                  {filteredUpcomingEvents.map((event, index) => (
                    <AnimatedSection key={index} delay={index * 50}>
                      <div className="flex flex-col h-full">
                        <span className="text-[#ea580c] font-bold text-xs uppercase mb-2">
                          {event.type}
                        </span>
                        <h3 className="text-[#001e4d] font-bold text-lg mb-2 leading-tight">
                          {event.title}
                        </h3>
                        <p className="text-slate-500 font-bold text-xs mb-3">
                          {event.date}
                        </p>
                        <p className="text-slate-600 text-sm mb-4 flex-grow">
                          {event.description}
                        </p>
                        <a href="#" className="text-[#ea580c] font-bold text-sm hover:underline">
                          {event.linkText}
                        </a>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>

              {/* Sidebar Filters (Right Column) */}
              <div className="lg:w-1/4">
                <AnimatedSection className="sticky top-24">
                  <div className="relative mb-8">
                    <input
                      type="text"
                      placeholder="Search Events"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-[#0066cc]"
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={16} />
                  </div>

                  <h4 className="font-bold text-[#001e4d] mb-4">Event Type</h4>
                  <div className="space-y-3">
                    {Object.keys(selectedTypes).map((type) => (
                      <label key={type} className="flex items-center gap-3 cursor-pointer group">
                        <div className={`w-4 h-4 border rounded relative flex items-center justify-center transition-colors ${selectedTypes[type] ? 'bg-[#0066cc] border-[#0066cc]' : 'border-slate-300 group-hover:border-[#0066cc]'}`}>
                          {selectedTypes[type] && <div className="w-2 h-2 bg-white rounded-sm" />}
                        </div>
                        <input
                          type="checkbox"
                          className="hidden"
                          checked={selectedTypes[type]}
                          onChange={() => handleTypeChange(type)}
                        />
                        <span className="text-sm text-slate-600 group-hover:text-[#0066cc] transition-colors">{type}</span>
                      </label>
                    ))}
                  </div>
                </AnimatedSection>
              </div>

            </div>
          </div>
        </section>

        {/* PAST EVENTS */}
        <section className="bg-[#000b2a] py-16">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-white mb-12">Past Events</h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {pastEvents.map((event, index) => (
                <AnimatedSection key={index} delay={index * 50}>
                  <div className="flex flex-col h-full">
                    <span className="text-[#ea580c] font-bold text-xs uppercase mb-2">
                      {event.type}
                    </span>
                    <a href="#" className="group">
                      <h3 className="text-[#f59e0b] font-bold text-sm mb-2 leading-tight group-hover:underline">
                        {event.title}
                      </h3>
                    </a>
                    <p className="text-white font-bold text-[10px] mb-3">
                      {event.date}
                    </p>
                    <p className="text-slate-300 text-xs mb-4 flex-grow leading-relaxed">
                      {event.description}
                    </p>
                    <a href="#" className="text-[#0ea5e9] font-bold text-xs hover:underline">
                      {event.linkText}
                    </a>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <div className="text-center">
              <Button className="bg-transparent border border-[#0ea5e9] text-[#0ea5e9] hover:bg-[#0ea5e9] hover:text-white font-bold py-2 px-8 rounded-full uppercase text-xs transition-all duration-300">
                LOAD MORE
              </Button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Events;



