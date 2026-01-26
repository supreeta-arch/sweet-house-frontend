export default function CategoryIcons({ type, active = false }) {
  const icons = {
    chips: "/icons/chips",
    combos: "/icons/combos",
    grocery: "/icons/grocery",
    sweets: "/icons/sweets",
    spices: "/icons/spices",
    dryfruits: "/icons/dryfruits",
    organic: "/icons/organic",
    gifting: "/icons/gifting",
  };

  const src = icons[type];

  if (!src) return null;

  return (
    <img
      src={src}
      alt={type}
      loading="lazy"
      className={`
        w-14 h-14 object-contain
        transition-all duration-300
        ${
          active
            ? "brightness-110 saturate-150"
            : "group-hover:brightness-110 group-hover:saturate-150"
        }
      `}
    />
  );
}
