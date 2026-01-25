import Banner from "../components/Banner";
import ProductSection from "../components/ProductSection";
import Footer from "../components/Footer";
import { getProducts } from "../data/products";
import categories from "../data/categories";
import { Link } from "react-router-dom";

export default function Home() {
  const products = getProducts();

  const sweetsAndSavours = products.filter(
    (p) => p.category === "sweets-savours"
  );

  return (
    <>
      {/* Banner */}
      <Banner />

      {/* Category Tiles */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-6 place-items-center">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                to={`/category/${cat.slug}`}
                className="flex flex-col items-center group"
              >
                <div className="w-28 h-36 bg-white rounded-full flex items-center justify-center shadow-md group-hover:shadow-xl transition">
                  <img
                    src={`/icons/${cat.slug}.png`}
                    alt={cat.name}
                    className="w-14 h-14 object-contain"
                  />
                </div>
                <p className="mt-3 text-sm font-semibold text-gray-800 text-center">
                  {cat.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Product Sections */}
      <ProductSection
        title="JUST ARRIVED"
        products={sweetsAndSavours.slice(0, 8)}
      />

      <ProductSection
        title="POPULAR SWEETS & SAVOURS"
        products={sweetsAndSavours.slice(8, 16)}
      />

      <Footer />
    </>
  );
}
