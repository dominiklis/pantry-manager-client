import {
  PageContainer,
  ProductsWithoutStoragesList,
  StoragesList,
  Translate,
} from "components";
import { CloseToExpiryProducts, ExpiredProducts } from ".";
import React from "react";
import styles from "./Home.module.css";
import { useScrollToElement } from "hooks";
import { useSelector } from "react-redux";

const componentName = "Home";

const Home = () => {
  const { products } = useSelector((state) => state.products.allIds);

  useScrollToElement();

  if (!products || !products.length)
    return (
      <p className={styles.noElements}>
        <Translate section={componentName} text="noProductsInfo" />
      </p>
    );

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
