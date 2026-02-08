import Navigation from '../components/home/Navigation';
import Hero from '../components/home/Hero';
import StatsSection from '../components/home/StatsSection';
import Services from '../components/home/Services';
import Mission from '../components/home/Mission';
import Expertise from '../components/home/Expertise';
import WhatSetsUsApart from '../components/home/WhatSetsUsApart';
import Footer from '../components/home/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <StatsSection />
        <Services />
        <Mission />
        <Expertise />
        <WhatSetsUsApart />
      </main>
      <Footer />
    </div>
  );
}
