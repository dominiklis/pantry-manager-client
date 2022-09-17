import { DeleteWithItems, Translate } from "components";
import { useDeleteStorage } from "pages/Storage";
import React from "react";

const componentName = "DeleteStorage";

const DeleteStorage = ({ storageId, noProducts }) => {
  const {
    handleDeleteButton,
    handleDeleteAllButton,
    handleKeepButton,
    loading,
  } = useDeleteStorage({ componentName, storageId });

  return (
    <DeleteWithItems
      noItems={noProducts}
      questionAboutEmptyText={
        <Translate section={componentName} text="questionAboutDeletingEmpty" />
      }
      deleteEmptyButtonText={
        <Translate section={componentName} text="deleteButtonText" />
      }
      onDeleteEmpty={handleDeleteButton}
      questionNotEmptyText={
        <Translate section={componentName} text="questionAboutProducts" />
      }
      onDeleteAllButton={handleDeleteAllButton}
      deleteWthItemsButtonText={
        <Translate section={componentName} text="deleteAll" />
      }
      onKeepItemsButton={handleKeepButton}
      deleteWithoutItemsButtonText={
        <Translate section={componentName} text="keep" />
      }
      loading={loading}
    />
  );
};

export default DeleteStorage;
