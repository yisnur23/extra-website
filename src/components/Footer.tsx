const Footer = () => {
  return (
    <footer className="bg-white border-t border-[#e1dde4] z-10 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3 text-charcoal mb-4">
            <div className="size-6 bg-primary rounded flex items-center justify-center text-charcoal">
              <span className="material-symbols-outlined text-lg">precision_manufacturing</span>
            </div>
            <h3 className="text-lg font-bold">EXTRA Engineering</h3>
          </div>
          <p className="text-charcoal-light text-sm leading-relaxed">
            Pioneering industrial automation and IoT solutions across Ethiopia and East Africa. Building smarter
            industries for tomorrow.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-charcoal mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-charcoal-light">
            <li>
              <a className="hover:text-primary-dark transition-colors" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-primary-dark transition-colors" href="#about">
                About Us
              </a>
            </li>
            <li>
              <a className="hover:text-primary-dark transition-colors" href="#services">
                Services
              </a>
            </li>
            <li>
              <a className="hover:text-primary-dark transition-colors" href="#impact">
                Impact
              </a>
            </li>
            <li>
              <a className="hover:text-primary-dark transition-colors" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-charcoal mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-charcoal-light">
            <li>Addis Ababa, Ethiopia</li>
            <li>info@extra-engineering.com</li>
            <li>+251 911 123 456</li>
          </ul>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-[#f2f1f4] flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-charcoal-light text-xs">
          © {new Date().getFullYear()} EXTRA Engineering Solution. All rights reserved.
        </p>
        <div className="flex gap-6 text-xs text-charcoal-light">
          <a className="hover:text-charcoal" href="#">
            Privacy Policy
          </a>
          <a className="hover:text-charcoal" href="#">
            Terms of Service
          </a>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
