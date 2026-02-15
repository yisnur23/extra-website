import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const linkClassName = ({ isActive }: { isActive: boolean }) =>
    `transition-colors ${isActive ? "text-primary font-medium" : "text-slate-600 dark:text-slate-300 hover:text-primary"}`;

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link to="/" onClick={closeMobileMenu}>
              <img src={logo} alt="EXTRA Engineering logo" className="h-[46px] w-auto" />
            </Link>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <NavLink to="/" end className={linkClassName}>
              Home
            </NavLink>
            <NavLink to="/services" className={linkClassName}>
              Services
            </NavLink>
            <NavLink to="/about" className={linkClassName}>
              About
            </NavLink>
            <NavLink to="/contact" className={linkClassName}>
              Contact
            </NavLink>
            <Link
              to="/consultation"
              className="bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-lg font-medium transition-colors shadow-lg shadow-primary/25"
            >
              Request Consultation
            </Link>
          </div>
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:text-primary hover:border-primary transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            <span className="material-icons text-[22px]">{isMobileMenuOpen ? "close" : "menu"}</span>
          </button>
        </div>
        <div className={`${isMobileMenuOpen ? "block" : "hidden"} md:hidden pb-4`}>
          <div className="flex flex-col gap-3 border-t border-slate-200 dark:border-slate-800 pt-4">
            <NavLink to="/" end className={linkClassName} onClick={closeMobileMenu}>
              Home
            </NavLink>
            <NavLink to="/services" className={linkClassName} onClick={closeMobileMenu}>
              Services
            </NavLink>
            <NavLink to="/about" className={linkClassName} onClick={closeMobileMenu}>
              About
            </NavLink>
            <NavLink to="/contact" className={linkClassName} onClick={closeMobileMenu}>
              Contact
            </NavLink>
            <Link
              to="/consultation"
              onClick={closeMobileMenu}
              className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-lg font-medium transition-colors shadow-lg shadow-primary/25 mt-1"
            >
              Request Consultation
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
