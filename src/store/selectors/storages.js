import { createSelector } from "@reduxjs/toolkit";
import { sortByValues } from "constantStrings";
import { selectStorages } from "store/selectors";
import { filterByName, sortByName } from "utils";

export const makeSelectStorages = () =>
  createSelector(
    selectStorages,
    (_, options) => options,
    (storages, options) => {
      const { storageIds, sortBy, search } = options;

      let results = [];

      if (storageIds && storageIds.length) {
        storageIds.forEach((storageId) => {
          const storage = storages.byId[storageId];
          if (storage) results.push(storage);
        });
      } else results = storages.allIds.map((id) => storages.byId[id]);

      if (sortBy === sortByValues.nameDesc) {
        sortByName(results, "storageName", true);
      } else if (sortBy === sortByValues.nameAsc) {
        sortByName(results, "storageName");
      }

      if (search) {
        results = filterByName(results, "storageName", search);
      } else if (search === "") return [];

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
