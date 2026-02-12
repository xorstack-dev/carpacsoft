import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import AISection from "@/components/sections/AISection";
import AwardsSection from "@/components/sections/AwardsSection";
import ComplianceSection from "@/components/sections/ComplianceSection";
import BenchmarkSection from "@/components/sections/BenchmarkSection";
import SuccessSection from "@/components/sections/SuccessSection";
import DemoForm from "@/components/sections/DemoForm";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ProblemSection />
        <AISection />
        <AwardsSection />
        <BenchmarkSection />
        <FeaturesSection />
        <ComplianceSection />
        <SuccessSection />
        <DemoForm />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Index;



