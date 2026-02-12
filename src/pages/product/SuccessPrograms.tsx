import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { DemoForm } from "@/components/sections/DemoForm";
import {
  BarChart,
  Handshake,
  Timer,
  Gauge,
  Target,
  Code,
  Database,
  Users,
  Headphones,
  ArrowRight,
  Plane,
  Car,
  Stethoscope,
  Cpu,
  Factory,
  Quote
} from "lucide-react";

// Hero Landscape SVG
const HeroLandscape = () => (
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
    <svg viewBox="0 0 1440 600" className="w-full h-full preserve-3d" preserveAspectRatio="none">
      <defs>
        <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2563eb" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.4" />
        </linearGradient>
        <linearGradient id="hill1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4ade80" />
          <stop offset="100%" stopColor="#22c55e" />
        </linearGradient>
        <linearGradient id="hill2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#86efac" />
          <stop offset="100%" stopColor="#4ade80" />
        </linearGradient>
      </defs>

      {/* Sky */}
      <rect width="100%" height="100%" fill="url(#skyGrad)" />

      {/* Distant Mountains */}
      <path d="M0 400 L 300 150 L 600 400 L 900 200 L 1440 450 V 600 H 0 Z" fill="#1e3a8a" opacity="0.2" />

      {/* Background Hills */}
      <path d="M-100 600 C 200 400, 600 300, 900 500 S 1600 400, 1600 600 Z" fill="url(#hill2)" />

      {/* Foreground Hills */}
      <path d="M0 600 C 300 500, 500 550, 800 450 S 1440 500, 1440 600 Z" fill="url(#hill1)" opacity="0.9" />

      {/* Llamas (Abstract representation) */}
      <g transform="translate(200, 480) scale(0.8)">
        <path d="M40 0 L 40 -60 Q 40 -80 60 -80 L 70 -80 Q 80 -80 80 -60 L 80 0 Z" fill="#ea580c" /> {/* Neck */}
        <rect x="20" y="0" width="80" height="50" rx="10" fill="#ea580c" /> {/* Body */}
        <rect x="25" y="50" width="10" height="30" fill="#c2410c" /> {/* Leg */}
        <rect x="85" y="50" width="10" height="30" fill="#c2410c" /> {/* Leg */}
        <circle cx="65" cy="-70" r="2" fill="white" /> {/* Eye */}
        <path d="M20 0 L 100 0" stroke="#fbbf24" strokeWidth="4" strokeDasharray="4 4" /> {/* Blanket */}
      </g>

      <g transform="translate(1100, 450) scale(1.2)">
        <path d="M40 0 L 40 -60 Q 40 -80 60 -80 L 70 -80 Q 80 -80 80 -60 L 80 0 Z" fill="#f43f5e" /> {/* Neck */}
        <rect x="20" y="0" width="80" height="50" rx="10" fill="#f43f5e" /> {/* Body */}
        <rect x="25" y="50" width="10" height="30" fill="#be123c" /> {/* Leg */}
        <rect x="85" y="50" width="10" height="30" fill="#be123c" /> {/* Leg */}
        <circle cx="65" cy="-70" r="2" fill="white" /> {/* Eye */}
      </g>
    </svg>
  </div>
);

