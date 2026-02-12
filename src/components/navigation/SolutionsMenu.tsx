import { Link, useLocation } from "react-router-dom";
import { solutionsMenuItems } from "@/lib/constants";

export function SolutionsMenu() {
  const location = useLocation();
  const isActive = (href: string) => location.pathname === href;

  return (
    <div className="absolute top-full left-0 mt-0 w-[850px] bg-background border-t-2 border-jama-blue shadow-xl p-8 z-50">
      <div className="grid grid-cols-3 gap-8">
        {/* By Industry */}
        <div>
          <h3 className="text-sm font-bold text-jama-blue uppercase tracking-wider mb-4">
            {solutionsMenuItems.byIndustry.title}
          </h3>
          <ul className="space-y-2">
            {solutionsMenuItems.byIndustry.items.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className={`block text-sm transition-colors py-1 ${isActive(item.href) ? "text-[#ea580c] font-bold" : "text-jama-gray hover:text-jama-orange"}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* By Function */}
        <div>
          <h3 className="text-sm font-bold text-jama-blue uppercase tracking-wider mb-4">
            {solutionsMenuItems.byFunction.title}
          </h3>
          <ul className="space-y-2">
            {solutionsMenuItems.byFunction.items.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className={`block text-sm transition-colors py-1 ${isActive(item.href) ? "text-[#ea580c] font-bold" : "text-jama-gray hover:text-jama-orange"}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* By Initiative */}
        <div>
          <h3 className="text-sm font-bold text-jama-blue uppercase tracking-wider mb-4">
            {solutionsMenuItems.byInitiative.title}
          </h3>
          <ul className="space-y-2">
            {solutionsMenuItems.byInitiative.items.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className={`block text-sm transition-colors py-1 ${isActive(item.href) ? "text-[#ea580c] font-bold" : "text-jama-gray hover:text-jama-orange"}`}
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

export default SolutionsMenu;



