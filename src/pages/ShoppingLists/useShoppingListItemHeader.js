import { useIsDarkTheme } from "hooks";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { editShoppingListItem } from "store/actions";
import styles from "./ShoppingListItemHeader.module.css";

const useShoppingListItemHeader = ({
  shoppingListItemId,
  shoppingListItemName,
  quantity,
  selected,
  ownerId,
  shoppingListId,
}) => {
  const darkTheme = useIsDarkTheme();

  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    await dispatch(
      editShoppingListItem({
        shoppingListItemId,
        shoppingListItemName,
        quantity,
        ownerId,
        shoppingListId,
        selected: !selected,
      })
    );

    setLoading(false);
  };

  const getContainerStyles = () => {
    let res = styles.container;

    if (selected) res += ` ${styles.selected}`;

    return res;
  };

  return { getContainerStyles, darkTheme, handleSubmit, loading };
};

export default useShoppingListItemHeader;
