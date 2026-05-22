export function SpecsSection() {
  return (
    <section className="relative px-6 pb-20 pt-10 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-left text-3xl font-bold leading-tight text-white md:text-4xl lg:text-[2.75rem]">
          Your Server, Your Specs,
          <br />
          Your Choice.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          <div className="min-h-[320px] rounded-3xl bg-[#E8D5D0]/90 shadow-lg" />
          <div className="flex flex-col gap-4">
            <div className="flex min-h-[320px] items-center justify-center rounded-3xl bg-[#E8D5D0]/90 px-6 shadow-lg">
              <p className="text-center text-base leading-relaxed text-[#4A3728] md:text-lg">
                Placeholder picture of example of spare parts specs that can be
                chosen.
              </p>
            </div>
            <p className="text-center text-sm text-white/80 md:text-base">
              Spare part specs and description.
            </p>
          </div>
          <div className="min-h-[320px] rounded-3xl bg-[#E8D5D0]/90 shadow-lg" />
        </div>
      </div>
    </section>
  );
}
