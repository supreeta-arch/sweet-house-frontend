export default function Hero() {
  return (
    <section className="bg-primary py-12">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* LEFT SWEETS IMAGE */}
        <img
          src="https://via.placeholder.com/260"
          className="hidden md:block rounded-xl"
        />

        {/* CENTER CARD */}
        <div className="bg-white rounded-xl shadow-lg p-8 flex gap-8 items-center max-w-2xl">
          
          {/* OFFER */}
          <div className="bg-accent rounded-lg p-4 text-center w-32">
            <p className="text-2xl font-bold">50%</p>
            <p className="text-xs">On Online Order</p>
            <button className="mt-2 bg-black text-white text-xs px-3 py-1 rounded">
              ORDER NOW
            </button>
          </div>

          {/* TEXT */}
          <div>
            <h2 className="text-3xl font-bold text-primary">
              Premium But Approachable
            </h2>
            <p className="text-sm mt-2 text-gray-600">
              Just Pure Ingredients!
            </p>
            <button className="mt-4 bg-primary text-white px-6 py-2 rounded">
              SHOP NOW
            </button>
          </div>

        </div>

        {/* RIGHT SWEETS IMAGE */}
        <img
          src="https://via.placeholder.com/260"
          className="hidden md:block rounded-xl"
        />

      </div>
    </section>
  );
}
