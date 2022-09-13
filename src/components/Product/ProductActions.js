import { Button, Translate } from "components";
import { useProductActions } from "components/Product";
import { componentColors, componentSizes } from "constantStrings";
import { useAccordion } from "hooks";
import React from "react";
import { IoBagAddOutline, IoPencil, IoTrashBinOutline } from "react-icons/io5";

import styles from "./ProductActions.module.css";

const componentName = "ProductActions";

const ProductActions = ({ productId }) => {
  const { getContentStyles, openAccordion, closeAccordion } = useAccordion({
    initiallyOpen: false,
    additionalStylesToOpenedContainer: styles.actionContainer,
  });

  const {
    selectedAction,
    deleting,
    handleEditButton,
    handleAddToListButton,
    handleDeleteButton,
    actions,
  } = useProductActions({
    productId,
    componentName,
    openAccordion,
    closeAccordion,
  });

  return (
    <div className={styles.container}>
      <div className={styles.actionButtons}>
        <Button
          icon={<IoPencil />}
          size={componentSizes.small}
          backgroundColor={
            selectedAction === "edit" ? componentColors.primary : null
          }
          onClick={handleEditButton}
        >
          <Translate section={componentName} text="editButtonText" />
        </Button>

        <Button
          icon={<IoBagAddOutline />}
          size={componentSizes.small}
          backgroundColor={
            selectedAction === "addToShoppingList"
              ? componentColors.primary
              : null
          }
          onClick={handleAddToListButton}
        >
          <Translate section={componentName} text="addToListButtonText" />
        </Button>

        <Button
          icon={<IoTrashBinOutline />}
          size={componentSizes.small}
          onClick={handleDeleteButton}
          loading={deleting}
        >
          <Translate section={componentName} text="deleteButtonText" />
        </Button>
      </div>

      <div className={getContentStyles()}>{actions[selectedAction]}</div>
    </div>
  );
};

export default ProductActions;
