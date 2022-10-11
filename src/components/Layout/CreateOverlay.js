import { Actions, CreateProduct, Translate } from "components";
import {
  CreateLabel,
  CreateShoppingList,
  CreateStorage,
  Overlay,
  CreateShoppingListItem,
  useCreateOverlay,
} from "components/Layout";
import React from "react";
import { IoAdd } from "react-icons/io5";
import { ActionWtihButton } from "utils";

const componentName = "CreateOverlay";

const CreateOverlay = React.forwardRef(({ onHideButtonClick }, ref) => {
  const { initialAction, storageId, labelId, shoppingListId } =
    useCreateOverlay();

  return (
    <Overlay
      header={<Translate section={componentName} text="header" />}
      onHideButtonClick={onHideButtonClick}
      ref={ref}
    >
      <Actions
        initialValue={initialAction}
        actions={[
          new ActionWtihButton(
            <Translate section={componentName} text="createProductHeader" />,
            (
              <CreateProduct
                selectedStorage={storageId}
                selectedLabel={labelId}
              />
            ),
            (
              <Translate
                section={componentName}
                text="createProductButtonText"
              />
            ),
            <IoAdd />
          ),
          new ActionWtihButton(
            <Translate section={componentName} text="createStorageHeader" />,
            <CreateStorage />,
            (
              <Translate
                section={componentName}
                text="createStorageButtonText"
              />
            ),
            <IoAdd />
          ),
          new ActionWtihButton(
            <Translate section={componentName} text="createLabelHeader" />,
            <CreateLabel />,
            <Translate section={componentName} text="createLabelButtonText" />,
            <IoAdd />
          ),
          new ActionWtihButton(
            (
              <Translate
                section={componentName}
                text="createShoppingListHeader"
              />
            ),
            <CreateShoppingList />,
            (
              <Translate
                section={componentName}
                text="createShoppingListButtonText"
              />
            ),
            <IoAdd />
          ),
          new ActionWtihButton(
            (
              <Translate
                section={componentName}
                text="createShoppingListItemHeader"
              />
            ),
            <CreateShoppingListItem selectedList={shoppingListId} />,
            (
              <Translate
                section={componentName}
                text="createShoppingListItemButtonText"
              />
            ),
            <IoAdd />
          ),
        ]}
      />
    </Overlay>
  );
});

export default CreateOverlay;
