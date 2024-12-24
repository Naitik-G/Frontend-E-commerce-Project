import React, { createContext } from "react";
import smartphone from "../assets/smarthphone.png";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 49.99,
      image: "https://via.placeholder.com/150",
      category: "Electronics",
    },
    {
      id: 2,
      name: "Smartphone",
      price: 699.99,
      image: smartphone,
      category: "Electronics",
    },
    {
      id: 3,
      name: "Coffee Maker",
      price: 89.99,
      image: "https://via.placeholder.com/150",
      category: "Home Appliances",
    },
    {
      id: 4,
      name: "Electric Kettle",
      price: 35.99,
      image: "https://via.placeholder.com/150",
      category: "Home Appliances",
    },
    {
      id: 5,
      name: "Running Shoes",
      price: 59.99,
      image: "https://via.placeholder.com/150",
      category: "Footwear",
    },
    {
      id: 6,
      name: "Backpack",
      price: 39.99,
      image: "https://via.placeholder.com/150",
      category: "Accessories",
    },
    {
      id: 7,
      name: "Sunglasses",
      price: 19.99,
      image: "https://via.placeholder.com/150",
      category: "Accessories",
    },
    {
      id: 8,
      name: "Gaming Console",
      price: 299.99,
      image: "https://via.placeholder.com/150",
      category: "Electronics",
    },
    {
      id: 9,
      name: "Office Chair",
      price: 129.99,
      image: "https://via.placeholder.com/150",
      category: "Furniture",
    },
    {
      id: 10,
      name: "Desk Lamp",
      price: 24.99,
      image: "https://via.placeholder.com/150",
      category: "Furniture",
    },
    // Add more products as needed
    {
      id: 11,
      name: "Laptop",
      category: "Electronics",
      price: 999,
      image: "/assets/laptop.jpg",
    },
    {
      id: 12,
      name: "T-Shirt",
      category: "Clothing",
      price: 19,
      image: "/assets/tshirt.jpg",
    },
    {
      id: 13,
      name: "Book",
      category: "Books",
      price: 12,
      image: "/assets/book.jpg",
    },
  ];

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};
