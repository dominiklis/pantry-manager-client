import { ActionsButtonsList, Button, Translate } from "components";
import {
  componentColors,
  componentSizes,
  createOverlay,
} from "constantStrings";
import { useIsSmallScreen } from "hooks";
import React from "react";
import { IoAdd, IoPencil, IoShareSocial, IoTrash } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { setCreateOverlay } from "store/actions";

const componentName = "ShoppingListActionButtons";

const ShoppingListActionButtons = ({
  shoppingListId,
  selectedAction,
  setSelectedAction,
  ownerId,
}) => {
  const isSmallScreen = useIsSmallScreen();

  const dispatch = useDispatch();

  const handleAddButton = () => {
    dispatch(
      setCreateOverlay({
        isVisible: true,
        selectedTab: createOverlay.tabs.createShoppingListItem,
        shoppingListId,
      })
    );
  };

  const { userId } = useSelector((state) => state.users.user);

  return (
    <ActionsButtonsList
      buttons={[
        <Button
          type="button"
          icon={<IoAdd />}
          size={componentSizes.small}
          onClick={handleAddButton}
        >
          <Translate section={componentName} text="addItemButtonText" />
        </Button>,
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
          icon={<IoTrash />}
          backgroundColor={
            selectedAction === 1
              ? componentColors.primary
              : isSmallScreen
              ? componentColors.transparent
              : null
          }
          size={componentSizes.small}
          onClick={() => setSelectedAction(1)}
          disabled={ownerId !== userId}
        >
          <Translate section={componentName} text="deleteButtonText" />
        </Button>,
        <Button
          type="button"
          icon={<IoShareSocial />}
          backgroundColor={
            selectedAction === 2
              ? componentColors.primary
              : isSmallScreen
              ? componentColors.transparent
              : null
          }
          size={componentSizes.small}
          onClick={() => setSelectedAction(2)}
        >
          <Translate section={componentName} text="shareButtonText" />
        </Button>,
      ]}
    />
  );
};

export default ShoppingListActionButtons;
