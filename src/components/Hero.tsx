export function Hero() {
  return (
    <section className="hero-video relative flex min-h-[70vh] items-center justify-center overflow-hidden md:min-h-[80vh]">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      >
        <source src="/campfire-pc.mp4" type="video/mp4" />
      </video>

      <div className="hero-video__overlay absolute inset-0" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-20 text-center md:px-10 md:py-28 lg:px-16">
        <h1 className="hero-video__title text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
          Own Your Data
        </h1>

        <p className="hero-video__subtitle mx-auto mt-8 max-w-2xl text-xl font-bold leading-snug md:mt-10 md:text-2xl lg:text-[1.75rem]">
          Fully Customized AI Servers Personalized For You
        </p>
      </div>
    </section>
  );
}
