import {
  PageContainer,
  ProductsList,
  StorageIndicator,
  Translate,
} from "components";
import { componentSizes } from "constantStrings";
import { StorageActions, useStorage } from "pages/Storage";
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
        </div>

        <div className={styles.warningInfo}>
          <Translate section={componentName} text="warningInfoText" />
          <span className={styles.days}>
            {storage.numberOfDaysForWarning
              ? ` ${storage.numberOfDaysForWarning}`
              : ` ${defaultNumberOfDaysForWarning} ${"(default value)"}`}
          </span>
        </div>

        <StorageActions
          storageId={storage.storageId}
          ownerId={storage.ownerId}
          storageName={storage.storageName}
          color={storage.color}
          numberOfDaysForWarning={storage.numberOfDaysForWarning}
          users={storage.users}
          products={products}
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
