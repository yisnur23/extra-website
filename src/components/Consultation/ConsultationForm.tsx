import { type ChangeEvent, type FormEvent, useState } from "react";

type ConsultationFormValues = {
  name: string;
  email: string;
  telephone: string;
  company: string;
  role: string;
  help: string;
  consent: boolean;
};

const ConsultationInfoPanel = () => {
  return (
    <div className="lg:w-5/12 pt-8 lg:sticky lg:top-32">
      <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 dark:bg-primary/30 text-primary text-xs font-semibold uppercase tracking-wide mb-6">
        Consultation Request Portal
      </div>
      <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight">
        Free Consultation for Your <span className="text-primary">Industry 4.0</span> Journey
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
        Let&apos;s discuss your challenges and design the right digital solution for your operation.
      </p>
      <div className="space-y-6">
        <h3 className="text-xl font-semibold mb-4">How we help you adapt to new trends:</h3>
        <div className="flex items-start gap-4 p-4 rounded-xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark shadow-sm hover:shadow-md transition-shadow">
          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary dark:text-primary">
            <span className="material-icons">query_stats</span>
          </div>
          <div>
            <h4 className="font-medium text-base mb-1">Strategic Assessment</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              We analyze your current infrastructure to identify high-impact automation opportunities.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 rounded-xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark shadow-sm hover:shadow-md transition-shadow">
          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary dark:text-primary">
            <span className="material-icons">settings_suggest</span>
          </div>
          <div>
            <h4 className="font-medium text-base mb-1">Custom Solution Design</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Tailored IoT and SCADA architectures designed specifically for your production goals.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 rounded-xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark shadow-sm hover:shadow-md transition-shadow">
          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary">
            <span className="material-icons">rocket_launch</span>
          </div>
          <div>
            <h4 className="font-medium text-base mb-1">Future-Proof Scalability</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Systems built to grow with your business, ensuring long-term operational efficiency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ConsultationRequestCard = () => {
  const [formValues, setFormValues] = useState<ConsultationFormValues>({
    name: "",
    email: "",
    telephone: "",
    company: "",
    role: "",
    help: "",
    consent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = event.target;

    if (type === "checkbox") {
      const { checked } = event.target as HTMLInputElement;
      setFormValues((prev) => ({ ...prev, [name]: checked }));
      return;
    }

    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      await new Promise((resolve) => setTimeout(resolve, 900));
      console.log("Consultation Request Form Data:", formValues);
      setSubmitStatus("success");
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="lg:w-7/12 w-full">
      <div className="bg-surface-light dark:bg-surface-dark rounded-2xl shadow-xl border border-border-light dark:border-border-dark p-6 sm:p-10">
        <div className="mb-8 border-b border-border-light dark:border-border-dark pb-6">
          <h2 className="text-2xl font-bold mb-2">Consultation Request Form</h2>
          <p className="text-gray-500 dark:text-gray-400">
            Let&apos;s discuss your challenges and design the right digital solution for your operation.
          </p>
        </div>

        {submitStatus === "success" && (
          <div className="mb-6 rounded-lg border border-primary/30 bg-primary/10 px-4 py-3 text-sm text-primary" role="alert">
            Success placeholder: your consultation request was submitted.
          </div>
        )}
        {submitStatus === "error" && (
          <div
            className="mb-6 rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-800 dark:bg-red-950/30 dark:text-red-300"
            role="alert"
          >
            Error placeholder: something went wrong while submitting the form.
          </div>
        )}

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="name">
                Name &amp; Surname
              </label>
              <input
                className="block w-full rounded-lg border border-gray-300 dark:border-border-dark bg-white dark:bg-gray-800/50 text-gray-900 dark:text-white focus:ring-primary focus:border-primary sm:text-sm h-11 px-3"
                id="name"
                name="name"
                required
                type="text"
                value={formValues.name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="email">
                Email Address
              </label>
              <input
                className="block w-full rounded-lg border border-gray-300 dark:border-border-dark bg-white dark:bg-gray-800/50 text-gray-900 dark:text-white focus:ring-primary focus:border-primary sm:text-sm h-11 px-3"
                id="email"
                name="email"
                required
                type="email"
                value={formValues.email}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="telephone">
                Telephone
              </label>
              <input
                className="block w-full rounded-lg border border-gray-300 dark:border-border-dark bg-white dark:bg-gray-800/50 text-gray-900 dark:text-white focus:ring-primary focus:border-primary sm:text-sm h-11 px-3"
                id="telephone"
                name="telephone"
                required
                type="tel"
                value={formValues.telephone}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="company">
                Company
              </label>
              <input
                className="block w-full rounded-lg border border-gray-300 dark:border-border-dark bg-white dark:bg-gray-800/50 text-gray-900 dark:text-white focus:ring-primary focus:border-primary sm:text-sm h-11 px-3"
                id="company"
                name="company"
                required
                type="text"
                value={formValues.company}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="role">
              Position / Role
            </label>
            <input
              className="block w-full rounded-lg border border-gray-300 dark:border-border-dark bg-white dark:bg-gray-800/50 text-gray-900 dark:text-white focus:ring-primary focus:border-primary sm:text-sm h-11 px-3"
              id="role"
              name="role"
              required
              type="text"
              value={formValues.role}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="help">
              How can we help you?
            </label>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              (Briefly describe your project, challenges, or goals)
            </p>
            <textarea
              className="p-3 block w-full rounded-lg border border-gray-300 dark:border-border-dark bg-white dark:bg-gray-800/50 text-gray-900 dark:text-white focus:ring-primary focus:border-primary sm:text-sm resize-none"
              id="help"
              name="help"
              required
              rows={4}
              value={formValues.help}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div className="relative flex items-start">
            <div className="flex h-5 items-center">
              <input
                aria-describedby="privacy-description"
                checked={formValues.consent}
                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary bg-gray-50 dark:bg-gray-800 dark:border-gray-600"
                id="consent"
                name="consent"
                required
                type="checkbox"
                onChange={handleInputChange}
              />
            </div>
            <div className="ml-3 text-sm">
              <label className="font-medium text-gray-700 dark:text-gray-300" htmlFor="consent">
                I agree to the processing of personal data.
              </label>
              <p className="text-gray-500 dark:text-gray-400" id="privacy-description"></p>
            </div>
          </div>
          <div className="pt-4">
            <button
              className="w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-semibold text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-200 transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="inline-block w-4 h-4 mr-2 border-2 border-white/70 border-t-transparent rounded-full animate-spin"></span>
                  Submitting...
                </>
              ) : (
                "Send a request for a free consultation"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const Consultation = () => {
  return (
    <main className="pt-24 pb-12 min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern pointer-events-none z-0"></div>
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl z-0"></div>
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          <ConsultationInfoPanel />
          <ConsultationRequestCard />
        </div>
      </div>
    </main>
  );
};

export default Consultation;
