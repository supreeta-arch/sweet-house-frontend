import Banner from "../components/Banner";
import ProductSection from "../components/ProductSection";
import Footer from "../components/Footer";
import products from "../data/products";
import { Link } from "react-router-dom";


/**
 * ✅ ONLY VALID CATEGORIES (NEW STRUCTURE)
 */
const categories = [
  { name: "Combos", icon: "/icons/combos.png", slug: "combos" },
  { name: "Grocery", icon: "/icons/grocery.png", slug: "grocery" },
  {
    name: "Sweets and Savours",
    icon: "/icons/sweets.png",
    slug: "sweets-savours",
  },
  {
    name: "Spices and Millets",
    icon: "/icons/spices.png",
    slug: "spices-millets",
  },
  { name: "Dry Fruits", icon: "/icons/dryfruits.png", slug: "dry-fruits" },
  { name: "Organic", icon: "/icons/organic.png", slug: "organic" },
  { name: "Gifting", icon: "/icons/gifting.png", slug: "gifting" },
];

export default function Home() {
  /**
   * ✅ Show only SWEETS & SAVOURS products on home
   */
  const sweetsAndSavours = products.filter(
    (p) => p.category === "sweets-savours"
  );

  return (
    <>
      {/* ================= Banner ================= */}
      <Banner />

      {/* ================= Category Tiles ================= */}
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
                    src={cat.icon?.startsWith('/')
                      ? `${import.meta.env.BASE_URL}${cat.icon.slice(1)}`
                      : cat.icon}
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

      {/* ================= Product Sections ================= */}
      <ProductSection
        title="JUST ARRIVED"
        products={sweetsAndSavours.slice(0, 8)}
      />

      <ProductSection
        title="POPULAR SWEETS & SAVOURS"
        products={sweetsAndSavours.slice(8, 16)}
      />

      {/* ================= Footer ================= */}
      <Footer />
    </>
  );
}
