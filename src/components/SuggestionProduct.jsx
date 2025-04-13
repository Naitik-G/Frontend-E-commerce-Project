import React from "react";
import { Link } from "react-router-dom";
import { formatCurrency } from "../utils/formatCurrency";

// Defining the SuggestionProduct component
const SuggestionProduct = ({ suggestedProducts }) => {
  // Return null if there are no suggested products to display
  if (!suggestedProducts || suggestedProducts.length === 0) {
    return null;
  }

  return (
    <div className="mt-6 sm:mt-8 px-4 sm:px-6 lg:px-8">
      <h2 className="text-lg sm:text-xl font-semibold text-gray mb-3 sm:mb-4">You may also like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {/* Rendering product cards for each suggested product */}
        {suggestedProducts.map((product) => (
          <div
            key={product.id}
            className="bg-[#FFF5EE] p-3 sm:p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-full"
          >
            <Link to={`/product/${product.id}`}>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-36 sm:h-40 md:h-48 object-cover rounded-lg"
              />
              <h3 className="text-sm sm:text-base text-black font-semibold mt-2 truncate">
                {product.name}
              </h3>
            </Link>
            <p className="text-gray-800 mt-1 text-sm sm:text-base">{formatCurrency(product.price)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Exporting the SuggestionProduct component
export default SuggestionProduct;