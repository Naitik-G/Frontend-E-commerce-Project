import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Defining the ProductCard component
const ProductCard = ({ product }) => {
  // Getting the addToCart function from the CartContext
  const { addToCart } = useContext(CartContext);

  // Handler function to add the product to the cart
  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md bg-[#FFF5EE] border border-gray-300 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 mx-auto">
      {/* Displaying the product image */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 sm:h-48 md:h-56 object-cover"
      />
      <div className="p-3 sm:p-4">
        <h3 className="text-base sm:text-lg font-semibold text-black truncate">{product.name}</h3>
        <p className="text-gray-500 text-sm sm:text-base mt-1">${product.price}</p>
        <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-4 mt-3 sm:mt-4">
          {/* Add to Cart button */}
          <button
            onClick={handleAddToCart}
            className="bg-white text-pink-500 font-semibold py-1.5 px-3 sm:py-2 sm:px-4 rounded-lg border-gray-500 border-2 transition-colors duration-300 hover:bg-pink-500 hover:text-white text-sm sm:text-base"
          >
            Add to Cart
          </button>
          {/* View button with a link to the product page */}
          <Link
            to={`/product/${product.id}`}
            className="bg-black text-white font-semibold py-1.5 px-3 sm:py-2 sm:px-4 rounded-lg hover:bg-gray-700 transition-colors duration-300 text-sm sm:text-base text-center"
          >
            View
          </Link>
        </div>
      </div>
      {/* Toast container to display toast notifications */}
      <ToastContainer />
    </div>
  );
};

// Exporting the ProductCard component
export default ProductCard;