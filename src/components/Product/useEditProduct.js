import { various } from "constantStrings";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToast, editProduct } from "store/actions";
import { makeSelectProductById } from "store/selectors";
import { formatDate, validateInput } from "utils";

const useEditProduct = ({ productId, componentName }) => {
  const selectProduct = useMemo(makeSelectProductById, []);
  const { productName, expirationDate, amount, storageId, labels } =
    useSelector((state) => selectProduct(state, productId));

  const { edit: loading } = useSelector((state) => state.products.loading);

  const [input, setInput] = useState({
    productId,
    productName,
    expirationDate: expirationDate ? formatDate(expirationDate, true) : "",
    amount: amount ?? "",
    storageId,
    labels,
  });

  const [errors, setErrors] = useState({
    productName: null,
    amount: null,
  });

  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    if (e.target.name === "productName" || e.target.name === "amount") {
      const err = validateInput(e.target.name, e.target.value);

      setErrors((prev) => ({ ...prev, [e.target.name]: err }));
    }
  };

  const handleStorageChange = (storageId) => {
    if (storageId === various.noStorage) storageId = null;

    setInput((prev) => ({
      ...prev,
      storageId,
    }));
  };

  const handleLabelButtonClick = (label) =>
    setInput((prev) => {
      let labels = prev.labels ? [...prev?.labels] : [];

      if (!labels.includes(label)) labels.push(label);
      else labels = labels.filter((labelId) => labelId !== label);

      return { ...prev, labels };
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
        unit: input.unit,
        storageId: input.storageId,
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
    errors,
    handleChange,
    handleStorageChange,
    handleLabelButtonClick,
    handleSubmit,
  };
};

export default useEditProduct;
