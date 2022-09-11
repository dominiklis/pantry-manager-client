import { Button, PageContainer, StorageIndicator, Translate } from "components";
import { componentColors, componentSizes } from "constantStrings";
import React, { useMemo } from "react";
import { IoPencil, IoTrash } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { makeSelectStorageById } from "store/selectors";
import styles from "./Storage.module.css";

const componentName = "Storage";

const Storage = () => {
  let { id: storageId } = useParams();

  const selectStorage = useMemo(makeSelectStorageById, []);
  const storage = useSelector((state) => selectStorage(state, storageId));

  const { defaultNumberOfDaysForWarning } = useSelector((state) => state.app);

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
          {storage.numberOfFaysForWarning
            ? ` ${storage.numberOfFaysForWarning}`
            : ` ${defaultNumberOfDaysForWarning} ${"(default value)"}`}
        </span>
      </div>
    </PageContainer>
  );
};

export default Storage;
