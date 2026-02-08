import { useState, useEffect } from "react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/40 dark:bg-[#1f1826]/40 backdrop-blur-lg border-b border-[#e5e0eb] dark:border-[#2d2436] shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between whitespace-nowrap">
        <div className="flex items-center gap-4">
          <div className="size-8 bg-primary text-neutral-dark flex items-center justify-center rounded-lg">
            <span className="material-symbols-outlined text-2xl">precision_manufacturing</span>
          </div>
          <h2 className="text-neutral-dark dark:text-white text-xl font-bold leading-tight tracking-[-0.015em] font-display">
            EXTRA Engineering
          </h2>
        </div>
        <div className="hidden lg:flex flex-1 justify-end gap-8">
          <nav className="flex items-center gap-9">
            <a
              className="text-neutral-dark dark:text-gray-200 text-lg font-medium hover:text-primary transition-colors"
              href="#about"
            >
              About
            </a>
            <a
              className="text-neutral-dark dark:text-gray-200 text-lg font-medium hover:text-primary transition-colors"
              href="#services"
            >
              Services
            </a>
            <a
              className="text-neutral-dark dark:text-gray-200 text-lg font-medium hover:text-primary transition-colors"
              href="#contact"
            >
              Contact
            </a>
          </nav>
        </div>
        <button className="lg:hidden text-neutral-dark dark:text-white">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </header>
  );
};

export default Navigation;
