import { Translate, ControlledActions } from "components";
import { AddProductToShoppingList, EditProduct } from "components/Product";
import { useIsSmallScreen } from "hooks";
import React from "react";
import { Action } from "utils";
import styles from "./ProductActions.module.css";

const componentName = "ProductActions";

const ProductActions = ({
  productId,
  actionButtons,
  selectedAction,
  onCloseAction,
}) => {
  const smallScreen = useIsSmallScreen();

  return (
    <div className={styles.container}>
      {!smallScreen ? actionButtons : null}

      <ControlledActions
        actions={[
          new Action(
            <Translate section={componentName} text="editActionHeader" />,
            <EditProduct productId={productId} />
          ),
          new Action(
            <Translate section={componentName} text="addToListActionHeader" />,
            <AddProductToShoppingList productId={productId} />
          ),
        ]}
        selectedAction={selectedAction}
        onCloseAction={onCloseAction}
      />
    </div>
  );
};

export default ProductActions;
