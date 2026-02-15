const ignitionFeatures = [
  "Unlimited users, tags, and connections",
  "Web-based, responsive interfaces (PC, tablet, mobile, kiosk)",
  "Open architecture for seamless PLC, database, and enterprise integration",
  "Transparent, cost-effective licensing with no hidden fees",
];

const iiotCycle = [
  {
    title: "1. Sense",
    description: "Deploy the right sensors to capture critical process, energy, and asset data.",
    icon: "sensors",
    iconClass: "bg-primary/10 dark:bg-primary/50 text-primary",
  },
  {
    title: "2. Connect",
    description: "Securely collect accurate, real-time data from machines and infrastructure.",
    icon: "router",
    iconClass: "bg-primary/10 dark:bg-primary/50 text-primary",
  },
  {
    title: "3. Analyze",
    description: "Convert data into insight with live dashboards, analytics, and KPIs.",
    icon: "analytics",
    iconClass: "bg-primary/10 dark:bg-primary/50 text-primary",
  },
  {
    title: "4. Act",
    description: "Execute data-driven actions that create measurable business value.",
    icon: "settings_suggest",
    iconClass: "bg-primary/10 dark:bg-primary/50 text-primary",
  },
];

const outcomes = [
  "Higher Equipment and Production Efficiency",
  "Lower Energy Consumption",
  "Reduced Downtime",
  "Continuous Digital Growth",
];

const integrationScope = [
  "SCADA / MES - Real-time monitoring and production control",
  "OEE - Performance measurement and productivity optimization",
  "Condition Monitoring - Asset health and predictive maintenance",
  "EMS - Energy monitoring and optimization",
];

const ScadaService = () => {
  return (
    <section className="scroll-mt-32" id="scada">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-10">
        <div className="w-full md:col-start-2 md:row-start-1">
          <div className="inline-flex items-center gap-2 text-primary font-bold mb-2">
            <span className="w-8 h-[2px] bg-primary"></span>
            <span>DIGITAL OPERATIONS</span>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">SCADA, MES &amp; IIoT Solutions</h2>
          <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4">
            Turning Industrial Data into Operational Excellence
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
            Modern industrial operations demand real-time visibility, control, and optimization. SCADA (Supervisory
            Control and Data Acquisition) and MES (Manufacturing Execution Systems) form the digital backbone of smart
            factories, enabling faster decisions, higher productivity, and lower operating costs.
          </p>
        </div>

        <div className="w-full md:col-start-1 md:row-start-1 relative">
          <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-2xl relative group border border-slate-200 dark:border-slate-700">
            <img
              alt="SCADA dashboard screens with data charts"
              className="w-full h-full object-cover"
              data-alt="SCADA dashboard screens with data charts"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAP50VER9nqNHZQlSzNtV72usCMHFc7DpZLWFtjkOQYsR2KgTXEF7EyjdTakmhW4bBAQcCCnVLir9RBqc00glIeJzEf7fHRqX7iKknrkizExlaM7ImmBvgRhCe6_naR6edwm_58STrsst0kB7yo6EkGxk8GoEVEbA0OaNCVHJltB7pOKGB68sCNME5Rh2JN2AFKmT3mXlk7Wj_rUsdORlJcWq4K5uxQ5SqDeh7x0JySBrp2okvdLVnop3d-uxWFsb2cmWGfuvM26RM2"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur p-3 rounded-lg flex justify-between items-center shadow-lg">
              <span className="text-xs font-bold text-slate-500 uppercase">Unified Visibility</span>
              <span className="flex items-center gap-1 text-primary text-sm font-bold">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span> ONLINE
              </span>
            </div>
          </div>
        </div>

        <div className="w-full md:col-start-1 md:row-start-2">
          <div className="p-4 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-900 dark:text-white mb-1">Production Optimization with MES</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              MES operates above the SCADA layer to manage manufacturing execution and connect production planning to
              real-time plant data. Through ERP integration (e.g., SAP), MES aligns the shop floor with business
              systems.
            </p>
          </div>
        </div>

        <div className="w-full md:col-start-2 md:row-start-2">
          <div className="p-4 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-900 dark:text-white mb-1">Real-Time Control with SCADA</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              SCADA provides complete visibility of industrial processes by collecting live data from sensors, PLCs,
              and field devices. Intuitive dashboards and control screens allow operators to monitor performance,
              detect abnormalities, and remotely control equipment.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
        <article className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
            Ignition: SCADA, MES &amp; IIoT Platform
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
            Ignition, developed by Inductive Automation, unifies SCADA, MES, and Industrial IoT (IIoT) in one flexible
            platform backed by a strong global ecosystem and free training through Inductive University.
          </p>
          <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Why Ignition</h4>
          <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
            {ignitionFeatures.map((item) => (
              <li className="flex items-start gap-2" key={item}>
                <span className="text-primary leading-6">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="bg-primary/5 dark:bg-slate-800 rounded-xl p-6 border border-primary/15 dark:border-slate-700">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Industrial IoT (IIoT)</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            IIoT connects sensors, machines, and systems into a unified data ecosystem. By collecting and analyzing
            real-time operational data, IIoT transforms traditional plants into intelligent, data-driven operations.
          </p>
        </article>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 shadow-lg relative overflow-hidden mb-10">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary"></div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-5 relative z-10">Our IIoT Value Cycle</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
          {iiotCycle.map((step) => (
            <div
              className="p-5 rounded-xl bg-slate-50 dark:bg-slate-700/50 border border-slate-100 dark:border-slate-600 hover:shadow-md transition-shadow group"
              key={step.title}
            >
              <div
                className={`w-11 h-11 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform ${step.iconClass}`}
              >
                <span className="material-icons text-base">{step.icon}</span>
              </div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-1">{step.title}</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <article className="rounded-xl border border-slate-200 dark:border-slate-700 p-6 bg-slate-50 dark:bg-slate-800/50">
          <h4 className="font-bold text-slate-900 dark:text-white mb-3">Business Outcomes Delivered</h4>
          <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
            {outcomes.map((item) => (
              <li className="flex items-start gap-2" key={item}>
                <span className="text-primary leading-6">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
        <article className="rounded-xl border border-slate-200 dark:border-slate-700 p-6 bg-slate-50 dark:bg-slate-800/50">
          <h4 className="font-bold text-slate-900 dark:text-white mb-3">Seamless Integration</h4>
          <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
            {integrationScope.map((item) => (
              <li className="flex items-start gap-2" key={item}>
                <span className="text-primary leading-6">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>

      <p className="text-slate-700 dark:text-slate-300 font-medium">
        Build a smarter industrial future. Connect. Analyze. Act. Perform.
      </p>
    </section>
  );
};

export default ScadaService;
