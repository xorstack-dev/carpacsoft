import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import AnimatedSection from "@/components/AnimatedSection";

const industries = ["Medical Device", "Automotive", "Aerospace & Defense", "Industrial Manufacturing", "Financial Services", "Semiconductor", "Software/Technology", "Other"];
const countries = ["United States", "Canada", "United Kingdom", "Germany", "France", "Japan", "Australia", "Other"];

export function DemoForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", phone: "", company: "", country: "", industry: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Demo Request Submitted!", description: "Our team will contact you within 24 hours." });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section id="demo-form" className="relative pt-24 pb-24 overflow-hidden" style={{ background: 'linear-gradient(90deg, #465584 0%, #465584 50%, #3b4267 100%)' }}>
      <div className="absolute top-0 left-0 right-0 h-4 w-full" style={{
        background: 'linear-gradient(45deg, #e0f2fe 33%, transparent 33%) 0 0, linear-gradient(-45deg, #e0f2fe 33%, transparent 33%) 0 0',
        backgroundSize: '20px 40px',
        backgroundColor: 'transparent'
      }}></div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 max-w-6xl mx-auto">
          <AnimatedSection className="w-full lg:w-[48%]">
            <div className="bg-white rounded-lg shadow-2xl p-8">
              <h3 className="text-[28px] font-bold text-jama-navy text-center mb-8">Book a Demo</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="First Name*" className="bg-[#f3f3f3] border-[#e0e0e0] h-12 text-gray-700 placeholder:text-gray-400 rounded" value={formData.firstName} onChange={(e) => handleChange("firstName", e.target.value)} required />
                  <Input placeholder="Last Name*" className="bg-[#f3f3f3] border-[#e0e0e0] h-12 text-gray-700 placeholder:text-gray-400 rounded" value={formData.lastName} onChange={(e) => handleChange("lastName", e.target.value)} required />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="Work Email*" type="email" className="bg-[#f3f3f3] border-[#e0e0e0] h-12 text-gray-700 placeholder:text-gray-400 rounded" value={formData.email} onChange={(e) => handleChange("email", e.target.value)} required />
                  <Input placeholder="Phone Number" type="tel" className="bg-[#f3f3f3] border-[#e0e0e0] h-12 text-gray-700 placeholder:text-gray-400 rounded" value={formData.phone} onChange={(e) => handleChange("phone", e.target.value)} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Select onValueChange={(v) => handleChange("industry", v)}>
                    <SelectTrigger className="bg-[#f3f3f3] border-[#e0e0e0] h-12 text-gray-500 rounded"><SelectValue placeholder="Industry" /></SelectTrigger>
                    <SelectContent>{industries.map(i => <SelectItem key={i} value={i}>{i}</SelectItem>)}</SelectContent>
                  </Select>
                  <Input placeholder="Company*" className="bg-[#f3f3f3] border-[#e0e0e0] h-12 text-gray-700 placeholder:text-gray-400 rounded" value={formData.company} onChange={(e) => handleChange("company", e.target.value)} required />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-1">
                    <Select onValueChange={(v) => handleChange("country", v)}>
                      <SelectTrigger className="bg-[#f3f3f3] border-[#e0e0e0] h-12 text-gray-500 rounded w-full"><SelectValue placeholder="Country*" /></SelectTrigger>
                      <SelectContent>{countries.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="text-center pt-2">
                  <p className="text-xs text-[#5aa1ff] font-medium mb-6">Your privacy is important to us.</p>
                  <Button type="submit" className="bg-gradient-to-b from-[#00c974] to-[#00a35c] hover:from-[#00b568] hover:to-[#009252] text-white font-bold rounded-full px-12 py-6 text-base tracking-wide shadow-md transition-all hover:shadow-lg">
                    SUBMIT
                  </Button>
                </div>
              </form>
            </div>
          </AnimatedSection>

          <AnimatedSection className="w-full lg:w-[45%] text-white text-left">
            <h2 className="text-[40px] font-bold mb-6 leading-[1.2] text-white">See CarpacSoft in Action!</h2>
            <p className="text-lg opacity-90 leading-relaxed font-light">
              Our CarpacSoft experts are ready to guide you through a personalized demo, answer your questions, and show you how CarpacSoft can help you identify risks, improve cross-team collaboration, and drive faster time to market.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

export default DemoForm;



