import { createSelector } from "@reduxjs/toolkit";
import { selectLabels } from "store/selectors";
import { sortByName } from "utils";

export const makeSelectLabelsDetails = () =>
  createSelector(
    selectLabels,
    (_, { labelsIds }) => labelsIds,
    (labels, labelsIds) => {
      const results = [];

      if (!labelsIds?.length) return results;

      labelsIds.forEach((labelId) => {
        results.push(labels.byId[labelId]);
      });

      return sortByName(results, "labelName");
    }
  );
