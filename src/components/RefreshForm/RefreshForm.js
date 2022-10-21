import { Button, Translate } from "components";
import { componentColors, componentSizes } from "constantStrings";
import React from "react";
import { IoRefresh } from "react-icons/io5";
import styles from "./RefreshForm.module.css";

const componentName = "RefreshForm";

const RefreshForm = ({ onSubmit, loading }) => {
  return (
    <form className={styles.refreshButtonContainer} onSubmit={onSubmit}>
      <Button
        icon={<IoRefresh />}
        backgroundColor={componentColors.primary}
        size={componentSizes.small}
        loading={loading}
      >
        <Translate section={componentName} text="refreshButtonText" />
      </Button>
    </form>
  );
};

export default RefreshForm;
