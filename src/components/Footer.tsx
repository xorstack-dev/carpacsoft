import { Link } from "react-router-dom";
import { Facebook, Linkedin, Youtube, ArrowUp } from "lucide-react";
import { footerLinks } from "@/lib/constants";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-jama-navy text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Social */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <img src="/Logo.jpg" alt="CarpacSoft Logo" className="w-10 h-10 rounded-full shadow-sm" />
              <span className="text-xl font-bold">CarpacSoft</span>
            </Link>

            <p className="text-sm text-jama-gray-light mb-6">
              Connect With Us
            </p>

            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-jama-navy-light rounded-full flex items-center justify-center hover:bg-jama-orange transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-jama-navy-light rounded-full flex items-center justify-center hover:bg-jama-orange transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-jama-navy-light rounded-full flex items-center justify-center hover:bg-jama-orange transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* CarpacSoft Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              CarpacSoft
            </h3>
            <ul className="space-y-3">
              {footerLinks.jamaConnect.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-jama-gray-light hover:text-jama-orange transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-jama-gray-light hover:text-jama-orange transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Education & Support Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Education & Support
            </h3>
            <ul className="space-y-3">
              {footerLinks.educationSupport.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-jama-gray-light hover:text-jama-orange transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Office Addresses */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Offices
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium mb-1">USA Headquarters</p>
                <p className="text-sm text-jama-gray-light">
                  111 SW 5th Avenue<br />
                  Suite 3400<br />
                  Portland, OR 97204
                </p>
              </div>
              <div>
                <p className="text-sm font-medium mb-1">Europe</p>
                <p className="text-sm text-jama-gray-light">
                  Munich, Germany
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-jama-navy-light">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-jama-gray-light">
              <span>© {new Date().getFullYear()} CarpacSoft. All rights reserved.</span>
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="hover:text-jama-orange transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-sm text-jama-gray-light hover:text-jama-orange transition-colors"
              aria-label="Scroll to top"
            >
              Back to top
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;



