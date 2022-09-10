import {
  PageContainer,
  ProductsWithoutStoragesList,
  StoragesList,
  Translate,
} from "components";
import { CloseToExpiryProducts, ExpiredProducts } from ".";
import React from "react";
import styles from "./Home.module.css";
import { useLocation } from "react-router-dom";
import { useScrollToElement } from "hooks";

const componentName = "Home";

const Home = () => {
  const { hash } = useLocation();
  useScrollToElement(hash?.replace("#", ""));

  return (
    <PageContainer>
      <Translate section={componentName} text="myPantry" />

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
