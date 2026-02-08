import ServiceCard from "@/components/ui/ServiceCard";
import { motion } from "framer-motion";

const servicesData = [
  {
    id: "plc-automation",
    icon: "memory",
    title: "PLC & Industrial Automation",
    subtitle: "Siemens S7-300/400 Migration & Programming",
    description:
      "We specialize in robust PLC programming and legacy system migration. Our team ensures seamless integration with existing industrial infrastructure, minimizing downtime and maximizing efficiency for Ethiopian industries.",
    features: [
      "Expert S7-300/400 to S7-1500 Migration",
      "TIA Portal & Step 7 Programming",
      "Custom Function Block Design",
      "Safety PLC Implementation",
    ],
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCtgc-ogrATsuepu5rGLl2350VkG25ki_Eb-5QB-sVQRt5pQ7hN2Nzgoes3BMuel15B3ZR74h5ufeN8Yfvk9N_55NmJVOWoHyklrjY8fUznSzfgqVvNsKj_hZIbBZlmcBlx2aylRdJcq5BpfCTJJKGh-UBg5M_lAxnuHyr2sFcUIhg6gCBOsUImG_TIrvrLep567GOPvnn-4pmbbGcgjLLD3G_kiqTiAEiktDFkR48UJ1HghN5JJRbJ7z5Vr9XIJ8ppwJy0R1JACBMD",
    imageAlt: "Technician working on a complex PLC control panel with wiring",
    imagePosition: "right" as const,
    gradientDirection: "tr" as const,
  },
  {
    id: "scada",
    icon: "monitoring",
    title: "SCADA & Monitoring",
    subtitle: "Ignition SCADA Dashboards",
    description:
      "Visualize your entire operation with our custom SCADA solutions. We build intuitive, high-performance dashboards using Ignition, giving operators real-time insight into production metrics and alarms.",
    features: [
      "Real-time Process Visualization",
      "Historical Data Logging & Reporting",
      "Alarm Management Systems",
      "Mobile-Responsive HMI screens",
    ],
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCLfQt0d9Twrdg85tW7MWe0Xk2IRAp9lqwE6twNVSDJSBEkbybJYeP4_hny4fGYyKZO3rT0z_VhsiMDdfn8cegALeu-2hnuzPBVjZnA6BLYHeEtsoqLwX44wSFbXdAwpDNv9rHWnpU4AgB7TumewLFeEuTk0ZunCsGxlWwEa9kUUJeI4OhT5XYbCf3abPGjW5YONuVL1_70j1p1cABRHOyomdO5NOArhA3x6eopr1QVKDvIxC_KQ1suZWkSt4Tr2zGYhQ8reyK1FAHR",
    imageAlt: "Modern SCADA dashboard interface displaying real-time industrial data graphs",
    imagePosition: "left" as const,
    gradientDirection: "br" as const,
  },
  {
    id: "iot",
    icon: "cloud_sync",
    title: "IoT & Remote Monitoring",
    subtitle: "MQTT-Based Connected Solutions",
    description:
      "Bridge the gap between OT and IT. Our IoT solutions leverage lightweight MQTT protocols to securely transmit data from remote assets to cloud platforms for advanced analytics and predictive maintenance.",
    features: [
      "Edge Gateway Configuration",
      "Secure MQTT/Sparkplug B Implementation",
      "Cloud Dashboard Integration (AWS/Azure)",
      "Remote Asset Tracking",
    ],

    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDVPDzHhV-dNlfswQGf1kX9AScFTWYXpNrwCeB4nwF9k_9SUQ6JTrUz1S8p7XcA-ugZx_c7OkrJfNJLyjuQZyItOlRGSeMnq2XKTTVCjaaRukjJHbfZ1I7DT9noG_XBqDj4p0FBc1UQ6815Zn-7J5m8F8jZbqcAVmosYEvnIgSkHdLzOyrsL4bgjjTIySraNVpbDTG9Hbycebjul4uD6-KxhqR1oww3AwSeEv6VBK87TrHsDf0NfbYBSA5HW2s-X_YOVGoYRm98JLZ8",
    imageAlt: "Abstract representation of IoT network connecting devices to cloud",
    imagePosition: "right" as const,
    gradientDirection: "bl" as const,
  },
  {
    id: "support",
    icon: "build",
    title: "Maintenance & Support",
    subtitle: "Keeping Your Systems Running 24/7",
    description:
      "Downtime is costly. Our dedicated support team provides rapid troubleshooting and scheduled maintenance services to ensure your automation systems operate at peak performance.",
    features: ["24/7 Remote Support", "Legacy Retrofitting", "Spare Parts Management", "Operator Training"],
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBWHptfg6_Fn0Vg-pLGfmUMQtrfj4_kR_WyHNd_8tC13RrN2rOvPfC0VJNRuYk8n631F_ZeqD4rb0ol-tFlcO0yMTdZjVAPvEh4HKKOEAnru47C5t5oWTFq4B1zOsSxS0OyDHYy2AJ-2uQACaNmAPcWZdp97uW2EMY1iYnFtfFpfjToF4QpHTaY100y8kWXTiAIU6inUKKDKkGetCqhOJC4XdzPaw6lBu8s2CpAv70Emc5ukkzcOtIgMgTUPRztqFv2NLeZ-n2huzdC",
    imageAlt: "Engineer performing maintenance on industrial machinery with tablet",
    imagePosition: "left" as const,
    gradientDirection: "tl" as const,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 w-full bg-background-light dark:bg-background-dark diagonal-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-main dark:text-white mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-text-muted dark:text-gray-400 max-w-3xl mx-auto">
            Comprehensive industrial automation solutions tailored to transform your operations with cutting-edge
            technology and expert implementation.
          </p>
        </motion.div>
        <div className="flex flex-col gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
