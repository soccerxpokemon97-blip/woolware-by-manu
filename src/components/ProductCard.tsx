import Image from "next/image";

interface ProductCardProps {
  name: string;
  description: string;
  image: string;
}

export default function ProductCard({ name, description, image }: ProductCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl bg-warm-white shadow-md transition-transform duration-300 hover:scale-105">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-5">
        <h3 className="font-heading text-xl font-semibold text-charcoal">{name}</h3>
        <p className="mt-2 text-sm text-brown-light">{description}</p>
      </div>
    </div>
  );
}
