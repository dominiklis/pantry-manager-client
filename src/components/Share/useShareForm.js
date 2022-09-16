import { Translate } from "components";
import { toastColors } from "constantStrings";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToast, shareShoppingList, shareStorage } from "store/actions";
import { validateInput } from "utils";

const useShareForm = ({ componentName, users, isShoppingList, id }) => {
  const [input, setInput] = useState({
    login: "",
    canShare: false,
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    if (e.target.name === "login") {
      const userAlreadyHasAnAccess =
        users.filter(
          (user) =>
            user.email === e.target.value || user.userName === e.target.value
        ).length > 0;

      if (userAlreadyHasAnAccess)
        setError(<Translate section={componentName} text="error" />);
      else {
        const validattionResult = validateInput("login", e.target.value);
        if (validattionResult) setError(validattionResult);
        else setError("");
      }
    }
  };

  const handleCheckboxChange = (e) => {
    handleChange({
      target: {
        name: e.target.name,
        value: e.target.checked,
      },
    });
  };

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let result = null;

    if (isShoppingList) {
      result = await dispatch(
        shareShoppingList({ shoppingListId: id, ...input })
      );
    } else {
      result = await dispatch(shareStorage({ storageId: id, ...input }));
    }

    if (!result.error) {
      dispatch(
        addToast({
          translate: {
            section: componentName,
            text: isShoppingList
              ? "shoppingListSuccessToast"
              : "storageSuccessToast",
          },
        })
      );

      setInput({
        login: "",
        canShare: false,
      });
    } else {
      dispatch(
        addToast({
          translate: {
            section: componentName,
            text: "error",
          },
          color: toastColors.error,
        })
      );
    }
  };

  const { share: loading } = useSelector((state) => state.storages.loading);
  const { userId } = useSelector((state) => state.users.user);

  return {
    handleSubmit,
    handleCheckboxChange,
    loading,
    input,
    handleChange,
    error,
    userId,
  };
};

export default useShareForm;
