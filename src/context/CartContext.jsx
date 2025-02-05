import React, { createContext, useState } from "react";

// Create the CartContext
export const CartContext = createContext();

// Defining the CartProvider component
export const CartProvider = ({ children }) => {
  // State to hold the cart items
  const [cartItems, setCartItems] = useState([]);

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      // If the item already exists in the cart, increase its quantity
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // If the item does not exist in the cart, add it with quantity 1
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  return (
    // Providing the cart items and addToCart function to the context
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
