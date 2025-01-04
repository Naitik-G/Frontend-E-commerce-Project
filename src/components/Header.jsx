import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Header() {
  const { cartItems } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-white py-4 px-8 flex justify-between items-center shadow-sm">
      <div className="flex items-center">
        <button
          className="md:hidden text-gray-700 mr-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
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
        </button>
        <nav className={`md:flex space-x-4 text-gray-700 text-sm ${isOpen ? "block" : "hidden"} md:block`}>
          <NavLink to="/" className="hover:text-gray-900">
            Home
          </NavLink>
          <NavLink to="productpage" className="hover:text-gray-900">
            Product
          </NavLink>
          <NavLink to="cartpage" className="hover:text-gray-900">
            Cart
          </NavLink>
          <NavLink to="contact" className="hover:text-gray-900">
            Contact
          </NavLink>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Type here"
          className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-pink-200"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-500 hover:text-gray-700 cursor-pointer"
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
        <div className="rounded-full bg-pink-200 w-8 h-8 flex items-center justify-center text-pink-600">
          A
        </div>
      </div>
    </header>
  );
}

export default Header;
