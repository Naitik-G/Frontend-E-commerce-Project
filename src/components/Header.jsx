import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Header() {
  const { cartItems } = useContext(CartContext);

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-gray-800 w-full fixed text-white shadow-md">
      <div className="container mx-auto flex flex-wrap justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold">My E-Commerce</h1>
        <nav className="flex flex-wrap gap-6 items-center mt-2 md:mt-0">
          <Link to="/" className="hover:text-gray-400 transition-colors duration-200">
            Home
          </Link>
          <Link to="/productpage" className="hover:text-gray-400 transition-colors duration-200">
            Products
          </Link>
          <Link to="/cartpage" className="hover:text-gray-400 transition-colors duration-200 relative">
            Cart
            {cartItemCount > 0 && (
              <span className="absolute top-0 right-0 transform translate-x-2/4 -translate-y-1/2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
