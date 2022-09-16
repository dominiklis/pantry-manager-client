import {
  useHandleProductsList,
  useIsDarkTheme,
  useScrollToElement,
} from "hooks";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
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
  };
};

export default useStorage;
