import {
  PageContainer,
  ProductsWithoutStoragesList,
  StoragesList,
} from "components";
import { CloseToExpiryProducts, ExpiredProducts } from ".";
import React from "react";
import styles from "./Home.module.css";
import { useScrollToElement } from "hooks";

const Home = () => {
  useScrollToElement();

  return (
    <PageContainer>
      <div className={styles.warnings}>
        <ExpiredProducts />
        <CloseToExpiryProducts />
      </div>

      <StoragesList className={styles.section} />

      <ProductsWithoutStoragesList className={styles.section} />
    </PageContainer>
  );
};

export default Home;
