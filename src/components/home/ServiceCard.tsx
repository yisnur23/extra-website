import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  imagePosition: 'left' | 'right';
  bullets?: string[];
}

export default function ServiceCard({
  title,
  description,
  imageUrl,
  imageAlt,
  imagePosition,
  bullets = [],
}: ServiceCardProps) {
  return (
    <div
      className={`group flex flex-col items-stretch bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 ${
        imagePosition === 'right' ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      {/* Image */}
      <div className="w-full md:w-1/2 overflow-hidden relative">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-72 md:h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-navy/10 group-hover:bg-navy/0 transition-colors duration-500" />
        {/* Small caption overlay */}
        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-xs text-white/80 bg-navy/60 backdrop-blur-sm px-3 py-1.5 rounded-md inline-block">
            {imageAlt}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
        <div className="w-12 h-1 bg-brand-accent rounded-full mb-6" />
        <h3 className="text-2xl md:text-3xl font-bold text-navy mb-4 leading-tight">
          {title}
        </h3>
        <p className="text-gray-500 leading-relaxed mb-6">{description}</p>

        {/* Bullet points */}
        {bullets.length > 0 && (
          <ul className="space-y-3 mb-8">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3">
                <Check className="h-5 w-5 text-brand-accent flex-shrink-0 mt-0.5" />
                <span className="text-gray-600 text-sm">{bullet}</span>
              </li>
            ))}
          </ul>
        )}

        <Link
          to="/services"
          className="inline-flex items-center gap-2 px-6 py-3 border-2 border-navy text-navy rounded-lg font-semibold hover:bg-navy hover:text-white transition-all duration-300 self-start group/btn"
        >
          Learn More
          <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
