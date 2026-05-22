"use client";

import { useState } from "react";
import { LogoIcon } from "./Logo";

const slides = [
  {
    title: "Benefit",
    description: "Why benefit, who benefits from it, in what way",
  },
  {
    title: "Privacy First",
    description: "Your data stays on your hardware, under your control.",
  },
  {
    title: "Fully Custom",
    description: "Pick every component to match your workload and budget.",
  },
];

function ChevronLeft() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
      <path
        d="M15 18l-6-6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
      <path
        d="M9 18l6-6-6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BenefitsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const slide = slides[activeIndex];

  const goPrev = () =>
    setActiveIndex((i) => (i === 0 ? slides.length - 1 : i - 1));
  const goNext = () =>
    setActiveIndex((i) => (i === slides.length - 1 ? 0 : i + 1));

  return (
    <section className="relative px-6 py-16 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="relative">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#E8D5D0]/95 px-8 py-16 shadow-2xl md:px-12 md:py-20">
            <p className="text-center font-serif text-xl text-[#4A3728]/60 md:text-2xl">
              Placeholder picture
            </p>

            <div className="mt-10 flex justify-center gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Go to slide ${index + 1}`}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 w-2.5 rounded-full transition ${
                    index === activeIndex
                      ? "bg-[#6366F1]"
                      : "bg-[#4A3728]/25 hover:bg-[#4A3728]/40"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="absolute -left-2 bottom-8 z-10 flex h-16 w-16 items-center justify-center rounded-full border-4 border-white/20 bg-gradient-to-br from-[#3B82F6] to-[#1E40AF] shadow-xl md:-left-4 md:bottom-10 md:h-20 md:w-20">
            <LogoIcon className="h-10 w-10 md:h-12 md:w-12" />
          </div>
        </div>

        <div className="mt-10 flex items-end justify-between gap-6">
          <div>
            <h3 className="font-serif text-2xl text-white md:text-3xl">
              {slide.title}
            </h3>
            <p className="mt-2 max-w-lg text-sm text-white/75 md:text-base">
              {slide.description}
            </p>
          </div>

          <div className="flex shrink-0 gap-3">
            <button
              type="button"
              aria-label="Previous slide"
              onClick={goPrev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition hover:bg-white/20"
            >
              <ChevronLeft />
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={goNext}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition hover:bg-white/20"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
