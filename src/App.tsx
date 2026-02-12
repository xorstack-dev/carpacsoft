import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import AI from "./pages/solutions/AI";
import Trial from "./pages/Trial";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import AECOSolutions from "./pages/solutions/AECOSolutions";
import AerospaceDefense from "./pages/solutions/AerospaceDefense";
import Automotive from "./pages/solutions/Automotive";
import OilAndGas from "./pages/solutions/OilAndGas";
import FinancialServices from "./pages/solutions/FinancialServices";
import Government from "./pages/solutions/Government";
import IndustrialManufacturing from "./pages/solutions/IndustrialManufacturing";
import MedicalDevice from "./pages/solutions/MedicalDevice";
import Semiconductors from "./pages/solutions/Semiconductors";
import BusinessAnalysts from "./pages/solutions/BusinessAnalysts";
import EngineeringLeadership from "./pages/solutions/EngineeringLeadership";
import RiskManagement from "./pages/solutions/RiskManagement";
import SoftwareDevelopment from "./pages/solutions/SoftwareDevelopment";
import SystemsEngineering from "./pages/solutions/SystemsEngineering";
import TestManagement from "./pages/solutions/TestManagement";
import Agile from "./pages/solutions/Agile";
import CoDevelopment from "./pages/solutions/CoDevelopment";
import DigitalEngineering from "./pages/solutions/DigitalEngineering";
import DigitalThread from "./pages/solutions/DigitalThread";
import MBSE from "./pages/solutions/MBSE";
import RequirementsManagement from "./pages/solutions/RequirementsManagement";
import RequirementsTraceability from "./pages/solutions/RequirementsTraceability";

// Product Pages
import Overview from "./pages/product/Overview";
import Features from "./pages/product/Features";
import Pricing from "./pages/product/Pricing";
import Integrations from "./pages/product/Integrations";
import WhyJama from "./pages/product/WhyJama";
import SuccessPrograms from "./pages/product/SuccessPrograms";
import JamaConnect from "./pages/product/JamaConnect";
import IBMDoors from "./pages/product/IBMDoors";
import IBMDoorsNext from "./pages/product/IBMDoorsNext";
import JiraCompare from "./pages/product/JiraCompare";
import MSWordCompare from "./pages/product/MSWordCompare";
import PolarionCompare from "./pages/product/PolarionCompare";
import CodebeamerCompare from "./pages/product/CodebeamerCompare";

// Company Pages
import About from "./pages/company/About";
import Contact from "./pages/company/Contact";
import Careers from "./pages/company/Careers";
import Leadership from "./pages/company/Leadership";
import Partners from "./pages/company/Partners";
import Events from "./pages/company/Events";
import Webinars from "./pages/company/Webinars";
import Press from "./pages/company/Press";

// Dashboard
import DashboardIndex from "./pages/dashboard/Index";

