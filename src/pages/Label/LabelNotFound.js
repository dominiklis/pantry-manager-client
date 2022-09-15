import { Button, Translate } from "components";
import { componentColors } from "constantStrings";
import { useLabelNotFound } from "pages/Label";
import React from "react";
import styles from "./LabelNotFound.module.css";

const componentName = "LabelNotFound";

const LabelNotFound = () => {
  const { handleSubmit, loading, labelName } = useLabelNotFound({
    componentName,
  });

  return (
    <div className={styles.container}>
      <p>
        <Translate section={componentName} text="createInfo" />
      </p>

      <form onSubmit={handleSubmit}>
        <Button loading={loading} backgroundColor={componentColors.primary}>
          <Translate section={componentName} text="buttonText" /> {labelName}
        </Button>
      </form>
    </div>
  );
};

export default LabelNotFound;
