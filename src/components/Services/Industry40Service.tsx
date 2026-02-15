const implementationScope = [
  "Unified Namespace architecture design",
  "Standardized data modeling and naming",
  "Event-driven data distribution",
  "Secure OT/IT data integration",
  "Gradual migration without downtime",
];

const enabledUseCases = [
  "SCADA and MES modernization",
  "Industrial IoT and edge computing",
  "OEE and performance monitoring",
  "Predictive maintenance",
  "Energy management and sustainability",
  "Advanced analytics and AI readiness",
];

const Industry40Service = () => {
  return (
    <section className="scroll-mt-32" id="industry40">
      <div className="flex flex-col md:flex-row gap-8 items-center mb-10">
        <div className="w-full md:w-1/2">
          <div className="inline-flex items-center gap-2 text-primary font-bold mb-2">
            <span className="w-8 h-[2px] bg-primary"></span>
            <span>DIGITAL ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Industry 4.0 &amp; Unified Namespace (UNS)</h2>
          <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4">
            One Digital Backbone for the Entire Enterprise
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
            Industry 4.0 requires more than isolated systems. It requires a connected architecture. A Unified Namespace
            (UNS) creates a real-time, structured data layer that represents the true operational state of the
            enterprise.
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            By eliminating data silos, UNS enables seamless OT/IT integration and supports advanced digital use cases.
          </p>
        </div>
        <div className="w-full md:w-1/2 relative">
          <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700">
            <img
              alt="Digital factory architecture with connected systems"
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <article className="rounded-xl border border-slate-200 dark:border-slate-700 p-6 bg-white dark:bg-slate-800 shadow-sm">
          <h4 className="font-bold text-slate-900 dark:text-white mb-3">What We Implement</h4>
          <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
            {implementationScope.map((item) => (
              <li className="flex items-start gap-2" key={item}>
                <span className="text-primary leading-6">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-xl border border-primary/20 dark:border-slate-700 p-6 bg-primary/5 dark:bg-slate-800">
          <h4 className="font-bold text-slate-900 dark:text-white mb-3">Enabled Use Cases</h4>
          <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
            {enabledUseCases.map((item) => (
              <li className="flex items-start gap-2" key={item}>
                <span className="text-primary leading-6">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Industry40Service;
