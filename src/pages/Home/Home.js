import {
  PageContainer,
  ProductsWithoutStoragesList,
  StoragesList,
} from "components";
import { CloseToExpiryProducts, ExpiredProducts } from ".";
import React from "react";
import styles from "./Home.module.css";
import { useLocation } from "react-router-dom";
import { useScrollToElement } from "hooks";

const Home = () => {
  const { hash } = useLocation();
  useScrollToElement(hash?.replace("#", ""));

  return (
    <PageContainer>
      <div className={styles.warnings}>
        <ExpiredProducts />
        <CloseToExpiryProducts />
      </div>

      <StoragesList className={styles.section} />

      <ProductsWithoutStoragesList
        className={styles.section}
        selectedProduct={hash?.replace("#", "")}
      />
    </PageContainer>
  );
};

export default Home;