export default function SuccessPrograms() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-1">

        {/* HERO SECTION */}
        <section className="relative h-[650px] flex items-center overflow-hidden">
          <HeroLandscape />
          <div className="container mx-auto px-4 relative z-10 pt-20">
            <AnimatedSection className="max-w-3xl text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-md text-white">Success Programs</h1>
              <p className="text-xl md:text-2xl mb-10 leading-relaxed drop-shadow-sm font-medium">
                At CarpacSoft, we put client success at the forefront of everything we do. Achieve your business goals and accelerate time to value with CarpacSoft® Success Programs.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/company/contact">
                  <Button className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-bold py-4 px-10 rounded-full uppercase text-sm tracking-wide shadow-lg border-none">
                    CONTACT US
                  </Button>
                </Link>
                <Button className="bg-white hover:bg-slate-100 text-[#0ea5e9] font-bold py-4 px-10 rounded-full uppercase text-sm tracking-wide shadow-lg border-none">
                  SUCCESS CATALOG
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ADOPTION APPROACH SECTION */}
        <section className="py-24 bg-white text-center">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-700 mb-8 max-w-4xl mx-auto leading-tight">
                Adoption-oriented Approach, Designed for How Your Teams Work
              </h2>
              <p className="max-w-4xl mx-auto text-slate-600 mb-20 leading-relaxed text-lg">
                We work with your team to quickly onboard and launch CarpacSoft. We have many training offerings available from self-service tutorials to bespoke private trainings. Expert consulting and training to balance industry best practices with the practicalities of how you plan, build, and test your products.
              </p>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
                {[
                  { icon: BarChart, title: "Benchmarking", desc: "Trace Score™ & Requirement Quality Score™—see where your team stands and work with us to improve." },
                  { icon: Handshake, title: "Consulting", desc: "Guidance on your initial roll-out to align with your people, process, and data." },
                  { icon: Timer, title: "Training", desc: "Support for ongoing adoption across enterprise deployments." },
                  { icon: Gauge, title: "Optimization", desc: "Incorporate process improvements, onboarding of new teams, and adoption of new CarpacSoft capabilities." }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center group">
                    <div className="w-24 h-24 mb-8 text-jama-blue transition-transform duration-300 group-hover:scale-110">
                      <item.icon className="w-full h-full" strokeWidth={1.2} />
                    </div>
                    <h3 className="text-[#0066cc] font-bold text-xl mb-4">{item.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* EXPERT TECHNICAL SERVICES SECTION */}
        <section className="py-24 bg-slate-50 text-center">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-700 mb-8">Expert Technical Services</h2>
              <p className="max-w-3xl mx-auto text-slate-600 mb-20 text-lg">
                We offer a broad array of technical services designed to address your support needs to ensure optimal use of CarpacSoft.
              </p>

              <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                <div className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 mb-8 text-purple-600 bg-purple-50 p-4 rounded-xl">
                    <Target className="w-full h-full" />
                  </div>
                  <h3 className="text-[#0066cc] font-bold text-xl mb-4">Integrations</h3>
                  <p className="text-slate-600 leading-relaxed">Eliminate silos by connecting critical data and systems to enable Live Traceability™.</p>
                </div>
                <div className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 mb-8 text-blue-600 bg-blue-50 p-4 rounded-xl">
                    <Code className="w-full h-full" />
                  </div>
                  <h3 className="text-[#0066cc] font-bold text-xl mb-4">Development Services</h3>
                  <p className="text-slate-600 leading-relaxed">Create custom reports, extensions, and scripts to support your own development efforts.</p>
                </div>
                <div className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 mb-8 text-orange-500 bg-orange-50 p-4 rounded-xl">
                    <Database className="w-full h-full" />
                  </div>
                  <h3 className="text-[#0066cc] font-bold text-xl mb-4">Data Services</h3>
                  <p className="text-slate-600 leading-relaxed">Support for data migration, data exchange extensions, and set-up for partner integrations.</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* SUCCESS PROGRAMS BANNER */}
        <section className="py-24 bg-gradient-to-r from-emerald-400 to-sky-400 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-slate-800">Success Programs</h2>
              <p className="max-w-5xl mx-auto text-slate-800 mb-12 leading-relaxed text-xl font-medium">
                When you buy CarpacSoft, you're not just buying our products. Our Customer Success team stands behind you, delivering the expertise, guidance, and resources you need to see a quick return on your investment and achieve your business goals.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Button className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-bold py-4 px-10 rounded-full uppercase text-sm shadow-xl border-none">
                  USER COMMUNITY
                </Button>
                <Button className="bg-white hover:bg-slate-50 text-[#0ea5e9] font-bold py-4 px-10 rounded-full uppercase text-sm shadow-xl border-none">
                  SUPPORT TEAM
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* FORTUNE 100 SECTION */}
        <section className="py-32 bg-[#05003B] text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent"></div>
          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection className="text-center">
              <div className="inline-block border-b-2 border-white/20 pb-4 mb-12">
                <h2 className="text-7xl font-serif font-bold tracking-tighter leading-none">
                  FORTUNE<br /><span className="text-8xl">100</span>
                </h2>
              </div>

              <div className="max-w-4xl mx-auto mb-16 relative">
                <Quote className="absolute -top-10 -left-10 w-20 h-20 text-blue-500/20" />
                <p className="text-orange-500 italic text-2xl md:text-3xl mb-8 font-medium leading-relaxed">
                  "Enterprise Elite support has been a big value add for us. With the help of our technical account manager, we're able to be more strategic in our overall approach with CarpacSoft and see greater ROI. Being able to move faster and more confidently toward our goals is a big advantage for us."
                </p>
                <div className="text-sm uppercase tracking-[0.2em] text-slate-400">
                  Systems Engineering Methodology Manager<br />
                  <span className="text-white font-bold">Fortune 1000 Semiconductor Company</span>
                </div>
              </div>

              {/* Company Logos */}
              <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-700 mb-16">
                <span className="text-2xl font-bold border-2 border-white/40 px-3 py-1">ABIOMED</span>
                <span className="text-2xl font-bold">Panasonic <span className="text-xs block font-normal tracking-widest text-center uppercase opacity-80 mt-1">Automotive</span></span>
                <span className="text-3xl font-bold tracking-[0.1em]">MERCK</span>
                <span className="text-5xl font-bold lowercase italic font-sans tracking-tighter">lyft</span>
                <div className="flex flex-col items-center leading-none">
                  <span className="text-2xl font-bold">Collins</span>
                  <span className="text-lg font-normal tracking-[0.3em] uppercase opacity-80 mt-1">Aerospace</span>
                </div>
                <span className="text-3xl font-bold tracking-tighter">Deloitte<span className="text-[#00a3cc]">.</span></span>
              </div>

              <Link to="/resources/library">
                <Button className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-bold py-4 px-10 rounded-full uppercase text-sm shadow-xl border-none">
                  SEE MORE CUSTOMER STORIES
                </Button>
              </Link>
            </AnimatedSection>
          </div>
        </section>

        {/* INDUSTRY SPECIFIC SERVICES */}
        <section className="py-24 bg-[#0033a0] text-white">
          <div className="container mx-auto px-4 text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 max-w-4xl mx-auto leading-tight text-white">
                Industry-specific services to ease the path to compliance
              </h2>
              <p className="max-w-4xl mx-auto text-blue-100 text-xl mb-20 leading-relaxed font-light">
                Our teams' years of industry-specific experience and thousands of client engagements allow us to bring best practices to bear, which maximize positive outcomes from your product development process.
              </p>

              <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
                {[
                  { title: "Aerospace & Defense", icon: Plane, desc: "Streamline safety-critical development and accelerate time-to-market.", standards: "ARP 4754/ED-79, DO-178C/ED-12C, DO-254/ED-80" },
                  { title: "Automotive & Semi", icon: Car, desc: "Simplify functional safety and improve cycles across ecosystems.", standards: "ISO 26262, ASPICE, IEC 60812, SEBoK" },
                  { title: "Medical Devices", icon: Stethoscope, desc: "Manage design controls for device requirements and risks.", standards: "ISO 13485, FDA 820.30, ISO 14971, IEC 60812" },
                  { title: "Software Dev", icon: Cpu, desc: "Align stakeholder requirements without slowing down Agile.", standards: "Agile, SAFe®, BABOK®" },
                  { title: "Industrial Machinery", icon: Factory, desc: "Enable compliant product development for hardware & software.", standards: "IEC 60812, ISO 13485, SEBoK" },
                ].map((item, i) => (
                  <div key={i} className="bg-white text-slate-800 rounded-2xl p-8 flex flex-col items-center h-full shadow-lg transform hover:-translate-y-2 transition-all duration-300">
                    <div className="w-24 h-24 rounded-full bg-blue-50 mb-6 flex items-center justify-center relative group">
                      <div className="absolute inset-0 bg-blue-500/10 rounded-full scale-0 group-hover:scale-110 transition-transform"></div>
                      <item.icon className="w-12 h-12 text-[#0033a0] relative z-10" />
                    </div>
                    <h3 className="font-bold text-[#b45309] text-sm mb-4 uppercase tracking-wider h-10 flex items-center justify-center">{item.title}</h3>
                    <p className="text-xs mb-6 text-slate-600 leading-relaxed flex-grow">{item.desc}</p>
                    <div className="text-[10px] text-slate-400 font-mono mb-8 bg-slate-50 p-3 rounded-lg w-full min-h-[60px] flex items-center justify-center uppercase">
                      {item.standards}
                    </div>
                    <Button className="w-full bg-[#05003B] hover:bg-black text-white text-xs font-bold py-3 rounded-full uppercase transition-all tracking-widest border-none">
                      LEARN MORE
                    </Button>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* BOOK A DEMO */}
        <section className="bg-slate-50">
          <DemoForm />
        </section>

      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}
