import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-16 w-full bg-background-light dark:bg-background-dark grid-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-main dark:text-white mb-4">Contact Us</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-text-muted dark:text-gray-400 max-w-3xl mx-auto">
            Ready to transform your operations? Get in touch with our team of experts to discuss your automation needs.
          </p>
        </motion.div>
        <motion.div
          className="relative z-10 w-full bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col lg:flex-row min-h-[600px] border border-[#e1dde4]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
            <form className="space-y-6">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="space-y-2">
                  <label className="text-sm font-medium text-charcoal" htmlFor="name">
                    Full Name
                  </label>
                  <input
                    className="w-full rounded-lg border-[#e1dde4] bg-background-light px-4 py-3 text-charcoal focus:border-primary focus:ring-primary focus:ring-1 outline-none transition-all placeholder:text-gray-400"
                    id="name"
                    placeholder="John Doe"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-charcoal" htmlFor="company">
                    Company Name
                  </label>
                  <input
                    className="w-full rounded-lg border-[#e1dde4] bg-background-light px-4 py-3 text-charcoal focus:border-primary focus:ring-primary focus:ring-1 outline-none transition-all placeholder:text-gray-400"
                    id="company"
                    placeholder="Acme Industries"
                    type="text"
                  />
                </div>
              </motion.div>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="space-y-2">
                  <label className="text-sm font-medium text-charcoal" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    className="w-full rounded-lg border-[#e1dde4] bg-background-light px-4 py-3 text-charcoal focus:border-primary focus:ring-primary focus:ring-1 outline-none transition-all placeholder:text-gray-400"
                    id="email"
                    placeholder="john@example.com"
                    type="email"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-charcoal" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    className="w-full rounded-lg border-[#e1dde4] bg-background-light px-4 py-3 text-charcoal focus:border-primary focus:ring-primary focus:ring-1 outline-none transition-all placeholder:text-gray-400"
                    id="phone"
                    placeholder="+251 ..."
                    type="tel"
                  />
                </div>
              </motion.div>
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <label className="text-sm font-medium text-charcoal" htmlFor="interest">
                  Area of Interest
                </label>
                <select
                  className="w-full rounded-lg border-[#e1dde4] bg-background-light px-4 py-3 text-charcoal focus:border-primary focus:ring-primary focus:ring-1 outline-none transition-all"
                  id="interest"
                >
                  <option>Industrial Automation</option>
                  <option>IoT Solutions</option>
                  <option>Engineering Consulting</option>
                  <option>Other</option>
                </select>
              </motion.div>
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <label className="text-sm font-medium text-charcoal" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="w-full rounded-lg border-[#e1dde4] bg-background-light px-4 py-3 text-charcoal focus:border-primary focus:ring-primary focus:ring-1 outline-none transition-all placeholder:text-gray-400 resize-none"
                  id="message"
                  placeholder="Tell us about your project requirements..."
                  rows={4}
                ></textarea>
              </motion.div>
              <motion.button
                className="w-full md:w-auto px-8 py-3 bg-primary text-charcoal font-bold rounded-lg hover:bg-[#d4bce8] transition-colors shadow-sm flex items-center justify-center gap-2 group"
                type="button"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Send Message</span>
                <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </motion.button>
            </form>
          </div>
          <div className="w-full lg:w-[400px] bg-primary/20 p-8 lg:p-12 flex flex-col justify-between border-l border-[#e1dde4] relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/30 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/40 rounded-full blur-2xl pointer-events-none"></div>
            <div className="relative z-10 space-y-10">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h3 className="text-xl font-bold text-charcoal mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-white p-2 rounded-lg shadow-sm text-charcoal shrink-0">
                      <span className="material-symbols-outlined">location_on</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-charcoal text-sm">Visit Us</h4>
                      <p className="text-charcoal-light text-sm mt-1">
                        Bole Sub City, Woreda 03
                        <br />
                        Addis Ababa, Ethiopia
                      </p>
                      <a
                        className="text-charcoal text-xs font-bold mt-2 inline-flex items-center hover:underline decoration-charcoal/30"
                        href="#"
                      >
                        View on Google Maps{" "}
                        <span className="material-symbols-outlined text-[10px] ml-1">open_in_new</span>
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-white p-2 rounded-lg shadow-sm text-charcoal shrink-0">
                      <span className="material-symbols-outlined">call</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-charcoal text-sm">Call Us</h4>
                      <p className="text-charcoal-light text-sm mt-1">Mon-Fri from 8am to 5pm.</p>
                      <a
                        className="text-charcoal font-medium hover:text-primary-dark transition-colors block mt-1"
                        href="tel:+251911234567"
                      >
                        +251 911 234 567
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-white p-2 rounded-lg shadow-sm text-charcoal shrink-0">
                      <span className="material-symbols-outlined">mail</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-charcoal text-sm">Email Us</h4>
                      <p className="text-charcoal-light text-sm mt-1">Our friendly team is here to help.</p>
                      <a
                        className="text-charcoal font-medium hover:text-primary-dark transition-colors block mt-1"
                        href="mailto:info@extraengineering.com"
                      >
                        info@extraengineering.com
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <h3 className="text-xl font-bold text-charcoal mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  <a
                    className="bg-white p-3 rounded-lg shadow-sm text-charcoal hover:bg-primary hover:text-charcoal transition-all hover:-translate-y-1"
                    href="#"
                  >
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        clipRule="evenodd"
                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                  <a
                    className="bg-white p-3 rounded-lg shadow-sm text-charcoal hover:bg-primary hover:text-charcoal transition-all hover:-translate-y-1"
                    href="#"
                  >
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </a>
                  <a
                    className="bg-white p-3 rounded-lg shadow-sm text-charcoal hover:bg-primary hover:text-charcoal transition-all hover:-translate-y-1"
                    href="#"
                  >
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        clip-rule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
