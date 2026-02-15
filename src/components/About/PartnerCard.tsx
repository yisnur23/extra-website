type PartnerOfferingGroup = {
  title: string;
  items: string[];
};

export type Partner = {
  id: string;
  name: string;
  logoSrc: string;
  logoAlt: string;
  description: string[];
  offerings?: PartnerOfferingGroup[];
};

type PartnerCardProps = {
  partner: Partner;
  className?: string;
};

const PartnerCard = ({ partner, className = "" }: PartnerCardProps) => {
  return (
    <article className={`glass-card rounded-2xl p-8 lg:p-10 shadow-xl relative overflow-hidden ${className}`}>
      <div className="absolute top-0 right-0 w-36 h-36 bg-primary/10 rounded-bl-full -mr-8 -mt-8"></div>
      <div className="relative z-10">
        <div className="flex items-start gap-5 mb-6">
          <div className="h-16 w-40 p-3 bg-white rounded-lg flex items-center justify-center shadow-sm border border-gray-100">
            <img alt={partner.logoAlt} className="max-h-full max-w-full object-contain" src={partner.logoSrc} />
          </div>
          <h3 className="text-2xl font-bold text-text-light dark:text-text-dark">{partner.name}</h3>
        </div>

        <div className="space-y-4">
          {partner.description.map((paragraph) => (
            <p className="text-subtext-light dark:text-subtext-dark leading-relaxed" key={paragraph}>
              {paragraph}
            </p>
          ))}
        </div>

        {partner.offerings && partner.offerings.length > 0 ? (
          <div className="mt-8 space-y-5">
            {partner.offerings.map((group) => (
              <div key={group.title}>
                <h4 className="text-sm font-semibold uppercase tracking-wide text-text-light dark:text-text-dark mb-2">
                  {group.title}
                </h4>
                <ul className="space-y-1.5 text-subtext-light dark:text-subtext-dark">
                  {group.items.map((item) => (
                    <li className="flex items-start gap-2" key={item}>
                      <span className="mt-2 block w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
};

export default PartnerCard;
