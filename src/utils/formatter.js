export const formatter = (subtotal) => {
  const formatterObject = new Intl.NumberFormat("es-PE", {
    style: "currency",
    currency: "PEN",
    maximumFractionDigits: 2,
  });

  return formatterObject.format(subtotal);
};
