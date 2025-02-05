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
    <div className="max-w-sm bg-[#FFF5EE] border border-gray-300 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 mx-auto sm:mx-0 md:max-w-md lg:max-w-lg xl:max-w-xl">
      {/* Displaying the product image */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover sm:h-56 md:h-64 lg:h-64 xl:h-56"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-black">{product.name}</h3>
        <p className="text-gray-500">${product.price}</p>
        <div className="flex justify-between mt-4">
          {/* Add to Cart button */}
          <button
            onClick={handleAddToCart}
            className="bg-white text-pink-500 font-semibold py-2 px-4 mr-[60px] rounded-lg border-gray-500 border-2 transition-colors duration-300 hover:bg-pink-500 hover:text-white"
          >
            Add to Cart
          </button>
          {/* View button with a link to the product page */}
          <Link
            to={`/product/${product.id}`}
            className="bg-black text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors duration-300"
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
