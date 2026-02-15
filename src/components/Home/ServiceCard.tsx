export interface ServiceCardData {
  id: string;
  icon: string;
  title: string;
  description: string;
  href: string;
  iconBgClass: string;
  iconTextClass: string;
}

interface ServiceCardProps {
  service: ServiceCardData;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  const { id, icon, title, description, href, iconBgClass, iconTextClass } = service;

  const cardBaseClassName =
    "bg-white dark:bg-card-dark rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group h-full";

  return (
    <article className={cardBaseClassName} id={id}>
      <div className="flex flex-col h-full">
        <div
          className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 ${iconBgClass} ${iconTextClass}`}
        >
          <span className="material-symbols-outlined text-2xl">{icon}</span>
        </div>
        <h3 className="text-lg font-bold text-text-light dark:text-text-dark mb-2">{title}</h3>
        <p className="text-subtext-light dark:text-subtext-dark text-sm mb-4 flex-grow leading-relaxed">
          {description}
        </p>
        <a
          className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary-dark transition-colors mt-auto group-hover:underline"
          href={href}
        >
          Read More <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
        </a>
      </div>
    </article>
  );
};

export default ServiceCard;
