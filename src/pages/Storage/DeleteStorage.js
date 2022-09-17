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
    selectedAction,
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

        <form className={styles.buttons} onSubmit={handleDeleteButton}>
          <Button backgroundColor={componentColors.secondary} loading={loading}>
            <Translate section={componentName} text="deleteButtonText" />
          </Button>
        </form>
      </>
    );
  }

  return (
    <>
      <p>
        <Translate section={componentName} text="questionAboutProducts" />
      </p>

      <div className={styles.buttons}>
        <form onSubmit={handleDeleteAllButton}>
          <Button
            backgroundColor={componentColors.secondary}
            loading={loading && selectedAction === "delete all"}
            disabled={selectedAction === "keep"}
          >
            <Translate section={componentName} text="deleteAll" />
          </Button>
        </form>

        <form onSubmit={handleKeepButton}>
          <Button
            backgroundColor={componentColors.primary}
            loading={loading && selectedAction === "keep"}
            disabled={selectedAction === "delete all"}
          >
            <Translate section={componentName} text="keep" />
          </Button>
        </form>
      </div>
    </>
  );
};

export default DeleteStorage;
