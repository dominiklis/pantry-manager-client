import { AppLink, ListAndGridItem, StorageIndicator } from "components";
import { displayAs as displayAsValues, sortByValues } from "constantStrings";
import { useCallback, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { makeSelectStorages } from "store/selectors";
import styles from "./StoragesList.module.css";

const useStoragesList = ({ className }) => {
  const [sortBy, setSortBy] = useState(sortByValues.nameAsc);
  const [displayAs, setDisplayAs] = useState(displayAsValues.list);

  const selectStorages = useMemo(makeSelectStorages, []);
  const storages = useSelector((state) =>
    selectStorages(state, {
      sortBy,
    })
  );

  const getLinkStyles = useCallback(() => {
    let res = styles.link;

    if (displayAs === displayAsValues.grid) res += ` ${styles.grid}`;

    return res;
  }, [displayAs]);

  const elements = useMemo(
    () =>
      storages.map((storage) => (
        <ListAndGridItem key={storage.storageId}>
          <AppLink
            to={`/storages/${storage.storageId}`}
            className={getLinkStyles()}
          >
            <StorageIndicator icon color={storage.color} />
            {storage.storageName}
          </AppLink>
        </ListAndGridItem>
      )),
    [getLinkStyles, storages]
  );

  const getContainerStyles = () => {
    let res = "";

    if (className) res += ` ${className}`;

    return res;
  };

  return {
    sortBy,
    setSortBy,
    displayAs,
    setDisplayAs,
    elements,
    getContainerStyles,
  };
};

export default useStoragesList;
