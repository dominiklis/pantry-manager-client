import { ProductForm, Translate } from "components";
import { useCreateProduct } from "components/CreateProduct";
import React from "react";

const componentName = "CreateProduct";

const CreateProduct = ({
  productName,
  dontNavigateToProduct,
  selectedStorage,
  selectedLabel,
  disableShiftingDropdownToTheRight,
}) => {
  const { loading, input, setInput, setErrors, errors, handleSubmit } =
    useCreateProduct({
      componentName,
      productName,
      dontNavigateToProduct,
      selectedStorage,
      selectedLabel,
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
      disableShiftingDropdownToTheRight={disableShiftingDropdownToTheRight}
    />
  );
};

export default CreateProduct;
