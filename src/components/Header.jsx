import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Header() {
  const { cartItems } = useContext(CartContext);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // For navigating to the product page

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/productpage?search=${searchQuery}`); // Navigate to the product page with search query
    }
  };

  return (
    <header className="bg-white py-4 px-8 flex justify-between items-center shadow-sm">
      <div className="flex items-center">
        {/* Hamburger Button */}
        <button
          className="md:hidden text-gray-700 mr-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 absolute top-3 right-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        {/* Navigation Menu */}
        <nav
  className={`${
    isOpen ? "flex flex-col items-center space-y-4 px-20" : "hidden"
  } md:flex md:flex-row md:space-x-4 text-gray-700 text-sm`}
>
  <NavLink exact to="/" activeClassName="text-pink-600" className="hover:text-gray-900">
    Home
  </NavLink>
  <a href="#productpage" activeClassName="text-pink-600" className="hover:text-gray-900">
    Product
  </a>
  <a href="#popularquestion" activeClassName="text-pink-600" className="hover:text-gray-900">
    Popular Question
  </a>
  <NavLink to="/cartpage" activeClassName="text-pink-600" className="hover:text-gray-900 relative">
    Cart
    {cartItemCount > 0 && (
      <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
        {cartItemCount}
      </span>
    )}
  </NavLink>
 
</nav>

      </div>

      {/* Search Bar and Profile - Hide when isOpen is true */}
      <div className={`flex items-center space-x-4 ${isOpen ? "hidden" : ""}`}>
        <input
          type="text"
          placeholder="Search products..."
          className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-pink-200"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="text-gray-500 hover:text-gray-700 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        <div className="rounded-full bg-pink-200 w-8 h-8 flex items-center justify-center text-pink-600">
          A
        </div>
      </div>
    </header>
  );
}

export default Header;
