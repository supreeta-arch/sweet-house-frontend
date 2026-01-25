export default function PromoTiles() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-8 grid md:grid-cols-3 gap-6">
      {["Sweet Pack", "Snacks", "Combo"].map((t, i) => (
        <div
          key={i}
          className="rounded-xl p-6 text-white font-semibold"
          style={{
            background: i === 0 ? "#F5B301" : i === 1 ? "#F97316" : "#4B5563"
          }}
        >
          <h3 className="text-xl">{t}</h3>
          <button className="mt-4 text-xs border border-white px-4 py-1 rounded">
            EXPLORE
          </button>
        </div>
      ))}
    </section>
  );
}
