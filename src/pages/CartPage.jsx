import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartPage = () => {
  const { cartItems } = useContext(CartContext);

  // Calculate total quantity and total amount
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  return (
    <div className="p-6 bg-[#FFDAB9] text-black min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-gray-800">Your cart is empty.</p>
      ) : (
        <>
          {/* Display total quantity and amount */}
          <div className="mb-6 p-4 bg-[#FFF5EE] border border-gray-900 rounded">
            <h2 className="text-lg font-bold">Cart Summary</h2>
            <p className="text-gray-800">Total Products: {totalQuantity}</p>
            <p className="text-gray-800">Total Amount: ${totalAmount.toFixed(2)}</p>
          </div>

          {/* Display cart items in a responsive grid */}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="border border-gray-900 p-4 rounded bg-[#FFF5EE]"
              >
                <div className="flex flex-col items-center text-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-32 h-32 object-cover mb-4"
                  />
                  <h2 className="font-bold text-lg">{item.name}</h2>
                  <p className="text-gray-800">Price: ${item.price}</p>
                  <p className="text-gray-800">Quantity: {item.quantity}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
