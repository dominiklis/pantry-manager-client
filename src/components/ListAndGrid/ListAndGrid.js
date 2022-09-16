import { ListHeader, SortByNameButton } from "components";
import { DisplayAsButton } from "components/ListAndGrid";
import { sortByValues, displayAs as displayAsValues } from "constantStrings";
import { useIsDarkTheme } from "hooks";
import React from "react";
import styles from "./ListAndGrid.module.css";

const ListAndGrid = ({
  elements,
  sortBy,
  setSortBy,
  displayAs,
  setDisplayAs,
}) => {
  const darkTheme = useIsDarkTheme();

  const handleSortByButton = () =>
    setSortBy((prev) => {
      if (prev === sortByValues.nameAsc) return sortByValues.nameDesc;

      return sortByValues.nameAsc;
    });

  const handleDisplayAsButton = () =>
    setDisplayAs((prev) => {
      if (prev === displayAsValues.list) return displayAsValues.grid;

      return displayAsValues.list;
    });

  const getListStyles = () => {
    let res = styles.list;

    if (displayAs === displayAsValues.grid) res += ` ${styles.grid}`;

    return res;
  };

  return (
    <>
      {/* header */}
      <ListHeader>
        <SortByNameButton
          onClick={handleSortByButton}
          sortingAsc={sortBy === sortByValues.nameAsc}
        />

        <DisplayAsButton
          onClick={handleDisplayAsButton}
          displayAsList={displayAs === displayAsValues.list}
        />
      </ListHeader>

      {/* list */}
      <ul className={getListStyles()} data-dark-theme={darkTheme}>
        {elements}
      </ul>
    </>
  );
};

export default ListAndGrid;
