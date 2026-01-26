export default function Banner() {
  return (
    <section className="relative w-full bg-primary py-14 overflow-hidden">
      {/* LEFT BACKGROUND SWEETS */}
      <img
        src={`${import.meta.env.BASE_URL}banner/sweets-left.png`}
        alt=""
        className="
          absolute left-0 top-1/2 -translate-y-1/2
          w-[280px] lg:w-[360px]
          opacity-90
          pointer-events-none
        "
      />

      {/* RIGHT BACKGROUND SWEETS */}
      <img
        src={`${import.meta.env.BASE_URL}banner/sweets-right.png`}
        alt=""
        className="
          absolute right-0 top-1/2 -translate-y-1/2
          w-[280px] lg:w-[360px]
          opacity-90
          pointer-events-none
        "
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 justify-center">

          {/* OFFER CARD */}
          <div className="w-[220px] h-[230px] bg-[#F3C623] rounded-xl flex flex-col items-center justify-center text-center shrink-0">
            <div className="bg-red-600 text-white font-extrabold text-3xl px-5 py-3 rotate-[-8deg] mb-3">
              50%
              <span className="block text-sm">OFF</span>
            </div>

            <p className="text-xs mb-3">On Online Order</p>

            <button className="bg-white px-5 py-2 font-semibold rounded">
              ORDER NOW
            </button>
          </div>

          {/* MAIN WHITE PANEL */}
          <div className="relative w-full max-w-[760px] min-h-[230px] bg-white rounded-xl px-8 py-6 flex items-center">
            <div>
              <h2 className="text-3xl md:text-[36px] font-semibold text-primary mb-2">
                Premium But Approachable
              </h2>

              <p className="text-lg mb-6">
                Just Pure Ingredients!
              </p>

              <button className="bg-primary text-white px-6 py-3 rounded">
                SHOP NOW
              </button>
            </div>

            {/* Ladoo Cluster */}
            <div className="absolute right-6 bottom-4 hidden sm:block">
              <img
                src={`${import.meta.env.BASE_URL}banner/ladoo.png`}
                className="absolute w-[80px] right-8 bottom-8 opacity-80"
                alt=""
              />
              <img
                src={`${import.meta.env.BASE_URL}banner/ladoo.png`}
                className="relative w-[110px]"
                alt=""
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
