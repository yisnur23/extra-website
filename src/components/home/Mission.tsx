import Container from '../layout/Container';

export default function Mission() {
  return (
    <section className="py-24 md:py-32 bg-navy relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-3xl" />

      <Container>
        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-white/10 text-brand text-sm font-semibold rounded-full uppercase tracking-wider mb-6">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Extra Engineering helps you
              <br />
              <span className="text-brand">strategise, implement</span> and{' '}
              <span className="text-brand-accent">scale.</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
              We deliver innovative, reliable, and efficient automation
              technologies that enhance industrial processes, operational
              efficiency, and real-time monitoring capabilities.
            </p>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: 'Innovation',
                desc: 'Cutting-edge solutions for modern industrial challenges',
              },
              {
                title: 'Reliability',
                desc: 'Proven track record with 100+ successful projects',
              },
              {
                title: 'Efficiency',
                desc: 'Optimized performance that drives real business results',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group p-8 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-brand/30 transition-all duration-300"
              >
                <h3 className="text-brand text-xl font-bold mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
