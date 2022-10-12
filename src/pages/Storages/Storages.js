import { PageContainer, StoragesList } from "components";
import { createOverlay } from "constantStrings";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCreateOverlay } from "store/actions";
import {
  setStoragesDisplayStoragesAs,
  setStoragesSortStoragesBy,
} from "store/slices/pages/slice";

const Storages = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setCreateOverlay({
        selectedTab: createOverlay.tabs.createStorage,
      })
    );
  }, [dispatch]);

  const { sortStoragesBy, displayStoragesAs } = useSelector(
    (state) => state.pages.storages
  );

  return (
    <PageContainer>
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
