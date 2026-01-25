const sweetsLeft = new URL("../assets/banner/sweets-left.png", import.meta.url).href;
const sweetsRight = new URL("../assets/banner/sweets-right.png", import.meta.url).href;
const ladoo = new URL("../assets/banner/ladoo.png", import.meta.url).href;

export default function Banner() {
  return (
    <section className="relative w-full bg-primary py-[56px] overflow-visible">

      {/* LEFT CORNER SWEETS */}
      <img
        src={sweetsLeft}
        alt=""
        className="absolute left-0 top-0 w-[420px] z-0 pointer-events-none"
      />

      {/* RIGHT CORNER SWEETS */}
      <img
        src={sweetsRight}
        alt=""
        className="absolute right-0 bottom-0 w-[420px] z-0 pointer-events-none"
      />

      {/* CENTER CONTENT */}
      <div className="relative z-10 max-w-[1200px] mx-auto flex justify-center">
        <div className="flex items-center gap-6">

          {/* YELLOW OFFER */}
          <div className="w-[220px] h-[230px] bg-[#F3C623] flex flex-col justify-center items-center rounded-xl text-center">
            <div className="bg-red-600 text-white font-extrabold text-3xl px-5 py-3 rotate-[-8deg] mb-3">
              50%
              <span className="block text-sm">OFF</span>
            </div>

            <p className="text-xs mb-3">On Online Order</p>

            <button className="bg-white px-5 py-2 font-semibold rounded">
              ORDER NOW
            </button>
          </div>

          {/* WHITE PANEL */}
          <div className="relative w-[760px] h-[230px] bg-white rounded-xl px-12 flex items-center">
            <div>
              <h2 className="text-[36px] font-semibold text-primary mb-2">
                Premium But Approachable
              </h2>

              <p className="text-lg mb-6">
                Just Pure Ingredients!
              </p>

              <button className="bg-primary text-white px-6 py-3 rounded">
                SHOP NOW
              </button>
            </div>

            {/* BOWL CLUSTER */}
            <div className="absolute right-[24px] bottom-[18px]">
              <img
                src={ladoo}
                className="absolute w-[95px] right-[22px] bottom-[32px] opacity-90"
                alt=""
              />
              <img
                src={ladoo}
                className="relative w-[120px]"
                alt=""
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
