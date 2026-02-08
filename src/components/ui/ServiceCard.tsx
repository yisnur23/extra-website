import { motion } from "framer-motion";

interface ServiceCardProps {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  imageUrl: string;
  imageAlt: string;
  imagePosition: "left" | "right";
  gradientDirection: "tr" | "br" | "bl" | "tl";
}

const ServiceCard = ({
  id,
  icon,
  title,
  subtitle,
  description,
  features,
  imageUrl,
  imageAlt,
  imagePosition,
  gradientDirection,
}: ServiceCardProps) => {
  const isImageLeft = imagePosition === "left";

  return (
    <section
      className="scroll-mt-24 group relative p-8 md:p-10 rounded-3xl bg-white/50 dark:bg-gray-800/30 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:border-primary/30 dark:hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
      id={id}
    >
      {/* Subtle corner accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl pointer-events-none"></div>

      <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Image */}
        <motion.div
          className={`${
            isImageLeft ? "order-1" : "order-1 md:order-2"
          } relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 aspect-[4/3] group-hover:shadow-primary/20 transition-shadow`}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          whileHover={{ scale: 1.02 }}
        >
          <div
            className={`absolute inset-0 bg-gradient-to-${gradientDirection} from-primary/20 to-transparent mix-blend-overlay z-10`}
          ></div>
          <img
            alt={imageAlt}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            src={imageUrl}
          />
        </motion.div>

        {/* Content */}
        <motion.div
          className={`${isImageLeft ? "order-2" : "order-2 md:order-1"} flex flex-col gap-6`}
          initial={{ opacity: 0, x: isImageLeft ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-primary/20 rounded-lg text-primary-dark dark:text-primary">
              <span className="material-symbols-outlined text-3xl">{icon}</span>
            </div>
            <h2 className="text-3xl font-bold text-text-main dark:text-white">{title}</h2>
          </div>
          <h3 className="text-xl font-bold text-text-main dark:text-gray-200">{subtitle}</h3>
          <p className="text-text-muted dark:text-gray-400 font-body leading-relaxed">{description}</p>
          <ul className="space-y-3 mt-2">
            {features.map((feature, index) => (
              <motion.li
                key={index}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                <span className="text-text-main dark:text-gray-300 font-body text-sm">{feature}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceCard;
