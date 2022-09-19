import { Button, Translate } from "components";
import { componentSizes } from "constantStrings";
import React, { useState } from "react";
import { IoTrash } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { deleteShopppingListItem } from "store/actions";

const componentName = "DeleteShoppingListItem";

const DeleteShoppingListItem = ({ shoppingListItemId }) => {
  const [deleting, setDeleting] = useState(false);

  const dispatch = useDispatch();

  const handleDeleteSubmit = async (e) => {
    e.preventDefault();

    setDeleting(true);

    await dispatch(deleteShopppingListItem(shoppingListItemId));

    setDeleting(false);
  };

  return (
    <form onSubmit={handleDeleteSubmit}>
      <Button size={componentSizes.small} icon={<IoTrash />} loading={deleting}>
        <Translate section={componentName} text="deleteButtonText" />
      </Button>
    </form>
  );
};

export default DeleteShoppingListItem;
