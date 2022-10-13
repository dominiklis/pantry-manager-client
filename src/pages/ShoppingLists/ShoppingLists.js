import {
  ListHeader,
  PageContainer,
  SortByNameButton,
  Translate,
} from "components";
import { sortByValues, various } from "constantStrings";
import { ShoppingList, useShoppingLists } from "pages/ShoppingLists";
import React from "react";
import styles from "./ShoppingLists.module.css";

const componentName = "ShoppingLists";

const ShoppingLists = () => {
  const {
    shoppingListItems,
    shoppingLists,
    handleSortByButton,
    sortListsByName,
  } = useShoppingLists();

  if (!shoppingListItems?.length && !shoppingLists?.length)
    return (
      <PageContainer>
        <p className={styles.noItems}>
          <Translate section={componentName} text="noItemsInfo" />
        </p>
      </PageContainer>
    );

  return (
    <PageContainer>
      <ListHeader className={styles.listHeader}>
        <SortByNameButton
          onClick={handleSortByButton}
          sortingAsc={sortListsByName === sortByValues.nameAsc}
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
