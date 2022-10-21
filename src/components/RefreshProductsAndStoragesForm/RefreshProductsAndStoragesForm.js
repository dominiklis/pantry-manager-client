import { Button, Translate } from "components";
import { componentColors, componentSizes } from "constantStrings";
import React from "react";
import { IoRefresh } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, getStorages } from "store/actions";
import styles from "./RefreshProductsAndStoragesForm.module.css";

const componentName = "RefreshProductsAndStoragesForm";

const RefreshProductsAndStoragesForm = () => {
  const dispatch = useDispatch();

  const { getting: loading } = useSelector((state) => state.products.loading);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await dispatch(getStorages()).unwrap();
    await dispatch(getProducts()).unwrap();
  };

  return (
    <form className={styles.refreshButtonContainer} onSubmit={handleSubmit}>
      <Button
        icon={<IoRefresh />}
        backgroundColor={componentColors.primary}
        size={componentSizes.small}
        loading={loading}
      >
        <Translate section={componentName} text="refreshButtonText" />
      </Button>
    </form>
  );
};

export default RefreshProductsAndStoragesForm;
