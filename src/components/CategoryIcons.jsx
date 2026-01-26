const BASE = import.meta.env.BASE_URL;

export default function CategoryIcons({ type }) {
  const icons = {
    combos: "icons/combos",
    grocery: "icons/grocery",
    sweets: "icons/sweets",
    spices: "icons/spices",
    dryfruits: "icons/dryfruits",
    organic: "icons/organic",
    gifting: "icons/gifting",
    chips: "icons/chips",
  };

  const iconPath = icons[type];

  if (!iconPath) return null;

  return (
    <img
      src={`${BASE}${iconPath}`}
      alt={type}
      loading="lazy"
      className="w-14 h-14 object-contain"
    />
  );
}
