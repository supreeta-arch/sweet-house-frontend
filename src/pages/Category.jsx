import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../data/products";
import categories from "../data/categories";

export default function Category() {
  const { name } = useParams();
  const products = getProducts();

  const category = categories.find((c) => c.slug === name);
  const categoryProducts = products.filter(
    (p) => p.category === name
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-purple-700 mb-8">
        {category?.name || "Category"}
      </h1>

      {categoryProducts.length === 0 ? (
        <p className="text-gray-500">Products will be added soon.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categoryProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
