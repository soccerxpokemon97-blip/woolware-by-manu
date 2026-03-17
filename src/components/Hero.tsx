import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center">
      <Image
        src="https://images.unsplash.com/photo-1544967082-d9d25d867d66?w=1920&q=80"
        alt="Wollprodukte Hintergrund"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-charcoal/60" />
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-warm-white">
        <h1 className="font-heading text-5xl font-bold leading-tight md:text-7xl">
          Wärme, die von Herzen kommt
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-cream-dark md:text-xl">
          Handgemachte Wollprodukte aus Deutschland — mit Liebe gefertigt von Manu
        </p>
        <a
          href="#produkte"
          className="mt-8 inline-block rounded-full bg-rust px-8 py-3 font-semibold text-warm-white transition-colors hover:bg-rust-dark"
        >
          Produkte entdecken
        </a>
      </div>
    </section>
  );
}
