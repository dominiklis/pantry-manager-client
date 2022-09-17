import { Button } from "components";
import { componentColors } from "constantStrings";
import React, { useState } from "react";
import styles from "./DeleteWithItems.module.css";

const DeleteWithItems = ({
  noItems,
  questionAboutEmptyText,
  deleteEmptyButtonText,
  onDeleteEmpty,
  questionNotEmptyText,
  onDeleteAllButton,
  deleteWthItemsButtonText,
  onKeepItemsButton,
  deleteWithoutItemsButtonText,
  loading,
}) => {
  const [selectedAction, setSelectedAction] = useState("");

  const handleDeleteEmpty = (e) => {
    e.preventDefault();
    onDeleteEmpty();
  };

  const handleDeleteAllButton = (e) => {
    e.preventDefault();
    setSelectedAction("delete all");
    onDeleteAllButton();
  };

  const handleKeepItemsButton = (e) => {
    e.preventDefault();
    setSelectedAction("keep");
    onKeepItemsButton();
  };

  if (noItems) {
    return (
      <>
        <p>{questionAboutEmptyText}</p>

        <form className={styles.buttons} onSubmit={handleDeleteEmpty}>
          <Button backgroundColor={componentColors.secondary} loading={loading}>
            {deleteEmptyButtonText}
          </Button>
        </form>
      </>
    );
  }

  return (
    <>
      <p>{questionNotEmptyText}</p>

      <div className={styles.buttons}>
        <form onSubmit={handleDeleteAllButton}>
          <Button
            backgroundColor={componentColors.secondary}
            loading={loading && selectedAction === "delete all"}
            disabled={selectedAction === "keep"}
          >
            {deleteWthItemsButtonText}
          </Button>
        </form>

        <form onSubmit={handleKeepItemsButton}>
          <Button
            backgroundColor={componentColors.primary}
            loading={loading && selectedAction === "keep"}
            disabled={selectedAction === "delete all"}
          >
            {deleteWithoutItemsButtonText}
          </Button>
        </form>
      </div>
    </>
  );
};

export default DeleteWithItems;
