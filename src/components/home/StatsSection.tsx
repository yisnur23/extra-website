import { Award, Briefcase, Users, Clock } from 'lucide-react';
import Container from '../layout/Container';

export default function StatsSection() {
  const stats = [
    { value: '15+', label: 'Years Experience', icon: Award },
    { value: '100+', label: 'Projects Completed', icon: Briefcase },
    { value: '50+', label: 'Happy Clients', icon: Users },
    { value: '24/7', label: 'Support Available', icon: Clock },
  ];

  return (
    <section className="py-16 bg-brand">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center group">
              <stat.icon className="h-10 w-10 md:h-12 md:w-12 mx-auto mb-3 text-brand-accent group-hover:scale-110 transition-transform duration-300" />
              <div className="text-3xl md:text-4xl font-bold text-navy mb-1">
                {stat.value}
              </div>
              <div className="text-navy/70 font-medium text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
