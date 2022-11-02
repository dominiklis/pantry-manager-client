import { various } from "constantStrings";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToast, editProduct } from "store/actions";
import { makeSelectProductById } from "store/selectors";
import { formatDate } from "utils";

const useEditProduct = ({ productId, componentName }) => {
  const { defaultStorageId } = useSelector((state) => state.app);

  const selectProduct = useMemo(makeSelectProductById, []);
  const { productName, expirationDate, amount, storageId, labels } =
    useSelector((state) => selectProduct(state, productId));

  const { edit: loading } = useSelector((state) => state.products.loading);

  const [input, setInput] = useState({
    productId,
    productName,
    expirationDate: expirationDate ? formatDate(expirationDate, true) : "",
    amount: amount ?? "",
    storageId: storageId === defaultStorageId ? various.noStorage : storageId,
    labels,
  });

  const [errors, setErrors] = useState({
    productName: null,
    amount: null,
  });

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await dispatch(
      editProduct({
        productId: productId,
        productName: input.productName,
        expirationDate: input.expirationDate ? input.expirationDate : null,
        amount: input.amount ? input.amount : null,
        storageId:
          !input.storageId || input.storageId === various.noStorage
            ? defaultStorageId
            : input.storageId,
        labels: input.labels,
      })
    );

    dispatch(
      addToast({
        translate: {
          section: componentName,
          text: "toastText",
        },
      })
    );
  };

  return {
    loading,
    input,
    setInput,
    setErrors,
    errors,
    handleSubmit,
  };
};

export default useEditProduct;
