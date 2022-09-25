import {
  ActionsButtonsList,
  Button,
  DropdownMenu,
  ExportAsCSV,
  ExportAsJSON,
  Translate,
} from "components";
import { componentColors, componentSizes } from "constantStrings";
import { useIsSmallScreen } from "hooks";
import React from "react";
import { IoDownload, IoPencil, IoShareSocial, IoTrash } from "react-icons/io5";

const componentName = "StorageActionsButtons";

const StorageActionsButtons = ({
  storageName,
  products,
  setSelectedAction,
}) => {
  const isSmallScreen = useIsSmallScreen();

  return (
    <ActionsButtonsList
      buttons={[
        <DropdownMenu
          stopPropagation
          visibleBackdrop
          menuButton={
            <Button
              icon={<IoDownload />}
              size={componentSizes.small}
              backgroundColor={componentColors.transparent}
            >
              <Translate section={componentName} text="menuButtonText" />
            </Button>
          }
          menuItems={[
            <ExportAsCSV
              filename={storageName}
              products={products}
              disabled={!products || !products.length}
            />,
            <ExportAsJSON
              filename={storageName}
              products={products}
              disabled={!products || !products.length}
            />,
          ]}
        />,
        <Button
          type="button"
          icon={<IoShareSocial />}
          backgroundColor={isSmallScreen ? componentColors.transparent : null}
          size={componentSizes.small}
          onClick={() => setSelectedAction(0)}
        >
          <Translate section={componentName} text="shareButtonText" />
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
      ]}
    />
  );
};

export default StorageActionsButtons;
