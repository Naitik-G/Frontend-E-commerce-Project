import React from "react";

const ProductFilter = ({ filters, onFilterChange }) => {
  return (
    <div className="flex flex-wrap gap-4 mb-4 bg-[#FFDAB9] p-4 rounded-lg ">
      {Object.keys(filters).map((filterKey) => (
        <div key={filterKey} className="flex flex-col w-full sm:w-auto">
          {/* <label
            className="block text-sm font-medium text-gray-700 mb-2"
            htmlFor={filterKey}
          >
            {filterKey}
          </label> */}
          <select
            id={filterKey}
            value={filters[filterKey].value}
            onChange={(e) => onFilterChange(filterKey, e.target.value)}
            className="bg-[#FFF5EE] text-gray-700 border border-gray-600 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">All</option>
            {filters[filterKey].options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
};

export default ProductFilter;