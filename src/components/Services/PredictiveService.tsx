const predictiveList = [
  "Condition monitoring using sensors and analytics",
  "Early fault detection and failure prediction",
  "Maintenance based on actual asset health",
];

const oeeList = [
  "Availability analysis",
  "Performance and speed losses",
  "Quality and reject tracking",
];

const valueList = [
  "Reduced unplanned downtime",
  "Optimized maintenance planning",
  "Improved asset utilization",
  "Increased productivity and output quality",
];

const PredictiveService = () => {
  return (
    <section className="scroll-mt-32" id="predictive">
      <div className="flex flex-col md:flex-row-reverse gap-8 items-center mb-10">
        <div className="w-full md:w-1/2">
          <div className="inline-flex items-center gap-2 text-primary font-bold mb-2">
            <span className="w-8 h-[2px] bg-primary"></span>
            <span>RELIABILITY &amp; PERFORMANCE</span>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Predictive Maintenance &amp; OEE Monitoring</h2>
          <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4">
            Higher Uptime Through Data-Driven Reliability
          </h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Predictive maintenance and OEE monitoring transform maintenance and production management from reactive to
            proactive. By combining asset health data with performance metrics, organizations gain full visibility into
            equipment reliability and production effectiveness.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700">
            <img
              alt="Condition monitoring dashboard and rotating equipment"
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1400&q=80"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <article className="rounded-xl border border-slate-200 dark:border-slate-700 p-6 bg-white dark:bg-slate-800 shadow-sm">
          <h4 className="font-bold text-slate-900 dark:text-white mb-3">Predictive Maintenance</h4>
          <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
            {predictiveList.map((item) => (
              <li className="flex items-start gap-2" key={item}>
                <span className="text-primary leading-6">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-xl border border-slate-200 dark:border-slate-700 p-6 bg-white dark:bg-slate-800 shadow-sm">
          <h4 className="font-bold text-slate-900 dark:text-white mb-3">OEE Monitoring</h4>
          <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
            {oeeList.map((item) => (
              <li className="flex items-start gap-2" key={item}>
                <span className="text-primary leading-6">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-xl border border-primary/20 dark:border-slate-700 p-6 bg-primary/5 dark:bg-slate-800">
          <h4 className="font-bold text-slate-900 dark:text-white mb-3">Business Value</h4>
          <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
            {valueList.map((item) => (
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

export default PredictiveService;
