import { sortByValues } from "constantStrings";
import { toggleValue } from "utils";

const toggleSortByName = (currentValue) =>
  toggleValue(currentValue, sortByValues.nameAsc, sortByValues.nameDesc);

export default toggleSortByName;
