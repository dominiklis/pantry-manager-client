import { ProductForm, Translate } from "components";
import { useEditProduct } from "components/Product";
import React from "react";

const componentName = "EditProduct";

const EditProduct = ({ productId }) => {
  const { loading, input, setInput, setErrors, errors, handleSubmit } =
    useEditProduct({
      productId,
      componentName,
    });

  return (
    <ProductForm
      onSubmit={handleSubmit}
      input={input}
      setInput={setInput}
      errors={errors}
      setErrors={setErrors}
      submitButtonText={
        <Translate section={componentName} text="submitButtonText" />
      }
      loading={loading}
    />
  );
};

export default EditProduct;
