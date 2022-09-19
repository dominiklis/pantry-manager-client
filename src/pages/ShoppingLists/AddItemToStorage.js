import { CreateProduct } from "components";
import React from "react";

const AddItemToStorage = ({ name }) => {
  return <CreateProduct productName={name} dontNavigateToProduct />;
};

export default AddItemToStorage;
