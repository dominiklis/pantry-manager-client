import { createSelector } from "@reduxjs/toolkit";
import { sortStoragesBy } from "constantStrings";
import { selectStorages } from "store/selectors";
import { sortByName } from "utils";

export const makeSelectStorages = () =>
  createSelector(
    selectStorages,
    (_, options) => options,
    (storages, options) => {
      const { storageIds, sortBy } = options;

      let results = [];

      if (storageIds && storageIds.length) {
        storageIds.forEach((storageId) => {
          const storage = storages.byId[storageId];
          if (storage) results.push(storage);
        });
      } else results = storages.allIds.map((id) => storages.byId[id]);

      if (sortBy === sortStoragesBy.sortByNameDesc) {
        sortByName(results, "storageName", true);
      } else if (sortBy === sortStoragesBy.sortByNameAsc) {
        sortByName(results, "storageName");
      }

      return results;
    }
  );

export const makeSelectStorageById = () =>
  createSelector(
    selectStorages,
    (_, storageId) => storageId,
    (storages, storageId) => {
      return storages.byId[storageId];
    }
  );
