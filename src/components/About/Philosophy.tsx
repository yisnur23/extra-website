const Philosophy = () => {
  return (
    <section className="py-24 bg-white dark:bg-background-dark relative overflow-hidden" id="mission">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-900/50 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Our Mission &amp; Vision</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-text-light dark:text-text-dark sm:text-4xl">
            Driving Industry 4.0 Forward
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <div className="group relative bg-gradient-to-br from-white to-gray-50 dark:from-card-dark dark:to-gray-900 rounded-2xl p-8 lg:p-12 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 dark:bg-primary/20 rounded-bl-full opacity-50 transition-transform group-hover:scale-110 duration-500"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-xl bg-primary text-white flex items-center justify-center mb-8 shadow-lg shadow-primary/30">
                <span className="material-symbols-outlined text-4xl">rocket_launch</span>
              </div>
              <h3 className="text-2xl font-bold text-text-light dark:text-text-dark mb-4">Our Mission</h3>
              <p className="text-lg text-subtext-light dark:text-subtext-dark leading-relaxed">
                To empower industrial organizations with innovative digital solutions that increase efficiency, reduce
                downtime, optimize energy usage, and enhance operational visibility.
              </p>
            </div>
          </div>
          <div className="group relative bg-gradient-to-br from-white to-primary/5 dark:from-card-dark dark:to-gray-900 rounded-2xl p-8 lg:p-12 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 dark:bg-primary/20 rounded-bl-full opacity-50 transition-transform group-hover:scale-110 duration-500"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-xl bg-primary text-white flex items-center justify-center mb-8 shadow-lg shadow-primary/30">
                <span className="material-symbols-outlined text-4xl">visibility</span>
              </div>
              <h3 className="text-2xl font-bold text-text-light dark:text-text-dark mb-4">Our Vision</h3>
              <p className="text-lg text-subtext-light dark:text-subtext-dark leading-relaxed">
                To empower manufacturers to digitally transform and lead their industries by architecting and
                delivering scalable Industry 4.0 solutions, leveraging IIoT and Unified Namespace (UNS) concepts to
                create connected, intelligent, and future-ready operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
