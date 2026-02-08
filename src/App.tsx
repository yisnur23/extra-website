import LayoutContainer from "@/layout/LayoutContainer";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Impact from "@/components/Impact";
import Contact from "@/components/Contact";

export function App() {
  return (
    <LayoutContainer>
      <Hero />
      <About />
      <Services />
      <Impact />
      <Contact />
    </LayoutContainer>
  );
}

export default App;
