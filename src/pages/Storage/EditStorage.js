import { StorageForm, Translate } from "components";
import { useEditStorage } from "pages/Storage";
import React from "react";

const componentName = "EditStorage";

const EditStorage = ({
  storageId,
  storageName,
  color,
  numberOfDaysForWarning,
}) => {
  const { input, setInput, errors, setErrors, handleSubmit, loading } =
    useEditStorage({
      componentName,
      storageId,
      storageName,
      color,
      numberOfDaysForWarning,
    });

  return (
    <StorageForm
      onSubmit={handleSubmit}
      input={input}
      setInput={setInput}
      errors={errors}
      setErrors={setErrors}
      loading={loading}
      submitButtonText={
        <Translate section={componentName} text="submitButtonText" />
      }
    />
  );
};

export default EditStorage;
