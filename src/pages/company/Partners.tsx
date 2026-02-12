import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import {
  Package,
  FileCheck,
  DollarSign,
  Globe,
  AlertTriangle,
  Layers,
  Users,
  Handshake,
  Lightbulb,
  ThumbsUp,
  MessageSquare
} from "lucide-react";

// Partner benefits data
const partnerBenefits = [
  {
    icon: <Package size={40} className="text-[#0ea5e9]" />,
    bgIcon: "bg-[#fef3c7]",
    title: "Product Portfolio Expansion",
    description: "Diversify your offerings by including our products or services, meeting a broader range of customer needs."
  },
  {
    icon: <FileCheck size={40} className="text-[#10b981]" />,
    bgIcon: "bg-[#d1fae5]",
    title: "Lead Generation",
    description: "Benefit from lead sharing and customer referrals, helping you identify and pursue potential customers more efficiently."
  },
  {
    icon: <DollarSign size={40} className="text-[#10b981]" />,
    bgIcon: "bg-[#d1fae5]",
    title: "Revenue Sharing and Commissions",
    description: "Earn financial incentives, such as commissions or discounts, based on your sales performance."
  },
  {
    icon: <Globe size={40} className="text-[#0ea5e9]" />,
    bgIcon: "bg-[#fef3c7]",
    title: "Market Expansion",
    description: "Extend your reach by leveraging our established presence in different regions or industries."
  },
  {
    icon: <AlertTriangle size={40} className="text-[#f59e0b]" />,
    bgIcon: "bg-[#fef3c7]",
    title: "Reduced Risk and Overhead",
    description: "Mitigate the risks associated with product development and launch, reducing research and development costs."
  },
  {
    icon: <Layers size={40} className="text-[#0ea5e9]" />,
    bgIcon: "bg-[#d1fae5]",
    title: "Diversification",
    description: "Diversify your product or service offerings by partnering with multiple vendors, reducing dependency on one revenue source."
  },
  {
    icon: <Users size={40} className="text-[#0ea5e9]" />,
    bgIcon: "bg-[#dbeafe]",
    title: "Customer Retention",
    description: "Retain existing customers and attract new ones by offering a broader range of products or services through partnerships."
  },
  {
    icon: <Handshake size={40} className="text-[#0ea5e9]" />,
    bgIcon: "bg-[#dbeafe]",
    title: "Networking Opportunities",
    description: "Connect with other businesses in our ecosystem through valuable networking opportunities."
  },
  {
    icon: <Lightbulb size={40} className="text-[#f59e0b]" />,
    bgIcon: "bg-[#fef3c7]",
    title: "Innovation and Product Development",
    description: "Collaborate with us on product development and innovation initiatives to stay ahead in the market."
  }
];

// Partnership types
const partnershipTypes = [
  {
    icon: <DollarSign size={40} className="text-[#10b981]" />,
    bgColor: "bg-[#fef3c7]",
    borderColor: "border-[#fbbf24]",
    title: "Reseller",
    points: [
      "Join our Reseller Partnership Program and start selling our products directly to end-users, playing a vital role in our distribution network.",
      "Enjoy competitive profit margins and receive support from our well-established brand."
    ]
  },
  {
    icon: <ThumbsUp size={40} className="text-[#f59e0b]" />,
    bgColor: "bg-[#fef3c7]",
    borderColor: "border-[#fbbf24]",
    title: "Referral",
    points: [
      "Become our Referral Partner by recommending our services to your network.",
      "Earn rewards or commissions for each successful referral—a straightforward and rewarding way to contribute to our growth."
    ]
  },
  {
    icon: <MessageSquare size={40} className="text-[#0ea5e9]" />,
    bgColor: "bg-[#f59e0b]",
    borderColor: "border-[#f59e0b]",
    title: "Service/Consulting",
    points: [
      "Explore our Service Partner Program for collaborative possibilities.",
      "Integrate your expertise to deliver specialized services to our clients and become part of a network of strategic partners for mutual success and business growth."
    ]
  }
];

