import Button from "./ui/Button";
import { motion } from "framer-motion";
import robotImage from "../assets/robot.png";

const TypingText = ({ text }: { text: string }) => {
  const letters = text.split("");
  
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.8,
      },
    },
  };

  const child = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  };

  return (
    <motion.span
      className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative w-full py-16 lg:py-24 grid-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div
            className="flex-1 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-neutral-dark dark:text-white text-xs font-bold uppercase tracking-wider w-fit">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              System Online
            </div> */}
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight tracking-tight text-neutral-dark dark:text-white font-display">
              Engineering the Future of{" "}
              <TypingText text="Ethiopian Industry" />
            </h1>
            <p className="text-lg text-neutral-gray dark:text-gray-300 max-w-xl leading-relaxed">
              Advanced Industrial Automation &amp; IoT Solutions designed for precision, scalability, and seamless
              integration with legacy systems.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#contact">
                <Button variant="primary">
                  <span>Contact Us</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Button>
              </a>
            </div>
          </motion.div>
          <motion.div
            className="flex-1 w-full lg:h-auto min-h-[400px] relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <motion.div 
              className="absolute inset-0 bg-primary/10 rounded-2xl rotate-3 transform z-0"
              animate={{
                y: [0, -8, 0],
                rotate: [3, 4, 3],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: [0.45, 0.05, 0.55, 0.95],
                repeatType: "reverse",
              }}
            />
            <motion.div 
              className="absolute inset-0 flex items-center justify-center z-[1]"
              animate={{
                y: [0, -12, 0],
                x: [0, 3, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: [0.42, 0, 0.58, 1],
                repeatType: "reverse",
              }}
            >
              <img src={robotImage} alt="Industrial Robot" className="w-[90%] h-[90%] object-contain" />
            </motion.div>
            <div
              className="relative z-10 w-full h-full rounded-2xl overflow-hidden shadow-2xl"
              data-alt="Abstract visualization of industrial robotic arm working on precision task"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDI0i9uvBAWunGYeVXdQu6QA5MJ9tp9Vf_UBV8kVnUH3BK9u05q2Jb9XVRWQEaEGfXugCGQ5w4d4_ytE_WKAn2mchbXRAestflN8uUpDX4Wh4Y3Qlf7eY7RlRFBLaurFjYbt9JGPt3gdubQYisMyUKZizpdu2pwU8RoSEYGDDAPJUiqDf6Fh9OGLkFPJg2igFgoPSQiYV2w2IUWisFzZKDXjP5g6TyaDwhRnxipusUQbhV9fjEmkjobsVrizbsbjtCWoY48sjYXftEz')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark/80 to-transparent flex items-end p-8">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-lg w-full max-w-sm">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-white/70 font-display uppercase tracking-widest">Live Metrics</span>
                    <span className="text-green-400 text-xs font-bold">● Active</span>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-xs text-white mb-1">
                        <span>Throughput</span>
                        <span>98.2%</span>
                      </div>
                      <div className="h-1 w-full bg-white/20 rounded-full overflow-hidden">
                        <div className="h-full bg-primary w-[98%]"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs text-white mb-1">
                        <span>Network Latency</span>
                        <span>12ms</span>
                      </div>
                      <div className="h-1 w-full bg-white/20 rounded-full overflow-hidden">
                        <div className="h-full bg-green-400 w-[15%]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
