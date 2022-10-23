import { RefreshForm } from "components";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToast, getProducts, getStorages } from "store/actions";

const componentName = "RefreshProductsAndStoragesForm";

const RefreshProductsAndStoragesForm = () => {
  const dispatch = useDispatch();

  const { getting: loading } = useSelector((state) => state.products.loading);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await dispatch(getStorages()).unwrap();
    await dispatch(getProducts()).unwrap();

    dispatch(
      addToast({
        translate: {
          section: componentName,
          text: "successToastMessage",
        },
      })
    );
  };

  return <RefreshForm onSubmit={handleSubmit} loading={loading} />;
};

export default RefreshProductsAndStoragesForm;