const Partners = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    industry: "",
    email: "",
    phone: "",
    jobTitle: "",
    country: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-1">

        {/* HERO SECTION */}
        <section className="relative bg-gradient-to-br from-[#1a4f78] to-[#003366] text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection className="max-w-2xl">
              <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-6 text-white">
                Empowering Success: Join Our CarpacSoft Global Partner Ecosystem
              </h1>
              <p className="text-sm text-blue-100 mb-8 leading-relaxed">
                Explore the advantages of partnering with CarpacSoft and discover how our collaboration can drive growth and success for your business.
              </p>
              <Button className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-bold py-3 px-8 rounded-full uppercase tracking-wide text-xs">
                BECOME A PARTNER!
              </Button>
            </AnimatedSection>
          </div>
        </section>

        {/* WELCOME SECTION */}
        <section className="bg-[#e0f4fa] py-16 text-center">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <h2 className="text-xl md:text-2xl font-bold text-[#001e4d] mb-6">
                Welcome to our network of top-tier partners, where collaboration breeds success.
              </h2>
              <p className="text-sm text-slate-600 max-w-4xl mx-auto mb-4">
                Join our global CarpacSoft Partner Ecosystem for cutting-edge solutions! With <span className="text-[#f59e0b] font-bold">trust</span>, <span className="text-[#f59e0b] font-bold">innovation</span>, and <span className="text-[#f59e0b] font-bold">shared goals</span>, we navigate the tech landscape together.
              </p>
              <p className="text-sm text-slate-600 max-w-4xl mx-auto mb-4">
                Empower your business with our resources, including comprehensive support, marketing tools, and industry insights. Partner with us on the journey to success, ensuring <span className="text-[#f59e0b] font-bold">growth and excellence</span> at every stage.
              </p>
              <p className="text-sm text-slate-600">
                Together, <span className="text-[#f59e0b] font-bold">let's shape the future of innovation!</span>
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* WHY JOIN PARTNER PROGRAM */}
        <section className="bg-[#e0f4fa] py-24">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-2xl font-bold text-[#001e4d]">Why Join our Partner Program?</h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {partnerBenefits.map((benefit, i) => (
                <AnimatedSection key={i} delay={i * 100} className="text-center group">
                  <div className={`w-20 h-20 mx-auto mb-4 rounded-xl ${benefit.bgIcon} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    {benefit.icon}
                  </div>
                  <h3 className="font-bold text-[#001e4d] mb-2">{benefit.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{benefit.description}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* PARTNERSHIP TYPES */}
        <section className="bg-[#e0f4fa] py-24">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-2xl font-bold text-[#001e4d]">CarpacSoft Partnerships</h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {partnershipTypes.map((type, i) => (
                <AnimatedSection key={i} delay={i * 150} className="text-center">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-full ${type.bgColor} ${type.borderColor} border-4 flex items-center justify-center`}>
                    {type.icon}
                  </div>
                  <h3 className="font-bold text-[#001e4d] text-xl mb-4">{type.title}</h3>
                  <ul className="text-left text-xs text-slate-600 space-y-3">
                    {type.points.map((point, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <span className="text-[#f59e0b] mt-1">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* PARTNER FORM SECTION */}
        <section className="bg-gradient-to-br from-[#006d8c] to-[#0094c6] py-24">
          <div className="container mx-auto px-4 max-w-3xl">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">Partner with CarpacSoft</h2>
              <p className="text-sm text-blue-100">
                Whether you're an Independent Software Vendor or a globally-recognized consultancy, join the CarpacSoft Partner Network to help support the world's most forward-thinking companies as they bring the next generation of products to market.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name*"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-sm bg-white/90 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#f59e0b]"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name*"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-sm bg-white/90 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#f59e0b]"
                  required
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Company*"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-sm bg-white/90 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#f59e0b]"
                  required
                />
                <select
                  name="industry"
                  value={formData.industry}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-sm bg-white/90 text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#f59e0b]"
                  required
                >
                  <option value="">Industry*</option>
                  <option value="aerospace">Aerospace & Defense</option>
                  <option value="automotive">Automotive</option>
                  <option value="medical">Medical Device</option>
                  <option value="semiconductor">Semiconductor</option>
                  <option value="industrial">Industrial Manufacturing</option>
                  <option value="software">Software</option>
                  <option value="other">Other</option>
                </select>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-sm bg-white/90 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#f59e0b]"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-sm bg-white/90 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#f59e0b]"
                />
                <input
                  type="text"
                  name="jobTitle"
                  placeholder="Job Title"
                  value={formData.jobTitle}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-sm bg-white/90 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#f59e0b]"
                />
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-sm bg-white/90 text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#f59e0b]"
                >
                  <option value="">Country</option>
                  <option value="us">United States</option>
                  <option value="uk">United Kingdom</option>
                  <option value="de">Germany</option>
                  <option value="fr">France</option>
                  <option value="jp">Japan</option>
                  <option value="other">Other</option>
                </select>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-sm bg-white/90 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#f59e0b] resize-none"
                />
                <div className="text-center pt-4">
                  <Button
                    type="submit"
                    className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-bold py-3 px-12 rounded-full uppercase tracking-wide text-sm"
                  >
                    SUBMIT
                  </Button>
                </div>
              </form>
            </AnimatedSection>
          </div>
        </section>

      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Partners;



