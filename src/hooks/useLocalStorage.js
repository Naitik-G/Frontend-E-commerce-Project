import { useState, useEffect } from "react";

/**
 * Custom hook for managing state synchronized with localStorage.
 * @param {string} key - The key under which the data is stored in localStorage.
 * @param {any} initialValue - The initial value for the state.
 * @returns {[any, Function]} - The current state and a function to update it.
 */
const useLocalStorage = (key, initialValue) => {
  // Get initial value from localStorage or use the default initial value
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Error reading localStorage key:", key, error);
      return initialValue;
    }
  });

  // Update localStorage whenever the state changes
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error("Error setting localStorage key:", key, error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
};

export default useLocalStorage;
