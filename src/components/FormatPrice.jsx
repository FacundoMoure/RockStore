export const formatPrice = (price) => {
  const safePrice = Number(String(price).replace(/\./g, "").trim());

  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(isNaN(safePrice) ? 0 : safePrice);
};
