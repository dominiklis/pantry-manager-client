import requests from "../axios";

const products = {
  get: () => requests.get("/products"),
  create: (productName, expirationDate, amount, storageId, labels) =>
    requests.post("/products", {
      productName,
      expirationDate,
      amount,
      storageId,
      labels,
    }),
  edit: (productId, productName, expirationDate, amount, storageId, labels) =>
    requests.put(`/products/${productId}`, {
      productName,
      expirationDate,
      amount,
      storageId,
      labels,
    }),
  delete: (productId) => requests.delete(`/products/${productId}`),
};

export default products;
