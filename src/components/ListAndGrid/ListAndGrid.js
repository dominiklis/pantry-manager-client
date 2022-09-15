import { Translate } from "components";
import { DisplayAsButton, SortByButton } from "components/ListAndGrid";
import { sortByValues, displayAs as displayAsValues } from "constantStrings";
import { useIsDarkTheme } from "hooks";
import React from "react";
import styles from "./ListAndGrid.module.css";

const componentName = "ListAndGrid";

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
      <div className={styles.header}>
        <SortByButton
          onClick={handleSortByButton}
          sortingAsc={sortBy === sortByValues.nameAsc}
          buttonText={
            <Translate section={componentName} text="sortByButtonText" />
          }
        />

        <DisplayAsButton
          onClick={handleDisplayAsButton}
          displayAsList={displayAs === displayAsValues.list}
        />
      </div>

      {/* list */}
      <ul className={getListStyles()} data-dark-theme={darkTheme}>
        {elements}
      </ul>
    </>
  );
};

export default ListAndGrid;
