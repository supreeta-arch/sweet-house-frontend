import { useState } from "react";
import CategoryIcons from "./CategoryIcons";

const categories = [
  { name: "Combos", icon: "combos" },
  { name: "Grocery", icon: "grocery" },
  { name: "Sweets and Savours", icon: "sweets" },
  { name: "Spices and Millets", icon: "spices" },
  { name: "Dry Fruits", icon: "dryfruits" },
  { name: "Organic", icon: "organic" },
  { name: "Gifting", icon: "gifting" },
];

export default function CategoryTiles() {
  const [active, setActive] = useState("Sweets and Savours");

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8">
        {categories.map((cat) => {
          const isActive = active === cat.name;

          return (
            <div
              key={cat.name}
              onClick={() => setActive(cat.name)}
              className="flex flex-col items-center text-center cursor-pointer group"
            >
              {/* TILE */}
              <div
                className={`
                  w-28 h-28 rounded-full
                  flex items-center justify-center
                  transition-all duration-300
                  bg-gray-100
                  ${
                    isActive
                      ? "ring-2 ring-purple-600 shadow-md"
                      : "hover:ring-2 hover:ring-purple-400"
                  }
                `}
              >
                <CategoryIcons
                  type={cat.icon}
                  active={isActive}
                />
              </div>

              {/* LABEL */}
              <p
                className={`
                  mt-4 text-sm font-medium transition-colors
                  ${
                    isActive
                      ? "text-purple-700"
                      : "text-gray-800 group-hover:text-purple-600"
                  }
                `}
              >
                {cat.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
