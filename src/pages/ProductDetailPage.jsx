import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import { CartContext } from "../context/CartContext";
import { formatCurrency } from "../utils/formatCurrency";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SuggestionProduct from "../components/SuggestionProduct";

// Defining the ProductDetailPage component
const ProductDetailPage = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const { products } = useContext(ProductContext); // Fetch products from context
  const { addToCart } = useContext(CartContext); // Fetch addToCart function from context

  // Find the product that matches the ID from the URL
  const product = products.find((item) => item.id === parseInt(id, 10));

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#FFDAB9] text-black px-4">
        <p className="text-lg sm:text-xl md:text-2xl">Product not found.</p>
      </div>
    );
  }

  // Handler function to add the product to the cart
  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  // Get suggested products from the same category
  const suggestedProducts = products.filter(
    (item) => item.category === product.category && item.id !== product.id
  );

  return (
    <div className="min-h-screen bg-[#FFDAB9] pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto w-full bg-[#FFF5EE] rounded-lg shadow-lg p-4 sm:p-6">
        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          <img
            src={product.image}
            alt={product.name}
            className="w-full md:w-1/2 h-64 sm:h-80 md:h-96 object-cover rounded-lg"
          />
          <div className="text-black mt-4 md:mt-0">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">{product.name}</h1>
            <p className="text-gray-800 mt-2 text-base sm:text-lg">{formatCurrency(product.price)}</p>
            <p className="text-gray-700 mt-3 sm:mt-4 text-sm sm:text-base">Category: {product.category}</p>
            <p className="text-gray-700 mt-3 sm:mt-4 text-sm sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non
              eros eget magna facilisis consequat.
            </p>
            <button
              onClick={handleAddToCart}
              className="bg-blue-500 text-white font-semibold py-1.5 px-3 sm:py-2 sm:px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300 mt-4 text-sm sm:text-base"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Add SuggestionProduct Component */}
      <SuggestionProduct suggestedProducts={suggestedProducts} />
      <ToastContainer />
    </div>
  );
};

// Exporting the ProductDetailPage component
export default ProductDetailPage;