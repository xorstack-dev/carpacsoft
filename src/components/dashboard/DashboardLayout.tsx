import { ReactNode } from "react";
import DashboardSidebar from "./DashboardSidebar";
import { Bell, User } from "lucide-react";

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen flex bg-jama-light-blue">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col">
        <header className="h-14 bg-white border-b border-border flex items-center justify-between px-6">
          <h1 className="text-lg font-semibold text-jama-navy">Live Trace Explorer™</h1>
          <div className="flex items-center gap-4">
            <button className="text-jama-gray hover:text-jama-navy">
              <Bell className="h-5 w-5" />
            </button>
            <div className="w-8 h-8 bg-jama-orange rounded-full flex items-center justify-center">
              <User className="h-4 w-4 text-white" />
            </div>
          </div>
        </header>
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}

export default DashboardLayout;



