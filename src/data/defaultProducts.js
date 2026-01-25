// src/data/defaultProducts.js

const base = {
  category: "sweets-savours",
  price: 160,
  weight: "200g",
  rating: 4.2,
  inStock: true,
};

const defaultProducts = [
  { id: 1, name: "Kovil Patti Special Chikki", ingredients: ["Groundnuts", "Jaggery"], ...base },
  { id: 2, name: "Chikki Round", ingredients: ["Groundnuts", "Jaggery"], ...base },
  { id: 3, name: "Black Thill Ball", ingredients: ["Black Sesame Seeds", "Jaggery"], ...base },
  { id: 4, name: "White Thill Ball", ingredients: ["White Sesame Seeds", "Jaggery"], ...base },
  { id: 5, name: "Roasted Gram Round", ingredients: ["Roasted Gram", "Jaggery"], ...base },
  { id: 6, name: "Mysore Pak", ingredients: ["Gram Flour", "Ghee", "Sugar"], ...base },
  { id: 7, name: "Milk Kova", ingredients: ["Milk Solids", "Sugar"], ...base },
  { id: 8, name: "Lava Lattu", ingredients: ["Gram Flour", "Sugar", "Ghee", "Cocoa Powder", "Milk Solids"], ...base },
  { id: 9, name: "Thirunelveli Alva", ingredients: ["Wheat Milk", "Sugar", "Ghee", "Cashew Nuts"], ...base },
  { id: 10, name: "Kamarkattu Lattu", ingredients: ["Rice Flour", "Jaggery", "Coconut", "Dry Ginger", "Cumin"], ...base },
  { id: 11, name: "Adhirasam", ingredients: ["Rice Flour", "Jaggery", "Sesame Seeds", "Ghee", "Cardamom"], ...base },
  { id: 12, name: "Special Mixture", ingredients: ["Gram Flour", "Rice Flour", "Groundnuts", "Spices"], ...base },
  { id: 13, name: "Madras Mixture", ingredients: ["Gram Flour", "Rice Flour", "Groundnuts", "Spices"], ...base },
  { id: 14, name: "Garlic Mixture", ingredients: ["Gram Flour", "Rice Flour", "Garlic", "Spices"], ...base },
  { id: 15, name: "Kara Boondi", ingredients: ["Gram Flour", "Rice Flour", "Spices"], ...base },
  { id: 16, name: "Millets Mixture", ingredients: ["Millets", "Gram Flour", "Groundnuts", "Spices"], ...base },
  { id: 17, name: "Masala Peanut", ingredients: ["Groundnuts", "Gram Flour", "Spices"], ...base },
  { id: 18, name: "Peanut Salt", ingredients: ["Groundnuts", "Salt"], ...base },
  { id: 19, name: "Roasted Peanut", ingredients: ["Groundnuts", "Spices"], ...base },
  { id: 20, name: "Moong Dal Plain", ingredients: ["Moong Dal", "Oil", "Salt"], ...base },
  { id: 21, name: "Moong Dal Salt", ingredients: ["Moong Dal", "Oil", "Salt"], ...base },
  { id: 22, name: "Udupi Pudina Murukku", ingredients: ["Rice Flour", "Mint", "Spices"], ...base },
  { id: 23, name: "Kara Murukku", ingredients: ["Rice Flour", "Gram Flour", "Spices"], ...base },
  { id: 24, name: "Kara Sev", ingredients: ["Gram Flour", "Rice Flour", "Spices"], ...base },
  { id: 25, name: "Butter Murukku", ingredients: ["Rice Flour", "Butter", "Spices"], ...base },
  { id: 26, name: "Rose Cookies", ingredients: ["Rice Flour", "Coconut Milk", "Sugar", "Eggs"], ...base },
  { id: 27, name: "Banana Chips Plain", ingredients: ["Raw Banana", "Coconut Oil"], ...base },
  { id: 28, name: "Banana Chips Salt", ingredients: ["Raw Banana", "Coconut Oil", "Salt"], ...base },
  { id: 29, name: "Banana Chips Pepper", ingredients: ["Raw Banana", "Coconut Oil", "Pepper"], ...base },
  { id: 30, name: "Potato Pudina", ingredients: ["Potato", "Mint", "Spices"], ...base },
  { id: 31, name: "Bitter Gourd Chips", ingredients: ["Bitter Gourd", "Oil", "Salt"], ...base },
];

export default defaultProducts;
