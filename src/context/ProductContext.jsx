import React, { createContext } from "react";
import products from "../data/product.js"; 

// Create the ProductContext
export const ProductContext = createContext();

// Defining the ProductProvider component
export const ProductProvider = ({ children }) => {
  return (
    // Providing the products data to the context
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};
