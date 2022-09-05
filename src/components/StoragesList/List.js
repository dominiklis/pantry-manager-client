import { AppLink, StorageIndicator } from "components";
import { useIsDarkTheme } from "hooks";
import React from "react";
import styles from "./List.module.css";

const List = ({ storages, displayAsGrid }) => {
  const darkTheme = useIsDarkTheme();

  const getListStyles = () => {
    let res = styles.list;

    if (displayAsGrid) res += ` ${styles.grid}`;

    return res;
  };

  return (
    <ul className={getListStyles()} data-dark-theme={darkTheme}>
      {storages.map((storage) => (
        <li key={storage.storageId} className={styles.listItem}>
          <AppLink
            to={`/storages/${storage.storageId}`}
            color="white"
            className={styles.link}
          >
            <StorageIndicator icon color={storage.color} />
            {storage.storageName}
          </AppLink>
        </li>
      ))}
    </ul>
  );
};

export default List;
