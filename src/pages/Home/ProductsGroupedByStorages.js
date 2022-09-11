import { StorageHeader, Translate } from "components";
import { various } from "constantStrings";
import { ProductsListItem } from "pages/Home";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import styles from "./ProductsGroupedByStorages.module.css";

const componentName = "ProductsGroupedByStorages";

const ProductsGroupedByStorages = ({
  storages,
  productsGroupedByStorages,
  daysColor,
  showDaysInStorageHeader,
}) => {
  const { defaultNumberOfDaysForWarning } = useSelector((state) => state.app);

  const storagesForMapping = useMemo(() => {
    if (productsGroupedByStorages[various.noStorage])
      return [...storages, various.noStorage];

    return storages;
  }, [productsGroupedByStorages, storages]);

  return (
    <ul className={styles.list}>
      {storagesForMapping.map((storage) => (
        <li key={storage.storageId ?? various.noStorage}>
          <StorageHeader
            storageId={storage.storageId}
            storageName={
              storage.storageName ?? (
                <Translate section={componentName} text="withoutStorage" />
              )
            }
            storageColor={storage.color}
            numberOfDaysForWarning={
              storage.numberOfDaysForWarning ?? defaultNumberOfDaysForWarning
            }
            showDaysInStorageHeader={showDaysInStorageHeader}
          />
          <ul className={styles.nestedList}>
            {productsGroupedByStorages[
              storage.storageId ?? various.noStorage
            ].map((product) => (
              <li key={product.productId} className={styles.listItem}>
                <ProductsListItem product={product} daysColor={daysColor} />
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default ProductsGroupedByStorages;
