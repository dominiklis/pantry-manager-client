import { PageContainer, StoragesList, Translate } from "components";
import React from "react";
import styles from "./Storages.module.css";

const componentName = "Storages";

const Storages = () => {
  return (
    <PageContainer>
      <Translate section={componentName} text="pageHeader" />

      <StoragesList noHeader className={styles.storagesList} />
    </PageContainer>
  );
};

export default Storages;
