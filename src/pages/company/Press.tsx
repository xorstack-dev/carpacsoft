import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import AnimatedSection from "@/components/AnimatedSection";
import { ChevronDown } from "lucide-react";

// Press Release interface
interface PressRelease {
  date: string;
  title: string;
  subtitle?: string;
  image: string;
}

// Mock Data - matching the reference images
const pressReleases: PressRelease[] = [
  {
    date: "December 09, 2025",
    title: "CarpacSoft Announces CarpacSoft® Solution for Semiconductors for Developing Complex Products and Systems Faster without Compromising Quality",
    subtitle: "Streamline and Accelerate Semiconductor Product Development with CarpacSoft",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=100&h=70"
  },
  {
    date: "December 01, 2025",
    title: "CarpacSoft and Obeo Announce Integration Between CarpacSoft® and Capella",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=100&h=70"
  },
  {
    date: "September 16, 2025",
    title: "CarpacSoft Launches CarpacSoft Availability in AWS Marketplace",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=100&h=70"
  },
  {
    date: "July 09, 2025",
    title: "CarpacSoft® Attains Level 2 TISAX Certification from TÜV SÜD",
    subtitle: "CarpacSoft is the only requirements management application that is both TISAX and SOC 2 certified",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=100&h=70"
  },
  {
    date: "May 08, 2025",
    title: "Lifecycle Experts Becomes a Partner of CarpacSoft",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=100&h=70"
  },
  {
    date: "March 18, 2025",
    title: "CarpacSoft and :em AG Announce Strategic Partnership to Drive Efficiency in Requirements Management",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=100&h=70"
  },
  {
    date: "March 18, 2024",
    title: "Francisco Partners to Acquire CarpacSoft® for $1.2B",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=100&h=70"
  },
  {
    date: "September 21, 2023",
    title: "A New Partnership for Digital Design & Product Development eXcellence",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=100&h=70"
  },
  {
    date: "May 31, 2023",
    title: "CarpacSoft® Announces Massive Adoption of CarpacSoft®'s API",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=100&h=70"
  },
  {
    date: "March 15, 2023",
    title: "CarpacSoft® Announces Insurance Framework to Simplify Insurance Product Development",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=100&h=70"
  },
  {
    date: "February 15, 2023",
    title: "CarpacSoft® Delivers Major Enhancements to the CarpacSoft® for Airborne Systems Solution",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=100&h=70"
  },
  {
    date: "January 18, 2023",
    title: "CarpacSoft® Is the First to Deliver a Complete Requirements Authoring Solution",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=100&h=70"
  }
];

const Press = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("date");
  const itemsPerPage = 10;
  const totalPages = 6;

  // Calculate visible items
  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleReleases = pressReleases.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-1">

        {/* HERO SECTION */}
        <section className="bg-[#001e4d] py-12 text-white">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <h1 className="text-3xl font-bold mb-3 text-white">Press Room</h1>
              <p className="text-blue-200 text-sm">
                Get the latest CarpacSoft news, press releases, and product announcements right here in our Press Room!
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* PRESS RELEASES LIST */}
        <section className="bg-white py-12">
          <div className="container mx-auto px-4">

            {/* Sort Control */}
            <div className="flex justify-end mb-8">
              <div className="flex items-center gap-2">
                <span className="text-sm text-slate-600">View by Date:</span>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-white border border-slate-200 rounded px-4 py-2 pr-8 text-sm text-slate-700 focus:outline-none focus:border-[#0066cc] cursor-pointer"
                  >
                    <option value="date">Newest First</option>
                    <option value="date-asc">Oldest First</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Press Releases */}
            <div className="space-y-8">
              {visibleReleases.map((release, index) => (
                <AnimatedSection key={index} delay={index * 50}>
                  <div className="flex gap-6 group cursor-pointer">
                    {/* Thumbnail */}
                    <div className="flex-shrink-0">
                      <div className="relative w-[140px] h-[90px] rounded overflow-hidden">
                        <img
                          src={release.image}
                          alt={release.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-[#001e4d]/60 flex items-center justify-center">
                          <span className="text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 border border-white/50 rounded">
                            Press Release
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <p className="text-slate-400 text-xs mb-2">{release.date}</p>
                      <h3 className="text-[#0066cc] font-bold text-lg leading-tight mb-2 group-hover:text-[#004499] transition-colors">
                        {release.title}
                      </h3>
                      {release.subtitle && (
                        <p className="text-slate-500 text-sm mb-2">{release.subtitle}</p>
                      )}
                      <a
                        href="#"
                        className="text-[#0066cc] text-sm hover:underline inline-block"
                      >
                        Read the press release
                      </a>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-1 mt-16">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-2 text-sm text-slate-500 hover:text-[#0066cc] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Prev
              </button>

              {[1, 2, 3, 4, 5, 6].map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`w-8 h-8 flex items-center justify-center text-sm rounded transition-all ${currentPage === page
                    ? "bg-[#001e4d] text-white font-bold"
                    : "text-slate-600 hover:bg-slate-100"
                    }`}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-2 text-sm text-slate-500 hover:text-[#0066cc] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Next
              </button>
            </div>

          </div>
        </section>

      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Press;



