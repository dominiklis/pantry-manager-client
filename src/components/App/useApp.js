import { localStorageKeys } from "constantStrings";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getLabels,
  getProducts,
  getShoppingListItems,
  getShoppingLists,
  getStorages,
  renewToken,
  setGetLabelsLoading,
  setGetProductsLoading,
  setGetSettingsLoading,
  setGetShoppingListItemsLoading,
  setGetShoppingListsLoading,
  setGetStoragesLoading,
  setInitialLoad,
  getSettings,
} from "store/actions";

const useApp = () => {
  const dispatch = useDispatch();

  const {
    initialLoad,
    loading: { getSettings: loadingSettings },
  } = useSelector((state) => state.app);

  const {
    loading: { getting: loadingStorages },
  } = useSelector((state) => state.storages);

  const {
    loading: { getting: loadingProducts },
  } = useSelector((state) => state.products);

  const {
    loading: { getting: loadingLabels },
  } = useSelector((state) => state.labels);

  const {
    loading: { getting: loadingShoppingLists },
  } = useSelector((state) => state.shoppingLists);

  const {
    loading: { getting: loadingShoppingListItems },
  } = useSelector((state) => state.shoppingListItems);

  const loadApp = useCallback(async () => {
    const setLoadingsToFalse = () => {
      dispatch(setGetSettingsLoading(false));
      dispatch(setGetStoragesLoading(false));
      dispatch(setGetProductsLoading(false));
      dispatch(setGetLabelsLoading(false));
      dispatch(setGetShoppingListsLoading(false));
      dispatch(setGetShoppingListItemsLoading(false));
    };

    // authenticate user
    const userToken = localStorage.getItem(localStorageKeys.userTokenKey);
    if (userToken) {
      try {
        // verify token
        const result = await dispatch(renewToken()).unwrap();

        // get user resources
        if (result?.userId) {
          dispatch(getStorages());
          dispatch(getProducts());
          dispatch(getLabels());
          dispatch(getShoppingLists());
          dispatch(getShoppingListItems());
          dispatch(getSettings(result.userId));
        }
      } catch (error) {
        setLoadingsToFalse();
      }
    } else {
      setLoadingsToFalse();
    }
  }, [dispatch]);

  useEffect(() => {
    loadApp();
  }, [loadApp]);

  // after loading the content, set initialLoad to true
  useEffect(() => {
    if (
      loadingSettings ||
      loadingStorages ||
      loadingProducts ||
      loadingLabels ||
      loadingShoppingLists ||
      loadingShoppingListItems
    )
      dispatch(setInitialLoad(false));
    else dispatch(setInitialLoad(true));
  }, [
    dispatch,
    loadingSettings,
    loadingStorages,
    loadingProducts,
    loadingLabels,
    loadingShoppingLists,
    loadingShoppingListItems,
  ]);

  return { initialLoad };
};

export default useApp;
