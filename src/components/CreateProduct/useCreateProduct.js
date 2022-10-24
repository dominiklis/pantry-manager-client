import { various } from "constantStrings";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToast, createProduct } from "store/actions";

const useCreateProduct = ({
  componentName,
  productName,
  dontNavigateToProduct,
  selectedStorage,
  selectedLabel,
}) => {
  const { defaultStorageId } = useSelector((state) => state.users.user);
  const { create: loading } = useSelector((state) => state.products.loading);

  const [input, setInput] = useState({
    productName: productName ?? "",
    expirationDate: "",
    amount: "",
    storageId: selectedStorage ?? null,
    labels: selectedLabel ? [selectedLabel] : [],
  });

  const [errors, setErrors] = useState({
    productName: null,
    amount: null,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await dispatch(
      createProduct({
        productName: input.productName,
        expirationDate: input.expirationDate ? input.expirationDate : null,
        amount: input.amount ? input.amount : null,
        storageId:
          input.storageId === various.noStorage
            ? defaultStorageId
            : input.storageId,
        labels: input.labels,
      })
    ).unwrap();

    if (!dontNavigateToProduct && result?.productId) {
      if (result.storageId !== defaultStorageId)
        navigate(`/storages/${result.storageId}#${result.productId}`);
      else navigate(`/products#${result.productId}`);
    }

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
      storageId: selectedStorage ?? null,
      labels: [],
    });
  };

  return { loading, input, setInput, errors, setErrors, handleSubmit };
};

export default useCreateProduct;
