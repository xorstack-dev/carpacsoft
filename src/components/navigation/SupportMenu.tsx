import { Link, useLocation } from "react-router-dom";
import { supportMenuItems } from "@/lib/constants";

export function SupportMenu() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="absolute top-full right-0 mt-0 w-[550px] bg-white border-t border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] p-10 z-50">
      <div className="grid grid-cols-2 gap-12">
        {/* Learn With Us */}
        <div>
          <h3 className="text-[15px] font-black text-[#001e4d] uppercase tracking-wider mb-8">
            {supportMenuItems.learnWithUs.title}
          </h3>
          <ul className="space-y-5">
            {supportMenuItems.learnWithUs.items.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className={`block text-[15px] transition-colors ${currentPath === item.href
                      ? "text-[#0066cc] font-medium"
                      : "text-[#64748b] hover:text-[#0066cc]"
                    }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Product Support */}
        <div>
          <h3 className="text-[15px] font-black text-[#001e4d] uppercase tracking-wider mb-8">
            {supportMenuItems.productSupport.title}
          </h3>
          <ul className="space-y-5">
            {supportMenuItems.productSupport.items.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  target={item.label === "Community" ? "_blank" : undefined}
                  rel={item.label === "Community" ? "noopener noreferrer" : undefined}
                  className={`block text-[15px] transition-colors ${currentPath === item.href
                      ? "text-[#0066cc] font-medium"
                      : "text-[#64748b] hover:text-[#0066cc]"
                    }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SupportMenu;



