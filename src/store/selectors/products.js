import { createSelector } from "@reduxjs/toolkit";
import { filterProductsBy, sortByValues } from "constantStrings";
import { selectProducts, selectStorages } from "store/selectors";
import { sortIdsByName, sortByExpDate } from "utils/sort";
import { store } from "store/store";
import { filterIdsByName, getForDaysAhead, getToday } from "utils";

export const makeSelectProducts = () =>
  createSelector(
    selectProducts,
    selectStorages,
    (_, options) => options,
    (
      products,
      storages,
      { search, sortBy, filterBy, storageId, labelId, getProductBody } = {}
    ) => {
      let results = [];

      // sort products
      // sort products by name if no option selected or when sortByName is selected
      if (!sortBy || sortBy === sortByValues.nameAsc) {
        results = sortIdsByName(
          [...products.allIds],
          products.byId,
          "productName"
        );
      } else if (sortBy === sortByValues.nameDesc) {
        results = sortIdsByName(
          [...products.allIds],
          products.byId,
          "productName",
          true
        );
      }
      // sort by expiration date
      else {
        let withoutDate = [];
        let withDate = [];

        [...products.allIds].forEach((productId) => {
          if (!products.byId[productId].expirationDate)
            withoutDate.push(productId);
          else withDate.push(productId);
        });

        withoutDate = sortIdsByName(withoutDate, products.byId, "productName");

        if (sortBy === sortByValues.expDateAsc) {
          withDate = sortByExpDate(withDate, products.byId);

          results = [...withDate, ...withoutDate];
        } else {
          withDate = sortByExpDate(withDate, products.byId, false);

          results = [...withoutDate, ...withDate];
        }
      }

      // filter products by storage
      if (storageId) {
        results = results.filter(
          (id) => products.byId[id].storageId === storageId
        );
      }

      // filter products by label
      if (labelId) {
        results = results.filter((id) =>
          products.byId[id].labels?.includes(labelId)
        );
      }

      // select expired products
      if (filterBy === filterProductsBy.expired) {
        const today = getToday();

        results = results.filter((id) => {
          if (!products.byId[id].expirationDate) return false;

          const productExpirationtDate = new Date(
            products.byId[id].expirationDate
          );

          return productExpirationtDate.getTime() < today.getTime();
        });
      }
      // or products close to expiry
      else if (filterBy === filterProductsBy.closeToExpiry) {
        const today = getToday();

        const numberOfExpirationDaysObject = {};

        storages.allIds.map((id) => {
          numberOfExpirationDaysObject[id] =
            storages.byId[id].numberOfDaysForWarning;
          return null;
        });

        results = results.filter((id) => {
          // use number of days set for storage or use default value
          const days =
            numberOfExpirationDaysObject[products.byId[id].storageId] ??
            store.getState().app.defaultNumberOfDaysForWarning;
          const numberOfDays = getForDaysAhead(days);

          if (!products.byId[id].expirationDate) return false;

          const productExpirationtDate = new Date(
            products.byId[id].expirationDate
          );

          return (
            productExpirationtDate.getTime() >= today.getTime() &&
            productExpirationtDate.getTime() <= numberOfDays.getTime()
          );
        });
      }
      // or only fresh products
      else if (filterBy === filterProductsBy.fresh) {
        const today = getToday();

        results = results.filter((id) => {
          const productExpirationtDate = new Date(
            products.byId[id].expirationDate
          );

          return (
            productExpirationtDate.getTime() >= today.getTime() ||
            !products.byId[id].expirationDate
          );
        });
      }

      // filter products by name
      if (search) {
        results = filterIdsByName(
          results,
          products.byId,
          "productName",
          search
        );
      } else if (search === "") return [];

      if (getProductBody) {
        return results.map((id) => products.byId[id]);
      }

      return results;
    }
  );

export const makeSelectProductById = () =>
  createSelector(
    selectProducts,
    (_, productId) => productId,
    (products, productId) => {
      return products.byId[productId];
    }
  );
