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

const industries = ["Medical Device", "Automotive", "Aerospace & Defense", "Semiconductor", "Software/Technology", "Other"];
const countries = ["United States", "Canada", "United Kingdom", "Germany", "France", "Japan", "Other"];

export default function DemoFormSection() {
    const { toast } = useToast();
    const [formData, setFormData] = useState({
        firstName: "", lastName: "", email: "", phone: "", industry: "", company: "", country: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast({ title: "Demo Request Submitted!", description: "Our team will reach out shortly." });
    };

    const handleChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    return (
        <section className="py-24 bg-gradient-to-r from-[#212b5a] via-[#3a4484] to-[#4c56a2] relative overflow-hidden">
            {/* Ambient glow effects */}
            <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-blue-500/10 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-purple-500/10 blur-[120px] rounded-full"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-16 max-w-6xl mx-auto">
                    {/* Left Column: Form Card */}
                    <AnimatedSection className="w-full lg:w-[48%]">
                        <div className="bg-white rounded-xl shadow-2xl p-8 md:p-10 border border-slate-100">
                            <h3 className="text-2xl font-bold text-[#002d5b] text-center mb-8">Book a Demo</h3>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <Input
                                        placeholder="First Name*"
                                        value={formData.firstName}
                                        onChange={(e) => handleChange("firstName", e.target.value)}
                                        required
                                        className="bg-slate-50 border-slate-200 placeholder:text-slate-400 py-6"
                                    />
                                    <Input
                                        placeholder="Last Name*"
                                        value={formData.lastName}
                                        onChange={(e) => handleChange("lastName", e.target.value)}
                                        required
                                        className="bg-slate-50 border-slate-200 placeholder:text-slate-400 py-6"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <Input
                                        type="email"
                                        placeholder="Work Email*"
                                        value={formData.email}
                                        onChange={(e) => handleChange("email", e.target.value)}
                                        required
                                        className="bg-slate-50 border-slate-200 placeholder:text-slate-400 py-6"
                                    />
                                    <Input
                                        type="tel"
                                        placeholder="Phone Number"
                                        value={formData.phone}
                                        onChange={(e) => handleChange("phone", e.target.value)}
                                        className="bg-slate-50 border-slate-200 placeholder:text-slate-400 py-6"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <Select value={formData.industry} onValueChange={(v) => handleChange("industry", v)}>
                                        <SelectTrigger className="bg-slate-50 border-slate-200 text-slate-500 py-6">
                                            <SelectValue placeholder="Industry" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-white z-[100]">
                                            {industries.map((i) => <SelectItem key={i} value={i}>{i}</SelectItem>)}
                                        </SelectContent>
                                    </Select>
                                    <Input
                                        placeholder="Company*"
                                        value={formData.company}
                                        onChange={(e) => handleChange("company", e.target.value)}
                                        required
                                        className="bg-slate-50 border-slate-200 placeholder:text-slate-400 py-6"
                                    />
                                </div>
                                <Select value={formData.country} onValueChange={(v) => handleChange("country", v)}>
                                    <SelectTrigger className="bg-slate-50 border-slate-200 text-slate-500 py-6">
                                        <SelectValue placeholder="Country*" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-white z-[100]">
                                        {countries.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                                    </SelectContent>
                                </Select>

                                <p className="text-center text-[13px] text-blue-500 py-2">Your privacy is important to us.</p>

                                <div className="flex justify-center mt-6">
                                    <Button type="submit" className="bg-[#00D16E] hover:bg-[#00B962] text-white font-bold px-12 py-7 rounded-full text-[15px] tracking-widest uppercase shadow-lg border-none transition-all">
                                        SUBMIT
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </AnimatedSection>

                    {/* Right Column: Text Content */}
                    <div className="w-full lg:w-[52%] text-white">
                        <AnimatedSection>
                            <h2 className="text-[36px] md:text-[45px] font-bold mb-6 leading-tight text-white">
                                See CarpacSoft in Action!
                            </h2>
                            <p className="text-lg md:text-xl font-light leading-relaxed opacity-90 max-w-xl">
                                Our CarpacSoft experts are ready to guide you through a personalized demo, answer your questions, and show you how CarpacSoft can help you identify risks, improve cross-team collaboration, and drive faster time to market.
                            </p>
                        </AnimatedSection>
                    </div>
                </div>
            </div>
        </section>
    );
}
