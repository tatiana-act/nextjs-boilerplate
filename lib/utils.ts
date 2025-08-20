export function formatDateToUserLocale(
  dateString: string,
  locale?: string,
): string {
  // Validate the date string format (YYYY-MM-DD)
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateRegex.test(dateString)) {
    return dateString;
  }

  // Parse the date string
  const date = new Date(dateString);

  // Check if the date is valid
  if (isNaN(date.getTime())) {
    return dateString;
  }

  // Use user's locale if not provided, fallback to 'en-US'
  const userLocale = locale || Intl.DateTimeFormat().resolvedOptions().locale;

  // Format the date using Intl.DateTimeFormat
  const formatter = new Intl.DateTimeFormat(userLocale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });

  return formatter.format(date);
}
