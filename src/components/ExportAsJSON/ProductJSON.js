class ProductJSON {
  constructor(productId, productName, amount, expirationDate) {
    this["product id"] = productId;
    this["product name"] = productName;
    this.amount = amount;
    this["expiration date"] = expirationDate;
  }
}

export default ProductJSON;
