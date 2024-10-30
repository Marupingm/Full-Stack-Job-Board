export function formatCurrency(amount: number) {
  const formatted = new Intl.NumberFormat('en-ZA', {
    style: 'currency',
    currency: 'ZAR',
    maximumFractionDigits: 0,
  }).format(amount);

  // For amounts less than 100,000, assume it's monthly and add "per month"
  if (amount < 100000) {
    return `${formatted}/month`;
  }

  // For larger amounts, assume it's annual
  return `${formatted}/year`;
}
// Modified on 2025-02-19 00:38:32
