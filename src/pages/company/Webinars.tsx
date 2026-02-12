import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { Search, PlayCircle, Clock, Calendar } from "lucide-react";

// Webinar Types
type WebinarType = "LIVE WEBINAR" | "ON-DEMAND" | "EXPERT SERIES" | "PRODUCT TOUR" | "INDUSTRY INSIGHTS";

interface Webinar {
  type: WebinarType;
  title: string;
  date?: string;
  duration: string;
  description: string;
  linkText: string;
  image?: string;
}

// Mock Data
const upcomingWebinars: Webinar[] = [
  {
    type: "LIVE WEBINAR",
    title: "The Future of Requirements Management in the AI Era",
    date: "March 5 | 10:00 a.m. PT",
    duration: "45 min",
    description: "Discover how artificial intelligence is transforming how engineering teams capture, manage, and trace requirements across complex lifecycles.",
    linkText: "Register Now"
  },
  {
    type: "PRODUCT TOUR",
    title: "A Quick Tour of CarpacSoft® for Modern Requirements Management",
    date: "Every Tuesday | 11:00 a.m. PT",
    duration: "30 min",
    description: "Join us for a 30-minute demonstration tour providing an overview of the CarpacSoft platform and how it enables consistency and alignment.",
    linkText: "Register here"
  },
  {
    type: "INDUSTRY INSIGHTS",
    title: "Navigating ISO 26262: Best Practices for Automotive Safety",
    date: "March 12 | 9:00 a.m. PT",
    duration: "60 min",
    description: "Learn from industry experts about maintaining functional safety compliance while accelerating development in the automotive sector.",
    linkText: "Register Now"
  },
  {
    type: "EXPERT SERIES",
    title: "Mastering MBSE: Bridging the Gap Between Models and Requirements",
    date: "March 19 | 10:00 a.m. PT",
    duration: "45 min",
    description: "Deep dive into model-based systems engineering (MBSE) and how to ensure your models stay in sync with your requirements data.",
    linkText: "Register Now"
  }
];

const onDemandWebinars: Webinar[] = [
  {
    type: "ON-DEMAND",
    title: "Achieving Live Traceability Across the Software Development Lifecycle",
    duration: "50 min",
    description: "Watch this on-demand session to see how top-performing teams achieve unmatched visibility from concept to code.",
    linkText: "Watch Recording",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=400&h=250"
  },
  {
    type: "ON-DEMAND",
    title: "Accelerating Innovation in Medical Device Development",
    duration: "45 min",
    description: "Learn how MedTech companies are using CarpacSoft to decrease time-to-market while ensuring strict regulatory compliance.",
    linkText: "Watch Recording",
    image: "https://images.unsplash.com/photo-1576091160550-217359f4ecf8?auto=format&fit=crop&q=80&w=400&h=250"
  },
  {
    type: "ON-DEMAND",
    title: "Requirements Management for Aerospace and Defense",
    duration: "60 min",
    description: "An expert conversation on managing extremely complex systems and maintaining high-rigor traceability for A&D projects.",
    linkText: "Watch Recording",
    image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80&w=400&h=250"
  }
];

