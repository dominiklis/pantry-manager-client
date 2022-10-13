import {
  filterProductsBy,
  highlightProducts,
  sortByValues,
} from "constantStrings";
import {
  useControlledActions,
  useHandleProductsList,
  useIsDarkTheme,
  useIsSmallScreen,
  useScrollToElement,
} from "hooks";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setCreateOverlay, setUploadOverlay } from "store/actions";
import { makeSelectStorageById } from "store/selectors";

const useStorage = () => {
  const { id: storageId } = useParams();

  useScrollToElement();

  const darkTheme = useIsDarkTheme();

  const selectStorage = useMemo(makeSelectStorageById, []);
  const storage = useSelector((state) => selectStorage(state, storageId));

  const { defaultNumberOfDaysForWarning } = useSelector((state) => state.app);

  const [sortBy, setSortBy] = useState(sortByValues.nameAsc);
  const [highlight, setHighlight] = useState(highlightProducts.none);
  const [filterBy, setFilterBy] = useState(filterProductsBy.all);

  const {
    products,
    handleSortByChange,
    handleHighlightChange,
    handleFilterByChange,
  } = useHandleProductsList({
    selectProductsOptions: { storageId, getProductBody: true },
    sortBy,
    highlight,
    filterBy,
    setSortByFunction: setSortBy,
    setHighlightFunction: setHighlight,
    setFilterByFunction: setFilterBy,
  });

  const isSmallScreen = useIsSmallScreen();

  const { selectedAction, setSelectedAction, handleCloseAction } =
    useControlledActions();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setCreateOverlay({
        storageId: storage?.storageId,
      })
    );
    dispatch(
      setUploadOverlay({
        storageId: storage?.storageId,
      })
    );
  }, [dispatch, storage?.storageId]);

  return {
    storage,
    darkTheme,
    defaultNumberOfDaysForWarning,
    products,
    sortBy,
    highlight,
    filterBy,
    handleSortByChange,
    handleHighlightChange,
    handleFilterByChange,
    isSmallScreen,
    selectedAction,
    setSelectedAction,
    handleCloseAction,
  };
};

export default useStorage;
