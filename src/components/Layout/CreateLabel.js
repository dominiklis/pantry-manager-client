import { LabelForm, Translate } from "components";
import { useCreateLabel } from "components/Layout";
import React from "react";

const componentName = "CreateLabel";

const CreateLabel = () => {
  const { labelName, setLabelName, error, setError, loading, handleSubmit } =
    useCreateLabel({ componentName });

  return (
    <LabelForm
      handleSubmit={handleSubmit}
      labelName={labelName}
      setLabelName={setLabelName}
      error={error}
      setError={setError}
      loading={loading}
      submitButtonText={
        <Translate section={componentName} text="submitButtonText" />
      }
    />
  );
};

export default CreateLabel;
