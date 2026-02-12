import { Link, useLocation } from "react-router-dom";
import { productMenuItems } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function ProductMenu() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="absolute top-full left-0 mt-0 w-[500px] bg-background border-t-2 border-jama-blue shadow-xl p-8 z-50">
      <div className="grid grid-cols-2 gap-8">
        {/* CarpacSoft Section */}
        <div>
          <h3 className="text-sm font-bold text-jama-blue uppercase tracking-wider mb-4">
            {productMenuItems.jamaConnect.title}
          </h3>
          <ul className="space-y-2">
            {productMenuItems.jamaConnect.items.map((item) => {
              const isActive = currentPath === item.href;
              return (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className={cn(
                      "block text-sm transition-colors py-1",
                      isActive
                        ? "text-jama-orange font-medium"
                        : "text-jama-gray hover:text-jama-orange"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Compare Section */}
        <div>
          <h3 className="text-sm font-bold text-jama-blue uppercase tracking-wider mb-4">
            {productMenuItems.compare.title}
          </h3>
          <ul className="space-y-2">
            {productMenuItems.compare.items.map((item) => {
              const isActive = currentPath === item.href;
              return (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className={cn(
                      "block text-sm transition-colors py-1",
                      isActive
                        ? "text-jama-orange font-medium"
                        : "text-jama-gray hover:text-jama-orange"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductMenu;



