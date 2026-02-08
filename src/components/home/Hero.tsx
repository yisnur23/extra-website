import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80)',
        }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-navy/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
            Unlock Manufacturing Efficiency With{' '}
            <span className="text-brand">Automation.</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
            Ethiopia&apos;s leading provider of industrial automation, SCADA systems,
            PLC programming, and IoT solutions that enhance operational
            efficiency and real-time monitoring.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-10 mt-10">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white">
                15<span className="text-brand">+</span>
              </div>
              <div className="text-gray-400 text-sm mt-1">Years of Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white">
                100<span className="text-brand">+</span>
              </div>
              <div className="text-gray-400 text-sm mt-1">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white">
                50<span className="text-brand">+</span>
              </div>
              <div className="text-gray-400 text-sm mt-1">Happy Clients</div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mt-10">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-accent hover:bg-brand-accent-dark text-white rounded-lg font-semibold text-lg transition-all duration-200 shadow-xl shadow-brand-accent/25 hover:shadow-2xl hover:shadow-brand-accent/30"
            >
              Start Your Project
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white rounded-lg font-semibold text-lg hover:border-brand hover:text-brand transition-all duration-200"
            >
              <Play className="h-5 w-5" />
              See Our Work
            </Link>
          </div>
        </div>

        {/* Trusted By */}
        <div className="mt-20 pt-10 border-t border-white/10">
          <p className="text-gray-500 text-sm uppercase tracking-widest mb-6">
            Trusted by Industry Leaders
          </p>
          <div className="flex flex-wrap gap-10 items-center">
            {['ABB', 'Siemens', 'Rockwell', 'Schneider', 'Honeywell'].map(
              (brand) => (
                <div
                  key={brand}
                  className="text-gray-500 text-xl font-bold tracking-wide hover:text-gray-300 transition-colors"
                >
                  {brand}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
