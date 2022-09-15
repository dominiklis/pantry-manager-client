import { sortStoragesBy, displayAs as displayAsValues } from "constantStrings";
import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { makeSelectStorages } from "store/selectors";

const useStoragesList = ({ className }) => {
  const [sortBy, setSortBy] = useState(sortStoragesBy.sortByNameAsc);
  const [displayAs, setDisplay] = useState(displayAsValues.list);

  const selectStorages = useMemo(makeSelectStorages, []);
  const storages = useSelector((state) =>
    selectStorages(state, {
      sortBy,
    })
  );

  const handleSortByButton = () =>
    setSortBy((prev) => {
      if (prev === sortStoragesBy.sortByNameAsc)
        return sortStoragesBy.sortByNameDesc;

      return sortStoragesBy.sortByNameAsc;
    });

  const handleDisplayAsButton = () =>
    setDisplay((prev) => {
      if (prev === displayAsValues.list) return displayAsValues.grid;

      return displayAsValues.list;
    });

  const getContainerStyles = () => {
    let res = "";

    if (className) res += ` ${className}`;

    return res;
  };

  return {
    sortBy,
    displayAs,
    setDisplay,
    storages,
    handleSortByButton,
    handleDisplayAsButton,
    getContainerStyles,
  };
};

export default useStoragesList;
