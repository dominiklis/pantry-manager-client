import {
  filterProductsBy,
  highlightProducts,
  sortByValues,
} from "constantStrings";
import {
  useControlledActions,
  useHandleProductsList,
  useIsDarkTheme,
  useScrollToElement,
} from "hooks";
import { useIsMediumScreen } from "pages/Storage";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setCreateMenu, setUploadMenu } from "store/actions";
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

  const isMediumScreen = useIsMediumScreen();

  const { selectedAction, setSelectedAction, handleCloseAction } =
    useControlledActions();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setCreateMenu({
        storageId: storage?.storageId,
      })
    );
    dispatch(
      setUploadMenu({
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
    isMediumScreen,
    selectedAction,
    setSelectedAction,
    handleCloseAction,
  };
};

export default useStorage;
