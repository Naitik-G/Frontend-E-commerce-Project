/**
 * Filters and sorts a list of products.
 * @param {Array} products - The array of products to filter and sort.
 * @param {Object} filters - Filters to apply, e.g., { category: 'Electronics' }.
 * @param {string} sortOption - Sorting option, e.g., 'price-asc', 'name-desc'.
 * @returns {Array} - Filtered and sorted array of products.
 */
export const filterProducts = (products, filters, sortOption) => {
    let filteredProducts = products;
  
    // Apply filters
    Object.keys(filters).forEach((key) => {
      if (filters[key] && filters[key] !== "") {
        filteredProducts = filteredProducts.filter(
          (product) => product[key] === filters[key]
        );
      }
    });
  
    // Apply sorting
    if (sortOption === "price-asc") {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-desc") {
      filteredProducts.sort((a, b) => b.price - a.price);
    } else if (sortOption === "name-asc") {
      filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === "name-desc") {
      filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
    }
  
    return filteredProducts;
  };
  