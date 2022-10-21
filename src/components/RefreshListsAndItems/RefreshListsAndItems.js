import { RefreshForm } from "components";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getShoppingListItems, getShoppingLists } from "store/actions";

const RefreshListsAndItems = () => {
  const dispatch = useDispatch();

  const { getting: loading } = useSelector((state) => state.products.loading);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await dispatch(getShoppingLists()).unwrap();
    await dispatch(getShoppingListItems()).unwrap();
  };

  return <RefreshForm onSubmit={handleSubmit} loading={loading} />;
};

export default RefreshListsAndItems;
