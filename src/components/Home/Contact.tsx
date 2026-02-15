const Contact = () => {
  return (
    <section id="contact" className="py-24 w-full bg-background-light dark:bg-background-dark">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-12">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Contact</h2>
          <p className="mt-2 text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark">Get in Touch</p>
          <p className="mt-4 text-lg text-subtext-light dark:text-subtext-dark max-w-2xl mx-auto">
            Reach us directly for project discussions, support, or partnership opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-card-light dark:bg-card-dark rounded-xl border border-gray-100 dark:border-gray-800 p-6 shadow-sm">
            <p className="text-2xl mb-3" aria-hidden="true">
              📍
            </p>
            <h3 className="text-lg font-semibold text-text-light dark:text-text-dark mb-2">Office</h3>
            <p className="text-subtext-light dark:text-subtext-dark leading-relaxed">
              Bole Sub City, Woreda 03
              <br />
              Addis Ababa, Ethiopia
            </p>
          </div>

          <div className="bg-card-light dark:bg-card-dark rounded-xl border border-gray-100 dark:border-gray-800 p-6 shadow-sm">
            <p className="text-2xl mb-3" aria-hidden="true">
              📞
            </p>
            <h3 className="text-lg font-semibold text-text-light dark:text-text-dark mb-2">Phone</h3>
            <p className="text-subtext-light dark:text-subtext-dark mb-2">Mon-Fri, 8:00 AM - 5:00 PM</p>
            <a className="text-primary hover:text-primary-dark font-medium transition-colors" href="tel:+251911234567">
              +251 911 234 567
            </a>
          </div>

          <div className="bg-card-light dark:bg-card-dark rounded-xl border border-gray-100 dark:border-gray-800 p-6 shadow-sm">
            <p className="text-2xl mb-3" aria-hidden="true">
              ✉️
            </p>
            <h3 className="text-lg font-semibold text-text-light dark:text-text-dark mb-2">Email</h3>
            <p className="text-subtext-light dark:text-subtext-dark mb-2">We usually reply within one business day.</p>
            <a
              className="text-primary hover:text-primary-dark font-medium transition-colors"
              href="mailto:info@extraengineering.com"
            >
              info@extraengineering.com
            </a>
          </div>

          <div className="bg-card-light dark:bg-card-dark rounded-xl border border-gray-100 dark:border-gray-800 p-6 shadow-sm">
            <p className="text-2xl mb-3" aria-hidden="true">
              🌐
            </p>
            <h3 className="text-lg font-semibold text-text-light dark:text-text-dark mb-2">Social</h3>
            <p className="text-subtext-light dark:text-subtext-dark mb-3">Follow us for project updates and insights.</p>
            <div className="flex flex-wrap gap-3">
              <a className="text-primary hover:text-primary-dark font-medium transition-colors" href="#">
                LinkedIn
              </a>
              <a className="text-primary hover:text-primary-dark font-medium transition-colors" href="#">
                X / Twitter
              </a>
              <a className="text-primary hover:text-primary-dark font-medium transition-colors" href="#">
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
