import { pinkPanel } from "@/lib/styles";

export function AxolotlSection() {
  return (
    <section className="section-clear px-6 pb-14 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div
          className={`${pinkPanel} flex min-h-[200px] items-center justify-center rounded-3xl px-8 py-12 md:min-h-[260px]`}
        >
          <p className="text-center text-2xl font-bold text-black md:text-3xl">
            placeholder animated axolotls
          </p>
        </div>
      </div>
    </section>
  );
}
