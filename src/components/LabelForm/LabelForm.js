import { Button, Input, Translate } from "components";
import { componentColors } from "constantStrings";
import React from "react";
import { validateInput } from "utils";
import styles from "./LabelForm.module.css";

const componentName = "LabelForm";

const LabelForm = ({
  handleSubmit,
  labelName,
  setLabelName,
  error,
  setError,
  loading,
  submitButtonText,
}) => {
  const handleChange = (e) => {
    setLabelName(e.target.value);

    const err = validateInput(e.target.name, e.target.value);
    setError(err);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="labelName"
        label={<Translate section={componentName} text="nameInputLabel" />}
        onChange={handleChange}
        value={labelName}
        error={error}
        autoFocus
      />

      <div className={styles.submitButtonWrapper}>
        <Button
          backgroundColor={componentColors.primary}
          disabled={!labelName || error}
          loading={loading}
        >
          {submitButtonText}
        </Button>
      </div>
    </form>
  );
};

export default LabelForm;
