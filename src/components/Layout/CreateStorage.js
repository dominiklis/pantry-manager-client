import { Translate } from "components";
import { useCreateStorage } from "components/Layout";
import StorageForm from "components/StorageForm/StorageForm";
import React from "react";

const componentName = "CreateStorage";

const CreateStorage = () => {
  const { input, setInput, errors, setErrors, loading, handleSubmit } =
    useCreateStorage({ componentName });

  return (
    <StorageForm
      onSubmit={handleSubmit}
      input={input}
      setInput={setInput}
      errors={errors}
      setErrors={setErrors}
      loading={loading}
      submitButtonText={
        <Translate section={componentName} text="submitButton" />
      }
    />
  );
};

export default CreateStorage;
