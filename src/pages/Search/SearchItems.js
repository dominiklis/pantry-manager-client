import { AppLink, Translate } from "components";
import { ItemsList } from "pages/Search";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { makeSelectShoppingListItems } from "store/selectors";

const componentName = "SearchLists";

const SearchItems = () => {
  const { search } = useSelector((state) => state.app);

  const selectShoppingListItems = useMemo(makeSelectShoppingListItems, []);
  const items = useSelector((state) =>
    selectShoppingListItems(state, { search })
  );

  return (
    <ItemsList
      header={<Translate section={componentName} text="header" />}
      items={items.map((item) => (
        <li key={item.shoppingListItemId}>
          <AppLink to={`/lists#${item.shoppingListItemId}`}>
            {item.shoppingListItemName}
          </AppLink>
        </li>
      ))}
    />
  );
};

export default SearchItems;
