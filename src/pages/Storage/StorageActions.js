import { ControlledActions, Share, Translate } from "components";
import { useIsSmallScreen } from "hooks";
import { DeleteStorage, EditStorage } from "pages/Storage";
import React from "react";
import { Action, sortByName } from "utils";

const componentName = "StorageActions";

const StorageActions = ({
  storageId,
  ownerId,
  storageName,
  color,
  numberOfDaysForWarning,
  users,
  products,
  actionButtons,
  selectedAction,
  onCloseAction,
  canShare,
}) => {
  const isSmallScreen = useIsSmallScreen();

  return (
    <>
      {!isSmallScreen ? actionButtons : null}
      <ControlledActions
        selectedAction={selectedAction}
        onCloseAction={onCloseAction}
        actions={[
          new Action(
            <Translate section={componentName} text="editActionHeader" />,
            (
              <EditStorage
                storageId={storageId}
                storageName={storageName}
                color={color}
                numberOfDaysForWarning={numberOfDaysForWarning}
              />
            )
          ),
          new Action(
            <Translate section={componentName} text="deleteActionHeader" />,
            (
              <DeleteStorage
                storageId={storageId}
                noProducts={!products || !products.length}
              />
            )
          ),
          new Action(
            <Translate section={componentName} text="shareActionHeader" />,
            (
              <Share
                id={storageId}
                ownerId={ownerId}
                users={sortByName([...users], "userName")}
                canShare={canShare}
              />
            )
          ),
        ]}
      />
    </>
  );
};

export default StorageActions;
