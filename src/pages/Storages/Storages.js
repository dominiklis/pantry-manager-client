import { PageContainer, StoragesList } from "components";
import { createOverlay } from "constantStrings";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCreateOverlay } from "store/actions";

const Storages = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setCreateOverlay({
        selectedTab: createOverlay.tabs.createStorage,
      })
    );
  }, [dispatch]);

  return (
    <PageContainer>
      <StoragesList noHeader />
    </PageContainer>
  );
};

export default Storages;
