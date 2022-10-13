import { toggleDisplayAs, toggleSortByName } from "utils";

const labelsReducers = {
  setLabelsSortLabelsBy: (state) => {
    state.labels.sortLabelsBy = toggleSortByName(state.labels.sortLabelsBy);
  },
  setLabelsDisplayLabelsAs: (state) => {
    state.labels.displayLabelsAs = toggleDisplayAs(
      state.labels.displayLabelsAs
    );
  },
};

export default labelsReducers;
