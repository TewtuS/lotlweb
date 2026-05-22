const cards = [
  { rotate: "-6deg", offset: "translate-x-0" },
  { rotate: "4deg", offset: "translate-x-4 md:translate-x-8" },
  { rotate: "-3deg", offset: "translate-x-2 md:translate-x-4" },
  { rotate: "5deg", offset: "translate-x-6 md:translate-x-12" },
  { rotate: "-4deg", offset: "translate-x-1 md:translate-x-2" },
];

export function BestSection() {
  return (
    <section className="section-dark px-6 py-14 md:px-10 md:py-16 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-3xl font-bold leading-tight text-white md:text-4xl lg:text-[2.75rem]">
          Give Yourself the Best
        </h2>

        <div className="relative mx-auto mt-14 flex max-w-md flex-col items-center gap-4 md:max-w-lg md:gap-5">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`h-24 w-full max-w-[280px] rounded-xl bg-gradient-to-b from-[#EC4899] to-[#6366F1] shadow-xl md:h-28 md:max-w-[320px] ${card.offset}`}
              style={{ transform: `rotate(${card.rotate})` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
