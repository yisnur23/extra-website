import { motion } from "framer-motion";

const Impact = () => {
  return (
    <section id="impact" className="py-16 bg-white dark:bg-[#1f1826]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-main dark:text-white mb-4">Operational Impact</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-neutral-gray dark:text-gray-400 max-w-2xl mx-auto">
            Tangible results driven by data. Our solutions transform traditional workflows into optimized, intelligent
            processes.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div 
            className="relative group p-8 rounded-xl bg-background-light dark:bg-[#251e2e] border border-transparent hover:border-primary/50 transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-8xl text-neutral-dark dark:text-white">trending_up</span>
            </div>
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(221,200,239,0.5)]">
                <span className="material-symbols-outlined text-3xl text-neutral-dark">speed</span>
              </div>
              <h3 className="text-xl font-bold text-neutral-dark dark:text-white mb-3 font-display">
                Improved Efficiency
              </h3>
              <p className="text-neutral-gray dark:text-gray-400 text-sm mb-6 leading-relaxed">
                Achieve up to 30% reduction in downtime through predictive maintenance algorithms and streamlined
                workflows.
              </p>
              <div className="w-full bg-neutral-gray/20 rounded-full h-1.5 mb-2">
                <div className="bg-green-500 h-1.5 rounded-full w-[85%] relative">
                  <div className="absolute right-0 -top-1 w-3 h-3 bg-white border-2 border-green-500 rounded-full"></div>
                </div>
              </div>
              <p className="text-xs text-right font-mono text-green-500 font-bold">+30% Optimization</p>
            </div>
          </motion.div>
          <motion.div 
            className="relative group p-8 rounded-xl bg-background-light dark:bg-[#251e2e] border border-transparent hover:border-primary/50 transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-8xl text-neutral-dark dark:text-white">analytics</span>
            </div>
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-full bg-white border-2 border-primary flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-3xl text-primary">insights</span>
              </div>
              <h3 className="text-xl font-bold text-neutral-dark dark:text-white mb-3 font-display">
                Data-driven Decisions
              </h3>
              <p className="text-neutral-gray dark:text-gray-400 text-sm mb-6 leading-relaxed">
                Turn raw sensor data into actionable business intelligence. Visualize KPIs instantly to make informed
                pivots.
              </p>
              <div className="flex items-end gap-1 h-8 mb-2 opacity-80">
                <div className="flex-1 bg-primary/30 rounded-t-sm h-[40%]"></div>
                <div className="flex-1 bg-primary/50 rounded-t-sm h-[60%]"></div>
                <div className="flex-1 bg-primary/70 rounded-t-sm h-[30%]"></div>
                <div className="flex-1 bg-primary rounded-t-sm h-[90%]"></div>
              </div>
              <p className="text-xs text-right font-mono text-primary font-bold">Real-time Analytics</p>
            </div>
          </motion.div>
          <motion.div 
            className="relative group p-8 rounded-xl bg-background-light dark:bg-[#251e2e] border border-transparent hover:border-primary/50 transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-8xl text-neutral-dark dark:text-white">visibility</span>
            </div>
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-full bg-neutral-dark dark:bg-white flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-3xl text-white dark:text-neutral-dark">monitoring</span>
              </div>
              <h3 className="text-xl font-bold text-neutral-dark dark:text-white mb-3 font-display">
                Real-time Monitoring
              </h3>
              <p className="text-neutral-gray dark:text-gray-400 text-sm mb-6 leading-relaxed">
                Monitor plant operations from anywhere. Secure remote access ensures you never miss a critical alert.
              </p>
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
                <span className="text-xs font-mono text-neutral-gray dark:text-gray-500">Live Feed Connection</span>
              </div>
              <div className="h-1.5 w-full bg-neutral-gray/20 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 w-full animate-pulse"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
