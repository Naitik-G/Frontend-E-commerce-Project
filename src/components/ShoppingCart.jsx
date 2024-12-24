import React from "react";
import CartItem from "./CartItem";
import useLocalStorage from "../hooks/useLocalStorage";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useLocalStorage("cart", []);

  const addItemToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeItemFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const onQuantityChange = (id, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-400">Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onRemove={removeItemFromCart}
              onQuantityChange={onQuantityChange}
            />
          ))}
          <div className="text-right mt-4">
            <p className="text-lg font-medium">Total: ${total.toFixed(2)}</p>
          </div>
        </>
      )}
      <button
        onClick={() => addItemToCart({ id: 1, name: "Product 1", price: 10, quantity: 1 })}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add Product 1
      </button>
    </div>
  );
};

export default ShoppingCart;
