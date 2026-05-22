export function Hero() {
  return (
    <section className="hero-video relative min-h-[70vh] overflow-hidden md:min-h-[80vh]">
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

      <div className="relative z-10 mx-auto flex min-h-[70vh] w-full max-w-5xl flex-col justify-between px-6 py-10 text-center md:min-h-[80vh] md:px-10 md:py-14 lg:px-16">
        <h1 className="hero-video__title text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
          Own Your Data
        </h1>

        <p className="hero-video__subtitle mx-auto max-w-2xl text-lg font-bold leading-snug md:text-xl lg:text-2xl">
          Fully Customized AI Servers Personalized For You
        </p>
      </div>
    </section>
  );
}
