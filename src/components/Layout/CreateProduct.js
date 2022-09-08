import { ProductForm, Translate } from "components";
import { useCreateProduct } from "components/Layout";
import React from "react";

const componentName = "CreateProduct";

const CreateProduct = () => {
  const { loading, input, setInput, setErrors, errors, handleSubmit } =
    useCreateProduct({
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
        <Translate section={componentName} text="submitButton" />
      }
      loading={loading}
    />
  );
};

export default CreateProduct;
