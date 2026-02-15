import ServiceCard from "@/components/Home/ServiceCard";
import type { ServiceCardData } from "@/components/Home/ServiceCard";

const servicesData: ServiceCardData[] = [
  {
    id: "industrial-automation",
    icon: "precision_manufacturing",
    title: "Industrial Automation & Digitalization",
    description:
      "Reliable automation design, integration, and modernization that improves control stability, visibility, and long-term operational resilience.",
    href: "/services#automation",
    iconBgClass: "bg-primary/10 dark:bg-primary/30",
    iconTextClass: "text-primary",
  },
  {
    id: "scada-mes-iiot",
    icon: "dashboard",
    title: "SCADA, MES & IIoT Solutions",
    description:
      "Real-time control, production optimization, and connected intelligence across SCADA, MES, and IIoT layers.",
    href: "/services#scada",
    iconBgClass: "bg-primary/10 dark:bg-primary/30",
    iconTextClass: "text-primary dark:text-primary",
  },
  {
    id: "industry-4-uns",
    icon: "hub",
    title: "Industry 4.0 & UNS",
    description:
      "Unified Namespace architectures that remove silos and create one trusted, real-time operational data backbone.",
    href: "/services#industry40",
    iconBgClass: "bg-primary/10 dark:bg-primary/30",
    iconTextClass: "text-primary dark:text-primary",
  },
  {
    id: "energy-management",
    icon: "bolt",
    title: "Energy Management Systems (EMS)",
    description:
      "Actionable energy monitoring and optimization for lower utility costs, better efficiency, and stronger ESG performance.",
    href: "/services#ems",
    iconBgClass: "bg-primary/10 dark:bg-primary/30",
    iconTextClass: "text-primary dark:text-primary",
  },
  {
    id: "predictive-maintenance",
    icon: "trending_up",
    title: "Predictive Maintenance & OEE",
    description:
      "Condition-based maintenance and OEE tracking to reduce unplanned downtime and improve production effectiveness.",
    href: "/services#predictive",
    iconBgClass: "bg-primary/10 dark:bg-primary/30",
    iconTextClass: "text-primary dark:text-primary",
  },
  {
    id: "ot-it-integration",
    icon: "integration_instructions",
    title: "Enterprise System Integration (OT/IT)",
    description:
      "Secure, scalable OT/IT integration connecting PLC, SCADA, MES, and IIoT systems with enterprise platforms.",
    href: "/services#otit",
    iconBgClass: "bg-primary/10 dark:bg-primary/30",
    iconTextClass: "text-primary dark:text-primary",
  },
  {
    id: "spares-procurement",
    icon: "settings_suggest",
    title: "Industrial Spare Parts & Procurement",
    description:
      "Quality-verified spare parts and dependable sourcing to keep critical industrial operations running without interruption.",
    href: "/services#spareparts",
    iconBgClass: "bg-primary/10 dark:bg-primary/30",
    iconTextClass: "text-primary dark:text-primary",
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-background-light dark:bg-background-dark relative" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Our Services</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-text-light dark:text-text-dark sm:text-4xl">
            High-Performance Industrial Engineering
          </p>
          <p className="mt-4 max-w-2xl text-xl text-subtext-light dark:text-subtext-dark mx-auto">
            Delivering end-to-end engineering excellence, from factory floor automation to enterprise-level digital
            transformation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
