const BASE = import.meta.env.BASE_URL;

const CATEGORIES = [
  { id: "combos", label: "Combos" },
  { id: "grocery", label: "Grocery" },
  { id: "sweets", label: "Sweets and Savours" },
  { id: "spices", label: "Spices and Millets" },
  { id: "dryfruits", label: "Dry Fruits" },
  { id: "organic", label: "Organic" },
  { id: "gifting", label: "Gifting" },
];

export default function CategoryIcons() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
      {CATEGORIES.map((cat) => (
        <div key={cat.id} className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-white shadow flex items-center justify-center">
            <img
              src={`${BASE}icons/${cat.id}.png`}
              alt={cat.label}
              className="w-12 h-12 object-contain"
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
