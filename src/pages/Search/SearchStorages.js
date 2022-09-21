import { StorageHeader, Translate } from "components";
import { ItemsList } from "pages/Search";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { makeSelectStorages } from "store/selectors";

const componentName = "SearchStorages";

const SearchStorages = () => {
  let [searchParams] = useSearchParams();
  let [search] = React.useState(searchParams.get("q"));

  const selectStorages = useMemo(makeSelectStorages, []);
  const storages = useSelector((state) => selectStorages(state, { search }));

  return (
    <ItemsList
      header={<Translate section={componentName} text="header" />}
      items={storages.map((storage) => (
        <li key={storage.storageId}>
          <StorageHeader {...storage} />
        </li>
      ))}
    />
  );
};

export default SearchStorages;
