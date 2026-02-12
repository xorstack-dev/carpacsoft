import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchOverlayProps {
  open: boolean;
  onClose: () => void;
}

const searchableItems = [
  { title: "Product Overview", href: "/product/overview", category: "Product" },
  { title: "Features", href: "/product/features", category: "Product" },
  { title: "Pricing", href: "/product/pricing", category: "Product" },
  { title: "Free Trial", href: "/trial", category: "Product" },
  { title: "Integrations", href: "/product/integrations", category: "Product" },
  { title: "Medical Device Solutions", href: "/solutions/medical-device-life-sciences", category: "Solutions" },
  { title: "Automotive Solutions", href: "/solutions/automotive", category: "Solutions" },
  { title: "Aerospace & Defense", href: "/solutions/aerospace-defense", category: "Solutions" },
  { title: "About Us", href: "/company/about", category: "Company" },
  { title: "Careers", href: "/company/careers", category: "Company" },
  { title: "Contact Us", href: "/company/contact", category: "Company" },
  { title: "Blog", href: "/blog", category: "Resources" },
  { title: "Resource Library", href: "/resources/library", category: "Resources" },
  { title: "Support Center", href: "/resources/support", category: "Resources" },
  { title: "Dashboard", href: "/dashboard", category: "Product" },
];

export function SearchOverlay({ open, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(searchableItems);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (query.trim() === "") {
      setResults(searchableItems);
    } else {
      const filtered = searchableItems.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    }
  }, [query]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] bg-jama-navy/95 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-white">Search</h2>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white transition-colors"
            aria-label="Close search"
          >
            <X className="h-8 w-8" />
          </button>
        </div>

        <div className="relative max-w-2xl mx-auto mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-jama-gray" />
          <Input
            type="search"
            placeholder="Search for pages, features, solutions..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 text-lg bg-white border-0 rounded-lg"
            autoFocus
          />
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="grid gap-2">
            {results.length > 0 ? (
              results.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={onClose}
                  className="flex items-center justify-between p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                >
                  <span className="text-white font-medium">{item.title}</span>
                  <span className="text-sm text-white/60">{item.category}</span>
                </Link>
              ))
            ) : (
              <div className="text-center py-8 text-white/60">
                No results found for "{query}"
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchOverlay;



