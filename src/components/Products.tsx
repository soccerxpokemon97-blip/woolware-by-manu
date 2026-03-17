import ProductCard from "./ProductCard";

const products = [
  {
    name: "Pullover",
    description: "Kuschelig warme Pullover aus feinster Merinowolle — perfekt für kalte Tage.",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80",
  },
  {
    name: "Schals",
    description: "Handgestrickte Schals in wunderschönen Farben und Mustern.",
    image: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=600&q=80",
  },
  {
    name: "Mützen",
    description: "Warme Mützen für den Winter — individuell und einzigartig.",
    image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=600&q=80",
  },
  {
    name: "Handschuhe",
    description: "Weiche Wollhandschuhe, die Ihre Hände warm und stilvoll halten.",
    image: "/handschuhe.svg",
  },
  {
    name: "Decken",
    description: "Gemütliche Wolldecken für entspannte Abende auf dem Sofa.",
    image: "https://images.unsplash.com/photo-1600369672770-985fd30004eb?w=600&q=80",
  },
  {
    name: "Socken",
    description: "Handgestrickte Wollsocken — warm, bequem und langlebig.",
    image: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=600&q=80",
  },
];

export default function Products() {
  return (
    <section id="produkte" className="bg-cream-dark py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center font-heading text-3xl font-bold text-charcoal md:text-4xl">
          Unsere Produkte
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-brown-light">
          Jedes Stück wird von Hand gefertigt und ist ein Unikat. Kontaktieren Sie
          mich gerne für individuelle Wünsche.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
