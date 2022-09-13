import {
  Actions,
  Button,
  DropdownMenu,
  ExportAsCSV,
  ExportAsJSON,
  Translate,
} from "components";
import { componentColors, componentSizes } from "constantStrings";
import { DeleteStorage, EditStorage, ShareStorage } from "pages/Storage";
import React from "react";
import { IoDownload, IoPencil, IoShareSocial, IoTrash } from "react-icons/io5";
import { Action } from "utils";

const componentName = "StorageActions";

const StorageActions = ({
  storageId,
  ownerId,
  storageName,
  color,
  numberOfDaysForWarning,
  users,
  products,
}) => {
  return (
    <Actions
      additionalButtonsBefore={
        <DropdownMenu
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
        />
      }
      actions={[
        new Action(
          <Translate section={componentName} text="shareActionHeader" />,
          (
            <ShareStorage
              storageId={storageId}
              ownerId={ownerId}
              users={users}
            />
          ),
          <Translate section={componentName} text="shareButtonText" />,
          <IoShareSocial />
        ),

        new Action(
          <Translate section={componentName} text="editActionHeader" />,
          (
            <EditStorage
              storageId={storageId}
              storageName={storageName}
              color={color}
              numberOfDaysForWarning={numberOfDaysForWarning}
            />
          ),
          <Translate section={componentName} text="editButtonText" />,
          <IoPencil />
        ),

        new Action(
          <Translate section={componentName} text="deleteActionHeader" />,
          <DeleteStorage storageId={storageId} />,
          <Translate section={componentName} text="deleteButtonText" />,
          <IoTrash />
        ),
      ]}
    />
  );
};

export default StorageActions;
