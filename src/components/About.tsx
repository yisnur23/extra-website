import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-16 w-full bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-main dark:text-white mb-4">
            About Us
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          className="flex flex-col gap-6 order-2 lg:order-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="flex flex-col gap-4">
            <h3 className="text-primary font-bold tracking-wider text-2xl uppercase">Who We Are</h3>
            <h2 className="text-text-main dark:text-white text-3xl md:text-4xl font-bold leading-tight tracking-[-0.02em]">
              Engineering Excellence for a Connected Future
            </h2>
            <p className="text-text-sub dark:text-gray-400 text-lg leading-relaxed">
              We are a leading provider of industrial automation and IoT solutions in Ethiopia, dedicated to enhancing
              operational efficiency through state-of-the-art technology.
            </p>
            <p className="text-text-sub dark:text-gray-400 text-base leading-relaxed">
              From custom PLC programming to large-scale SCADA deployments, our team of certified engineers brings
              global standards to local industries, ensuring reliability, safety, and scalability.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 mt-4">
            <div className="flex flex-col gap-1 border-l-4 border-primary pl-4">
              <span className="text-3xl font-bold text-text-main dark:text-white">10+</span>
              <span className="text-sm text-text-sub dark:text-gray-500">Years Experience</span>
            </div>
            <div className="flex flex-col gap-1 border-l-4 border-primary pl-4">
              <span className="text-3xl font-bold text-text-main dark:text-white">50+</span>
              <span className="text-sm text-text-sub dark:text-gray-500">Projects Delivered</span>
            </div>
          </div>
        </motion.div>
        <motion.div 
          className="relative order-1 lg:order-2 h-full min-h-[400px]"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          <div className="absolute inset-0 bg-primary/10 rounded-2xl transform rotate-3 scale-95 z-0"></div>
          <div
            className="relative z-10 w-full h-full rounded-2xl overflow-hidden shadow-xl"
            data-alt="Engineer working on a complex server rack with blue lighting"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDAaX70YmFwQJHQTJM1_ZTF8_iZJZoQc2d7nk-RvrUkudgHtzpQFPVAB7p6AQ4i2X3Y3B0C_otkYiFpeumZWsyWlLBXWG7bf4FXSUqFMxfkJ6esOpwetaWb0AyjC31UuSunSSTG5rXNe2JcbcxGKsW0sQrnjeEIrZjh00lZdIHiMvy_jKQhO067RYUs9ApxqV3l3ZvmZzTt8_6fCEr8_N_DLc41y9a3ylJC8Df3uFeMxQm3lHgEPWmsQMkpPbV6zkTT-IICW0zB6dcB')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent"></div>
          </div>

          <div className="absolute -bottom-6 -left-6 z-20 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg max-w-[200px] hidden md:block border border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-green-100 p-1.5 rounded-full text-green-600">
                <span className="material-symbols-outlined text-lg">verified</span>
              </div>
              <span className="text-sm font-bold dark:text-white">Certified Team</span>
            </div>
            <p className="text-xs text-text-sub dark:text-gray-400">
              ISO 9001 Compliant processes for quality assurance.
            </p>
          </div>
        </motion.div>
      </div>
      </div>
    </section>
  );
};

export default About;
