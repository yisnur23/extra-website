const integrationScope = [
  "PLC, SCADA, MES, and IIoT systems",
  "ERP, CMMS, and analytics platforms",
  "Databases, cloud services, and reporting tools",
  "Secure industrial communication layers",
];

const businessValue = [
  "Enterprise-wide operational transparency",
  "Faster, better-informed decisions",
  "Reduced integration complexity",
  "Scalable digital infrastructure",
];

const OtItService = () => {
  return (
    <section className="scroll-mt-32" id="otit">
      <div className="flex flex-col md:flex-row-reverse gap-8 items-center mb-8">
        <div className="w-full md:w-1/2">
          <div className="inline-flex items-center gap-2 text-primary font-bold mb-2">
            <span className="w-8 h-[2px] bg-primary"></span>
            <span>CONNECTED ENTERPRISE</span>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Enterprise System Integration (OT/IT)</h2>
          <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4">
            Seamless Data Flow from Shop Floor to Enterprise
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
            True digital transformation requires integration between operational technology (OT) and information
            technology (IT). We design secure, scalable integrations that connect industrial systems with enterprise
            platforms.
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Our approach avoids complex point-to-point connections by using standardized, future-ready architectures.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <img
            alt="Server room cables representing IT connectivity"
            className="w-full rounded-xl shadow-lg border border-slate-200 dark:border-slate-700"
            data-alt="Server room cables representing IT connectivity"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsc-ymax_yu1-By8Jvqb4vc_hZZGMFHRjgo7frvL7dX_9wblNVmC_p9vBHu8A_k5xeVbUtdF4ChpRHOVludY-xq0ifaTi5WIcAnoiCS9m67VevHRKaPNoTUktAaX8nrhDJklFG3ze4Eo1w6jYjXKisyWIJpE4_LSN_OBf8btf_yx5ZYDhyxnHFknBpY8Y91d6a-mfZ6GxsNxIfunboN0CDCT7F3tpxu4Z2sRrDFX1upyNBFzREW40cRfDokAaEGL2RrIhXPRkGdrwn"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <article className="rounded-xl border border-slate-200 dark:border-slate-700 p-6 bg-white dark:bg-slate-800 shadow-sm">
          <h4 className="font-bold text-slate-900 dark:text-white mb-3">Integration Scope</h4>
          <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
            {integrationScope.map((item) => (
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
            {businessValue.map((item) => (
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

export default OtItService;
