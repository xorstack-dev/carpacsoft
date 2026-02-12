import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { Play, Check, ArrowRight, Users } from "lucide-react";

// Placeholder SVGs for visuals
const RocketIllustration = () => (
  <svg viewBox="0 0 200 160" className="w-full max-w-[400px]">
    <path d="M40 80 L160 80 L180 120 L20 120 Z" fill="#e2e8f0" />
    <rect x="40" y="20" width="120" height="80" fill="#3b82f6" rx="4" />
    <circle cx="100" cy="60" r="20" fill="white" opacity="0.2" />
    <path d="M140 40 L160 20 M60 40 L40 20" stroke="#93c5fd" strokeWidth="4" strokeLinecap="round" />
    <circle cx="130" cy="110" r="25" fill="#f59e0b" />
    <path d="M120 100 L140 120 M140 100 L120 120" stroke="white" strokeWidth="3" />
    <path d="M160 50 Q 180 20 170 80" fill="#3b82f6" opacity="0.8" />
    <circle cx="170" cy="30" r="8" fill="#fcd34d" />
  </svg>
);

const VideoPlaceholder = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  if (isPlaying) {
    return (
      <div className="relative w-full aspect-video rounded-lg shadow-xl overflow-hidden border-4 border-white/10">
        <iframe
          src="https://fast.wistia.net/embed/iframe/m4srcfehz4?autoPlay=true"
          title="CarpacSoft Overview Video"
          allow="autoplay; fullscreen"
          className="absolute inset-0 w-full h-full"
          frameBorder="0"
        />
      </div>
    );
  }

  return (
    <div
      className="relative w-full aspect-video bg-black rounded-lg shadow-xl overflow-hidden group cursor-pointer border-4 border-white/10"
      onClick={() => setIsPlaying(true)}
    >
      <img
        src="https://www.jamasoftware.com/media/2021/10/jama-overview-video-thumb.png"
        alt="CarpacSoft Overview"
        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-20 h-20 bg-[#ffffffcc] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm">
          <Play className="w-8 h-8 text-[#0057b8] ml-1 fill-[#0057b8]" />
        </div>
      </div>
    </div>
  );
};

const BinocularsIcon = () => (
  <svg viewBox="0 0 100 100" className="w-24 h-24 mb-4 drop-shadow-lg">
    <circle cx="50" cy="50" r="45" fill="#e0f2fe" stroke="#bae6fd" strokeWidth="2" />
    <path d="M30 40 C30 30 45 30 45 40 L45 70 C45 75 30 75 30 70 Z" fill="#f59e0b" stroke="#78350f" strokeWidth="2" />
    <path d="M55 40 C55 30 70 30 70 40 L70 70 C70 75 55 75 55 70 Z" fill="#f59e0b" stroke="#78350f" strokeWidth="2" />
    <rect x="43" y="45" width="14" height="4" fill="#78350f" />
    <circle cx="37.5" cy="40" r="5" fill="#fef3c7" />
    <circle cx="62.5" cy="40" r="5" fill="#fef3c7" />
    <circle cx="37.5" cy="70" r="6" fill="#3b82f6" />
    <circle cx="62.5" cy="70" r="6" fill="#3b82f6" />
  </svg>
);

const TrophyIcon = () => (
  <svg viewBox="0 0 100 100" className="w-20 h-20 mb-4">
    <path d="M30 30 L70 30 L65 60 C65 75 35 75 35 60 Z" fill="#3b82f6" stroke="#fbbf24" strokeWidth="2" />
    <path d="M30 35 C20 35 20 50 30 55" fill="none" stroke="#fbbf24" strokeWidth="3" />
    <path d="M70 35 C80 35 80 50 70 55" fill="none" stroke="#fbbf24" strokeWidth="3" />
    <rect x="40" y="75" width="20" height="5" fill="#fbbf24" />
    <rect x="35" y="80" width="30" height="5" fill="#fbbf24" />
    <circle cx="50" cy="45" r="8" fill="#fbbf24" />
    <path d="M50 41 L52 47 L48 47 Z" fill="#fff" />
  </svg>
);

