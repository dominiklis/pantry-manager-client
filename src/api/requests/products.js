import { requests } from "../axios";

const products = {
  get: () => requests.get("/products"),
  create: (productName, expirationDate, amount, unit, storageId, labels) =>
    requests.post("/products", {
      productName,
      expirationDate,
      amount,
      unit,
      storageId,
      labels,
    }),
  edit: (
    productId,
    productName,
    expirationDate,
    amount,
    unit,
    storageId,
    labels
  ) =>
    requests.put(`/products/${productId}`, {
      productName,
      expirationDate,
      amount,
      unit,
      storageId,
      labels,
    }),
  delete: (productId) => requests.delete(`/products/${productId}`),
};

export default products;
