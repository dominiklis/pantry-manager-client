import { displayAs } from "constantStrings";
import { toggleValue } from "utils";

const toggleDisplayAs = (currentValue) =>
  toggleValue(currentValue, displayAs.grid, displayAs.list);

export default toggleDisplayAs;
