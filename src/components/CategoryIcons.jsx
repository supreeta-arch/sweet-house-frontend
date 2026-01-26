export default function CategoryIcons({ type, active = false }) {
  const icons = {
    combos: `${import.meta.env.BASE_URL}icons/combos.png`,
    grocery: `${import.meta.env.BASE_URL}icons/grocery.png`,
    sweets: `${import.meta.env.BASE_URL}icons/sweets.png`,
    spices: `${import.meta.env.BASE_URL}icons/spices.png`,
    dryfruits: `${import.meta.env.BASE_URL}icons/dryfruits.png`,
    organic: `${import.meta.env.BASE_URL}icons/organic.png`,
    gifting: `${import.meta.env.BASE_URL}icons/gifting.png`,
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
