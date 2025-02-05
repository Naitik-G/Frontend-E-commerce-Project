import React, { useContext } from "react";
import { useParams, } from "react-router-dom";
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
      <div className="flex items-center justify-center min-h-screen bg-[#FFDAB9] text-black">
        <p className="text-2xl">Product not found.</p>
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#FFDAB9] pt-20 pb-10"> {/* Added pt-16 */}
      <div className="p-6 max-w-4xl w-full bg-[#FFF5EE] rounded-lg shadow-lg">
        <div className="flex flex-col sm:flex-row">
          <img
            src={product.image}
            alt={product.name}
            className="w-full sm:w-1/2 object-cover rounded-lg"
          />
          <div className="sm:ml-6 mt-4 sm:mt-0 text-black">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-gray-800 mt-2">{formatCurrency(product.price)}</p>
            <p className="text-gray-700 mt-4">Category: {product.category}</p>
            <p className="text-gray-700 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non
              eros eget magna facilisis consequat.
            </p>
            <button
              onClick={handleAddToCart}
              className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300 mt-4"
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
