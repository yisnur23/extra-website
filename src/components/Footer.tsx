import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-[#e1dde4] z-10 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-3 text-charcoal mb-4">
              <img src={logo} alt="EXTRA Engineering logo" className="h-[46px] w-auto" />
            </div>
            <p className="text-charcoal-light text-sm leading-relaxed">
              Leading the way in industrial automation and IIoT implementation across Ethiopia, we empower industries to
              become data-driven, more efficient, and future-ready.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-charcoal mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-charcoal-light">
              <li>
                <Link className="hover:text-primary-dark transition-colors" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary-dark transition-colors" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary-dark transition-colors" to="/services">
                  Services
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary-dark transition-colors" to="/contact">
                  Contact
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary-dark transition-colors" to="/consultation">
                  Consultation
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-charcoal mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-charcoal-light">
              <li>Mega Building, Office Number 1111 Bole Sub City Addis Ababa, Ethiopia</li>
              <li>info@extraen.com</li>
              <li>+251 933 941 798</li>
              <li>+251 911 233 958</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-[#f2f1f4] flex flex-col md:flex-row justify-center items-center gap-4">
          <p className="text-charcoal-light text-xs text-center">
            © {new Date().getFullYear()} EXTRA Engineering Solution. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
