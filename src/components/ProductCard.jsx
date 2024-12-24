import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom"; // Import Link for navigation
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  return (
    <div className="max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 mx-auto sm:mx-0">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white">{product.name}</h3>
        <p className="text-gray-400">${product.price}</p>
        <div className="flex justify-between mt-4">
          <button
            onClick={handleAddToCart}
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
          >
            Add to Cart
          </button>
          <Link
            to={`/product/${product.id}`} // Dynamic route to the product details page
            className="bg-gray-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors duration-300"
          >
            View
          </Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProductCard;
