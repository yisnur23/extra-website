import { type ChangeEvent, type FormEvent, useState } from "react";

type ContactFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

const ContactMessageCard = () => {
  const [formValues, setFormValues] = useState<ContactFormValues>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    const fieldName = name as keyof ContactFormValues;
    setFormValues((prev) => ({ ...prev, [fieldName]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      await new Promise((resolve) => setTimeout(resolve, 900));
      console.log("Contact Form Data:", formValues);
      setSubmitStatus("success");
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-800 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Send us a message</h2>

      {submitStatus === "success" && (
        <div
          className="mb-6 rounded-lg border border-primary/30 bg-primary/10 px-4 py-3 text-sm text-primary relative z-10"
          role="alert"
        >
          Success placeholder: your message was submitted.
        </div>
      )}
      {submitStatus === "error" && (
        <div
          className="mb-6 rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-800 dark:bg-red-950/30 dark:text-red-300 relative z-10"
          role="alert"
        >
          Error placeholder: something went wrong while submitting the form.
        </div>
      )}

      <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-text-muted-light dark:text-text-muted-dark mb-2" htmlFor="first-name">
              First Name
            </label>
            <input
              className="block w-full rounded-lg border border-gray-300 dark:border-border-dark bg-white dark:bg-gray-800/50 text-gray-900 dark:text-white focus:border-primary focus:ring-primary sm:text-sm h-11 px-3 transition-colors"
              id="first-name"
              name="firstName"
              placeholder="John"
              required
              type="text"
              value={formValues.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-muted-light dark:text-text-muted-dark mb-2" htmlFor="last-name">
              Last Name
            </label>
            <input
              className="block w-full rounded-lg border border-gray-300 dark:border-border-dark bg-white dark:bg-gray-800/50 text-gray-900 dark:text-white focus:border-primary focus:ring-primary sm:text-sm h-11 px-3 transition-colors"
              id="last-name"
              name="lastName"
              placeholder="Doe"
              required
              type="text"
              value={formValues.lastName}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-text-muted-light dark:text-text-muted-dark mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              className="block w-full rounded-lg border border-gray-300 dark:border-border-dark bg-white dark:bg-gray-800/50 text-gray-900 dark:text-white focus:border-primary focus:ring-primary sm:text-sm h-11 px-3 transition-colors"
              id="email"
              name="email"
              placeholder="john@example.com"
              required
              type="email"
              value={formValues.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-muted-light dark:text-text-muted-dark mb-2" htmlFor="phone">
              Phone Number
            </label>
            <input
              className="block w-full rounded-lg border border-gray-300 dark:border-border-dark bg-white dark:bg-gray-800/50 text-gray-900 dark:text-white focus:border-primary focus:ring-primary sm:text-sm h-11 px-3 transition-colors"
              id="phone"
              name="phone"
              placeholder="+251 ..."
              required
              type="text"
              value={formValues.phone}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-text-muted-light dark:text-text-muted-dark mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="block w-full rounded-lg border border-gray-300 dark:border-border-dark bg-white dark:bg-gray-800/50 text-gray-900 dark:text-white focus:border-primary focus:ring-primary sm:text-sm p-3 transition-colors"
            id="message"
            name="message"
            placeholder="Tell us about your project requirements..."
            required
            rows={4}
            value={formValues.message}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="flex items-center justify-end pt-2">
          <button
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="inline-block w-4 h-4 mr-2 border-2 border-white/70 border-t-transparent rounded-full animate-spin"></span>
                Sending...
              </>
            ) : (
              <>
                Send Message
                <span className="material-icons-outlined ml-2 text-lg">send</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

const ContactInfoPanel = () => {
  return (
    <div className="lg:col-span-5 space-y-8">
      <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-800 h-fit">
        <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">Contact Information</h2>
        <div className="space-y-8">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-xl bg-primary/5 dark:bg-primary/30 flex items-center justify-center text-primary">
                <span className="material-icons-outlined text-2xl">location_on</span>
              </div>
            </div>
            <div className="ml-4">
              <h3 className="text-base font-semibold text-gray-900 dark:text-white">Visit Us</h3>
              <p className="mt-1 text-sm text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                Bole Sub City, Woreda 03
                <br />
                Addis Ababa, Ethiopia
              </p>
              <a className="mt-2 inline-flex items-center text-sm font-medium text-primary hover:text-primary-dark" href="#">
                View on Google Maps
                <span className="material-icons-outlined text-xs ml-1">open_in_new</span>
              </a>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-xl bg-primary/5 dark:bg-primary/30 flex items-center justify-center text-primary">
                <span className="material-icons-outlined text-2xl">phone_in_talk</span>
              </div>
            </div>
            <div className="ml-4">
              <h3 className="text-base font-semibold text-gray-900 dark:text-white">Call Us</h3>
              <p className="mt-1 text-sm text-text-muted-light dark:text-text-muted-dark">Mon-Fri from 8am to 5pm</p>
              <p className="mt-1 text-lg font-bold text-gray-900 dark:text-white">+251 911 234 567</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-xl bg-primary/5 dark:bg-primary/30 flex items-center justify-center text-primary">
                <span className="material-icons-outlined text-2xl">mail_outline</span>
              </div>
            </div>
            <div className="ml-4">
              <h3 className="text-base font-semibold text-gray-900 dark:text-white">Email Us</h3>
              <p className="mt-1 text-sm text-text-muted-light dark:text-text-muted-dark">Our friendly team is here to help.</p>
              <a
                className="mt-1 block text-base font-medium text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors"
                href="mailto:info@extraengineering.com"
              >
                info@extraengineering.com
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-100 dark:border-gray-700 mt-8 pt-8">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              className="w-10 h-10 rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white dark:hover:bg-primary transition-all duration-300"
              href="#"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              className="w-10 h-10 rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white dark:hover:bg-primary transition-all duration-300"
              href="#"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              className="w-10 h-10 rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white dark:hover:bg-primary transition-all duration-300"
              href="#"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-800 h-64 lg:h-80 relative group">
        <iframe
          allowFullScreen
          className="grayscale hover:grayscale-0 transition-all duration-500 opacity-80 hover:opacity-100"
          height="100%"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126115.06880041492!2d38.74!3d8.9806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1684342345678!5m2!1sen!2sus"
          style={{ border: 0 }}
          width="100%"
        ></iframe>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent pointer-events-none group-hover:opacity-0 transition-opacity"></div>
        <div className="absolute bottom-4 left-4 bg-white dark:bg-gray-900 px-3 py-1.5 rounded-lg shadow-lg text-xs font-semibold text-gray-900 dark:text-white flex items-center pointer-events-none">
          <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
          Office Open Now
        </div>
      </div>
    </div>
  );
};

const ContactForm = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        <div className="lg:col-span-7 space-y-8">
          <ContactMessageCard />
        </div>
        <ContactInfoPanel />
      </div>
    </div>
  );
};

export default ContactForm;
