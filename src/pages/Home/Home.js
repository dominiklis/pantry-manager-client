import {
  PageContainer,
  ProductsWithoutStoragesList,
  StoragesList,
  Translate,
} from "components";
import { CloseToExpiryProducts, ExpiredProducts } from ".";
import React from "react";
import styles from "./Home.module.css";

const componentName = "Home";

const Home = () => {
  return (
    <PageContainer>
      <Translate section={componentName} text="myPantry" />

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
