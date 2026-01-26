const BASE = import.meta.env.BASE_URL;

const ICONS = [
  { key: "combos", label: "Combos", file: "combos" },
  { key: "grocery", label: "Grocery", file: "grocery" },
  { key: "sweets", label: "Sweets and Savours", file: "sweets" },
  { key: "spices", label: "Spices and Millets", file: "spices" },
  { key: "dryfruits", label: "Dry Fruits", file: "dryfruits" },
  { key: "organic", label: "Organic", file: "organic" },
  { key: "gifting", label: "Gifting", file: "gifting" },
];

export default function CategoryIcons() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
      {ICONS.map((cat) => (
        <div key={cat.key} className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-white shadow flex items-center justify-center">
            <img
              src={`${BASE}icons/${cat.file}`}
              alt={cat.label}
              className="w-12 h-12 object-contain"
              loading="lazy"
            />
          </div>

          <span className="mt-3 text-sm font-semibold text-center">
            {cat.label}
          </span>
        </div>
      ))}
    </div>
  );
}
