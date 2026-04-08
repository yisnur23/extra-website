import type { CSSProperties } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { startTransition, useEffect, useEffectEvent, useRef, useState } from "react";
import { Link } from "react-router-dom";

import bridgingTheGap from "@/assets/images/briding_the_gap_between_legacy.jpg";
import fromDataToDecisions from "@/assets/images/from_data_to_descions.jpg";
import industrialSpareParts from "@/assets/images/industrial_spare_parts.jpg";
import migratingLegacyAutomationSystems from "@/assets/images/migrating_legacy_automation_systems.mp4";
import preventativeMaintenance from "@/assets/images/preventative_maintenance.mp4";

type Slide = {
  caption: string;
  src: string;
  type: "image" | "video";
};

const slides: Slide[] = [
  {
    caption: "From Data to Decisions — Driving Industrial Excellence",
    src: fromDataToDecisions,
    type: "image",
  },
  {
    caption: "Migrating Legacy Automation Systems to IIoT",
    src: migratingLegacyAutomationSystems,
    type: "video",
  },
  {
    caption: "Preventive Maintenance. Powered by Intelligence.",
    src: preventativeMaintenance,
    type: "video",
  },
  {
    caption: "Bridging the Gap Between Legacy Automation and IIoT",
    src: bridgingTheGap,
    type: "image",
  },
  {
    caption: "Industrial Spare Parts & Procurement",
    src: industrialSpareParts,
    type: "image",
  },
];

const AUTOPLAY_DELAY = 6000;

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [copyHeight, setCopyHeight] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const copyRef = useRef<HTMLDivElement>(null);

  const goToSlide = (index: number) => {
    startTransition(() => {
      setCurrentSlide(index);
    });
  };

  const moveSlide = (direction: number) => {
    goToSlide((currentSlide + direction + slides.length) % slides.length);
  };

  const advanceSlide = useEffectEvent(() => {
    setCurrentSlide((previousSlide) => (previousSlide + 1) % slides.length);
  });

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      advanceSlide();
    }, AUTOPLAY_DELAY);

    return () => window.clearTimeout(timeoutId);
  }, [advanceSlide, currentSlide]);

  useEffect(() => {
    const element = copyRef.current;

    if (!element || typeof ResizeObserver === "undefined") {
      return;
    }

    const syncHeight = () => {
      setCopyHeight(Math.ceil(element.getBoundingClientRect().height));
    };

    syncHeight();

    const observer = new ResizeObserver(() => {
      syncHeight();
    });

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  const activeSlide = slides[currentSlide];
  const heroBreakoutStyle = copyHeight
    ? ({ "--hero-copy-height": `${copyHeight}px` } as CSSProperties)
    : undefined;

  return (
    <header className="relative overflow-hidden grid-bg pt-32 pb-20 lg:pt-48 lg:pb-32">
      <div className="hero-breakout" style={heroBreakoutStyle}>
        <div className="hero-breakout__copy text-center lg:text-left" ref={copyRef}>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/30 text-primary font-semibold text-sm mb-6 border border-primary/20 dark:border-primary/40">
            <span className="mr-2">✨</span> DIGITALIZATION & INDUSTRY 4.0
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
            Connect <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary">
              All Your People & Operations!
            </span>
          </h1>
          <p className="text-lg md:text-xl text-subtext-light dark:text-subtext-dark mb-10 max-w-2xl mx-auto lg:mx-0">
            Collect all your data, build industrial applications, and scale your systems without limits. Extra
            Engineering Solution helps your company develop powerful and cost-effective solutions for SCADA, IIoT, MES,
            and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              to="/consultation"
            >
              Request Consultation
            </Link>
            <Link
              className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-lg text-text-light dark:text-text-dark bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
              to="/services"
            >
              Explore Our Services
            </Link>
          </div>
        </div>

        <div className="hero-breakout__media mt-12 lg:mt-0">
          <div className="relative mx-auto w-full max-w-xl sm:max-w-2xl lg:max-w-none">
            <div className="absolute inset-x-[8%] top-[12%] h-[72%] rounded-full bg-primary/18 dark:bg-primary/20 blur-3xl -z-10" />

            <div className="hero-breakout__media-frame relative overflow-hidden rounded-[2rem] border border-white/25 dark:border-white/10 bg-slate-950 shadow-[0_28px_80px_rgba(15,23,42,0.35)] aspect-[4/5] sm:aspect-[5/4] lg:aspect-[6/5]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide.caption}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0"
                  exit={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.985 }}
                  initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 1.02 }}
                  transition={{ duration: shouldReduceMotion ? 0.2 : 0.55, ease: "easeOut" }}
                >
                  {activeSlide.type === "image" ? (
                    <img alt={activeSlide.caption} className="h-full w-full object-cover" src={activeSlide.src} />
                  ) : (
                    <video
                      aria-label={activeSlide.caption}
                      autoPlay
                      className="h-full w-full object-cover"
                      loop
                      muted
                      playsInline
                      src={activeSlide.src}
                    />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/18 to-slate-950/8" />
                  <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-slate-950/22 to-transparent" />
                </motion.div>
              </AnimatePresence>

              <div className="absolute left-0 right-0 top-0 flex items-center justify-between p-5 sm:p-6">
                <div className="text-xs font-medium text-white/65">
                  {String(currentSlide + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <motion.p
                  key={activeSlide.caption}
                  animate={{ opacity: 1, y: 0 }}
                  className="max-w-sm text-left text-xl font-semibold leading-snug text-white sm:max-w-md sm:text-2xl lg:max-w-lg"
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
                  transition={{ duration: shouldReduceMotion ? 0.2 : 0.45, ease: "easeOut", delay: 0.08 }}
                >
                  {activeSlide.caption}
                </motion.p>

                <div className="mt-6 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    {slides.map((slide, index) => {
                      const isActive = index === currentSlide;

                      return (
                        <button
                          aria-label={`Show slide ${index + 1}: ${slide.caption}`}
                          className={`h-2.5 rounded-full transition-all duration-300 ${
                            isActive ? "w-10 bg-white" : "w-2.5 bg-white/40 hover:bg-white/65"
                          }`}
                          key={slide.caption}
                          onClick={() => goToSlide(index)}
                          type="button"
                        />
                      );
                    })}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      aria-label="Show previous slide"
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/25 text-white backdrop-blur-md transition hover:bg-black/40"
                      onClick={() => moveSlide(-1)}
                      type="button"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      aria-label="Show next slide"
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/25 text-white backdrop-blur-md transition hover:bg-black/40"
                      onClick={() => moveSlide(1)}
                      type="button"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-5 right-4 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
            <div className="absolute -bottom-2 left-6 h-24 w-24 rounded-full bg-white/10 blur-3xl" />
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl -z-10 pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
    </header>
  );
};

export default Hero;
