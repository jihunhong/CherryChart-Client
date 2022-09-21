export default function numberFormatter(number) {
  const formatter = Intl.NumberFormat('en', { notation: 'compact' });
  return formatter.format(number);
}
