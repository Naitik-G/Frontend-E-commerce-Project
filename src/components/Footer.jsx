import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} My E-Commerce. All Rights Reserved.</p>
        <p className="text-sm mt-2">
          Follow us on 
          <a href="#" className="text-blue-400 hover:text-blue-500 ml-1">Twitter</a> |
          <a href="#" className="text-blue-400 hover:text-blue-500 ml-1">Instagram</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
