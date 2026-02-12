import { Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";

export default function FeaturesSecuritySection() {
  return (
    <>
      {/* G2 Awards Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16 max-w-7xl mx-auto">
            {/* Left: G2 Grid Visualization */}
            <AnimatedSection className="w-full lg:w-1/2 relative">
              <div className="bg-white border-[1.5px] border-[#002d5b] rounded-sm p-6 md:p-10 shadow-sm aspect-square relative">
                {/* Thin Grid Lines */}
                <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-40 pointer-events-none">
                  {[...Array(36)].map((_, i) => (
                    <div key={i} className="border-[0.5px] border-slate-200"></div>
                  ))}
                </div>
                {/* Primary Axes */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="h-full w-[1.5px] bg-[#002d5b]/60"></div>
                  <div className="w-full h-[1.5px] bg-[#002d5b]/60"></div>
                </div>

                {/* Quadrant Labels */}
                <span className="absolute top-5 left-5 text-[14px] font-bold text-[#002d5b] opacity-90">Contenders</span>
                <span className="absolute top-5 right-5 text-[14px] font-bold text-[#002d5b] opacity-90">Leaders</span>
                <span className="absolute bottom-5 left-5 text-[14px] font-bold text-[#002d5b] opacity-90">Niche</span>
                <span className="absolute bottom-5 right-5 text-[14px] font-bold text-[#002d5b] opacity-90 tracking-tight">High Performers</span>

                {/* Plot Points */}
                <div className="relative w-full h-full">
                  {/* CarpacSoft Leader Logo - Positioned high in Leaders */}
                  <div className="absolute top-[5%] right-[5%] z-20 group cursor-pointer transition-transform hover:scale-110">
                    <div className="bg-white p-2.5 shadow-[0_4px_20px_rgba(0,0,0,0.15)] border border-slate-200 rounded-lg flex flex-col items-center">
                      <img src="/Logo.jpg" alt="CarpacSoft" className="h-10 w-auto" />
                      <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-slate-400 rounded-full border-2 border-white shadow-sm"></div>
                    </div>
                  </div>

                  {/* Competitor Points - Distributed like the real G2 grid */}
                  {[
                    { t: '12%', l: '8%', name: 'IBM', color: '#006699' },
                    { t: '22%', l: '14%', name: 'C', color: '#10B981' },
                    { t: '30%', l: '10%', name: 'P', color: '#3B82F6' },
                    { t: '40%', l: '15%', name: 'V', color: '#8B5CF6' },
                    { t: '22%', l: '35%', name: 'A', color: '#2563EB' },
                    { t: '65%', l: '18%', name: 'S', color: '#EF4444' },
                    { t: '78%', l: '12%', name: 'Q', color: '#F59E0B' },
                    { t: '58%', l: '42%', name: 'R', color: '#002D5B' },
                    { t: '72%', l: '35%', name: 'M', color: '#10B981' },
                    { t: '18%', l: '75%', name: 'O', color: '#FF0000' },
                    { t: '28%', l: '65%', name: 'SM', color: '#003399' },
                    { t: '52%', l: '82%', name: 'AR', color: '#111827' },
                  ].map((logo, idx) => (
                    <div key={idx} className="absolute group cursor-default" style={{ top: logo.t, left: logo.l }}>
                      <div className="relative w-8 h-8 bg-white border border-slate-200 shadow-sm rounded flex items-center justify-center transition-all group-hover:shadow-md group-hover:scale-105">
                        <span className="text-[10px] font-black opacity-30 tracking-tighter" style={{ color: logo.color }}>{logo.name}</span>
                        <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-slate-200 rounded-full border border-white"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Right Column: Heading and Badges */}
            <div className="w-full lg:w-1/2">
              <AnimatedSection>
                <h2 className="text-[32px] md:text-[38px] font-bold text-[#002d5b] leading-tight mb-12 max-w-lg">
                  See why CarpacSoft is the #1-rated requirements management software on the G2 Grid
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-14">
                  {[
                    { l1: "WINTER 2026", l2: "Leader", color: "#FF8E1C" },
                    { l1: "WINTER 2026", l2: "Best Relationship", color: "#00CFD1" },
                    { l1: "WINTER 2026 EMEA", l2: "Regional Leader", color: "#E91E63" },
                    { l1: "WINTER 2026", l2: "Leader", l3: "ENTERPRISE", color: "#FF8E1C" }
                  ].map((badge, i) => (
                    <div key={i} className="flex flex-col items-center">
                      <div className="relative w-full max-w-[110px] aspect-[1/1.3] bg-white border border-slate-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] flex flex-col pt-1">
                        {/* Shingle Header */}
                        <div className="flex justify-between items-center px-1.5 pb-1 border-b border-slate-100">
                          <span className="text-[7px] font-bold text-slate-400 tracking-tighter">{badge.l1}</span>
                          <div className="w-3.5 h-3.5 bg-[#FF4500] rounded-full flex items-center justify-center">
                            <span className="text-white text-[7px] font-black leading-none">G</span>
                          </div>
                        </div>
                        {/* Shingle Body */}
                        <div className="flex-1 flex flex-col items-center justify-center px-2 py-3">
                          <span className="text-[13px] font-bold text-[#002d5b] leading-[1.1] text-center mb-0.5">
                            {badge.l2}
                          </span>
                          {badge.l3 && (
                            <span className="text-[7px] font-bold text-slate-400 tracking-[0.1em] mt-0.5">{badge.l3}</span>
                          )}
                        </div>
                        {/* Triangle Pointed Bottom */}
                        <div className="absolute bottom-0 left-0 right-0 h-5 w-full">
                          <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="w-full h-full drop-shadow-sm">
                            <path d="M0 0 L50 20 L100 0 Z" fill={badge.color} />
                          </svg>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <Link to="/resources/Report-g2-grid" target="_blank">
                  <Button className="bg-[#00D16E] hover:bg-[#00B962] text-white px-12 py-8 rounded-full font-bold text-[15px] tracking-widest uppercase transition-all shadow-[0_10px_20px_-5px_rgba(0,209,110,0.3)] border-none">
                    GET THE REPORT
                  </Button>
                </Link>

              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Superior Support & Professional Services */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16 max-w-7xl mx-auto">
            {/* Left Column: Illustration */}
            <AnimatedSection className="w-full lg:w-1/2 relative">
              <div className="relative aspect-[4/3] w-full max-w-xl mx-auto">
                {/* SVG Isometric Illustration */}
                <svg viewBox="0 0 600 450" className="w-full h-full drop-shadow-xl">
                  {/* Desk Surface */}
                  <path d="M120,320 L380,320 L480,240 L220,240 Z" fill="#F3F4F6" />
                  <path d="M120,320 L120,335 L380,335 L380,320 Z" fill="#E5E7EB" />
                  <path d="M380,320 L380,335 L480,255 L480,240 Z" fill="#D1D5DB" />

                  {/* Desk Legs */}
                  <rect x="135" y="335" width="8" height="80" fill="#8B4513" />
                  <rect x="365" y="335" width="8" height="80" fill="#8B4513" />
                  <rect x="465" y="255" width="8" height="80" fill="#8B4513" />
                  <rect x="235" y="255" width="8" height="80" fill="#8B4513" />

                  {/* Character sitting at desk */}
                  <g transform="translate(180, 200)">
                    {/* Chair */}
                    <path d="M0,120 L60,120 L80,90 L20,90 Z" fill="#00AEEF" />
                    <path d="M0,120 L0,180 M60,120 L60,180" stroke="#8B4513" strokeWidth="6" />
                    <rect x="5" y="60" width="50" height="60" rx="4" fill="#00AEEF" />
                    {/* Person */}
                    <circle cx="45" cy="15" r="20" fill="#FFD4B2" />
                    <path d="M15,40 Q45,20 75,40 L65,110 L25,110 Z" fill="#2563EB" />
                    <rect x="30" y="55" width="30" height="15" fill="#FFFFFF" />
                    {/* Arms */}
                    <path d="M25,50 L0,85 L30,100" stroke="#2563EB" strokeWidth="12" fill="none" strokeLinecap="round" />
                    <path d="M65,50 L95,85 L70,100" stroke="#2563EB" strokeWidth="12" fill="none" strokeLinecap="round" />
                  </g>

                  {/* Smartphone/Tablet Display */}
                  <g transform="translate(340, 40) skewY(-15)">
                    <rect x="0" y="0" width="100" height="200" rx="10" fill="#374151" />
                    <rect x="5" y="5" width="90" height="190" rx="6" fill="#FFFFFF" />
                    {/* UI Elements on screen */}
                    <rect x="15" y="20" width="70" height="8" rx="4" fill="#00AEEF" />
                    <rect x="15" y="40" width="50" height="4" rx="2" fill="#E5E7EB" />
                    <rect x="15" y="50" width="60" height="4" rx="2" fill="#E5E7EB" />
                    <rect x="15" y="70" width="70" height="30" rx="4" fill="#F9FAFB" stroke="#E5E7EB" strokeWidth="1" />
                    <circle cx="80" cy="180" r="8" fill="#00AEEF" />
                  </g>

                  {/* Floating Icons/Elements */}
                  <g>
                    {/* Chat Bubble 1 */}
                    <rect x="250" y="60" width="80" height="40" rx="20" fill="#FFFFFF" stroke="#E5E7EB" />
                    <circle cx="270" cy="80" r="12" fill="#F87171" />
                    <rect x="290" y="75" width="30" height="4" rx="2" fill="#FCA5A5" />
                    <rect x="290" y="85" width="20" height="4" rx="2" fill="#E5E7EB" />

                    {/* Chat Bubble 2 */}
                    <rect x="260" y="115" width="80" height="40" rx="20" fill="#FFFFFF" stroke="#E5E7EB" />
                    <circle cx="280" cy="135" r="12" fill="#60A5FA" />
                    <rect x="300" y="130" width="30" height="4" rx="2" fill="#93C5FD" />
                    <rect x="300" y="140" width="20" height="4" rx="2" fill="#E5E7EB" />

                    {/* Blue Phone circle */}
                    <circle cx="310" cy="60" r="25" fill="#2563EB" />
                    <path d="M302,52 L310,52 L310,68 L302,68 Z" fill="white" transform="rotate(-45 310 60)" />

                    {/* Plant */}
                    <path d="M410,320 Q430,260 450,320" fill="#3B82F6" opacity="0.8" />
                    <path d="M430,320 Q450,230 470,320" fill="#3B82F6" />
                    <rect x="425" y="320" width="30" height="40" fill="#DBEAFE" rx="4" />
                  </g>
                </svg>
              </div>
            </AnimatedSection>

            {/* Right Column: Text and Card */}
            <div className="w-full lg:w-1/2">
              <AnimatedSection>
                <h2 className="text-[28px] md:text-[34px] font-bold text-slate-800 leading-tight mb-6">
                  Superior Support and Professional Services designed to ensure that you get the value you need and expect from CarpacSoft
                </h2>
                <p className="text-[#3B82F6] text-lg font-medium leading-relaxed mb-10">
                  We are your partner from initial implementation and deployment, ensuring that our users understand how to get the most from the platform, and help you evolve the solution to meet your changing business needs.
                </p>

                {/* Success Programs Card */}
                <div className="bg-[#002d5b] rounded-2xl p-8 md:p-10 shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16"></div>
                  <h3 className="text-[#f28e1c] text-xl font-bold mb-6 text-center">Our Success Programs</h3>
                  <p className="text-white text-base leading-relaxed text-center mb-8 opacity-90 max-w-md mx-auto">
                    CarpacSoft Success Programs balance industry best practices with adoption-oriented practicalities. Various service packages are available to meet your unique needs and help you align your people, processes, and data to maximize your development success.
                  </p>
                  <div className="flex justify-center">
                    <Link to="/resources/success-programs">
                      <Button className="bg-gradient-to-r from-[#0066CC] to-[#00D1D1] hover:opacity-95 text-white px-12 py-7 rounded-full font-bold text-[14px] tracking-widest uppercase border-none transition-all shadow-lg">
                        SEE OUR SERVICES
                      </Button>
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Security Grid Section (Redesigned to Light Theme per Image 1) */}
      <section className="py-24 bg-[#F9FBFF]">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-6xl mx-auto text-center mb-20">
            <h2 className="text-[28px] md:text-[34px] font-bold text-slate-800 leading-tight mb-8">
              CarpacSoft is the Leader in Security, SLAs, High Availability, Touchless Upgrades, and Disaster Recovery
            </h2>
            <p className="text-slate-600 text-[16px] leading-[1.8] max-w-5xl mx-auto opacity-80">
              CarpacSoft is the only vendor in the space that offers the following: SOC 2 Type 2 certified application and data center (others data center only), SLAs above 99% (others at 95% or lower), touchless upgrades (others require your IT to manually update hosted app), high availability SLA (others don't offer), disaster recovery SLA (others don't offer).
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
            {/* TÜV SÜD */}
            <AnimatedSection className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 mb-6 bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-slate-100 flex items-center justify-center transition-transform group-hover:-translate-y-2">
                <div className="w-16 h-16 bg-[#002D5B] rounded-full flex items-center justify-center">
                  <span className="text-white font-black text-[10px]">TÜV</span>
                </div>
              </div>
              <p className="text-slate-600 text-[13px] leading-relaxed">Suitably validated by TÜV SÜD for safety-related development</p>
            </AnimatedSection>

            {/* OWASP */}
            <AnimatedSection className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 mb-6 bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-slate-100 flex items-center justify-center transition-transform group-hover:-translate-y-2">
                <div className="w-14 h-16 border-2 border-[#00AEEF] rounded-sm flex items-center justify-center">
                  <Shield className="w-8 h-8 text-[#00AEEF]" />
                </div>
              </div>
              <p className="text-slate-600 text-[13px] leading-relaxed">CarpacSoft® codes with OWASP best practices</p>
            </AnimatedSection>

            {/* SOC 2 */}
            <AnimatedSection className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 mb-6 bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-slate-100 flex items-center justify-center transition-transform group-hover:-translate-y-2">
                <div className="w-16 h-16 bg-[#EF4444] rounded-lg rotate-45 flex items-center justify-center">
                  <div className="-rotate-45 flex flex-col items-center">
                    <span className="text-white text-[8px] font-bold">SOC 2 Type 2</span>
                    <span className="text-[6px] text-white opacity-80 uppercase">Audited</span>
                  </div>
                </div>
              </div>
              <p className="text-slate-600 text-[13px] leading-relaxed">CarpacSoft is SOC2 Type 2 certified in both the server and application</p>
            </AnimatedSection>

            {/* Privacy */}
            <AnimatedSection className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 mb-6 bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-slate-100 flex items-center justify-center transition-transform group-hover:-translate-y-2">
                <div className="w-16 h-16 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
              </div>
              <p className="text-slate-600 text-[13px] leading-relaxed">Ensures strong privacy management practices</p>
            </AnimatedSection>

            {/* TLS */}
            <AnimatedSection className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 mb-6 bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-slate-100 flex items-center justify-center transition-transform group-hover:-translate-y-2">
                <div className="w-16 h-10 bg-[#00AEEF] flex items-center justify-center rounded-sm">
                  <span className="text-white font-bold text-lg">TLS</span>
                </div>
              </div>
              <p className="text-slate-600 text-[13px] leading-relaxed">Transport Layer Security (TLS) ensures data transferred is secured and encrypted</p>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}



