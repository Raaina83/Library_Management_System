export function extractDate(isoString) {
    // Create a Date object from the ISO string
    const date = new Date(isoString);

    // Extract the year, month, and day
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Months are 0-based
    const day = String(date.getUTCDate()).padStart(2, '0');

    // Return the formatted date
    return `${year}-${month}-${day}`;
}

