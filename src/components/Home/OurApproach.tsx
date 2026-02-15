import { motion } from "framer-motion";

type ApproachStep = {
  number: string;
  title: string;
  heading: string;
  description: string;
  bulletHeading: string;
  bullets: string[];
  result: string;
};

const steps: ApproachStep[] = [
  {
    number: "01",
    title: "Assessment",
    heading: "Understand the Existing Environment",
    description:
      "We analyze your industrial automation and control infrastructure to identify the safest modernization strategy.",
    bulletHeading: "Key focus areas:",
    bullets: [
      "Existing PLCs, RTUs, protection relays, and control systems",
      "Communication protocols and available data",
      "Network topology and cybersecurity",
      "Data accessibility and performance gaps",
    ],
    result: "A practical roadmap for IIoT integration while preserving your infrastructure.",
  },
  {
    number: "02",
    title: "Design",
    heading: "Secure and Scalable IIoT Architecture",
    description: "We design a future-ready architecture that integrates seamlessly with legacy systems.",
    bulletHeading: "Design principles:",
    bullets: [
      "Non-intrusive, read-only data acquisition",
      "Edge-based architecture",
      "Secure IT/OT separation",
      "Unified Namespace (UNS) structured data model",
      "SCADA, MES, analytics, and cloud readiness",
    ],
    result: "Legacy controllers become structured, real-time data sources.",
  },
  {
    number: "03",
    title: "Implementation",
    heading: "Minimal Disruption, Maximum Reliability",
    description: "We deploy industrial edge gateways and connectors without interrupting production.",
    bulletHeading: "Implementation approach:",
    bullets: [
      "Native protocol connectivity",
      "No panel rewiring",
      "No controller changes",
      "Data normalization and publishing",
      "Security and performance validation",
    ],
    result: "Live IIoT data production with little to no downtime.",
  },
  {
    number: "04",
    title: "Optimization",
    heading: "Continuous Improvement Through Data",
    description: "We continuously refine system performance and analytics capabilities.",
    bulletHeading: "Optimization activities:",
    bullets: [
      "Data-flow monitoring",
      "Tag and bandwidth optimization",
      "KPI and alarm enablement",
      "System tuning for operational growth",
    ],
    result: "Sustained efficiency and data-driven decision-making.",
  },
];

const outcomes = [
  "No machine replacement",
  "No infrastructure renovations",
  "No control logic modification",
  "Secure, scalable IIoT integration",
  "Immediate operational insights",
];

const ApproachStepItem = ({
  step,
  isLeft,
  index,
}: {
  step: ApproachStep;
  isLeft: boolean;
  index: number;
}) => {
  const alignmentClass = isLeft ? "md:pr-12 md:text-right md:items-end" : "md:pl-12";
  const contentOrderClass = isLeft ? "order-2 md:order-1" : "order-2 md:order-3";
  const spacerOrderClass = isLeft ? "order-3" : "order-3 md:order-1";
  const spacerSideClass = isLeft ? "md:pl-12" : "md:pr-12";

  return (
    <motion.div
      className="relative flex flex-col md:flex-row items-center"
      initial={{ opacity: 0, y: 24, x: isLeft ? -24 : 24 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, delay: index * 0.12, ease: "easeOut" }}
    >
      <div className={`md:w-1/2 ${alignmentClass} flex flex-col ${contentOrderClass} pl-16 md:pl-0`}>
        <span
          className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full mb-3 bg-primary/10 dark:bg-primary/20 text-primary"
        >
          {step.title}
        </span>
        <h3 className="text-2xl font-bold text-text-light dark:text-text-dark mb-2">{step.heading}</h3>
        <p className="text-subtext-light dark:text-subtext-dark mb-4 leading-relaxed max-w-md">{step.description}</p>
        <div className="w-full max-w-md mb-4">
          <p className="text-xs font-bold uppercase tracking-wider text-subtext-light dark:text-subtext-dark mb-2">
            {step.bulletHeading}
          </p>
          <ul className="space-y-1 text-sm text-subtext-light dark:text-subtext-dark">
            {step.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white dark:bg-card-dark border border-gray-100 dark:border-gray-700 rounded-lg p-3 inline-flex items-center shadow-sm">
          <span className="text-xs font-bold text-subtext-light dark:text-subtext-dark uppercase mr-2">Result:</span>
          <span className="text-sm font-semibold text-primary">{step.result}</span>
        </div>
      </div>
      <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-primary border-4 border-white dark:border-gray-900 shadow-lg z-10 order-1 md:order-2">
        <span className="text-white font-bold text-sm">{step.number}</span>
      </div>
      <div className={`md:w-1/2 ${spacerSideClass} ${spacerOrderClass} hidden md:block`}></div>
    </motion.div>
  );
};

const OurApproach = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800/50 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-base text-primary font-bold tracking-widest uppercase">
            Our Approach
          </h2>
          <p className="mt-2 text-4xl md:text-5xl font-extrabold text-text-light dark:text-text-dark tracking-tight">
            Modernizing Legacy Industrial Controllers into IIoT Data Sources
          </p>
          <p className="mt-4 max-w-2xl text-xl text-subtext-light dark:text-subtext-dark mx-auto">
            We follow a structured, low-risk process to transform existing industrial control systems into modern
            IIoT-ready data sources. Our approach protects your current assets, avoids production disruption, and
            delivers immediate digital value — without replacing machines or modifying control logic.
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 dark:bg-gray-700 -ml-0.5 md:ml-0 transform md:-translate-x-1/2 rounded-full hidden md:block">
            <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-primary to-transparent"></div>
          </div>
          <div className="absolute left-6 top-4 bottom-4 w-1 bg-gray-200 dark:bg-gray-700 rounded-full md:hidden"></div>
          <div className="space-y-12">
            {steps.map((step, index) => (
              <ApproachStepItem key={step.number} step={step} isLeft={index % 2 === 0} index={index} />
            ))}
          </div>
          <div className="mt-20 flex justify-center">
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 max-w-4xl w-full text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary/70 to-primary"></div>
              <h3 className="text-xl md:text-2xl font-bold text-text-light dark:text-text-dark mb-2">
                The Final Outcome
              </h3>
              <p className="text-subtext-light dark:text-subtext-dark max-w-2xl mx-auto mb-6">
                We modernize your data — not your machines.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left max-w-3xl mx-auto">
                {outcomes.map((outcome) => (
                  <li
                    key={outcome}
                    className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-subtext-light dark:text-subtext-dark font-semibold flex items-start gap-2"
                  >
                    <span className="text-primary mt-1">•</span>
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
