import { LabelForm, Translate } from "components";
import { useEditLabel } from "pages/Label";
import React from "react";

const componentName = "EditLabel";

const EditLabel = ({ label }) => {
  const { handleSubmit, labelName, setLabelName, error, setError, loading } =
    useEditLabel({ componentName, label });

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

export default EditLabel;
