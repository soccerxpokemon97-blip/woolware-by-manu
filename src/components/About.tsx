import Image from "next/image";

export default function About() {
  return (
    <section id="ueber-uns" className="bg-warm-white py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
          <Image
            src="https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=800&q=80"
            alt="Handarbeit mit Wolle"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="font-heading text-3xl font-bold text-charcoal md:text-4xl">
            Über uns
          </h2>
          <div className="mt-6 space-y-4 text-brown-light leading-relaxed">
            <p>
              Hallo, ich bin Manu! Seit über 10 Jahren fertige ich mit Leidenschaft
              handgemachte Wollprodukte in meiner kleinen Werkstatt in Deutschland.
              Jedes Stück entsteht in liebevoller Handarbeit — von der Auswahl der
              feinsten Naturwolle bis zum letzten Stich.
            </p>
            <p>
              Was als Hobby begann, wurde schnell zur Berufung. Meine Produkte
              verbinden traditionelle Handwerkskunst mit modernem Design. Ich glaube
              daran, dass echte Qualität Zeit braucht — deshalb nehme ich mir für
              jedes Stück die Ruhe, die es verdient.
            </p>
            <p>
              Bei Woolware steht Nachhaltigkeit an erster Stelle. Ich verwende
              ausschließlich natürliche Materialien aus verantwortungsvollem Anbau
              und achte auf faire Produktionsbedingungen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
