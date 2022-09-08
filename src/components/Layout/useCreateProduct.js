import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToast, createProduct } from "store/actions";

const useCreateProduct = ({ componentName }) => {
  const { create: loading } = useSelector((state) => state.products.loading);

  const [input, setInput] = useState({
    productId: "",
    productName: "",
    expirationDate: "",
    amount: "",
    storageId: null,
    labels: [],
  });

  const [errors, setErrors] = useState({
    productName: null,
    amount: null,
  });

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await dispatch(
      createProduct({
        productName: input.productName,
        expirationDate: input.expirationDate ? input.expirationDate : null,
        amount: input.amount ? input.amount : null,
        storageId: input.storageId,
        labels: input.labels,
      })
    );

    dispatch(
      addToast({
        translate: {
          section: componentName,
          text: "createProductToast",
        },
      })
    );

    setInput({
      productName: "",
      expirationDate: "",
      amount: "",
      storageId: null,
      labels: [],
    });
  };

  return { loading, input, setInput, errors, setErrors, handleSubmit };
};

export default useCreateProduct;
