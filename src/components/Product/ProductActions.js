import { Actions, Button, Translate } from "components";
import {
  AddProductToShoppingList,
  EditProduct,
  useProductActions,
} from "components/Product";
import { componentSizes } from "constantStrings";
import React from "react";
import { IoBagAddOutline, IoPencil, IoTrash } from "react-icons/io5";
import { Action } from "utils";

const componentName = "ProductActions";

const ProductActions = ({ productId }) => {
  const { handleDeleteButton, deleting } = useProductActions({
    componentName,
    productId,
  });

  return (
    <Actions
      additionalButtonsAfter={
        <Button
          icon={<IoTrash />}
          size={componentSizes.small}
          onClick={handleDeleteButton}
          loading={deleting}
        >
          <Translate section={componentName} text="deleteButtonText" />
        </Button>
      }
      actions={[
        new Action(
          <Translate section={componentName} text="editActionHeader" />,
          <EditProduct productId={productId} />,
          <Translate section={componentName} text="editButtonText" />,
          <IoPencil />
        ),
        new Action(
          <Translate section={componentName} text="addToListActionHeader" />,
          <AddProductToShoppingList productId={productId} />,
          <Translate section={componentName} text="addToListButtonText" />,
          <IoBagAddOutline />
        ),
      ]}
    />
  );
};

export default ProductActions;
