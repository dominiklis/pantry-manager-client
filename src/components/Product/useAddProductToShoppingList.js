import { various } from "constantStrings";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToast, createShoppingListItem } from "store/actions";
import { makeSelectProductById } from "store/selectors";
import { validateInput } from "utils";

const useAddProductToShoppingList = ({
  productId,
  selectedShoppingListId,
  componentName,
  onSubmit,
}) => {
  const { defaultShoppingListId } = useSelector((state) => state.app);

  const selectProduct = useMemo(makeSelectProductById, []);
  const { productName, amount } = useSelector((state) =>
    selectProduct(state, productId)
  );

  const { create: loading } = useSelector(
    (state) => state.shoppingListItems.loading
  );

  const [input, setInput] = useState({
    shoppingListItemName: productName ?? "",
    amount: amount ?? "",
    shoppingListId: selectedShoppingListId ?? null,
  });

  const [errors, setErrors] = useState({
    shoppingListItemName: "",
    amount: "",
  });

  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    const err = validateInput(e.target.name, e.target.value);
    setErrors((prev) => ({ ...prev, [e.target.name]: err }));
  };

  const handleShoppingListChange = (shoppingListId) => {
    if (shoppingListId === various.noShoppingList) shoppingListId = null;

    setInput((prev) => ({
      ...prev,
      shoppingListId,
    }));
  };

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await dispatch(
      createShoppingListItem({
        shoppingListItemName: input.shoppingListItemName,
        quantity: input.amount,
        shoppingListId: !input.shoppingListId
          ? defaultShoppingListId
          : input.shoppingListId,
      })
    );

    dispatch(
      addToast({
        translate: {
          section: componentName,
          text: "toast",
        },
      })
    );

    setInput({
      shoppingListItemName: "",
      amount: "",
      shoppingListId: selectedShoppingListId ?? null,
    });

    onSubmit?.();
  };

  return {
    loading,
    input,
    errors,
    handleChange,
    handleShoppingListChange,
    handleSubmit,
  };
};

export default useAddProductToShoppingList;
