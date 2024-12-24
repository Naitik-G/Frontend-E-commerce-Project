import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartPage = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-gray-400">Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li
              key={item.id}
              className="mb-4 border border-gray-700 p-4 rounded bg-gray-800"
            >
              <div className="flex flex-col md:flex-row justify-between">
                <div>
                  <h2 className="font-bold text-lg">{item.name}</h2>
                  <p className="text-gray-400">Price: ${item.price}</p>
                  <p className="text-gray-400">Quantity: {item.quantity}</p>
                </div>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover mt-4 md:mt-0"
                />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
