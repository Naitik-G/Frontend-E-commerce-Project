import React from "react";

const CartItem = ({ item, onRemove, onQuantityChange }) => {
  const { id, name, price, quantity } = item;

  return (
    <div className="flex flex-col md:flex-row items-center justify-between border-b border-gray-700 py-4 text-white">
      <div>
        <h3 className="text-lg font-medium">{name}</h3>
        <p className="text-sm text-gray-400">Price: ${price}</p>
      </div>
      <div className="flex items-center mt-4 md:mt-0">
        <button
          className="px-2 bg-gray-800 text-white rounded disabled:opacity-50"
          onClick={() => onQuantityChange(id, quantity - 1)}
          disabled={quantity <= 1}
        >
          -
        </button>
        <span className="px-4">{quantity}</span>
        <button
          className="px-2 bg-gray-800 text-white rounded"
          onClick={() => onQuantityChange(id, quantity + 1)}
        >
          +
        </button>
        <button
          className="ml-4 text-red-500"
          onClick={() => onRemove(id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
