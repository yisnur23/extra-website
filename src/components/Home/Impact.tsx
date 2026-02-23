const Impact = () => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <div className="w-full text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark mb-6 leading-tight">
              Driving Operational Excellence Through Digital Innovation
            </h2>
            <p className="text-lg text-subtext-light dark:text-subtext-dark mb-8 leading-relaxed">
              The first Ethiopian company sparking digital transformation in industrial automation operations since
              2019. We seamlessly collect all your data, enable you to design any kind of industrial application with
              ease, and instantly deploy web-based clients to anyone, anywhere.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 dark:bg-primary/40 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary dark:text-primary text-sm font-bold">
                    check
                  </span>
                </div>
                <span className="text-text-light dark:text-text-dark font-medium text-sm">
                  Real-time production visibility
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 dark:bg-primary/40 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary dark:text-primary text-sm font-bold">
                    check
                  </span>
                </div>
                <span className="text-text-light dark:text-text-dark font-medium text-sm">
                  Predictive maintenance strategies
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 dark:bg-primary/40 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary dark:text-primary text-sm font-bold">
                    check
                  </span>
                </div>
                <span className="text-text-light dark:text-text-dark font-medium text-sm">
                  Secure MQTT infrastructure
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 dark:bg-primary/40 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary dark:text-primary text-sm font-bold">
                    check
                  </span>
                </div>
                <span className="text-text-light dark:text-text-dark font-medium text-sm">
                  Enterprise system integration
                </span>
              </div>
              <div className="flex items-center space-x-3 sm:col-span-2 lg:col-span-1">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 dark:bg-primary/40 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary dark:text-primary text-sm font-bold">
                    check
                  </span>
                </div>
                <span className="text-text-light dark:text-text-dark font-medium text-sm">
                  Reliable spare parts &amp; automation support
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
