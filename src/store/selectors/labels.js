import { createSelector } from "@reduxjs/toolkit";
import { sortByValues } from "constantStrings";
import { selectLabels } from "store/selectors";
import { filterByName, sortByName } from "utils";

export const makeSelectLabelsDetails = () =>
  createSelector(
    selectLabels,
    (_, options) => options,
    (labels, { labelsIds, sortBy, labelName, search } = {}) => {
      if (labelName) {
        const labelId = labels.allIds.find(
          (id) => labels.byId[id].labelName === labelName
        );

        return labels.byId[labelId];
      }

      let results = [];

      if (Array.isArray(labelsIds) && labelsIds.length === 0) return results;

      if (!labelsIds?.length) {
        results = labels.allIds.map((id) => labels.byId[id]);
      } else {
        labelsIds.forEach((labelId) => {
          results.push(labels.byId[labelId]);
        });
      }

      if (search) {
        results = filterByName(results, "labelName", search);
      } else if (search === "") return [];

      return sortByName(results, "labelName", sortBy === sortByValues.nameDesc);
    }
  );
