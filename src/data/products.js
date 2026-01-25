// src/data/products.js
import defaultProducts from "./defaultProducts";

const STORAGE_KEY = "adminProducts";

/* Normalize old categories safely */
const normalizeCategory = (slug) => {
  const map = {
    sweets: "sweets-savours",
    mixture: "sweets-savours",
    chips: "sweets-savours",
  };
  return map[slug] || slug;
};

export const getProducts = () => {
  try {
    const adminRaw =
      JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

    const adminProducts = adminRaw.map((p) => ({
      ...p,
      category: normalizeCategory(p.category),
    }));

    return [...adminProducts, ...defaultProducts];
  } catch (e) {
    console.error("Failed to load products", e);
    return defaultProducts;
  }
};
