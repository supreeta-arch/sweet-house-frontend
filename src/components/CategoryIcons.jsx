const BASE = import.meta.env.BASE_URL;

const ICONS = {
  combos: "icons/combos.png",
  grocery: "icons/grocery.png",
  sweets: "icons/sweets.png",
  spices: "icons/spices.png",
  dryfruits: "icons/dryfruits.png",
  organic: "icons/organic.png",
  gifting: "icons/gifting.png",
  chips: "icons/chips.png",
};

export default function CategoryIcons({ type, label }) {
  const src = ICONS[type];

  if (!src) {
    console.warn("Missing icon for:", type);
    return null;
  }

  return (
    <div className="flex flex-col items-center">
      <img
        src={`${BASE}${src}`}
        alt={label || type}
        className="w-16 h-16 object-contain mb-2"
        loading="lazy"
      />
      <span className="text-sm font-medium text-center">{label}</span>
    </div>
  );
}
