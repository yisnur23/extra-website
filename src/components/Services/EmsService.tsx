const emsCapabilities = [
  "Real-time energy monitoring dashboards",
  "Historical analysis and benchmarking",
  "Energy-performance correlation with production",
  "Cost allocation by process, line, or facility",
  "Alarm and anomaly detection",
];

const emsValue = [
  "Reduced energy costs and waste",
  "Improved operational efficiency",
  "Support for sustainability and ESG goals",
  "Data-backed energy optimization decisions",
];

const EmsService = () => {
  return (
    <section className="scroll-mt-32" id="ems">
      <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
        <div className="w-full md:w-1/2">
          <div className="inline-flex items-center gap-2 text-primary font-bold mb-2">
            <span className="w-8 h-[2px] bg-primary"></span>
            <span>SUSTAINABILITY</span>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Energy Management Systems (EMS)</h2>
          <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4">
            Smarter Energy Control for Cost and Sustainability
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
            EMS provides real-time visibility into electricity, water, gas, and heat consumption across industrial
            facilities. We implement EMS solutions that transform raw energy data into actionable insight.
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            By integrating energy meters through IIoT architectures, EMS enables transparent energy control from the
            shop floor to executive level.
          </p>
        </div>
        <div className="w-full md:w-1/2 relative">
          <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-700">
            <img
              alt="Solar panels and green energy industrial concept"
              className="w-full h-full object-cover"
              data-alt="Solar panels and green energy industrial concept"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtmEZBABInCDVrPcZ7UJ9-P9gLb254TlcLohbuOqL0yggqVofkgbqXSrgI3x59XferhGOmj4Fkz2YyCMuOIEtu01A7DGgXLxC_XPoNztfM3FoxYPWrhLw2t3AiaPNVblVk4fwENaGE6SRBzufkE1j1PHck1KNmxyclq7C5toPIprR9kPGYlvZmHms5ESL10yaqqyTTptpiG1KARsEXuTZhiwSoPT9HBpc_Js9flj0XGloUXXmP_yQhzVXOeiuqDGs5qnghxzFi38A_"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <article className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
          <h4 className="font-bold text-slate-900 dark:text-white mb-3">EMS Capabilities</h4>
          <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
            {emsCapabilities.map((item) => (
              <li className="flex items-start gap-2" key={item}>
                <span className="text-primary leading-6">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
        <article className="bg-primary/5 dark:bg-slate-800 rounded-xl p-6 border border-primary/15 dark:border-slate-700">
          <h4 className="font-bold text-slate-900 dark:text-white mb-3">Business Value</h4>
          <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
            {emsValue.map((item) => (
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

export default EmsService;
