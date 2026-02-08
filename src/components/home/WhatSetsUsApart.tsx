import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Container from '../layout/Container';

export default function WhatSetsUsApart() {
  const features = [
    { title: 'Focused Approach', desc: 'Tailored automation solutions for Ethiopian industries' },
    { title: 'Continuous Updates', desc: 'Technology that evolves with industry standards' },
    { title: 'Local Expertise', desc: 'Deep understanding of regional infrastructure needs' },
    { title: 'End-to-End Support', desc: 'From consultation to implementation and maintenance' },
  ];

  return (
    <section className="py-24 md:py-32 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=800&q=80"
              alt="Industrial automation engineers collaborating"
              className="w-full h-80 lg:h-[28rem] object-cover"
              loading="lazy"
            />
          </div>

          {/* Content */}
          <div>
            <div className="w-12 h-1 bg-brand-accent rounded-full mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 leading-tight">
              What Sets Us Apart.
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Our team of specialists ensures you get tailored solutions built
              for reliability, scalability, and real performance improvements. We
              don&apos;t just automate — we transform operations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {features.map((f) => (
                <div key={f.title} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-brand-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-navy text-sm">{f.title}</h4>
                    <p className="text-gray-400 text-xs mt-0.5">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-accent hover:bg-brand-accent-dark text-white rounded-lg font-semibold transition-all duration-200 shadow-lg shadow-brand-accent/20"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-navy/20 text-navy rounded-lg font-semibold hover:border-navy transition-all duration-200"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

