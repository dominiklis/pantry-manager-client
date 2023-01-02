import { localStorageKeys } from "constantStrings";
import { toggleDisplayAs, toggleSortByName } from "utils";

const labelsReducers = {
  setLabelsSortLabelsBy: (state) => {
    const value = toggleSortByName(state.labels.sortLabelsBy);

    state.labels.sortLabelsBy = value;

    localStorage.setItem(localStorageKeys.pagesSettings.labels.sortsBy, value);
  },

  setLabelsDisplayLabelsAs: (state) => {
    const value = toggleDisplayAs(state.labels.displayLabelsAs);

    state.labels.displayLabelsAs = value;

    localStorage.setItem(
      localStorageKeys.pagesSettings.labels.displayAs,
      value
    );
  },
};

export default labelsReducers;
