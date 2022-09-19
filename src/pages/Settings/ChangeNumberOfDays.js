import { Button, Input, Translate } from "components";
import { componentColors } from "constantStrings";
import { useChangeNumberOfDays } from "pages/Settings";
import React from "react";
import styles from "./ChangeNumberOfDays.module.css";

const componentName = "ChangeNumberOfDays";

const ChangeNumberOfDays = () => {
  const { handleSubmit, handleChange, value, error, currentDays, loading } =
    useChangeNumberOfDays({ componentName });
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input
        type="text"
        name="numberOfDaysForWarning"
        onChange={handleChange}
        value={value}
        error={error}
        className={styles.numberOfDaysForWarning}
      />
      <Button
        backgroundColor={componentColors.primary}
        disabled={!value || error || value + "" === currentDays + ""}
        loading={loading}
      >
        <Translate section={componentName} text="submitButtonText" />
      </Button>
    </form>
  );
};

export default ChangeNumberOfDays;
