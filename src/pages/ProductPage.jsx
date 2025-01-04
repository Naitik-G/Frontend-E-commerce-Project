import React, { useEffect, useState, useContext } from "react";
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

  const handleFilterChange = (filterKey, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterKey]: { ...prev[filterKey], value },
    }));
  };

  const handleSortChange = (option) => {
    setSortOption(option);
  };

  const filteredProducts = products.filter((product) => {
    if (!filters.category.value) return true;
    return product.category === filters.category.value;
  });

  const sortedAndFilteredProducts = filterProducts(
    products,
    { category: filters.category.value },
    sortOption
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "price-asc") return a.price - b.price;
    if (sortOption === "price-desc") return b.price - a.price;
    if (sortOption === "name-asc") return a.name.localeCompare(b.name);
    if (sortOption === "name-desc") return b.name.localeCompare(a.name);
    return 0;
  });

  return (
    <div className="min-h-screen bg-[#FFDAB9] text-black p-6">
      <header className="mb-6">
        <h1 className="text-4xl font-bold text-center sm:text-left">Products</h1>
      </header>
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 space-y-4 sm:space-y-0 sm:space-x-4">
  <ProductFilter filters={filters} onFilterChange={handleFilterChange} />
  <ProductSort sortOption={sortOption} onSortChange={handleSortChange} />
</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
