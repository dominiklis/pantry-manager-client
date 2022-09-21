import { StorageHeader, Translate } from "components";
import { ItemsList } from "pages/Search";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { makeSelectStorages } from "store/selectors";

const componentName = "SearchStorages";

const SearchStorages = () => {
  const { search } = useSelector((state) => state.app);

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
