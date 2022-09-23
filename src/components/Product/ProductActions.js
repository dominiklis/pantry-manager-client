import { Translate } from "components";
import { ControlledActions } from "components/ControlledActions";
import { AddProductToShoppingList, EditProduct } from "components/Product";
import { useIsSmallScreen } from "hooks";
import React from "react";
import { Action } from "utils";

const componentName = "ProductActions";

const ProductActions = ({
  productId,
  actionButtons,
  selectedAction,
  onCloseAction,
}) => {
  const smallScreen = useIsSmallScreen();

  return (
    <>
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
    </>
  );
};

export default ProductActions;
