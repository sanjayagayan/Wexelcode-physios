/**
 * Converts a number to a formatted currency string.
 *
 * @param {number} value - The number to be formatted as currency.
 * @param {string} [currency="USD"] - The currency code to use (e.g., "USD" for US dollars). Defaults to "USD".
 * @returns {string} - The formatted currency string.
 *
 * @example
 * numberToCurrency(1234.56);
 * // Returns: "$1,234.56"
 *
 * @example
 * numberToCurrency(1234.56, "EUR");
 * // Returns: "€1,234.56"
 */
export function numberToCurrency(
  value: number,
  currency: string = "USD"
): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(value);
}
