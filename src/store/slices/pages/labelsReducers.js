import { displayAs, sortByValues } from "constantStrings";

const labelsReducers = {
  setLabelsSortLabelsBy: (state) => {
    if (state.labels.sortLabelsBy === sortByValues.nameAsc)
      state.labels.sortLabelsBy = sortByValues.nameDesc;
    else state.labels.sortLabelsBy = sortByValues.nameAsc;
  },
  setLabelsDisplayLabelsAs: (state) => {
    if (state.labels.displayLabelsAs === displayAs.grid)
      state.labels.displayLabelsAs = displayAs.list;
    else state.labels.displayLabelsAs = displayAs.grid;
  },
};

export default labelsReducers;
