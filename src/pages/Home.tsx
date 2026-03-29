import Hero from "@/components/Home/Hero";
import Impact from "@/components/Home/Impact";
import Services from "@/components/Home/Services";
import OurApproach from "@/components/Home/OurApproach";
import OurWork from "@/components/Home/OurWork";
import Associations from "@/components/About/Associations";

const Home = () => {
  return (
    <>
      <Hero />
      <Impact />
      <Services />
      <OurApproach />
      <OurWork />
      <Associations />
      {/* <Contact /> */}
    </>
  );
};

export default Home;
