import requests from "../axios";

const collectionOfProducts = {
  create: (products) =>
    requests.post("/collections-of-products", {
      products,
    }),
};

export default collectionOfProducts;
