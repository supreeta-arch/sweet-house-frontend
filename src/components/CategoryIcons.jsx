const CATEGORIES = [
  { id: "combos", label: "Combos", icon: "combos.png" },
  { id: "grocery", label: "Grocery", icon: "grocery.png" },
  { id: "sweets", label: "Sweets and Savours", icon: "sweets.png" },
  { id: "spices", label: "Spices and Millets", icon: "spices.png" },
  { id: "dryfruits", label: "Dry Fruits", icon: "dryfruits.png" }, // ✅ exact filename
  { id: "organic", label: "Organic", icon: "organic.png" },
  { id: "gifting", label: "Gifting", icon: "gifting.png" },
];

const BASE_URL = import.meta.env.BASE_URL;

export default function CategoryIcons() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
      {CATEGORIES.map((cat) => (
        <div key={cat.id} className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-white shadow flex items-center justify-center">
            <img
              src={`${BASE_URL}icons/${cat.icon}`}
              alt={cat.label}
              className="w-12 h-12 object-contain"
              loading="lazy"
            />
          </div>
          <p className="mt-3 text-sm font-semibold text-center">
            {cat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
