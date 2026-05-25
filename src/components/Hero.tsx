"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

function ScrollIndicator() {
  return (
    <div className="flex flex-col items-center gap-2 text-white/70">
      <span className="text-xs font-medium tracking-widest uppercase">
        Scroll
      </span>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-5 w-5 animate-bounce"
        aria-hidden="true"
      >
        <path
          d="M12 5v14M6 13l6 6 6-6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const textOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.45], [0, -48]);
  const indicatorOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const textStyle = reduceMotion
    ? undefined
    : { opacity: textOpacity, y: textY };
  const indicatorStyle = reduceMotion
    ? undefined
    : { opacity: indicatorOpacity };

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden"
    >
      <motion.div
        style={textStyle}
        className="relative z-10 mx-auto flex h-full w-full max-w-5xl flex-col justify-between px-6 pb-16 pt-24 text-center md:px-10 md:pb-20 md:pt-28 lg:px-16"
      >
        <h1 className="hero-video__title text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
          Own Your Data
        </h1>

        <p className="hero-video__subtitle mx-auto max-w-2xl text-lg font-bold leading-snug md:text-xl lg:text-2xl">
          Fully Customized AI Servers Personalized For You
        </p>
      </motion.div>

      <motion.div
        style={indicatorStyle}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        aria-hidden="true"
      >
        <ScrollIndicator />
      </motion.div>
    </section>
  );
}
