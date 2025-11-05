// src/hooks/useDebounce.js
import { useState, useEffect } from 'react';

/**
 * Custom hook to debounce a value (e.g., search term).
 * @param {any} value - The value to debounce.
 * @param {number} delay - The delay in milliseconds.
 * @returns {any} The debounced value.
 */
export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Set a timer to update the debounced value
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Clean up the previous timer if value changes before the delay
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};