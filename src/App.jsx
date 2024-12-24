import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext";
import { ProductProvider } from "./context/ProductContext";

const App = () => {
  return (
    <>
      <Header />
      <ProductProvider>
        <CartProvider>
          <div>
            <ToastContainer />
            <Outlet />
          </div>
        </CartProvider>
      </ProductProvider>
      <Footer />
    </>
  );
};

export default App;
