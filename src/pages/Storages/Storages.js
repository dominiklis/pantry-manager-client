import {
  PageContainer,
  RefreshProductsAndStoragesForm,
  StoragesList,
} from "components";
import { createMenuTabs } from "constantStrings";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCreateMenu } from "store/actions";
import {
  setStoragesDisplayStoragesAs,
  setStoragesSortStoragesBy,
} from "store/slices/pages/slice";

const Storages = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setCreateMenu({
        selectedTab: createMenuTabs.createStorage,
      })
    );
  }, [dispatch]);

  const { sortStoragesBy, displayStoragesAs } = useSelector(
    (state) => state.pages.storages
  );

  return (
    <PageContainer>
      <RefreshProductsAndStoragesForm />
      <StoragesList
        noHeader
        sortBy={sortStoragesBy}
        displayAs={displayStoragesAs}
        setSortByDispatchAction={setStoragesSortStoragesBy}
        setDisplayAsDispatchAction={setStoragesDisplayStoragesAs}
      />
    </PageContainer>
  );
};

export default Storages;
