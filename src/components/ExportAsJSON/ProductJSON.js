class ProductJSON {
  constructor(productId, productName, amount, unit, expirationDate) {
    this["product id"] = productId;
    this["product name"] = productName;
    this.amount = amount;
    this.unit = unit;
    this["expiration date"] = expirationDate;
  }
}

export default ProductJSON;
