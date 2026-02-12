import { Link } from "react-router-dom";
import { Lock, Stethoscope, Car, Plane, Server, Cpu, Landmark } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const industries = [
  { name: "Medical Device & Life Sciences", icon: Stethoscope, color: "text-blue-500", link: "/solutions/medical-device-life-sciences" },
  { name: "Automotive", icon: Car, color: "text-slate-600", link: "/solutions/automotive" },
  { name: "Aerospace & Defense", icon: Plane, color: "text-purple-600", link: "/solutions/aerospace-defense" },
  { name: "Software Development", icon: Server, color: "text-green-600", link: "/solutions/software-development" },
  { name: "Industrial Machinery & Technology, Consumer Electronics, and Energy", icon: Cpu, color: "text-orange-500", link: "/solutions/industrial-manufacturing" },
  { name: "Financial Services & Insurance", icon: Landmark, color: "text-red-500", link: "/solutions/financial-services" },
];

export function ComplianceSection() {
  return (
    <section>
      {/* Part 1: Compliance Standards */}
      <div className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-start gap-16 max-w-6xl mx-auto">
            <AnimatedSection className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-jama-navy mb-6">
                Comply with Industry Standards Without Slowing Development
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                CarpacSoft eliminates manual compliance efforts with frameworks and templates aligned to industry-specific standards and best practices, helping to streamline compliance and speed development.
              </p>
            </AnimatedSection>
            <AnimatedSection className="w-full lg:w-1/2">
              <div className="grid gap-4">
                {industries.map((industry, index) => (
                  <Link to={industry.link} key={index} className="flex items-start gap-3 p-2 rounded-lg hover:bg-white hover:shadow-sm transition-all cursor-pointer">
                    <div className="mt-1 p-1 bg-white rounded-full shadow-sm">
                      <industry.icon className={`w-5 h-5 ${industry.color}`} />
                    </div>
                    <span className="font-semibold text-jama-navy text-sm md:text-base pt-1">{industry.name}</span>
                  </Link>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Part 2: Enterprise Security */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center max-w-6xl mx-auto">
          <AnimatedSection className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-jama-navy mb-6">
              Enterprise-Grade <span className="text-jama-orange">Security and Reliability</span> You Can Count On to Keep Your Data Protected and Compliant
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              CarpacSoft® is the only requirements management platform with enterprise-grade security across every layer. Unlike other vendors, CarpacSoft provides a <span className="font-semibold text-jama-navy">SOC 2 Type II</span> certified application and data center, plus <span className="font-semibold text-jama-navy">touchless upgrades</span> and <span className="font-semibold text-jama-navy">built-in disaster recovery</span>—reducing risk, ensuring compliance, and keeping your requirements secure and accessible.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="grid md:grid-cols-3 gap-12 text-center">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 border-4 border-blue-600 text-blue-600 font-bold flex flex-col items-center justify-center p-1 mb-4 relative" style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}>
                  <div className="w-full h-full border border-blue-600 flex flex-col items-center justify-center bg-blue-50">
                    <div className="text-xs">TUV</div>
                    <div className="text-[10px]">SUD</div>
                  </div>
                </div>
                <p className="text-sm text-slate-600 max-w-xs">CarpacSoft is suitably validated by TÜV SÜD for safety-related development</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-16 flex items-center mb-4">
                  <span className="text-4xl font-black text-jama-navy italic tracking-tighter">TiSAX</span>
                  <sup className="text-sm text-jama-navy">®</sup>
                </div>
                <p className="text-sm text-slate-600 max-w-xs">CarpacSoft is TISAX Level 2 certified, ensuring secure automotive industry compliance</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-16 flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 border-2 border-black rounded-full flex items-center justify-center relative">
                    <div className="absolute w-12 h-[2px] bg-black rotate-45"></div>
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                  </div>
                  <span className="text-3xl font-light text-black">OWASP</span>
                  <sup className="text-xs">®</sup>
                </div>
                <p className="text-sm text-slate-600 max-w-xs">CarpacSoft codes with OWASP best practices</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-20 bg-jama-navy rounded-b-full relative flex items-center justify-center text-white mb-4 border-t-4 border-jama-orange">
                  <div className="text-center">
                    <div className="text-[8px] font-bold">SOC 2 Type II</div>
                    <div className="text-[6px] uppercase border px-1 rounded bg-jama-orange border-none mt-1">Audited</div>
                  </div>
                </div>
                <p className="text-sm text-slate-600 max-w-xs">CarpacSoft is SOC2 Type 2 certified in both the server and application</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center mb-4 relative">
                  <div className="absolute -top-3 w-8 h-8 rounded-full border-4 border-black border-b-0"></div>
                  <div className="w-3 h-3 bg-white rounded-full mb-2"></div>
                  <div className="w-1 h-3 bg-white rounded-full"></div>
                </div>
                <p className="text-sm text-slate-600 max-w-xs">CarpacSoft ensures strong privacy management practices</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-16 flex items-center mb-4">
                  <span className="bg-[#2b7bb5] text-white font-bold text-2xl px-3 py-1">TLS</span>
                </div>
                <p className="text-sm text-slate-600 max-w-xs">Transport Layer Security (TLS) ensures data transferred is secured and encrypted in CarpacSoft</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

export default ComplianceSection;