// Resources Pages
import JamaConnectFeatures from "./pages/resources/JamaConnectFeatures";
import BenchmarkReport from "./pages/resources/BenchmarkReport";
import SuccessProgramsResource from "./pages/resources/SuccessPrograms";
import EssentialGuide from "./pages/resources/EssentialGuide";
import ResourceLibrary from "./pages/resources/ResourceLibrary";
import DiscoveryCenter from "./pages/resources/DiscoveryCenter";
import Community from "./pages/resources/Community";
import Support from "./pages/resources/Support";
import ReportG2Grid from "./pages/resources/Report-g2-grid";
import RestApi from "./pages/other-pages/Rest-api";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/trial" element={<Trial />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/solutions/ai" element={<AI />} />
          <Route path="/solutions/artificial-intelligence" element={<AI />} />
          <Route path="/solutions/aeco" element={<AECOSolutions />} />
          <Route path="/solutions/aerospace-defense" element={<AerospaceDefense />} />
          <Route path="/solutions/automotive" element={<Automotive />} />
          <Route path="/solutions/oil-and-gas" element={<OilAndGas />} />
          <Route path="/solutions/financial-services" element={<FinancialServices />} />
          <Route path="/solutions/government" element={<Government />} />
          <Route path="/solutions/industrial-manufacturing" element={<IndustrialManufacturing />} />
          <Route path="/solutions/medical-device-life-sciences" element={<MedicalDevice />} />
          <Route path="/solutions/medical-device" element={<MedicalDevice />} />
          <Route path="/solutions/semiconductors" element={<Semiconductors />} />
          <Route path="/solutions/business-analysts" element={<BusinessAnalysts />} />
          <Route path="/solutions/engineering-leadership" element={<EngineeringLeadership />} />
          <Route path="/solutions/risk-management" element={<RiskManagement />} />
          <Route path="/solutions/software-development" element={<SoftwareDevelopment />} />
          <Route path="/solutions/systems-engineering" element={<SystemsEngineering />} />
          <Route path="/solutions/test-management" element={<TestManagement />} />
          <Route path="/solutions/agile" element={<Agile />} />
          <Route path="/solutions/co-development" element={<CoDevelopment />} />
          <Route path="/solutions/digital-engineering" element={<DigitalEngineering />} />
          <Route path="/solutions/digital-thread" element={<DigitalThread />} />
          <Route path="/solutions/mbse" element={<MBSE />} />
          <Route path="/solutions/requirements-management" element={<RequirementsManagement />} />
          <Route path="/solutions/requirements-traceability" element={<RequirementsTraceability />} />
          <Route path="/resources/Report-g2-grid" element={<ReportG2Grid />} />
          <Route path="/other-pages/rest-api" element={<RestApi />} />

          {/* Product Routes */}
          <Route path="/product/overview" element={<Overview />} />
          <Route path="/product/features" element={<Features />} />
          <Route path="/product/pricing" element={<Pricing />} />
          <Route path="/product/integrations" element={<Integrations />} />
          <Route path="/product/why-jama" element={<WhyJama />} />
          <Route path="/product/success-programs" element={<SuccessPrograms />} />
          <Route path="/product/jama-connect" element={<JamaConnect />} />
          <Route path="/compare/ibm-doors" element={<IBMDoors />} />
          <Route path="/compare/ibm-doors-next" element={<IBMDoorsNext />} />
          <Route path="/compare/jira" element={<JiraCompare />} />
          <Route path="/compare/ms-word-excel" element={<MSWordCompare />} />
          <Route path="/compare/polarion" element={<PolarionCompare />} />
          <Route path="/compare/ptc-codebeamer" element={<CodebeamerCompare />} />

          {/* Company Routes */}
          <Route path="/company/about" element={<About />} />
          <Route path="/company/contact" element={<Contact />} />
          <Route path="/company/careers" element={<Careers />} />
          <Route path="/company/leadership" element={<Leadership />} />
          <Route path="/company/partners" element={<Partners />} />
          <Route path="/company/events" element={<Events />} />
          <Route path="/company/webinars" element={<Webinars />} />
          <Route path="/company/press" element={<Press />} />

          {/* Resources Routes */}
          <Route path="/resources/features" element={<JamaConnectFeatures />} />
          <Route path="/resources/benchmark-report" element={<BenchmarkReport />} />
          <Route path="/resources/success-programs" element={<SuccessProgramsResource />} />
          <Route path="/resources/guide" element={<EssentialGuide />} />
          <Route path="/resources/essential-guide" element={<EssentialGuide />} />
          <Route path="/resources/library" element={<ResourceLibrary />} />
          <Route path="/resources/discovery" element={<DiscoveryCenter />} />
          <Route path="/resources/community" element={<Community />} />
          <Route path="/resources/support" element={<Support />} />

          {/* Dashboard Routes */}
          <Route path="/dashboard" element={<DashboardIndex />} />

          {/* Catch-all for pages not yet implemented */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;



