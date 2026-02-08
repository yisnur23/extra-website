import Container from '../layout/Container';
import ServiceCard from './ServiceCard';

export default function Services() {
  const services = [
    {
      id: 'plc-automation',
      title: 'PLC-Based Control Systems',
      description:
        'Expert design, implementation, and optimization of PLC systems using Siemens S7-300/S7-400. Seamless integration for power generation and manufacturing facilities with focus on reliability and efficiency.',
      imageUrl:
        'https://images.unsplash.com/photo-1581092160607-ee67df5dc0ae?w=800&q=80',
      imageAlt: 'Siemens PLC control panel in an industrial facility',
      imagePosition: 'right' as const,
      bullets: [
        'Siemens S7-300/S7-400 Programming',
        'Power generation integration',
        'Manufacturing automation',
      ],
    },
    {
      id: 'scada-monitoring',
      title: 'Ignition SCADA Systems',
      description:
        'Scalable SCADA development for real-time monitoring, data logging, and alarming. Advanced data visualization that drives operational efficiency and enables data-driven decision making.',
      imageUrl:
        'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80',
      imageAlt: 'SCADA control room with multiple monitoring screens',
      imagePosition: 'left' as const,
      bullets: [
        'Real-time monitoring & alarming',
        'Data logging & visualization',
        'Scalable architecture',
      ],
    },
    {
      id: 'iot-remote',
      title: 'IoT & MQTT Solutions',
      description:
        'Smart industrial environments with MQTT-based data acquisition. Secure device-to-device and device-to-cloud communication for remote monitoring and predictive maintenance.',
      imageUrl:
        'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
      imageAlt: 'IoT sensors and connected devices in smart industrial environment',
      imagePosition: 'right' as const,
      bullets: [
        'MQTT-based data acquisition',
        'Secure cloud communication',
        'Predictive maintenance',
      ],
    },
    {
      id: 'unified-network',
      title: 'Unified Network Structures',
      description:
        'Unified Network Infrastructure implementation with secure and scalable connectivity across all industrial devices and systems. Future-proof architecture for Industry 4.0.',
      imageUrl:
        'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
      imageAlt: 'Network infrastructure diagram showing unified connectivity',
      imagePosition: 'left' as const,
      bullets: [
        'Secure & scalable connectivity',
        'Industry 4.0 ready',
        'Unified data architecture',
      ],
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-white">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy leading-tight">
            Modern Industrial Automation Systems
            <br />
            <span className="text-brand-accent">Drive Efficiency & Profit.</span>
          </h2>
          <p className="mt-6 text-lg text-gray-500 max-w-3xl mx-auto">
            Comprehensive automation, control, and networking solutions built
            to modernize your operations and unlock new value.
          </p>
        </div>

        <div className="space-y-20">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
              imageAlt={service.imageAlt}
              imagePosition={service.imagePosition}
              bullets={service.bullets}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
