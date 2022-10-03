import {
  useControlledActions,
  useHandleProductsList,
  useIsDarkTheme,
  useIsSmallScreen,
  useScrollToElement,
} from "hooks";
import { useEffect, useMemo } from "react";
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

  const {
    sortBy,
    highlight,
    filterBy,
    products,
    handleSortByChange,
    handleHighlightChange,
    handleFilterByChange,
  } = useHandleProductsList({ storageId, getProductBody: true });

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
    handleSortByChange,
    highlight,
    handleHighlightChange,
    filterBy,
    handleFilterByChange,
    isSmallScreen,
    selectedAction,
    setSelectedAction,
    handleCloseAction,
  };
};

export default useStorage;
