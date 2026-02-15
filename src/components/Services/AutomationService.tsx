const deliverables = [
  "PLC, RTU, and DCS system design and integration",
  "Legacy control system modernization",
  "Process automation and control logic optimization",
  "Control panel design and commissioning",
  "Industrial communication networks",
];

const businessValue = [
  "Improved process stability and repeatability",
  "Reduced operational risk and downtime",
  "Extended lifecycle of existing assets",
  "Scalable automation platforms ready for digital transformation",
];

const troubleshooting = [
  "PLC and RTU faults",
  "SCADA system communication issues",
  "I/O module failures",
  "Field instrument malfunctions",
  "Network and industrial protocol errors (OPC UA, Modbus, MQTT)",
  "Protection relay and control logic faults",
  "Power quality and signal integrity issues",
];

const AutomationService = () => {
  return (
    <section className="scroll-mt-32" id="automation">
      <div className="flex flex-col md:flex-row gap-8 items-center mb-10">
        <div className="w-full md:w-1/2">
          <div className="inline-flex items-center gap-2 text-primary font-bold mb-2">
            <span className="w-8 h-[2px] bg-primary"></span>
            <span>CORE SERVICE</span>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Industrial Automation &amp; Digitalization</h2>
          <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4">
            Reliable Automation for Stable, Future-Ready Operations
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
            Industrial automation is the foundation of safe, efficient, and repeatable production. We design and
            implement robust automation systems that enhance process control, improve operational visibility, and ensure
            long-term system stability.
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Our approach focuses on modernizing existing automation environments while preserving proven infrastructure.
            This allows organizations to benefit from new technologies without unnecessary machine replacement or
            operational disruption.
          </p>
        </div>
        <div className="w-full md:w-1/2 relative">
          <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-2xl relative group">
            <div className="absolute inset-0 bg-primary/20 mix-blend-multiply transition-opacity group-hover:opacity-0"></div>
            <img
              alt="Robotic arm on industrial assembly line"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              data-alt="Robotic arm on industrial assembly line"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBO4MmDLJ-joI4hTatZT5ftV8CLPVPXcGn7bK_Zq9kUmtWCRKsdqFJVM1EKLaigT-p_CFPb3LtXFyEWx7L6N7gob094f-g2AlmE7Og_hCgbvuVnmJmq3KNZtsCFS5ejI7n-dsFkYw5M06_3E663oiqI7HBS7jIw8A1EXRUteJ4GVBaJLXXlgFm0jeLUIGTycgbi2KvSgtU0d44UY8ObGSLb9f_dRdod9SFON67D4W-bHHK_Kp2FX-HKAkRQTeizc0B5Kf48kcyQQA5E"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
        <article className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
          <h4 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <span className="material-icons text-primary text-base">check_circle</span>
            What We Deliver
          </h4>
          <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
            {deliverables.map((item) => (
              <li className="flex items-start gap-2" key={item}>
                <span className="text-primary leading-6">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="bg-primary/5 dark:bg-slate-800 p-6 rounded-xl border border-primary/15 dark:border-slate-700">
          <h4 className="font-bold text-primary mb-4 flex items-center gap-2">
            <span className="material-icons text-primary text-base">trending_up</span>
            Business Value
          </h4>
          <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
            {businessValue.map((item) => (
              <li className="flex items-start gap-2" key={item}>
                <span className="text-primary leading-6">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>

      <article className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-800/70 p-6 md:p-8 shadow-sm">
        <div className="flex items-start gap-3 mb-3">
          <span className="material-icons text-primary">engineering</span>
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Industrial Automation Troubleshooting &amp; Maintenance
            </h3>
            <p className="text-sm font-medium text-primary">Fast Diagnosis. Reliable Solutions. Maximum Uptime.</p>
          </div>
        </div>
        <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
          At Extra Engineering Solution, we provide expert industrial automation troubleshooting and maintenance
          services to ensure your systems operate safely, efficiently, and without costly interruptions.
        </p>
        <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
          In today&apos;s automated environments, even minor faults in PLCs, SCADA systems, sensors, or industrial
          communication networks can disrupt entire operations. Our engineers deliver rapid fault diagnosis and
          structured maintenance strategies to minimize downtime and restore system performance quickly.
        </p>
        <h4 className="font-bold text-slate-900 dark:text-white mb-3">Troubleshooting Services</h4>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">We specialize in identifying and resolving:</p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-slate-700 dark:text-slate-300">
          {troubleshooting.map((item) => (
            <li className="flex items-start gap-2" key={item}>
              <span className="text-primary leading-6">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-5 text-sm text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-700 pt-4">
          Our systematic, engineering-driven approach ensures accurate root cause analysis, not temporary fixes.
        </p>
      </article>
    </section>
  );
};

export default AutomationService;
