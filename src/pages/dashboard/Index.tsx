import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { FileText, CheckCircle, AlertTriangle, TrendingUp } from "lucide-react";

const DashboardIndex = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Stats Row */}
        <div className="grid grid-cols-4 gap-4">
          {[
            { icon: FileText, label: "Requirements", value: "156", color: "bg-blue-500" },
            { icon: CheckCircle, label: "Test Cases", value: "89", color: "bg-green-500" },
            { icon: AlertTriangle, label: "Open Risks", value: "12", color: "bg-yellow-500" },
            { icon: TrendingUp, label: "Trace Score", value: "40.87%", color: "bg-jama-orange" },
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-jama-navy">{stat.value}</p>
                  <p className="text-sm text-jama-gray">{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trace Explorer */}
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-jama-navy mb-4">Trace Coverage</h2>
            <div className="space-y-4">
              {[
                { name: "Stakeholder Requirements", items: 24, coverage: 75 },
                { name: "Product Requirements", items: 42, coverage: 58 },
                { name: "Block Requirements", items: 38, coverage: 82 },
                { name: "Verification", items: 56, coverage: 45 },
              ].map((item) => (
                <div key={item.name} className="flex items-center gap-4">
                  <div className="w-40 text-sm text-jama-gray">{item.name}</div>
                  <div className="flex-1 h-3 bg-jama-light-blue rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-jama-orange rounded-full" 
                      style={{ width: `${item.coverage}%` }} 
                    />
                  </div>
                  <div className="w-20 text-sm text-jama-navy font-medium">{item.coverage}%</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-jama-navy mb-4">Trace Score</h2>
            <div className="flex flex-col items-center">
              <div className="relative w-32 h-32">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="64" cy="64" r="56" fill="none" stroke="hsl(var(--jama-light-blue))" strokeWidth="12" />
                  <circle 
                    cx="64" cy="64" r="56" fill="none" 
                    stroke="hsl(var(--jama-orange))" 
                    strokeWidth="12"
                    strokeDasharray={`${40.87 * 3.52} 352`}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-jama-navy">40.87%</span>
                </div>
              </div>
              <p className="text-sm text-jama-gray mt-4">Overall trace coverage</p>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-jama-navy mb-4">Recent Activity</h2>
          <div className="space-y-3">
            {[
              { action: "REQ-042 updated", user: "Sarah Chen", time: "2 minutes ago" },
              { action: "Test case TC-089 passed", user: "Michael Rodriguez", time: "15 minutes ago" },
              { action: "New risk RISK-015 created", user: "Emily Thompson", time: "1 hour ago" },
              { action: "Review cycle completed", user: "System", time: "3 hours ago" },
            ].map((activity, i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                <div>
                  <p className="text-sm font-medium text-jama-navy">{activity.action}</p>
                  <p className="text-xs text-jama-gray">{activity.user}</p>
                </div>
                <span className="text-xs text-jama-gray">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardIndex;



