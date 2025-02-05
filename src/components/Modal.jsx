import React from "react";

// Defining the Modal component
const Modal = ({ isOpen, onClose, children }) => {
  // Return null if the modal is not open
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        {/* Close button */}
        <button
          className="absolute top-2 right-2 text-gray-600"
          onClick={onClose}
        >
          ✕
        </button>
        {/* Render children components inside the modal */}
        {children}
      </div>
    </div>
  );
};

// Exporting the Modal component
export default Modal;
