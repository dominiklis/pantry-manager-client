import { AppLink, StorageIndicator, Translate } from "components";
import { LabelsList } from "components/Product";
import React from "react";
import { useSelector } from "react-redux";
import { formatDate, getExpirationInfo, getNumberOfDaysFromToday } from "utils";
import styles from "./ProductDetails.module.css";

const componentName = "ProductDetails";

const ProductDetails = ({
  productName,
  expirationDate,
  defaultNumberOfDaysForWarning,
  storageId,
  storageColor,
  storageName,
  labels,
}) => {
  const { defaultStorageId } = useSelector((state) => state.users.user);
  const { language } = useSelector((state) => state.app);

  return (
    <div className={styles.container}>
      {/* expiration date */}
      <div className={styles.section}>
        <span className={styles.sectionLabel}>
          <Translate section={componentName} text="expirationDate" />
        </span>
        {expirationDate ? (
          <>
            <span>{formatDate(expirationDate)}</span>
            <span className={styles.numberOfDays}>
              {getNumberOfDaysFromToday(expirationDate) >=
                -defaultNumberOfDaysForWarning &&
                getExpirationInfo(language, expirationDate, productName)}
            </span>
          </>
        ) : (
          <span>
            <Translate section={componentName} text="dateNotSet" />
          </span>
        )}
      </div>

      {/* storage */}
      <div className={styles.section}>
        <span className={styles.sectionLabel}>
          <Translate section={componentName} text="storage" />
        </span>
        {storageId && storageId !== defaultStorageId ? (
          <>
            <AppLink
              to={`/storages/${storageId}`}
              className={styles.storageLink}
            >
              <StorageIndicator color={storageColor} />
              <span>{storageName}</span>
            </AppLink>
          </>
        ) : (
          <span>
            <Translate section={componentName} text="noStorage" />
          </span>
        )}
      </div>

      {/* labels */}
      <div className={styles.section}>
        <span className={styles.sectionLabel}>
          <Translate section={componentName} text="labels" />
        </span>
        {labels?.length ? (
          <LabelsList labels={labels} />
        ) : (
          <Translate section={componentName} text="noLabels" />
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
