import { Link } from "react-router-dom";

const BASE = import.meta.env.BASE_URL;

const categories = [
  { name: "Combos", slug: "combos", img: "combos.png" },
  { name: "Grocery", slug: "grocery", img: "grocery.png" },
  { name: "Sweets and Savours", slug: "sweets", img: "sweets.png" },
  { name: "Spices and Millets", slug: "spices", img: "spices.png" },
  { name: "Dry Fruits", slug: "dry-fruits", img: "dryfruits.png" },
  { name: "Organic", slug: "organic", img: "organic.png" },
  { name: "Gifting", slug: "gifting", img: "gifting.png" },
];

export default function CategoryIcons() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            to={`/category/${cat.slug}`}
            className="flex flex-col items-center gap-3"
          >
            <div className="w-28 h-36 rounded-full bg-white shadow flex items-center justify-center">
              <img
                src={`${BASE}icons/${cat.img}`}
                alt={cat.name}
                className="w-16 h-16 object-contain"
              />
            </div>
            <span className="text-sm font-medium text-center">
              {cat.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
