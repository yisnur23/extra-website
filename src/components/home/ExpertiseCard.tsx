import type { LucideIcon } from 'lucide-react';

interface ExpertiseCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ExpertiseCard({
  icon: Icon,
  title,
  description,
}: ExpertiseCardProps) {
  return (
    <div className="group bg-white p-8 rounded-xl border border-gray-100 hover:border-brand/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="mb-5 p-3.5 bg-navy rounded-xl w-fit group-hover:bg-brand-accent transition-colors duration-300">
        <Icon className="h-7 w-7 text-white" />
      </div>
      <h3 className="text-xl font-bold text-navy mb-3">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
