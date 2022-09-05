import { Button, Input, Translate } from "components";
import {
  SelectLabels,
  SelectStorage,
  useEditProduct,
} from "components/Product";
import { componentColors } from "constantStrings";
import React from "react";

import styles from "./EditProduct.module.css";

const componentName = "EditProduct";

const EditProduct = ({ productId }) => {
  const {
    loading,
    input,
    errors,
    handleChange,
    handleStorageChange,
    handleLabelButtonClick,
    handleSubmit,
  } = useEditProduct({
    productId,
    componentName,
  });

  return (
    <form onSubmit={handleSubmit}>
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
          <Translate section={componentName} text="submitButton" />
        </Button>
      </div>
    </form>
  );
};

export default EditProduct;
