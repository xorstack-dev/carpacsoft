import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductMenu } from "@/components/navigation/ProductMenu";
import { SolutionsMenu } from "@/components/navigation/SolutionsMenu";
import { CompanyMenu } from "@/components/navigation/CompanyMenu";
import { SupportMenu } from "@/components/navigation/SupportMenu";
import { SearchOverlay } from "@/components/SearchOverlay";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "product") return location.pathname.startsWith("/product") || location.pathname.startsWith("/compare") || location.pathname === "/trial";
    if (path === "solutions") return location.pathname.startsWith("/solutions");
    if (path === "company") return location.pathname.startsWith("/company");
    if (path === "support") return location.pathname.startsWith("/resources") || location.pathname === "/blog";
    return false;
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <img src="/Logo.jpg" alt="CarpacSoft Logo" className="h-10 w-auto rounded-full shadow-sm" />
              <div className="ml-2 flex items-baseline text-jama-navy">
                <span className="text-xl font-bold tracking-tight">Carpac</span>
                <span className="text-xl font-normal ml-1">Soft</span>
                <span className="text-[10px] font-normal align-top -mt-2 ml-0.5">®</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 h-full">
              <div
                className="relative h-full flex items-center"
                onMouseEnter={() => setActiveMenu("product")}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button className={`flex items-center px-4 h-full text-xs font-black tracking-widest transition-all border-t-4 ${activeMenu === "product" || isActive("product") ? "text-[#0066cc] border-[#0ea5e9]" : "text-[#001e4d] border-transparent hover:text-[#0066cc]"}`}>
                  PRODUCT
                </button>
                {activeMenu === "product" && <ProductMenu />}
              </div>

              <div
                className="relative h-full flex items-center"
                onMouseEnter={() => setActiveMenu("solutions")}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button className={`flex items-center px-4 h-full text-xs font-black tracking-widest transition-all border-t-4 ${activeMenu === "solutions" || isActive("solutions") ? "text-[#0066cc] border-[#0ea5e9]" : "text-[#001e4d] border-transparent hover:text-[#0066cc]"}`}>
                  SOLUTIONS
                </button>
                {activeMenu === "solutions" && <SolutionsMenu />}
              </div>

              <div
                className="relative h-full flex items-center"
                onMouseEnter={() => setActiveMenu("company")}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button className={`flex items-center px-4 h-full text-xs font-black tracking-widest transition-all border-t-4 ${activeMenu === "company" || isActive("company") ? "text-[#0066cc] border-[#0ea5e9]" : "text-[#001e4d] border-transparent hover:text-[#0066cc]"}`}>
                  COMPANY
                </button>
                {activeMenu === "company" && <CompanyMenu />}
              </div>

              <div
                className="relative h-full flex items-center"
                onMouseEnter={() => setActiveMenu("support")}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button className={`flex items-center px-4 h-full text-xs font-black tracking-widest transition-all border-t-4 ${activeMenu === "support" || isActive("support") ? "text-[#0066cc] border-[#0ea5e9]" : "text-[#001e4d] border-transparent hover:text-[#0066cc]"}`}>
                  EDUCATION & SUPPORT
                </button>
                {activeMenu === "support" && <SupportMenu />}
              </div>

              <Link
                to="/blog"
                className="px-4 h-full flex items-center text-xs font-black tracking-widest text-[#001e4d] hover:text-[#0066cc] transition-all border-t-4 border-transparent hover:border-[#0ea5e9]"
              >
                BLOG
              </Link>
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              <Link to="/trial">
                <Button className="hidden sm:inline-flex gradient-orange text-white font-semibold px-6 hover:opacity-90 transition-opacity">
                  GET STARTED
                </Button>
              </Link>

              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 text-jama-navy hover:text-jama-orange transition-colors"
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </button>

              {/* Mobile Menu Toggle */}
              <button
                className="lg:hidden p-2 text-jama-navy"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border animate-slide-in-left">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <MobileNavSection title="PRODUCT" />
              <MobileNavSection title="SOLUTIONS" />
              <MobileNavSection title="COMPANY" />
              <MobileNavSection title="EDUCATION & SUPPORT" />
              <Link
                to="/blog"
                className="block py-2 text-sm font-medium text-jama-navy"
                onClick={() => setMobileMenuOpen(false)}
              >
                BLOG
              </Link>
              <Link to="/trial" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full gradient-orange text-white font-semibold">
                  GET STARTED
                </Button>
              </Link>
            </div>
          </div>
        )}
      </header>

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}

function MobileNavSection({ title }: { title: string }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <button
        className="flex items-center justify-between w-full py-2 text-sm font-medium text-jama-navy"
        onClick={() => setExpanded(!expanded)}
      >
        {title}
        <ChevronDown className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`} />
      </button>
      {expanded && (
        <div className="pl-4 py-2 space-y-2">
          <Link to="/product/overview" className="block py-1 text-sm text-jama-gray hover:text-jama-orange">
            Product Overview
          </Link>
          <Link to="/product/features" className="block py-1 text-sm text-jama-gray hover:text-jama-orange">
            Features
          </Link>
          <Link to="/trial" className="block py-1 text-sm text-jama-gray hover:text-jama-orange">
            Free Trial
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;



