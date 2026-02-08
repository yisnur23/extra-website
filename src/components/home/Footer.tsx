import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import Container from '../layout/Container';

export default function Footer() {
  return (
    <footer className="bg-navy text-gray-300">
      <Container>
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            {/* Logo + Description */}
            <div className="md:col-span-5">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-10 w-10 rounded-lg bg-brand-accent flex items-center justify-center">
                  <span className="text-white font-bold text-lg">E</span>
                </div>
                <span className="text-xl font-bold text-white">
                  Extra Engineering
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6 max-w-sm">
                Leading provider of industrial automation solutions in Ethiopia.
                Empowering businesses with cutting-edge SCADA systems, PLC
                programming, and IoT technologies.
              </p>
              <div className="flex gap-3">
                {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="p-2.5 bg-white/5 border border-white/10 rounded-lg hover:bg-brand-accent hover:border-brand-accent transition-all duration-200"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-2">
              <h3 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">
                Menu
              </h3>
              <ul className="space-y-3">
                {[
                  { label: 'About', href: '/about' },
                  { label: 'Services', href: '/services' },
                  { label: 'Contact', href: '/contact' },
                ].map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-brand transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-5">
              <h3 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">
                Get in Touch
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-brand mt-1 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">
                    Addis Ababa, Ethiopia
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-brand flex-shrink-0" />
                  <a
                    href="mailto:info@extraengineeringsolution.com"
                    className="text-gray-400 hover:text-brand transition-colors text-sm"
                  >
                    info@extraengineeringsolution.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-brand flex-shrink-0" />
                  <a
                    href="tel:+251933941798"
                    className="text-gray-400 hover:text-brand transition-colors text-sm"
                  >
                    +251 933 941 798
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              &copy; 2026 Extra Engineering Solutions. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                to="/privacy"
                className="text-gray-500 hover:text-brand transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-gray-500 hover:text-brand transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
