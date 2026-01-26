export default function CategoryIcons({ type, active = false }) {
  const icons = {
    combos: "<img src={`${import.meta.env.BASE_URL}icons/grocery.png`} />",
    grocery: "<img src={`${import.meta.env.BASE_URL}icons/grocery.png`} />",
    sweets: "<img src={`${import.meta.env.BASE_URL}icons/sweets.png`} />",
    spices: "<img src={`${import.meta.env.BASE_URL}icons/spices.png`} />",
    dryfruits: "<img src={`${import.meta.env.BASE_URL}icons/dryfruits.png`} />",
    organic: "<img src={`${import.meta.env.BASE_URL}icons/organic.png`} />",
    gifting: "<img src={`${import.meta.env.BASE_URL}icons/gifting.png`} />",
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
