import React from "react";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; // React 18 correct import
import App from './App.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Sections from './Sections.jsx';
import CartPage from './pages/CartPage.jsx';
import ProductPage from './pages/ProductPage.jsx';
import { CartProvider } from "./context/CartContext";
import ProductDetailPage from "./pages/ProductDetailPage.jsx";
import PopularQuestions from "./pages/PopularQuestions.jsx";

// Define the router correctly
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/', // Use "/" for the default route
        element: <Sections />
      },
      {
        path: '/cartpage',
        element: <CartPage />
      },
      {
        path: '/productpage',
        element: <ProductPage />
      },
      {
        path: '/question',
        element: <PopularQuestions />
      },
      {
        path: '/product/:id',
        element: <ProductDetailPage />
      },
    ]
  }
]);

// Mount the app using createRoot
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>
);
