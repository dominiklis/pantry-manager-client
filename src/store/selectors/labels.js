import { createSelector } from "@reduxjs/toolkit";
import { sortByValues } from "constantStrings";
import { selectLabels } from "store/selectors";
import { sortByName } from "utils";

export const makeSelectLabelsDetails = () =>
  createSelector(
    selectLabels,
    (_, options = {}) => options,
    (labels, options) => {
      const { labelsIds, sortBy, labelName } = options;

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

      return sortByName(results, "labelName", sortBy === sortByValues.nameDesc);
    }
  );