const BadgeIcon = () => (
  <svg viewBox="0 0 100 100" className="w-20 h-20 mb-4">
    <path d="M50 20 L75 35 L75 65 L50 80 L25 65 L25 35 Z" fill="#3b82f6" stroke="#60a5fa" strokeWidth="2" />
    <circle cx="50" cy="50" r="15" fill="#fbbf24" />
    <path d="M50 40 L53 47 L60 47 L55 52 L57 59 L50 55 L43 59 L45 52 L40 47 L47 47 Z" fill="#fff" />
  </svg>
);

const WhyJama = () => {
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    company: "", industry: "", country: ""
  });

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-1">

        {/* HERO SECTION */}
        <section className="bg-gradient-to-b from-[#1e3a8a] to-[#172554] text-white pt-20 pb-32">
          <div className="container mx-auto px-4 text-center">
            <AnimatedSection>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">Why Choose CarpacSoft?</h1>
              <h2 className="text-xl md:text-2xl text-orange-400 font-semibold mb-6">
                The Industry Leader in Requirements Management Software
              </h2>
              <p className="max-w-4xl mx-auto text-blue-100 text-lg leading-relaxed mb-10">
                On every critical dimension, CarpacSoft is the Requirements Management leader: market share, user reviews, user community, usability, adoption, client success, scale, advanced capabilities, product investment, and more. We have grown through word of mouth for a reason — our users love us, bring us to their new companies, and spread the word. We'd love for you to join the CarpacSoft family!
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/trial">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-6 px-8 text-lg rounded-full shadow-lg transition-transform hover:scale-105">
                    GET STARTED
                  </Button>
                </Link>
                <Link to="/company/contact">
                  <Button className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-bold py-6 px-8 text-lg rounded-full shadow-lg transition-transform hover:scale-105">
                    BOOK A DEMO
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* AWARDS / STATS SECTION */}
        <section className="bg-[#05003B] pb-20 -mt-10 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <AnimatedSection delay={200} className="bg-[#05003B] pt-8">
                <div className="flex flex-col items-center text-center">
                  <TrophyIcon />
                  <h3 className="text-2xl font-bold text-white mb-4">#1 in Market Share for<br />Requirements Management</h3>
                  <ul className="text-blue-200 text-sm space-y-2">
                    <li>• Over 480MM items managed in a secure cloud environment</li>
                    <li>• Largest annual R&D budget solely devoted to best-in-class requirements management</li>
                  </ul>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={400} className="bg-[#05003B] pt-8">
                <div className="flex flex-col items-center text-center">
                  <BadgeIcon />
                  <h3 className="text-2xl font-bold text-white mb-4">#1 in Customer Success</h3>
                  <ul className="text-blue-200 text-sm space-y-2">
                    <li>• 70% faster adoption than competitors</li>
                    <li>• Largest user community</li>
                    <li>• Most customer success stories</li>
                  </ul>
                </div>
              </AnimatedSection>
            </div>
            {/* Accessibility Icon Bottom Left Placeholder */}
            <div className="fixed bottom-4 left-4 z-50">
              <div className="w-10 h-10 bg-[#2563eb] rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:bg-blue-600">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z" /></svg>
              </div>
            </div>
          </div>
        </section>

        {/* CUSTOMER REVIEWS & SECURITY SECTION */}
        <section className="bg-gradient-to-b from-[#1e3a8a] to-[#172554] pb-20 -mt-10 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

              {/* #1 in Customer Reviews */}
              <AnimatedSection delay={200} className="bg-gradient-to-b from-[#1e3a8a] to-[#172554] pt-8">
                <div className="flex flex-col items-center text-center">
                  {/* Chat Bubble with Heart Icon */}
                  <div className="relative mb-6">
                    {/* Decorative dots/circles */}
                    <div className="absolute -top-2 -right-4 w-3 h-3 bg-blue-400 rounded-full opacity-40"></div>
                    <div className="absolute -top-4 right-4 w-2 h-2 bg-blue-300 rounded-full opacity-30"></div>
                    <div className="absolute top-0 -left-6 w-2.5 h-2.5 bg-blue-500 rounded-full opacity-30"></div>
                    <div className="absolute -bottom-2 -left-4 w-2 h-2 bg-blue-400 rounded-full opacity-25"></div>
                    <svg viewBox="0 0 120 100" className="w-28 h-24">
                      {/* Left chat bubble */}
                      <rect x="10" y="10" width="55" height="40" rx="8" fill="#3b82f6" />
                      <polygon points="25,50 20,60 35,50" fill="#3b82f6" />
                      <rect x="20" y="22" width="30" height="4" rx="2" fill="#93c5fd" />
                      <rect x="20" y="30" width="22" height="4" rx="2" fill="#93c5fd" />
                      <rect x="20" y="38" width="18" height="4" rx="2" fill="#93c5fd" />
                      {/* Right chat bubble */}
                      <rect x="50" y="35" width="55" height="40" rx="8" fill="#fbbf24" />
                      <polygon points="90,75 95,85 80,75" fill="#fbbf24" />
                      {/* Heart icon inside yellow bubble */}
                      <path d="M77.5 48 C74 44 68 44 68 50 C68 56 77.5 62 77.5 62 C77.5 62 87 56 87 50 C87 44 81 44 77.5 48Z" fill="#ef4444" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-6">#1 in Customer Reviews</h3>
                  {/* Review Award Badges */}
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    {/* Leader Badge */}
                    <div className="w-16 h-20 bg-white rounded-lg flex flex-col items-center justify-center p-1.5 shadow-md hover:scale-110 transition-transform">
                      <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center mb-1">
                        <svg viewBox="0 0 20 20" className="w-3 h-3 text-white" fill="currentColor"><path d="M10 2l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z" /></svg>
                      </div>
                      <span className="text-[7px] font-bold text-slate-700 uppercase leading-tight text-center">Leader</span>
                      <div className="flex mt-0.5">
                        {[...Array(5)].map((_, i) => <span key={i} className="text-[6px] text-yellow-400">★</span>)}
                      </div>
                    </div>
                    {/* Best Relationship Badge */}
                    <div className="w-16 h-20 bg-white rounded-lg flex flex-col items-center justify-center p-1.5 shadow-md hover:scale-110 transition-transform">
                      <div className="w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center mb-1">
                        <svg viewBox="0 0 20 20" className="w-3 h-3 text-white" fill="currentColor"><path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" /></svg>
                      </div>
                      <span className="text-[7px] font-bold text-slate-700 uppercase leading-tight text-center">Best Relationship</span>
                    </div>
                    {/* Top Rated Badge */}
                    <div className="w-16 h-20 bg-white rounded-lg flex flex-col items-center justify-center p-1.5 shadow-md hover:scale-110 transition-transform">
                      <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center mb-1">
                        <svg viewBox="0 0 20 20" className="w-3 h-3 text-white" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      </div>
                      <span className="text-[7px] font-bold text-slate-700 uppercase leading-tight text-center">Top Rated</span>
                      <div className="flex mt-0.5">
                        {[...Array(5)].map((_, i) => <span key={i} className="text-[6px] text-yellow-400">★</span>)}
                      </div>
                    </div>
                    {/* Gold Award Badge */}
                    <div className="w-16 h-20 bg-white rounded-lg flex flex-col items-center justify-center p-1.5 shadow-md hover:scale-110 transition-transform">
                      <div className="w-8 h-8 mb-1">
                        <svg viewBox="0 0 40 40" className="w-full h-full">
                          <circle cx="20" cy="18" r="12" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1.5" />
                          <path d="M20 10 L22 16 L28 16 L23 20 L25 26 L20 22 L15 26 L17 20 L12 16 L18 16Z" fill="#fff" />
                          <path d="M14 30 L20 26 L26 30" fill="#dc2626" />
                          <path d="M14 30 L20 26" stroke="#dc2626" strokeWidth="3" />
                          <path d="M26 30 L20 26" stroke="#1d4ed8" strokeWidth="3" />
                        </svg>
                      </div>
                      <span className="text-[6px] font-bold text-slate-700 uppercase leading-tight text-center">Gold Medal</span>
                    </div>
                    {/* Leader Badge 2 */}
                    <div className="w-16 h-20 bg-white rounded-lg flex flex-col items-center justify-center p-1.5 shadow-md hover:scale-110 transition-transform">
                      <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center mb-1">
                        <svg viewBox="0 0 20 20" className="w-3 h-3 text-white" fill="currentColor"><path d="M10 2l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z" /></svg>
                      </div>
                      <span className="text-[7px] font-bold text-slate-700 uppercase leading-tight text-center">Leader</span>
                      <div className="flex mt-0.5">
                        {[...Array(5)].map((_, i) => <span key={i} className="text-[6px] text-yellow-400">★</span>)}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* #1 in Security & Compliance */}
              <AnimatedSection delay={400} className="bg-gradient-to-b from-[#1e3a8a] to-[#172554] pt-8">
                <div className="flex flex-col items-center text-center">
                  {/* Lock/Security Icon */}
                  <div className="relative mb-6">
                    {/* Decorative dots/circles */}
                    <div className="absolute -top-3 -right-6 w-3 h-3 bg-blue-400 rounded-full opacity-40"></div>
                    <div className="absolute top-2 right-6 w-2 h-2 bg-blue-500 rounded-sm opacity-30 rotate-45"></div>
                    <div className="absolute -top-4 left-2 w-2.5 h-2.5 bg-blue-300 rounded-full opacity-30"></div>
                    <div className="absolute bottom-0 -right-8 w-2 h-2 bg-blue-400 rounded-full opacity-25"></div>
                    <div className="absolute -bottom-2 -left-6 w-3 h-3 bg-blue-500 rounded-sm opacity-20 rotate-12"></div>
                    <svg viewBox="0 0 100 100" className="w-24 h-24">
                      {/* Rounded square background */}
                      <rect x="15" y="20" width="70" height="65" rx="12" fill="#f9f9f9ff" />
                      {/* Lock body */}
                      <rect x="32" y="45" width="36" height="30" rx="4" fill="#3b82f6" />
                      {/* Lock shackle */}
                      <path d="M38 45 V35 C38 25 62 25 62 35 V45" fill="none" stroke="#60a5fa" strokeWidth="5" strokeLinecap="round" />
                      {/* Keyhole */}
                      <circle cx="50" cy="57" r="5" fill="#fbbf24" />
                      <rect x="48" y="60" width="4" height="8" rx="1" fill="#fbbf24" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-6">#1 in Security & Compliance</h3>
                  {/* Certification Badges Row */}
                  <div className="flex items-center justify-center gap-4 mb-6">
                    {/* SOC 2 Type II Badge */}
                    <div className="w-20 h-20 flex items-center justify-center hover:scale-110 transition-transform">
                      <svg viewBox="0 0 80 80" className="w-full h-full">
                        <circle cx="40" cy="40" r="36" fill="#dc2626" stroke="#b91c1c" strokeWidth="2" />
                        <circle cx="40" cy="40" r="28" fill="none" stroke="#fca5a5" strokeWidth="1" />
                        <text x="40" y="30" fontSize="7" fill="white" textAnchor="middle" fontWeight="bold">SOC 2</text>
                        <text x="40" y="40" fontSize="6" fill="white" textAnchor="middle">Type II</text>
                        <line x1="20" y1="45" x2="60" y2="45" stroke="#fca5a5" strokeWidth="0.5" />
                        <text x="40" y="55" fontSize="6" fill="#fef2f2" textAnchor="middle" fontWeight="bold">AUDITED</text>
                      </svg>
                    </div>
                    {/* TÜV SÜD Badge */}
                    <div className="w-20 h-20 flex items-center justify-center hover:scale-110 transition-transform">
                      <svg viewBox="0 0 80 90" className="w-full h-full">
                        {/* Hexagon shape */}
                        <polygon points="40,5 72,22 72,58 40,75 8,58 8,22" fill="#2563eb" stroke="#1d4ed8" strokeWidth="2" />
                        <polygon points="40,12 65,26 65,54 40,68 15,54 15,26" fill="none" stroke="#93c5fd" strokeWidth="1" />
                        <text x="40" y="38" fontSize="10" fill="white" textAnchor="middle" fontWeight="bold">TÜV</text>
                        <text x="40" y="52" fontSize="10" fill="white" textAnchor="middle" fontWeight="bold">SÜD</text>
                      </svg>
                    </div>
                  </div>
                  {/* Bullet Points */}
                  <ul className="text-blue-200 text-sm space-y-2 text-left max-w-xs">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1 shrink-0">•</span>
                      <span>Only SOC2 Type certified requirements management application</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1 shrink-0">•</span>
                      <span>Most complete library of industry standards</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1 shrink-0">•</span>
                      <span>First TUV SUD SaaS vendor</span>
                    </li>
                  </ul>
                </div>
              </AnimatedSection>
            </div>

            {/* SEE JAMA CONNECT IN ACTION CTA */}
            <AnimatedSection delay={600} className="text-center mt-12">
              <Link to="/other-pages/connect-in-action">
                <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-10 rounded-full text-sm uppercase tracking-wider shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-orange-500/30 hover:shadow-xl border border-orange-400/30">
                  SEE JAMA CONNECT IN ACTION
                </Button>
              </Link>
            </AnimatedSection>

            {/* Accessibility Icon Bottom Left Placeholder */}
            <div className="fixed bottom-4 left-4 z-50">
              <div className="w-10 h-10 bg-[#2563eb] rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:bg-blue-600">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z" /></svg>
              </div>
            </div>
          </div>
        </section>

        {/* PURPOSE SECTION */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <AnimatedSection className="flex justify-center">
                <img
                  src="https://www.jamasoftware.com/media/2021/10/success-illustration-2.png"
                  alt="Our Purpose - Ensuring Innovators Succeed"
                  className="w-full max-w-[400px] object-contain"
                />
              </AnimatedSection>
              <AnimatedSection delay={200}>
                <h2 className="text-3xl font-bold text-slate-800 mb-6"> Our Purpose is to Ensure that<br />Innovators Succeed</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Client success is at the forefront of everything we do. Through years of industry-specific experience and thousands of client engagements, we bring best practices to bear to maximize the success rate of the product development process.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* QUOTE SECTION */}
        <section className="bg-[#2563eb] py-16">
          <div className="container mx-auto px-4">
            <AnimatedSection className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
              <div className="shrink-0">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white/20">
                  <div className="w-full h-full bg-slate-300 flex items-center justify-center text-slate-500">
                    {/* Placeholder for Marc Osofsky */}
                    <Users className="w-20 h-20" />
                  </div>
                </div>
              </div>
              <div className="text-white">
                <p className="text-xl md:text-2xl font-medium italic mb-6">
                  "We partner deeply with clients to increase the success rate of new product development through our software-enabled best practices and consulting expertise. This is our core commitment we make to each client that joins the CarpacSoft family."
                </p>
                <div>
                  <div className="font-bold text-lg">Marc Osofsky</div>
                  <div className="text-blue-200 text-sm">Chief Executive Officer</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section className="bg-sky-50 py-20">
          <div className="container mx-auto px-4 text-center">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-slate-700 mb-8">What Our Clients Say About Us</h2>
              <blockquote className="text-xl text-blue-600 font-medium italic max-w-4xl mx-auto mb-6">
                "We all want to spend more time being creative and innovating our products, and CarpacSoft gives us more time to do that."
              </blockquote>
              <div className="mb-12">
                <div className="font-bold text-slate-700">Lars Jensen</div>
                <div className="text-slate-500 text-sm">Product Quality Assurance Manager, 3Shape</div>
              </div>

              {/* Company Logos Row */}
              <div className="flex flex-wrap justify-center gap-12 items-center opacity-60 grayscale mb-12">
                <span className="text-2xl font-bold font-serif">RIMAC</span>
                <span className="text-2xl font-bold">alight</span>
                <span className="text-2xl font-bold text-blue-900">GRIFOLS</span>
                <span className="text-2xl font-bold text-pink-600">3shape</span>
                <span className="text-2xl font-bold tracking-widest">TELESAT</span>
              </div>

              <Link to="/resources/library" target="_blank">
                <Button className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-bold py-3 px-8 rounded-full uppercase text-sm tracking-wide">
                  VIEW CUSTOMER STORIES
                </Button>
              </Link>
            </AnimatedSection>
          </div>
        </section>

        {/* SUCCESS / VIDEO SECTION */}
        <section className="bg-[#05003B] py-20 text-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-20">
              <AnimatedSection>
                <VideoPlaceholder />
              </AnimatedSection>
              <AnimatedSection delay={200}>
                <h2 className="text-3xl font-bold text-[#38bdf8] mb-6">We're Focused on Your Success</h2>
                <h3 className="text-xl text-[#38bdf8] mb-4">...And helping engineering teams solve the key challenges they face</h3>
                <p className="text-white/80 leading-relaxed">
                  Most software companies focus on selling software and do little more than install and train new customers. We focus on your success and stay engaged on an ongoing basis to monitor progress and engage our in-house consultants—without additional fees—to ensure your success. This is a unique Success Program that only CarpacSoft provides in the Requirements Management space.
                </p>
              </AnimatedSection>
            </div>

            {/* Reviews Badges */}
            <AnimatedSection className="text-center">
              <h2 className="text-2xl font-bold text-slate-400 mb-10">Come Check Out Our Reviews!</h2>
              <div className="flex flex-wrap justify-center gap-6">
                {/* Badge Placeholders */}
                <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center p-2 shadow-lg border-b-4 border-orange-500">
                  <div className="text-center">
                    <div className="text-orange-500 font-bold text-xs uppercase">SourceForge</div>
                    <div className="flex justify-center text-yellow-400 text-xs my-1">★★★★★</div>
                    <div className="text-[10px] text-slate-400">User Reviews</div>
                  </div>
                </div>
                <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center p-2 shadow-lg border-b-4 border-red-500">
                  <div className="text-center">
                    <div className="text-xs uppercase bg-red-100 text-red-600 px-1 py-0.5 rounded mb-1">Leader</div>
                    <div className="text-[10px] text-slate-400">Winter 2026</div>
                  </div>
                </div>
                <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center p-2 shadow-lg border-b-4 border-pink-500">
                  <div className="text-center">
                    <div className="text-xs font-bold uppercase text-slate-700">Regional Leader</div>
                    <div className="text-[10px] text-pink-500">EMEA</div>
                  </div>
                </div>
                <div className="w-40 h-40 -mt-4 relative">
                  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-xl">
                    <path d="M50 10 L85 30 L85 70 L50 90 L15 70 L15 30 Z" fill="#2563eb" stroke="#fbbf24" strokeWidth="2" />
                    <text x="50" y="55" fontSize="10" fill="white" textAnchor="middle" fontWeight="bold">CHAMPION</text>
                    <text x="50" y="40" fontSize="6" fill="white" textAnchor="middle">2026</text>
                  </svg>
                </div>
                <div className="w-32 h-32 bg-teal-800 rounded-lg flex items-center justify-center p-2 shadow-lg border-2 border-white">
                  <div className="text-center text-white">
                    <div className="font-bold text-sm">Slashdot</div>
                    <div className="flex justify-center text-yellow-400 text-xs my-1">★★★★★</div>
                    <div className="text-[10px]">User Reviews</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ORANGE DISCOVER SECTION */}
        <section className="bg-gradient-to-r from-[#ea580c] to-[#c2410c] py-20 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('/pattern.png')]"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <AnimatedSection>
              <div className="flex justify-center">
                <div className="bg-white p-6 rounded-full mb-6 shadow-2xl">
                  <div className="w-16 h-16 text-orange-600">
                    {/* Binoculars SVG */}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10 10h4" />
                      <path d="M19 7V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v3" />
                      <path d="M5 7V4a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v3" />
                      <rect x="1" y="7" width="10" height="13" rx="2" />
                      <rect x="13" y="7" width="10" height="13" rx="2" />
                    </svg>
                  </div>
                </div>
              </div>
              <h2 className="text-3xl font-bold mb-4">Discover all that CarpacSoft has to offer!</h2>
              <p className="max-w-3xl mx-auto mb-8 text-white/90">
                Interested in learning more about how CarpacSoft can help your organization achieve its goals? The CarpacSoft Discovery Center lets you control your knowledge journey and get your questions answered, all at your own pace. We've put our most relevant and valuable content—from discovery to optimization—right at your fingertips!
              </p>
              <Link to="/resources/discovery">
                <Button className="bg-[#0ea5e9] hover:bg-[#0284c7] text- white font-bold py-3 px-8 rounded uppercase shadow-lg transition-transform hover:scale-105 border border-white/20">
                  LEARN MORE
                </Button>
              </Link>
            </AnimatedSection>
          </div>
        </section>

        {/* BOOK A DEMO FORM SECTION */}
        <section className="bg-gradient-to-br from-slate-800 to-slate-900 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
              {/* Form */}
              <AnimatedSection className="bg-white rounded-lg p-8 shadow-2xl">
                <h2 className="text-2xl font-bold text-jama-navy mb-6 text-center">Book a Demo</h2>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="First Name*" className="bg-slate-100 border border-slate-300 rounded px-4 py-3 w-full text-sm" />
                    <input type="text" placeholder="Last Name*" className="bg-slate-100 border border-slate-300 rounded px-4 py-3 w-full text-sm" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <input type="email" placeholder="Work Email*" className="bg-slate-100 border border-slate-300 rounded px-4 py-3 w-full text-sm" />
                    <input type="tel" placeholder="Phone Number" className="bg-slate-100 border border-slate-300 rounded px-4 py-3 w-full text-sm" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <select className="bg-slate-100 border border-slate-300 rounded px-4 py-3 w-full text-sm text-slate-500">
                      <option>Industry</option>
                    </select>
                    <input type="text" placeholder="Company*" className="bg-slate-100 border border-slate-300 rounded px-4 py-3 w-full text-sm" />
                  </div>
                  <select className="bg-slate-100 border border-slate-300 rounded px-4 py-3 w-full text-sm text-slate-500">
                    <option>Country*</option>
                  </select>
                  <div className="text-center pt-2">
                    <p className="text-xs text-blue-400 mb-4 hover:underline cursor-pointer">Your privacy is important to us.</p>
                    <Button className="bg-[#10b981] hover:bg-[#059669] text-white font-bold py-3 px-10 rounded-full w-full uppercase shadow-lg">
                      SUBMIT
                    </Button>
                  </div>
                </form>
              </AnimatedSection>

              {/* Text Content */}
              <AnimatedSection delay={200} className="text-white">
                <h2 className="text-4xl font-bold mb-6 text-white">See CarpacSoft in Action!</h2>
                <p className="text-lg leading-relaxed text-white">
                  Our CarpacSoft experts are ready to guide you through a personalized demo, answer your questions, and show you how CarpacSoft can help you identify risks, improve cross-team collaboration, and drive faster time to market.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default WhyJama;



