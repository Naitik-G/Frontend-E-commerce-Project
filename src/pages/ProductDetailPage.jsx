import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import { formatCurrency } from "../utils/formatCurrency";

const ProductDetailPage = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const { products } = useContext(ProductContext); // Fetch products from context

  // Find the product that matches the ID from the URL
  const product = products.find((item) => item.id === parseInt(id, 10));

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <p className="text-2xl">Product not found.</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="p-6 max-w-4xl w-full bg-gray-800 rounded-lg shadow-lg">
        <div className="flex flex-col sm:flex-row">
          <img
            src={product.image}
            alt={product.name}
            className="w-full sm:w-1/2 object-cover rounded-lg"
          />
          <div className="sm:ml-6 mt-4 sm:mt-0 text-white">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-gray-400 mt-2">{formatCurrency(product.price)}</p>
            <p className="text-gray-300 mt-4">Category: {product.category}</p>
            <p className="text-gray-300 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non
              eros eget magna facilisis consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
 