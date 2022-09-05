import { Translate } from "components";
import {
  AddProductToShoppingList,
  EditProduct,
  ProductAction,
} from "components/Product";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToast, deleteProduct } from "store/actions";

const actionsNames = {
  none: "",
  edit: "edit",
  addToShoppingList: "addToShoppingList",
};

const useProductActions = ({
  productId,
  componentName,
  openAccordion,
  closeAccordion,
}) => {
  const [selectedAction, setSelectedAction] = useState(actionsNames.none);

  const {
    loading: { deleting },
  } = useSelector((state) => state.products);

  const handleEditButton = () => {
    setSelectedAction(actionsNames.edit);
    openAccordion();
  };

  const handleAddToListButton = () => {
    setSelectedAction(actionsNames.addToShoppingList);
    openAccordion();
  };

  const dispatch = useDispatch();

  const handleDeleteButton = async () => {
    setSelectedAction(actionsNames.none);
    closeAccordion();
    await dispatch(deleteProduct(productId));

    dispatch(
      addToast({
        translate: {
          section: componentName,
          text: "toast",
        },
      })
    );
  };

  const handleCloseAction = () => {
    setSelectedAction(actionsNames.none);
    closeAccordion();
  };

  const actions = useMemo(
    () => ({
      edit: (
        <ProductAction
          onClose={handleCloseAction}
          header={<Translate section={componentName} text="editActionHeader" />}
        >
          <EditProduct productId={productId} />
        </ProductAction>
      ),

      addToShoppingList: (
        <ProductAction
          onClose={handleCloseAction}
          header={
            <Translate section={componentName} text="addToListActionHeader" />
          }
        >
          <AddProductToShoppingList productId={productId} />
        </ProductAction>
      ),
    }),
    []
  );

  return {
    selectedAction,
    deleting,
    handleEditButton,
    handleAddToListButton,
    handleDeleteButton,
    actions,
  };
};

export default useProductActions;
