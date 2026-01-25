export default function CategoryIcons({ type, active = false }) {
  const icons = {
    combos: "/icons/combos.png",
    grocery: "/icons/grocery.png",
    sweets: "/icons/sweets.png",
    spices: "/icons/spices.png",
    dryfruits: "/icons/dryfruits.png",
    organic: "/icons/organic.png",
    gifting: "/icons/gifting.png",
  };

  return (
    <img
      src={icons[type]}
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
