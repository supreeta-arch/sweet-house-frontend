const BASE = import.meta.env.BASE_URL;

const ICONS = [
  { key: "combos", label: "Combos", file: "combos.png" },
  { key: "grocery", label: "Grocery", file: "grocery.png" },
  { key: "sweets", label: "Sweets and Savours", file: "sweets.png" },
  { key: "spices", label: "Spices and Millets", file: "spices.png" },
  { key: "dryfruits", label: "Dry Fruits", file: "dryfruits.png" },
  { key: "organic", label: "Organic", file: "organic.png" },
  { key: "gifting", label: "Gifting", file: "gifting.png" },
];

export default function CategoryIcons() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {ICONS.map((cat) => (
        <div key={cat.key} className="flex flex-col items-center">
          <img
            src={`${BASE}icons/${cat.file}`}
            alt={cat.label}
            className="w-16 h-16 object-contain mb-2"
            loading="lazy"
          />
          <span className="text-sm font-semibold text-center">
            {cat.label}
          </span>
        </div>
      ))}
    </div>
  );
}
