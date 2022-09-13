import { useDispatch, useSelector } from "react-redux";
import { addToast, deleteProduct } from "store/actions";

const useProductActions = ({ componentName, productId }) => {
  const dispatch = useDispatch();

  const handleDeleteButton = async () => {
    await dispatch(deleteProduct(productId));

    dispatch(
      addToast({
        translate: {
          section: componentName,
          text: "deleteToast",
        },
      })
    );
  };

  const {
    loading: { deleting },
  } = useSelector((state) => state.products);

  return {
    handleDeleteButton,
    deleting,
  };
};

export default useProductActions;
