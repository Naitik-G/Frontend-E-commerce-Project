// SuggestionProduct.js
import React from "react";
import { Link } from "react-router-dom";
import { formatCurrency } from "../utils/formatCurrency";

const SuggestionProduct = ({ suggestedProducts }) => {
  if (!suggestedProducts || suggestedProducts.length === 0) {
    return null; // No suggested products to display
  }

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold text-white mb-4">You may also like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {suggestedProducts.map((product) => (
          <div
            key={product.id}
            className="bg-[#FFF5EE]  p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <Link to={`/product/${product.id}`}>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h3 className="text-black font-semibold mt-2 truncate">
                {product.name}
              </h3>
            </Link>
            <p className="text-gray-800 mt-1">{formatCurrency(product.price)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuggestionProduct;
