import { ListHeader, PageContainer, SortByNameButton } from "components";
import { sortByValues, various } from "constantStrings";
import { useScrollToElement } from "hooks";
import { ShoppingList } from "pages/ShoppingLists";
import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { makeSelectShoppingLists } from "store/selectors";
import styles from "./ShoppingLists.module.css";

const ShoppingLists = () => {
  useScrollToElement();

  const [sortBy, setSortBy] = useState(sortByValues.nameAsc);

  const handleSortByButton = () =>
    setSortBy((prev) => {
      if (prev === sortByValues.nameAsc) return sortByValues.nameDesc;

      return sortByValues.nameAsc;
    });

  const selectShoppingLists = useMemo(makeSelectShoppingLists, []);
  const shoppingLists = useSelector((state) =>
    selectShoppingLists(state, { sortBy })
  );

  return (
    <PageContainer>
      <ListHeader className={styles.listHeader}>
        <SortByNameButton
          onClick={handleSortByButton}
          sortingAsc={sortBy === sortByValues.nameAsc}
        />
      </ListHeader>

      <div className={styles.list}>
        {[
          {
            shoppingListId: various.noShoppingList,
          },
          ...shoppingLists,
        ].map((shoppingList) => (
          <ShoppingList key={shoppingList.shoppingListId} {...shoppingList} />
        ))}
      </div>
    </PageContainer>
  );
};

export default ShoppingLists;
