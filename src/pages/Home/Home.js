import {
  PageContainer,
  ProductsWithoutStoragesList,
  StoragesList,
  Translate,
} from "components";
import { CloseToExpiryProducts, ExpiredProducts, useHome } from "pages/Home";
import React from "react";
import styles from "./Home.module.css";
import {
  setHomeDisplayStoragesAs,
  setHomeFilterProducts,
  setHomeHighlightProducts,
  setHomeSortProductsBy,
  setHomeSortStoragesBy,
} from "store/actions";

const componentName = "Home";

const Home = () => {
  const {
    products,
    sortStoragesBy,
    displayStoragesAs,
    sortProductsBy,
    highlightProducts,
    filterProducts,
  } = useHome();

  if (!products || !products.length)
    return (
      <PageContainer>
        <p className={styles.noElements}>
          <Translate section={componentName} text="noProductsInfo" />
        </p>
      </PageContainer>
    );

  return (
    <PageContainer>
      <div className={styles.warnings}>
        <ExpiredProducts />
        <CloseToExpiryProducts />
      </div>

      <StoragesList
        className={styles.section}
        sortBy={sortStoragesBy}
        displayAs={displayStoragesAs}
        setSortByDispatchAction={setHomeSortStoragesBy}
        setDisplayAsDispatchAction={setHomeDisplayStoragesAs}
      />

      <ProductsWithoutStoragesList
        className={styles.section}
        sortBy={sortProductsBy}
        highlight={highlightProducts}
        filterBy={filterProducts}
        setSortByDispatchAction={setHomeSortProductsBy}
        setHighlightDispatchAction={setHomeHighlightProducts}
        setFilterByDispatchAction={setHomeFilterProducts}
      />
    </PageContainer>
  );
};

export default Home;
