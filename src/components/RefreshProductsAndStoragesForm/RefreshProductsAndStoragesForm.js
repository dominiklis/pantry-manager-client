import { RefreshForm } from "components";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, getStorages } from "store/actions";

const RefreshProductsAndStoragesForm = () => {
  const dispatch = useDispatch();

  const { getting: loading } = useSelector((state) => state.products.loading);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await dispatch(getStorages()).unwrap();
    await dispatch(getProducts()).unwrap();
  };

  return <RefreshForm onSubmit={handleSubmit} loading={loading} />;
};

export default RefreshProductsAndStoragesForm;
