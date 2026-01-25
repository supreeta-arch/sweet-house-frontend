import { Link } from "react-router-dom";

const categories = [
  { name: "Combos", slug: "combos", icon: "🎁" },
  { name: "Grocery", slug: "grocery", icon: "🛒" },
  { name: "Sweets", slug: "sweets", icon: "🍬" },
  { name: "Snacks", slug: "snacks", icon: "🥨" },
  { name: "Dry Fruits", slug: "dry-fruits", icon: "🥜" },
  { name: "Mixture", slug: "mixture", icon: "🥣" },
  { name: "Chips", slug: "chips", icon: "🍟" },
];

export default function CategoryStrip() {
  return (
    <section className="bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-8 text-center">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              to={`/category/${cat.slug}`}
              className="group flex flex-col items-center"
            >
              <div className="
                w-24 h-24 rounded-full 
                bg-white shadow-md 
                flex items-center justify-center
                text-3xl
                transition-transform duration-300
                group-hover:scale-105
                group-hover:shadow-lg
              ">
                {cat.icon}
              </div>

              <span className="
                mt-3 font-medium text-gray-800
                group-hover:text-purple-700
              ">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
