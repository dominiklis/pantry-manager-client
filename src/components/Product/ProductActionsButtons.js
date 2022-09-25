import { ActionsButtonsList, Button, Translate } from "components";
import { componentColors, componentSizes } from "constantStrings";
import { useIsSmallScreen } from "hooks";
import React from "react";
import { IoBagAddOutline, IoPencil, IoTrash } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { addToast, deleteProduct } from "store/actions";

const componentName = "ProductActionsButtons";

const ProductActionsButtons = ({
  productId,
  selectedAction,
  setSelectedAction,
}) => {
  const isSmallScreen = useIsSmallScreen();

  const dispatch = useDispatch();

  const handleDeleteButton = async (e) => {
    e.preventDefault();

    await dispatch(deleteProduct(productId));

    dispatch(
      addToast({
        translate: {
          section: componentName,
          text: "deleteToast",
        },
      })
    );
  };

  return (
    <ActionsButtonsList
      buttons={[
        <form onSubmit={handleDeleteButton}>
          <Button
            type="submit"
            icon={<IoTrash />}
            backgroundColor={isSmallScreen ? componentColors.transparent : null}
            size={componentSizes.small}
          >
            <Translate section={componentName} text="deleteButtonText" />
          </Button>
        </form>,
        <Button
          type="button"
          icon={<IoPencil />}
          backgroundColor={
            selectedAction === 0
              ? componentColors.primary
              : isSmallScreen
              ? componentColors.transparent
              : null
          }
          size={componentSizes.small}
          onClick={() => setSelectedAction(0)}
        >
          <Translate section={componentName} text="editButtonText" />
        </Button>,
        <Button
          type="button"
          icon={<IoBagAddOutline />}
          backgroundColor={
            selectedAction === 1
              ? componentColors.primary
              : isSmallScreen
              ? componentColors.transparent
              : null
          }
          size={componentSizes.small}
          onClick={() => setSelectedAction(1)}
        >
          <Translate section={componentName} text="addToListButtonText" />
        </Button>,
      ]}
    />
  );
};

export default ProductActionsButtons;
