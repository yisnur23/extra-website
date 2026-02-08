import { Factory, Monitor, Radio, Network, Gauge, Shield } from 'lucide-react';
import Container from '../layout/Container';
import ExpertiseCard from './ExpertiseCard';

export default function Expertise() {
  const expertiseAreas = [
    {
      id: 'industrial-automation',
      icon: Factory,
      title: 'Industrial Automation',
      description:
        'PLC-based control systems and end-to-end system integration for scalable industrial operations.',
    },
    {
      id: 'scada-systems',
      icon: Monitor,
      title: 'SCADA Systems',
      description:
        'Ignition SCADA implementation with data visualization, monitoring, logging, and alarming capabilities.',
    },
    {
      id: 'iot-mqtt',
      icon: Radio,
      title: 'IoT & MQTT',
      description:
        'Smart industrial environments with MQTT-based data acquisition and device-to-cloud communication.',
    },
    {
      id: 'unified-network',
      icon: Network,
      title: 'Unified Network Structures (UNS)',
      description:
        'Secure and scalable network infrastructure connecting all industrial devices and systems.',
    },
    {
      id: 'control-design',
      icon: Gauge,
      title: 'Control System Design',
      description:
        'Custom HMIs, dashboards, and integrated safety systems tailored to industrial requirements.',
    },
    {
      id: 'safety-integration',
      icon: Shield,
      title: 'Safety System Integration',
      description:
        'Critical safety system integration with industrial control networks for operational reliability.',
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-brand-light">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="w-12 h-1 bg-brand-accent rounded-full mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-4">
            Our Expertise
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Specialized capabilities across the industrial automation spectrum
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {expertiseAreas.map((area) => (
            <ExpertiseCard
              key={area.id}
              icon={area.icon}
              title={area.title}
              description={area.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
