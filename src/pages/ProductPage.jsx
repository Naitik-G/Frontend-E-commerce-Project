import React, { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import ProductFilter from "../components/ProductFilter";
import ProductSort from "../components/ProductSort";
import { ProductContext } from "../context/ProductContext";
import { CartContext } from "../context/CartContext";
import { filterProducts } from "../utils/filterProduct.js";

const ProductPage = () => {
  const { products: contextProducts } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: { value: "", options: ["Electronics", "Clothing", "Books"] },
  });
  const [sortOption, setSortOption] = useState("");
  const [searchQuery, setSearchQuery] = useState(""); // New state for search query
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  const location = useLocation();

  useEffect(() => {
    if (contextProducts.length === 0) {
      fetch("/data/product.json") // Update the path if necessary
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .catch((error) => console.error("Error fetching product data:", error));
    } else {
      setProducts(contextProducts);
    }
  }, [contextProducts]);

  // Extract search query from the URL
  useEffect(() => {
    const query = new URLSearchParams(location.search).get("search") || "";
    setSearchQuery(query);
  }, [location.search]);

  const handleFilterChange = (filterKey, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterKey]: { ...prev[filterKey], value },
    }));
    setCurrentPage(1); // Reset to the first page when filters change
  };

  const handleSortChange = (option) => {
    setSortOption(option);
    setCurrentPage(1); // Reset to the first page when sort option changes
  };

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      !filters.category.value || product.category === filters.category.value;
    const matchesSearch =
      !searchQuery ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "price-asc") return a.price - b.price;
    if (sortOption === "price-desc") return b.price - a.price;
    if (sortOption === "name-asc") return a.name.localeCompare(b.name);
    if (sortOption === "name-desc") return b.name.localeCompare(a.name);
    return 0;
  });

  const startIndex = (currentPage - 1) * productsPerPage;
  const visibleProducts = sortedProducts.slice(
    startIndex,
    startIndex + productsPerPage
  );

  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

  return (
    <div className="min-h-screen bg-[#FFDAB9] text-black p-6">
      <header className="mb-6">
        <h1 className="text-4xl font-bold text-center sm:text-left">Products</h1>
      </header>
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 space-y-4 sm:space-y-0 sm:space-x-4">
        <ProductFilter filters={filters} onFilterChange={handleFilterChange} />
        <ProductSort sortOption={sortOption} onSortChange={handleSortChange} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-[80px] lg:mx-24">
        {visibleProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={addToCart}
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-6 space-x-4">
        <button
          className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
          disabled={currentPage === totalPages}
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
