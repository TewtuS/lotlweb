function PlaceholderBox({ children }: { children: string }) {
  return (
    <div className="flex min-h-[220px] items-center justify-center rounded-3xl bg-card p-6 shadow-lg md:min-h-[280px]">
      <p className="text-center text-base font-bold leading-relaxed text-black md:text-lg">
        {children}
      </p>
    </div>
  );
}

export function BenefitsSection() {
  return (
    <section className="benefits-gradient px-6 py-14 md:px-10 md:py-16 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-3xl font-bold leading-tight text-white md:text-4xl lg:text-[2.75rem]">
          Convenient, Economical, Private, and Safe.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          <PlaceholderBox>
            Placeholder small animated sequence of physical server with
            axolotl characters
          </PlaceholderBox>
          <PlaceholderBox>
            Placeholder small animated sequence of servers being private, or
            whatever else we want to market
          </PlaceholderBox>
        </div>

        <div className="mt-10 max-w-xl">
          <h3 className="text-2xl font-bold text-white md:text-3xl">
            Portable Physical Server
          </h3>
          <ul className="mt-4 space-y-2 text-base text-white/90 md:text-lg">
            <li>bla bla bla benefits really good for you, yes.</li>
            <li>more benefits wow!!</li>
            <li>Even more? such a steal !!!!</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
