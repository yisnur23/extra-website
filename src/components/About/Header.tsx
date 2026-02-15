const Header = () => {
  return (
    <header className="relative pt-32 pb-20 bg-gray-100 dark:bg-[#0B1120] border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight text-text-light dark:text-text-dark">
            About&nbsp;
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy-accent to-primary">
              Extra Engineering Solutions
            </span>
          </h1>
          <p className="text-lg md:text-xl text-subtext-light dark:text-subtext-dark mb-10 leading-relaxed">
            Extra Engineering Solution is a hardware-agnostic, accredited system integrator working with leading global
            technology providers. This approach gives us broad, multi-platform capability across industrial automation,
            SCADA, IIoT, and digital transformation technologies—allowing us to design solutions based on what is best
            for our customers, not tied to a single vendor.
          </p>
        </div>
      </div>
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(#6b7280 1px, transparent 1px)", backgroundSize: "32px 32px" }}
      ></div>
    </header>
  );
};

export default Header;
