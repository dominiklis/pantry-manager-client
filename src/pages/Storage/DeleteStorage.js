import { Button, Translate } from "components";
import { componentColors } from "constantStrings";
import { useDeleteStorage } from "pages/Storage";
import React from "react";
import styles from "./DeleteStorage.module.css";

const componentName = "DeleteStorage";

const DeleteStorage = ({ storageId, noProducts }) => {
  const {
    handleDeleteButton,
    handleDeleteAllButton,
    handleKeepButton,
    loading,
  } = useDeleteStorage({ componentName, storageId });

  if (noProducts) {
    return (
      <>
        <p>
          <Translate
            section={componentName}
            text="questionAboutDeletingEmpty"
          />
        </p>

        <div className={styles.buttons}>
          <Button
            backgroundColor={componentColors.secondary}
            onClick={handleDeleteButton}
            loading={loading}
          >
            <Translate section={componentName} text="deleteButtonText" />
          </Button>
        </div>
      </>
    );
  }

  return (
    <>
      <p>
        <Translate section={componentName} text="questionAboutProducts" />
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
