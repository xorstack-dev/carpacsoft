import { Link } from "react-router-dom";
import { 
  LayoutDashboard, FileText, GitBranch, CheckCircle, Shield, 
  Settings, HelpCircle, ChevronRight, Home
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: FileText, label: "Requirements", href: "/dashboard/requirements" },
  { icon: GitBranch, label: "Trace Explorer", href: "/dashboard" },
  { icon: CheckCircle, label: "Test Cases", href: "/dashboard/test-cases" },
  { icon: Shield, label: "Risks", href: "/dashboard" },
];

export function DashboardSidebar() {
  return (
    <aside className="w-64 bg-jama-navy min-h-screen flex flex-col">
      <div className="p-4 border-b border-jama-navy-light">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-jama-orange rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">J</span>
          </div>
          <span className="text-white font-bold">CarpacSoft</span>
        </Link>
      </div>
      
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.href}
            className="flex items-center gap-3 px-3 py-2 text-white/80 hover:bg-jama-navy-light hover:text-white rounded-lg transition-colors"
          >
            <item.icon className="h-5 w-5" />
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t border-jama-navy-light space-y-1">
        <Link to="/dashboard" className="flex items-center gap-3 px-3 py-2 text-white/60 hover:text-white transition-colors">
          <Settings className="h-5 w-5" />
          Settings
        </Link>
        <Link to="/resources/support" className="flex items-center gap-3 px-3 py-2 text-white/60 hover:text-white transition-colors">
          <HelpCircle className="h-5 w-5" />
          Help
        </Link>
        <Link to="/" className="flex items-center gap-3 px-3 py-2 text-white/60 hover:text-white transition-colors">
          <Home className="h-5 w-5" />
          Back to Site
        </Link>
      </div>
    </aside>
  );
}

export default DashboardSidebar;



