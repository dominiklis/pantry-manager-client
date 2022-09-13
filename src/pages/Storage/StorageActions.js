import {
  Button,
  DropdownMenu,
  ExportAsCSV,
  ExportAsJSON,
  Translate,
} from "components";
import { componentColors, componentSizes } from "constantStrings";
import {
  DeleteStorage,
  EditStorage,
  ShareStorage,
  StorageAction,
  useStorageActions,
} from "pages/Storage";
import React from "react";
import { IoDownload, IoPencil, IoShareSocial, IoTrash } from "react-icons/io5";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styles from "./StorageActions.module.css";
import actionStyles from "./action.module.css";

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
  const {
    selectedAction,
    handleCloseAction,
    handleActionButton,
    shareNodeRef,
    editNodeRef,
    deleteNodeRef,
  } = useStorageActions();

  return (
    <div className={styles.container}>
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

      <Button
        icon={<IoShareSocial />}
        size={componentSizes.small}
        onClick={() => handleActionButton(0)}
        backgroundColor={selectedAction === 0 ? componentColors.primary : null}
      >
        <Translate section={componentName} text="shareButtonText" />
      </Button>

      <Button
        icon={<IoPencil />}
        size={componentSizes.small}
        onClick={() => handleActionButton(1)}
        backgroundColor={selectedAction === 1 ? componentColors.primary : null}
      >
        <Translate section={componentName} text="editButtonText" />
      </Button>

      <Button
        icon={<IoTrash />}
        colorOnHover={componentColors.error}
        size={componentSizes.small}
        onClick={() => handleActionButton(2)}
        backgroundColor={selectedAction === 2 ? componentColors.primary : null}
      >
        <Translate section={componentName} text="deleteButtonText" />
      </Button>

      <div className={styles.actionsContainer}>
        <TransitionGroup>
          {selectedAction === 0 ? (
            <CSSTransition
              timeout={200}
              classNames={actionStyles}
              nodeRef={shareNodeRef}
            >
              <StorageAction
                onClose={handleCloseAction}
                header={
                  <Translate section={componentName} text="shareActionHeader" />
                }
                ref={shareNodeRef}
              >
                <ShareStorage
                  storageId={storageId}
                  ownerId={ownerId}
                  users={users}
                />
              </StorageAction>
            </CSSTransition>
          ) : null}

          {selectedAction === 1 ? (
            <CSSTransition
              timeout={200}
              classNames={actionStyles}
              nodeRef={editNodeRef}
            >
              <StorageAction
                onClose={handleCloseAction}
                header={
                  <Translate section={componentName} text="editActionHeader" />
                }
                ref={editNodeRef}
              >
                <EditStorage
                  storageId={storageId}
                  storageName={storageName}
                  color={color}
                  numberOfDaysForWarning={numberOfDaysForWarning}
                />
              </StorageAction>
            </CSSTransition>
          ) : null}

          {selectedAction === 2 ? (
            <CSSTransition
              timeout={200}
              classNames={actionStyles}
              nodeRef={deleteNodeRef}
            >
              <StorageAction
                onClose={handleCloseAction}
                header={
                  <Translate
                    section={componentName}
                    text="deleteActionHeader"
                  />
                }
                ref={deleteNodeRef}
              >
                <DeleteStorage storageId={storageId} />
              </StorageAction>
            </CSSTransition>
          ) : null}
        </TransitionGroup>
      </div>
    </div>
  );
};

export default StorageActions;
