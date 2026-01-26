export default function CategoryIcons({ type, active = false }) {
  const icons = {
    chips: "/icons/chips.png",
    combos: "/icons/combos.png",
    grocery: "/icons/grocery.png",
    sweets: "/icons/sweets.png",
    spices: "/icons/spices.png",
    dryfruits: "/icons/dryfruits.png",
    organic: "/icons/organic.png",
    gifting: "/icons/gifting.png",
  };

  const src = icons[type];

  if (!src) return null;

  return (
    <img
      src={src}
      alt={type}
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
