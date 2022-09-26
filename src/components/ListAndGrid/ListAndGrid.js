import { ListHeader, SortByNameButton } from "components";
import {
  DisplayAsButton,
  NoElements,
  useListAndGrid,
} from "components/ListAndGrid";
import { sortByValues, displayAs as displayAsValues } from "constantStrings";
import React from "react";

const ListAndGrid = ({
  elements,
  sortBy,
  setSortBy,
  displayAs,
  setDisplayAs,
  emptyListInfo,
}) => {
  const {
    handleSortByButton,
    handleDisplayAsButton,
    getListStyles,
    darkTheme,
  } = useListAndGrid({ setSortBy, displayAs, setDisplayAs });

  if (!elements || !elements.length)
    return <NoElements emptyListInfo={emptyListInfo} />;

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
