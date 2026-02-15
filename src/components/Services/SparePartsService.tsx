const portfolio = [
  "Electrical and control components",
  "PLC and SCADA spare parts",
  "Sensors and instrumentation",
  "Protection relays and accessories",
  "Mechanical and rotating equipment parts",
  "Hydraulic and pneumatic components",
  "Switchgear and panel accessories",
];

const value = [
  "Reduced downtime due to part shortages",
  "Verified quality and compatibility",
  "Reliable logistics and sourcing",
  "Long-term operational continuity",
];

const SparePartsService = () => {
  return (
    <section className="scroll-mt-32 mb-20" id="spareparts">
      <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
        <div className="w-full md:w-1/2">
          <div className="inline-flex items-center gap-2 text-primary font-bold mb-2">
            <span className="w-8 h-[2px] bg-primary"></span>
            <span>PARTS &amp; PROCUREMENT</span>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Industrial Spare Parts &amp; Procurement</h2>
          <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4">
            Reliable Components to Keep Operations Running
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
            We supply high-quality, industry-compliant spare parts to support automation systems, electrical
            infrastructure, and industrial equipment. Our procurement services ensure the right parts are available when
            needed.
          </p>
          <button className="text-primary font-bold hover:text-primary-dark flex items-center gap-2 group">
            Search Parts Catalog
            <span className="material-icons text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
          </button>
        </div>

        <div className="w-full md:w-1/2">
          <div className="grid grid-cols-3 gap-2">
            <div className="aspect-square bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center">
              <img
                alt="Gear part"
                className="w-full h-full object-cover rounded-lg opacity-80"
                data-alt="Close up of a metal gear"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAL9EZDl4dFkZMyJM7v-djbQ1f-d7IlpvCvw5uvHMcC2YU_WbeGw5RRuMk3sMmnw6pUBYqulm3AQ54246fV-RrupjlqYebJGNhKEBFXl6NZ5xKWgNtfH8zpRvPdaOG1tdyaQ40_LM1UDEaguzOWnB4EaDUGiu-DMcGRL0DeyZ_1Tjhhb9Q-BbZ2gunm4u8QMM1T7KZFu_IVGNfnOihAfFeUrGGVjPaYRGVlJwSMHrQcjRxZCYqHTn79I-LIkxihyBDN5O1wyUq0_9ln"
              />
            </div>
            <div className="aspect-square bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center">
              <img
                alt="Circuit board"
                className="w-full h-full object-cover rounded-lg opacity-80"
                data-alt="Close up of electronic circuit board"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDx-8FS3K41Dhw-8-o0IYRnPA7u0dQW-SQACnt6UVATJS2s8v5BfUYE1fvg4ZjC0AiaISq3Wd_qlPCjsoHT-u0KnM_16rBribugRJFOl1nQbNZzISf8FPjRNqz0sLrf7c6fgTP5e_d04YQUjfkCA7fJ2_vjxfK2ZP66E7vKtUMGVSrt2LzcHCnNCp_5zhixpkdkUbCJPc7cD88a-tiR84fJ_L41uuY0tQstgVsb-fiW43k1N5TivjkqyBCxSv186jL4Yl_eQXWYyW8i"
              />
            </div>
            <div className="aspect-square bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center">
              <img
                alt="Engine component"
                className="w-full h-full object-cover rounded-lg opacity-80"
                data-alt="Metallic engine component"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPR6sLplNLip5visS4gBscNllu_LCPLgLmliBN1LfCUKLS8f8TxmQ7R_4wLNiWcV2EpOyhLTx95wi-QH5xK-IwlmDX1ulCjJCxDgrQQdXw9q30ZvtJ09ed6fH-Ghl1K-1SkqsJLcOmtk1I8KlSHpzVeD8HZPxFXCngZeDDmWzsZ0WEVaSlL_Z1wqGh8nZhv65E9nBMomt8Tyc1ecn0aN5Hh0Q7AX6HZ1W9HQwq7vHoVrmLFYl3GY2vacfzboo94kkp9x-hnbWj6_eI"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <article className="rounded-xl border border-slate-200 dark:border-slate-700 p-6 bg-white dark:bg-slate-800 shadow-sm">
          <h4 className="font-bold text-slate-900 dark:text-white mb-3">Our Portfolio</h4>
          <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
            {portfolio.map((item) => (
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
            {value.map((item) => (
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

export default SparePartsService;
