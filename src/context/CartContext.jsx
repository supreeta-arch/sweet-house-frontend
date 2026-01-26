import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  // ✅ Load cart from localStorage on first load
  const [cart, setCart] = useState(() => {
    try {
      const stored = localStorage.getItem("sweet-house-cart");
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      return [];
    }
  });

  // ✅ Persist cart to localStorage on every change
  useEffect(() => {
    localStorage.setItem("sweet-house-cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQty = (id, quantity) => {
    if (quantity < 1) return;
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("sweet-house-cart");
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQty,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return ctx;
};
