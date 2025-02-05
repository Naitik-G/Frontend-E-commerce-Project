import React from "react";
import CartItem from "./CartItem";
import useLocalStorage from "../hooks/useLocalStorage";

// Defining the ShoppingCart component
const ShoppingCart = () => {
  // Using custom hook to manage cart items in local storage
  const [cartItems, setCartItems] = useLocalStorage("cart", []);

  // Function to add an item to the cart
  const addItemToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  // Function to remove an item from the cart
  const removeItemFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Function to change the quantity of an item in the cart
  const onQuantityChange = (id, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  // Calculating the total price of items in the cart
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {/* Displaying a message if the cart is empty */}
      {cartItems.length === 0 ? (
        <p className="text-gray-400">Your cart is empty.</p>
      ) : (
        <>
          {/* Rendering CartItem components for each item in the cart */}
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onRemove={removeItemFromCart}
              onQuantityChange={onQuantityChange}
            />
          ))}
          {/* Displaying the total price */}
          <div className="text-right mt-4">
            <p className="text-lg font-medium">Total: ${total.toFixed(2)}</p>
          </div>
        </>
      )}
      {/* Button to add a sample product to the cart */}
      <button
        onClick={() => addItemToCart({ id: 1, name: "Product 1", price: 10, quantity: 1 })}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add Product 1
      </button>
    </div>
  );
};

// Exporting the ShoppingCart component
export default ShoppingCart;
