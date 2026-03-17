const pillars = [
  {
    title: "100% Natürliche Wolle",
    description:
      "Wir verwenden ausschließlich hochwertige Naturwolle aus nachhaltigem Anbau für ein angenehmes Tragegefühl.",
  },
  {
    title: "Handgemacht",
    description:
      "Jedes Produkt entsteht in sorgfältiger Handarbeit in unserer Werkstatt — keine Massenproduktion.",
  },
  {
    title: "Nachhaltig & Fair",
    description:
      "Von der Wolle bis zur Verpackung achten wir auf Nachhaltigkeit und faire Bedingungen.",
  },
  {
    title: "Einzigartiges Design",
    description:
      "Jedes Stück ist ein Unikat, entworfen mit Liebe zum Detail und einem Auge für zeitloses Design.",
  },
];

export default function Quality() {
  return (
    <section id="qualitaet" className="bg-warm-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center font-heading text-3xl font-bold text-charcoal md:text-4xl">
          Unsere Qualität
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-brown-light">
          Qualität ist kein Zufall — sie ist das Ergebnis von Sorgfalt, Erfahrung
          und Leidenschaft.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl bg-cream p-6 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <h3 className="font-heading text-lg font-semibold text-charcoal">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm text-brown-light">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
