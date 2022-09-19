import { ProductForm, Translate } from "components";
import { useCreateProduct } from "components/CreateProduct";
import React from "react";

const componentName = "CreateProduct";

const CreateProduct = ({ productName, dontNavigateToProduct }) => {
  const { loading, input, setInput, setErrors, errors, handleSubmit } =
    useCreateProduct({
      componentName,
      productName,
      dontNavigateToProduct,
    });

  return (
    <ProductForm
      onSubmit={handleSubmit}
      input={input}
      setInput={setInput}
      errors={errors}
      setErrors={setErrors}
      submitButtonText={
        <Translate section={componentName} text="submitButton" />
      }
      loading={loading}
    />
  );
};

export default CreateProduct;
