import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";

export default function FeaturesDemoSection() {
  return (
    <section className="py-24 bg-[#E45B21] relative overflow-hidden">
      {/* Subtle Background Texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')] opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
          {/* Left: Illustration */}
          <AnimatedSection className="w-full lg:w-1/3 flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Main Circle Base (Transparent White) */}
              <div className="absolute inset-0 bg-white/10 rounded-full backdrop-blur-[2px]"></div>

              {/* SVG Illustration */}
              <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-2xl relative z-10">
                {/* Inner Light Beige Circle */}
                <circle cx="200" cy="200" r="140" fill="#FFF5E6" />

                {/* Bar Chart (Left Side) */}
                <rect x="110" y="220" width="22" height="60" fill="#00D1FF" rx="2" />
                <rect x="135" y="150" width="30" height="130" fill="#F28E1C" rx="3" />
                <rect x="170" y="190" width="25" height="90" fill="#9DA9B7" rx="2" />

                {/* Rising Line Chart (Bottom) */}
                <path d="M140,320 L160,280 L200,300 L240,220 L270,250 L320,160" fill="none" stroke="#0066CC" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M305,175 L320,160 L335,175" fill="none" stroke="#0066CC" strokeWidth="8" strokeLinecap="round" />

                {/* Gears (Top Right) */}
                <g transform="translate(260, 110) rotate(15)">
                  <circle cx="0" cy="0" r="28" fill="#1D4ED8" />
                  {[...Array(8)].map((_, i) => (
                    <rect key={i} x="-8" y="-35" width="16" height="12" fill="#1D4ED8" rx="2" transform={`rotate(${i * 45})`} />
                  ))}
                  <circle cx="0" cy="0" r="10" fill="#FFF5E6" />
                </g>
                <g transform="translate(245, 170) rotate(-10)">
                  <circle cx="0" cy="0" r="20" fill="#1D4ED8" />
                  {[...Array(8)].map((_, i) => (
                    <rect key={i} x="-6" y="-25" width="12" height="10" fill="#1D4ED8" rx="2" transform={`rotate(${i * 45})`} />
                  ))}
                  <circle cx="0" cy="0" r="7" fill="#FFF5E6" />
                </g>

                {/* Magnifying Glass (Center) */}
                <g transform="translate(190, 130)">
                  <line x1="45" y1="45" x2="100" y2="100" stroke="#002d5b" strokeWidth="18" strokeLinecap="round" />
                  <line x1="45" y1="45" x2="80" y2="80" stroke="#8B4513" strokeWidth="12" strokeLinecap="round" />
                  <circle cx="0" cy="0" r="55" fill="white" fillOpacity="0.4" stroke="#F28E1C" strokeWidth="9" />
                  <circle cx="0" cy="0" r="48" fill="none" stroke="#C0C8D1" strokeWidth="1" />
                </g>
              </svg>
            </div>
          </AnimatedSection>

          {/* Right: Text Content */}
          <div className="w-full lg:w-2/3 text-center lg:text-left text-white">
            <AnimatedSection>
              <h2 className="text-[32px] md:text-[38px] font-bold mb-6 leading-tight">
                Discover all that CarpacSoft has to offer!
              </h2>
              <p className="text-lg md:text-xl font-light leading-relaxed mb-10 max-w-2xl">
                Interested in learning more about how CarpacSoft can help your organization achieve its goals? The CarpacSoft Discovery Center lets you control your knowledge journey and get your questions answered, all at your own pace. We've put our most relevant and valuable content —from discovery to optimization—right at your fingertips!
              </p>
              <Link to="/resources/discovery" target="_blank">
                <Button className="bg-gradient-to-r from-[#0066CC] to-[#00D1D1] hover:shadow-xl text-white px-12 py-8 rounded-full font-bold text-[15px] tracking-widest border-none transition-all uppercase">
                  LEARN MORE
                </Button>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
