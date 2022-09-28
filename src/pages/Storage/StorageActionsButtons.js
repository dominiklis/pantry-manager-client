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
import {
  IoDownload,
  IoPencil,
  IoPush,
  IoShareSocial,
  IoTrash,
} from "react-icons/io5";
import { useDispatch } from "react-redux";
import { setUploadOverlay } from "store/actions";

const componentName = "StorageActionsButtons";

const StorageActionsButtons = ({
  storageName,
  products,
  selectedAction,
  setSelectedAction,
}) => {
  const isSmallScreen = useIsSmallScreen();

  const dispatch = useDispatch();

  const handleUploadButton = () => {
    dispatch(setUploadOverlay({ isVisible: true }));
  };

  return (
    <ActionsButtonsList
      buttons={[
        <Button
          type="button"
          icon={<IoPush />}
          size={componentSizes.small}
          backgroundColor={componentColors.transparent}
          onClick={handleUploadButton}
        >
          <Translate section={componentName} text="uploadButtonText" />
        </Button>,
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

export default StorageActionsButtons;