const Webinars = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-1">

        {/* HERO FEATURED WEBINAR */}
        <section className="relative h-[450px] bg-[#001e4d] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=1600')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#001e4d]/95 via-[#001e4d]/70 to-transparent"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center">
            <AnimatedSection className="max-w-2xl">
              <span className="text-[#0ea5e9] font-bold text-sm tracking-wider mb-2 block uppercase">Upcoming Webinar</span>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Driving Efficiency Through Requirements Reuse
              </h1>
              <p className="text-white/90 text-lg mb-8 leading-relaxed">
                Join us to learn how leading organizations are cutting development costs and time-to-market by up to 50% through strategic requirements reuse.
              </p>
              <div className="flex items-center gap-6 mb-8 text-white/80">
                <div className="flex items-center gap-2">
                  <Calendar size={20} className="text-[#f59e0b]" />
                  <span>March 26, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={20} className="text-[#f59e0b]" />
                  <span>10:00 AM PT</span>
                </div>
              </div>
              <Button className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-bold py-4 px-10 rounded-full uppercase tracking-wide text-sm transition-all shadow-lg">
                SAVE MY SPOT
              </Button>
            </AnimatedSection>
          </div>
        </section>

        {/* SEARCH AND FILTERS */}
        <section className="bg-white py-8 border-b">
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <h2 className="text-2xl font-bold text-[#001e4d]">All Webinars</h2>
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Search for webinars topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-full text-sm focus:outline-none focus:border-[#0066cc] focus:ring-1 focus:ring-[#0066cc]"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
            </div>
          </div>
        </section>

        {/* UPCOMING WEBINARS LIST */}
        <section className="bg-[#f8fbff] py-20">
          <div className="container mx-auto px-4">
            <AnimatedSection className="mb-12">
              <h2 className="text-3xl font-bold text-[#001e4d]">Live Sessions</h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {upcomingWebinars.map((webinar, index) => (
                <AnimatedSection key={index} delay={index * 100}>
                  <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 h-full flex flex-col hover:shadow-md transition-shadow">
                    <span className="text-[#ea580c] font-bold text-[10px] tracking-widest uppercase mb-3">
                      {webinar.type}
                    </span>
                    <h3 className="text-[#001e4d] font-bold text-lg mb-4 leading-tight min-h-[56px]">
                      {webinar.title}
                    </h3>
                    <div className="flex items-center gap-2 text-slate-500 text-xs mb-4">
                      <Clock size={14} />
                      <span>{webinar.date} ({webinar.duration})</span>
                    </div>
                    <p className="text-slate-600 text-sm mb-6 flex-grow line-clamp-3">
                      {webinar.description}
                    </p>
                    <Button variant="link" className="text-[#ea580c] p-0 h-auto font-bold text-sm justify-start hover:text-[#c2410c]">
                      {webinar.linkText} →
                    </Button>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ON-DEMAND WEBINARS */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-4">
            <AnimatedSection className="flex flex-col md:flex-row justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl font-bold text-[#001e4d] mb-2">On-Demand Library</h2>
                <p className="text-slate-500">Watch our past sessions anytime, anywhere.</p>
              </div>
              <Button variant="ghost" className="text-[#0066cc] font-bold">VIEW FULL LIBRARY →</Button>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {onDemandWebinars.map((webinar, index) => (
                <AnimatedSection key={index} delay={index * 150}>
                  <div className="group cursor-pointer">
                    <div className="relative rounded-2xl overflow-hidden mb-6 aspect-video">
                      <img
                        src={webinar.image}
                        alt={webinar.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                        <PlayCircle size={64} className="text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-[#ea580c] text-white text-[10px] font-bold py-1 px-3 rounded-full uppercase tracking-tighter">
                          {webinar.duration}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-[#001e4d] font-bold text-xl mb-3 group-hover:text-[#0066cc] transition-colors">
                      {webinar.title}
                    </h3>
                    <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                      {webinar.description}
                    </p>
                    <span className="text-[#0066cc] font-bold text-sm uppercase tracking-wider">
                      {webinar.linkText}
                    </span>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="bg-gradient-to-r from-[#003366] to-[#001e4d] py-16 text-white text-center">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <h2 className="text-3xl font-bold mb-6">Stay Ahead of the Curve</h2>
              <p className="text-blue-100 mb-10 max-w-2xl mx-auto">
                Subscribe to our newsletter to get notified about upcoming webinars, product updates, and industry insights.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your work email"
                  className="px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:bg-white/20"
                />
                <Button className="bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold py-4 px-8 rounded-full uppercase tracking-wide text-xs">
                  SUBSCRIBE
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>

      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Webinars;



