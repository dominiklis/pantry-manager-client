import { AppLink, Translate } from "components";
import { ItemsList } from "pages/Search";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { makeSelectShoppingLists } from "store/selectors";

const componentName = "SearchLists";

const SearchLists = () => {
  const { search } = useSelector((state) => state.app);

  const selectShoppingLists = useMemo(makeSelectShoppingLists, []);
  const lists = useSelector((state) => selectShoppingLists(state, { search }));

  return (
    <ItemsList
      horizontalList
      header={<Translate section={componentName} text="header" />}
      items={lists.map((list) => (
        <li key={list.shoppingListId}>
          <AppLink to={`/lists#${list.shoppingListId}`}>
            {list.shoppingListName}
          </AppLink>
        </li>
      ))}
    />
  );
};

export default SearchLists;
