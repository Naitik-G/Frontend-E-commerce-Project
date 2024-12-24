/**
 * Formats a number as a currency string.
 * @param {number} amount - The number to format.
 * @param {string} currency - The currency code, e.g., 'USD', 'EUR'.
 * @returns {string} - Formatted currency string.
 */
export const formatCurrency = (amount, currency = "USD") => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
    }).format(amount);
  };
  