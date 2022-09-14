import { Button, Input, Label, Translate } from "components";
import { componentColors } from "constantStrings";
import { useShareForm } from "pages/Storage";
import React from "react";
import styles from "./ShareForm.module.css";

const componentName = "ShareForm";

const ShareForm = ({ storageId, ownerId, users }) => {
  const {
    handleSubmit,
    handleCheckboxChange,
    loading,
    input,
    handleChange,
    error,
    userId,
  } = useShareForm({
    componentName,
    users,
    storageId,
  });

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.shareInput}>
        <Input
          type="text"
          name="login"
          label={<Translate section={componentName} text="loginInputLabel" />}
          value={input.login}
          onChange={handleChange}
          error={error}
          autoFocus
          className={styles.input}
        />

        {ownerId === userId ? (
          <div className={styles.checkbox}>
            <Label>
              <Translate section={componentName} text="sharingLabel" />
            </Label>

            <input
              name="canShare"
              type="checkbox"
              checked={input.canShare}
              onChange={handleCheckboxChange}
            />
          </div>
        ) : null}

        <Button
          loading={loading}
          disabled={!input.login || error}
          backgroundColor={componentColors.primary}
          type="submit"
        >
          <Translate section={componentName} text="submitButtonText" />
        </Button>
      </div>
    </form>
  );
};

export default ShareForm;
