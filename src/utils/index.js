export function getDeclination(number, titles) {
  const cases = [2, 0, 1, 1, 1, 2];
  const positiveNumber = Math.abs(number);
  const index = positiveNumber % 100 > 4 && positiveNumber % 100 < 20 ? 2 : cases[positiveNumber % 10 < 5 ? positiveNumber % 10 : 5];
  return titles[index];
}

export function formatDate(dateString) {
  const date = new Date(dateString);
  if (date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    return `${day < 10 ? '0' : ''}${day}.${month < 10 ? '0' : ''}${month}.${date.getFullYear()}`
  }
  return '';
}

export function formatMoney(number) {
  const parts = number.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return parts.join('.');
}
