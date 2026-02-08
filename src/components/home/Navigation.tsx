import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { id: 'about', label: 'About', href: '/about' },
    { id: 'services', label: 'Services', href: '/services' },
    { id: 'contact', label: 'Contact Us', href: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-brand-accent flex items-center justify-center">
              <span className="text-white font-bold text-lg">E</span>
            </div>
            <span className="text-xl font-bold text-white">
              Extra Engineering
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.id}
                to={link.href}
                className="text-gray-300 hover:text-white font-medium transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact">
              <button className="px-5 py-2.5 border border-gray-500 text-white rounded-lg hover:border-brand hover:text-brand transition-all duration-200 font-medium">
                Get a Quote
              </button>
            </Link>
            <Link to="/contact">
              <button className="px-5 py-2.5 bg-brand-accent hover:bg-brand-accent-dark text-white rounded-lg transition-all duration-200 font-medium shadow-lg shadow-brand-accent/20">
                Start a Project
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden bg-navy border-t border-white/10 overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-4 space-y-1">
          {links.map((link) => (
            <Link
              key={link.id}
              to={link.href}
              className="block py-3 px-4 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg font-medium transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 flex flex-col gap-3">
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
              <button className="w-full px-5 py-2.5 border border-gray-500 text-white rounded-lg hover:border-brand transition-all font-medium">
                Get a Quote
              </button>
            </Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
              <button className="w-full px-5 py-2.5 bg-brand-accent text-white rounded-lg transition-all font-medium">
                Start a Project
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
