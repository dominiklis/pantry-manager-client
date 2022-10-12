import { useScrollToElement } from "hooks";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCreateOverlay } from "store/actions";

const useHome = () => {
  const products = useSelector((state) => state.products.allIds);

  useScrollToElement();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCreateOverlay());
  }, [dispatch]);

  const {
    sortStoragesBy,
    displayStoragesAs,
    sortProductsBy,
    highlightProducts,
    filterProducts,
  } = useSelector((state) => state.pages.home);

  return {
    products,
    sortStoragesBy,
    displayStoragesAs,
    sortProductsBy,
    highlightProducts,
    filterProducts,
  };
};

export default useHome;
