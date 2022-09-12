import {
  Button,
  PageContainer,
  ProductsList,
  StorageIndicator,
  Translate,
} from "components";
import { componentColors, componentSizes } from "constantStrings";
import { useHandleProductsList, useScrollToElement } from "hooks";
import React, { useMemo } from "react";
import { IoPencil, IoTrash } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { makeSelectStorageById } from "store/selectors";
import styles from "./Storage.module.css";

const componentName = "Storage";

const Storage = () => {
  const { id: storageId } = useParams();
  const { hash } = useLocation();

  useScrollToElement(hash?.replace("#productId=", ""));

  const selectStorage = useMemo(makeSelectStorageById, []);
  const storage = useSelector((state) => selectStorage(state, storageId));

  const { defaultNumberOfDaysForWarning } = useSelector((state) => state.app);

  const {
    sortBy,
    highlight,
    filterBy,
    products,
    handleSortByChange,
    handleHighlightChange,
    handleFilterByChange,
  } = useHandleProductsList({ storageId });

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

        <div className={styles.actions}>
          <Button icon={<IoPencil />} size={componentSizes.small}>
            <Translate section={componentName} text="editButtonText" />
          </Button>
          <Button
            icon={<IoTrash />}
            colorOnHover={componentColors.error}
            size={componentSizes.small}
          >
            <Translate section={componentName} text="deleteButtonText" />
          </Button>
        </div>
      </div>

      <div className={styles.warningInfo}>
        <Translate section={componentName} text="warningInfoText" />
        <span className={styles.days}>
          {storage.numberOfDaysForWarning
            ? ` ${storage.numberOfDaysForWarning}`
            : ` ${defaultNumberOfDaysForWarning} ${"(default value)"}`}
        </span>
      </div>

      <ProductsList
        sortBy={sortBy}
        onSortByChange={handleSortByChange}
        highlight={highlight}
        onHighlightChange={handleHighlightChange}
        filterBy={filterBy}
        onFilterByChange={handleFilterByChange}
        products={products}
        selectedProduct={hash?.replace("#productId=", "")}
      />
    </PageContainer>
  );
};

export default Storage;
