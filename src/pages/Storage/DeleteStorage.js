import { Button, Translate } from "components";
import { componentColors } from "constantStrings";
import { useDeleteStorage } from "pages/Storage";
import React from "react";
import styles from "./DeleteStorage.module.css";

const componentName = "DeleteStorage";

const DeleteStorage = ({ storageId }) => {
  const { handleDeleteAllButton, loading, handleKeepButton } = useDeleteStorage(
    { componentName, storageId }
  );

  return (
    <>
      <p>
        <Translate section={componentName} text="question" />
      </p>

      <div className={styles.buttons}>
        <Button
          backgroundColor={componentColors.secondary}
          onClick={handleDeleteAllButton}
          loading={loading}
        >
          <Translate section={componentName} text="deleteAll" />
        </Button>

        <Button
          backgroundColor={componentColors.primary}
          onClick={handleKeepButton}
          loading={loading}
        >
          <Translate section={componentName} text="keep" />
        </Button>
      </div>
    </>
  );
};

export default DeleteStorage;
