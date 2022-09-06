import { Button, Input, Translate } from "components";
import { SelectLabels, SelectStorage } from "components/ProductForm";
import { componentColors, various } from "constantStrings";
import React from "react";
import { validateInput } from "utils";
import styles from "./ProductForm.module.css";

const componentName = "ProductForm";

const ProductForm = ({
  onSubmit,
  input,
  setInput,
  errors,
  setErrors,
  submitButtonText,
  loading,
}) => {
  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    if (e.target.name === "productName" || e.target.name === "amount") {
      const err = validateInput(e.target.name, e.target.value);

      setErrors((prev) => ({ ...prev, [e.target.name]: err }));
    }
  };

  const handleStorageChange = (storageId) => {
    if (storageId === various.noStorage) storageId = null;

    setInput((prev) => ({
      ...prev,
      storageId,
    }));
  };

  const handleLabelButtonClick = (label) =>
    setInput((prev) => {
      let labels = prev.labels ? [...prev?.labels] : [];

      if (!labels.includes(label)) labels.push(label);
      else labels = labels.filter((labelId) => labelId !== label);

      return { ...prev, labels };
    });

  return (
    <form onSubmit={onSubmit}>
      <Input
        type="text"
        name="productName"
        label={<Translate section={componentName} text="nameInputLabel" />}
        onChange={handleChange}
        value={input.productName}
        error={errors.productName}
        autoFocus
      />
      <Input
        type="date"
        name="expirationDate"
        label={<Translate section={componentName} text="expDateInputLabel" />}
        value={input.expirationDate}
        onChange={handleChange}
      />
      <Input
        type="text"
        name="amount"
        label={<Translate section={componentName} text="amountInputLabel" />}
        value={input.amount}
        error={errors.amount}
        onChange={handleChange}
        keepLabelUp
      />

      <SelectStorage
        label={<Translate section={componentName} text="selectStorageLabel" />}
        selectedStorage={input.storageId}
        onChange={handleStorageChange}
      />

      <SelectLabels
        selectedLabels={input.labels}
        onLabelButtonClick={handleLabelButtonClick}
      />

      <div className={styles.submitButtonWrapper}>
        <Button
          backgroundColor={componentColors.primary}
          disabled={!input.productName || errors.productName || errors.amount}
          loading={loading}
        >
          {submitButtonText}
        </Button>
      </div>
    </form>
  );
};

export default ProductForm;
