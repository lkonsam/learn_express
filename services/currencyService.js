export async function getCurrencyData() {
  const response = await fetch("https://open.er-api.com/v6/latest");
  const data = await response.json();
  return data;
}
