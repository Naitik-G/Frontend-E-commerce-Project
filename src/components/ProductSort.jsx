import React from "react";

const ProductSort = ({ sortOption, onSortChange }) => {
  return (
    <div className="flex flex-wrap gap-4 mb-4 bg-[#FFDAB9] p-4 rounded-lg">
      {/* <label htmlFor="sort" className="mr-2 text-sm md:text-base">
        Sort by:
      </label> */}
      <select
        id="sort"
        value={sortOption}
        onChange={(e) => onSortChange(e.target.value)}
        className="bg-[#FFF5EE] text-gray-700 border border-gray-700 p-2 rounded focus:outline-none focus:ring focus:ring-blue-500 transition duration-300 text-sm md:text-base"
      >
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="name-asc">Name: A-Z</option>
        <option value="name-desc">Name: Z-A</option>
      </select>
    </div>
  );
};

export default ProductSort;
