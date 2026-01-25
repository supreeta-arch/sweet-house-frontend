import ProductCard from "./ProductCard";
import products from "../data/products";

export default function ProductGrid({ title, limit }) {
  const list = limit ? products.slice(0, limit) : products;

  return (
    <section className="py-14">
      <h2 className="text-center text-sm tracking-widest font-semibold text-purple-700 mb-8">
        {title}
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
        {list.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
