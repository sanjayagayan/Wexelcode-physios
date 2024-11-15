/**
 * Converts an ISO 8601 date-time string into separate readable date and time strings.
 *
 * @param {string} isoString - An ISO 8601 date-time string (e.g., "2024-08-01T08:00:00Z").
 * @returns {Object} An object containing the formatted date and time strings.
 * @returns {string} return.formattedDate - The date portion in "YYYY-MM-DD" format.
 * @returns {string} return.formattedTime - The time portion in "HH:MM" format.
 *
 * @example
 * const isoString = "2024-08-01T08:00:00Z";
 * const { formattedDate, formattedTime } = formatISODateTime(isoString);
 * console.log(`Date: ${formattedDate}`); // Date: 2024-08-01
 * console.log(`Time: ${formattedTime}`); // Time: 08:00
 */
export function formatISODateTime(isoString: string) {
  const date = new Date(isoString);

  // Get the date parts
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  // Get the time parts
  const hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;
  const formattedTime = `${String(hours % 12 || 12).padStart(
    2,
    "0"
  )}:${minutes} ${hours >= 12 ? "PM" : "AM"}`;

  return { formattedDate, formattedTime };
}
