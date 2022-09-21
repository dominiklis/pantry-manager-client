import { Translate } from "components";
import { ItemsList, SearchProductsListItem } from "pages/Search";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { makeSelectProducts } from "store/selectors";

const componentName = "SearchProducts";

const SearchProducts = () => {
  const { search } = useSelector((state) => state.app);

  const selectProducts = useMemo(makeSelectProducts, []);
  const products = useSelector((state) =>
    selectProducts(state, { search, getProductBody: true })
  );

  return (
    <ItemsList
      header={<Translate section={componentName} text="header" />}
      items={products.map((product) => (
        <li key={product.productId}>
          <SearchProductsListItem product={product} />
        </li>
      ))}
    />
  );
};

export default SearchProducts;
