import { pinkPanel } from "@/lib/styles";

const specsCards = [
  { id: 1, hasText: false },
  { id: 2, hasText: true },
  { id: 3, hasText: false },
  { id: 4, hasText: false },
  { id: 5, hasText: true },
  { id: 6, hasText: false },
];

const placeholderText =
  "Placeholder picture of example of spare parts specs that can be chosen.";

export function SpecsSection() {
  return (
    <section className="section-clear px-6 py-14 md:px-10 md:py-16 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-on-video text-left text-3xl font-bold leading-tight md:text-4xl lg:text-[2.75rem]">
          Your Server. Your Specs. Your Choice.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {specsCards.map((card) => (
            <div
              key={card.id}
              className={`${pinkPanel} flex min-h-[200px] items-center justify-center rounded-3xl p-6 md:min-h-[240px]`}
            >
              {card.hasText && (
                <p className="text-center text-base font-bold leading-relaxed text-black md:text-lg">
                  {placeholderText}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
