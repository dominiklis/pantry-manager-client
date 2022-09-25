import { ActionsButtonsList, Button, Translate } from "components";
import { componentColors, componentSizes } from "constantStrings";
import { useIsSmallScreen } from "hooks";
import React from "react";
import { IoAdd, IoPencil, IoShareSocial, IoTrash } from "react-icons/io5";

const componentName = "ShoppingListActionButtons";

const ShoppingListActionButtons = ({ setSelectedAction }) => {
  const isSmallScreen = useIsSmallScreen();

  return (
    <ActionsButtonsList
      buttons={[
        <Button
          type="button"
          icon={<IoAdd />}
          backgroundColor={isSmallScreen ? componentColors.transparent : null}
          size={componentSizes.small}
          onClick={() => setSelectedAction(0)}
        >
          <Translate section={componentName} text="addItemButtonText" />
        </Button>,
        <Button
          type="button"
          icon={<IoPencil />}
          backgroundColor={isSmallScreen ? componentColors.transparent : null}
          size={componentSizes.small}
          onClick={() => setSelectedAction(1)}
        >
          <Translate section={componentName} text="editButtonText" />
        </Button>,
        <Button
          type="button"
          icon={<IoTrash />}
          backgroundColor={isSmallScreen ? componentColors.transparent : null}
          size={componentSizes.small}
          onClick={() => setSelectedAction(2)}
        >
          <Translate section={componentName} text="deleteButtonText" />
        </Button>,
        <Button
          type="button"
          icon={<IoShareSocial />}
          backgroundColor={isSmallScreen ? componentColors.transparent : null}
          size={componentSizes.small}
          onClick={() => setSelectedAction(3)}
        >
          <Translate section={componentName} text="shareButtonText" />
        </Button>,
      ]}
    />
  );
};

export default ShoppingListActionButtons;
