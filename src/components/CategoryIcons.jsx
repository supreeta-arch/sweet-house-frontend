import { Link } from "react-router-dom";

const categories = [
  {
    title: "Combos",
    slug: "combos",
    image: "/sweet-house-frontend/icons/combos.png",
  },
  {
    title: "Grocery",
    slug: "grocery",
    image: "/sweet-house-frontend/icons/grocery.png",
  },
  {
    title: "Sweets and Savours",
    slug: "sweets",
    image: "/sweet-house-frontend/icons/sweets.png",
  },
  {
    title: "Spices and Millets",
    slug: "spices",
    image: "/sweet-house-frontend/icons/spices.png",
  },
  {
    title: "Dry Fruits",
    slug: "dry-fruits",
    image: "/sweet-house-frontend/icons/dryfruits.png", // ✅ correct filename
  },
  {
    title: "Organic",
    slug: "organic",
    image: "/sweet-house-frontend/icons/organic.png",
  },
  {
    title: "Gifting",
    slug: "gifting",
    image: "/sweet-house-frontend/icons/gifting.png",
  },
];

export default function CategoryIcons() {
  return (
    <section className="py-12">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            to={`/category/${cat.slug}`}
            className="flex flex-col items-center text-center"
          >
            <div className="w-32 h-32 rounded-full bg-white shadow-md flex items-center justify-center">
              <img
                src={cat.image}
                alt={cat.title}
                className="w-16 h-16 object-contain"
                loading="lazy"
              />
            </div>
            <p className="mt-3 font-medium text-sm">{cat.title}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
