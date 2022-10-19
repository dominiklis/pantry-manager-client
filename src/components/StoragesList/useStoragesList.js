import { AppLink, ListAndGridItem, StorageIndicator } from "components";
import { displayAs as displayAsValues } from "constantStrings";
import { useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import { makeSelectStorages } from "store/selectors";
import styles from "./StoragesList.module.css";

const useStoragesList = ({ className, sortBy, displayAs }) => {
  const { defaultStorageId } = useSelector((state) => state.users.user);

  const selectStorages = useMemo(makeSelectStorages, []);
  const storages = useSelector((state) =>
    selectStorages(state, {
      sortBy,
      skip: defaultStorageId,
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

  return { elements, getContainerStyles };
};

export default useStoragesList;
