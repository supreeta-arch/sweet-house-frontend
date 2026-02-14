export default function About() {
  return (
    <section className="w-full bg-gray-50">
      {/* HERO */}
      <div className="bg-primary text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">About Sweet House</h1>
        <p className="max-w-2xl mx-auto text-lg">
          A legacy of authentic taste from india, pure ingredients, and heartfelt traditions.
        </p>
      </div>

      {/* STORY */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-semibold text-primary mb-4">
            Our Story
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Sweet House was born from a simple belief — that great sweets should
            taste just like they do at home. What started as a small family
            kitchen, driven by passion and tradition, has today grown into a
            trusted destination for authentic Indian sweets and snacks.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Every recipe at Sweet House is inspired by generations of culinary
            wisdom, prepared with care, patience, and the finest quality
            ingredients. We do not believe in shortcuts — only in honest
            craftsmanship and uncompromising taste.
          </p>
          <p className="text-gray-700 leading-relaxed">
            From festive celebrations to everyday indulgence, Sweet House is
            proud to be a part of your happiest moments.
          </p>
        </div>

        {/* VALUES */}
        <div className="bg-white rounded-xl shadow p-8">
          <h3 className="text-2xl font-semibold text-primary mb-6">
            What We Stand For
          </h3>
          <ul className="space-y-4 text-gray-700">
            <li>
              <strong>Pure Ingredients:</strong> No artificial flavors, no
              preservatives — only natural goodness.
            </li>
            <li>
              <strong>Authentic Taste:</strong> Traditional recipes prepared the
              right way.
            </li>
            <li>
              <strong>Freshness First:</strong> Made fresh in small batches.
            </li>
            <li>
              <strong>Customer Trust:</strong> Quality you can rely on, every
              single time.
            </li>
          </ul>
        </div>
      </div>

      {/* CLOSING */}
      <div className="bg-white py-16 text-center">
        <h2 className="text-3xl font-semibold text-primary mb-4">
          Sweetness, Made with Love
        </h2>
        <p className="max-w-3xl mx-auto text-gray-700 text-lg">
          At Sweet House, we don’t just make sweets — we create experiences,
          preserve traditions, and deliver joy across every box we pack.
        </p>
      </div>
    </section>
  );
}
