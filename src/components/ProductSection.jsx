import ProductCard from "./ProductCard";
import { useCart } from "../context/CartContext";

export default function ProductSection({ title, products }) {
  const { addToCart } = useCart();

  return (
    <section className="py-10">
      <h2 className="text-center text-xs tracking-widest font-bold text-primary mb-8">
        {title}
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </section>
  );
}
