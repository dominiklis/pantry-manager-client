import {
  Button,
  ExportAsCSV,
  ExportAsJSON,
  PageContainer,
  ProductsList,
  StorageIndicator,
  Translate,
} from "components";
import { componentColors, componentSizes } from "constantStrings";
import { useHandleProductsList, useScrollToElement } from "hooks";
import React, { useMemo } from "react";
import { IoPencil, IoShareSocial, IoTrash } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { makeSelectStorageById } from "store/selectors";
import styles from "./Storage.module.css";

const componentName = "Storage";

const Storage = () => {
  const { id: storageId } = useParams();
  const { hash } = useLocation();

  useScrollToElement(hash?.replace("#", ""));

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
  } = useHandleProductsList({ storageId, getProductBody: true });

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

        <div className={styles.actions}>
          {/* <Button
            icon={<IoDownload />}
            size={componentSizes.small}
            backgroundColor={componentColors.transparent}
          >
            <Translate section={componentName} text="exportAsCSVButtonText" />
          </Button> */}

          <ExportAsCSV
            filename={storage.storageName}
            products={products}
            disabled={!products || !products.length}
          />

          <ExportAsJSON
            filename={storage.storageName}
            products={products}
            disabled={!products || !products.length}
          />

          {/* <Button
            icon={<IoDownload />}
            size={componentSizes.small}
            backgroundColor={componentColors.transparent}
          >
            <Translate section={componentName} text="exportAsJsonButtonText" />
          </Button> */}

          <Button icon={<IoShareSocial />} size={componentSizes.small}>
            <Translate section={componentName} text="shareButtonText" />
          </Button>

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

      <ProductsList
        sortBy={sortBy}
        onSortByChange={handleSortByChange}
        highlight={highlight}
        onHighlightChange={handleHighlightChange}
        filterBy={filterBy}
        onFilterByChange={handleFilterByChange}
        // products={products?.map((product) => product.productId)}
        products={products}
        selectedProduct={hash?.replace("#", "")}
      />
    </PageContainer>
  );
};

export default Storage;
