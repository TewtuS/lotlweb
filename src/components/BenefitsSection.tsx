import { pinkPanel } from "@/lib/styles";

function PlaceholderBox({ children }: { children: string }) {
  return (
    <div
      className={`${pinkPanel} flex min-h-[220px] items-center justify-center rounded-3xl p-6 md:min-h-[280px]`}
    >
      <p className="text-center text-base font-bold leading-relaxed text-black md:text-lg">
        {children}
      </p>
    </div>
  );
}

export function BenefitsSection() {
  return (
    <section className="section-clear px-6 py-14 md:px-10 md:py-16 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-on-video text-center text-3xl font-bold leading-tight md:text-4xl lg:text-[2.75rem]">
          Convenient, Economical, Private, and Safe
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
          <div>
            <PlaceholderBox>
              Placeholder small animated sequence of physical server with
              axolotl characters
            </PlaceholderBox>

            <div className="mt-8 md:mt-10">
              <h3 className="text-on-video text-2xl font-bold md:text-3xl">
                Portable Physical Server
              </h3>
              <ul className="text-on-video mt-4 space-y-2 text-base md:text-lg">
                <li>Bla bla bla benefits really good for you, yes.</li>
                <li>more benefits wow!!</li>
                <li>Even more? such a steal ffrfr</li>
              </ul>
            </div>
          </div>

          <div>
            <PlaceholderBox>
              Placeholder small animated sequence of servers being private, or
              whatever else we want to market
            </PlaceholderBox>
          </div>
        </div>
      </div>
    </section>
  );
}
