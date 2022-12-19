import {
  Dropdown,
  DropdownMenuButton,
  PageContainer,
  ProductsList,
  StorageIndicator,
  Translate,
} from "components";
import { componentSizes } from "constantStrings";
import {
  StorageActions,
  StorageActionsButtons,
  StorageDetails,
  useStorage,
} from "pages/Storage";
import React from "react";
import styles from "./Storage.module.css";

const componentName = "Storage";

const Storage = () => {
  const {
    storage,
    darkTheme,
    defaultNumberOfDaysForWarning,
    products,
    sortBy,
    handleSortByChange,
    highlight,
    handleHighlightChange,
    filterBy,
    handleFilterByChange,
    isMediumScreen,
    selectedAction,
    setSelectedAction,
    handleCloseAction,
  } = useStorage();

  if (!storage) {
    return (
      <PageContainer>
        <div className={styles.storageName}>
          <h1
            className={`${styles.header} ${styles.error}`}
            data-dark-theme={darkTheme}
          >
            <Translate section={componentName} text="notFound" />
          </h1>
        </div>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <div className={styles.headerWrapper}>
        <div className={styles.storageName}>
          <StorageIndicator
            icon
            color={storage.color}
            size={componentSizes.veryLarge}
          />
          <h1 className={styles.header}>{storage.storageName}</h1>
          {!isMediumScreen ? (
            <Dropdown
              hideOnClick
              dropdownButton={<DropdownMenuButton />}
              dropdownContent={
                <StorageActionsButtons
                  storageName={storage.storageName}
                  products={products}
                  selectedAction={selectedAction}
                  setSelectedAction={setSelectedAction}
                  ownerId={storage.ownerId}
                />
              }
            />
          ) : null}
        </div>

        <StorageDetails
          numberOfDaysForWarning={storage.numberOfDaysForWarning}
          defaultNumberOfDaysForWarning={defaultNumberOfDaysForWarning}
          ownerId={storage.ownerId}
          ownerName={storage.ownerName}
        />

        <StorageActions
          isMediumScreen={isMediumScreen}
          storageId={storage.storageId}
          ownerId={storage.ownerId}
          storageName={storage.storageName}
          color={storage.color}
          numberOfDaysForWarning={storage.numberOfDaysForWarning}
          users={storage.users}
          products={products}
          actionButtons={
            <StorageActionsButtons
              storageName={storage.storageName}
              products={products}
              selectedAction={selectedAction}
              setSelectedAction={setSelectedAction}
              ownerId={storage.ownerId}
            />
          }
          selectedAction={selectedAction}
          onCloseAction={handleCloseAction}
          canShare={storage.canShare}
        />
      </div>

      <ProductsList
        sortBy={sortBy}
        onSortByChange={handleSortByChange}
        highlight={highlight}
        onHighlightChange={handleHighlightChange}
        filterBy={filterBy}
        onFilterByChange={handleFilterByChange}
        products={products}
      />
    </PageContainer>
  );
};

export default Storage;
