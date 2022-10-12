import {
  PageContainer,
  ProductsWithoutStoragesList,
  StoragesList,
  Translate,
} from "components";
import { CloseToExpiryProducts, ExpiredProducts } from "pages/Home";
import React, { useEffect } from "react";
import styles from "./Home.module.css";
import { useScrollToElement } from "hooks";
import { useDispatch, useSelector } from "react-redux";
import { setCreateOverlay } from "store/actions";

const componentName = "Home";

const Home = () => {
  const products = useSelector((state) => state.products.allIds);

  useScrollToElement();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCreateOverlay());
  }, [dispatch]);

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

      <StoragesList className={styles.section} />

      <ProductsWithoutStoragesList className={styles.section} />
    </PageContainer>
  );
};

export default Home;
