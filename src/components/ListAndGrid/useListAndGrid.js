import { sortByValues, displayAs as displayAsValues } from "constantStrings";
import styles from "./ListAndGrid.module.css";
import { useIsDarkTheme } from "hooks";

const useListAndGrid = ({ setSortBy, displayAs, setDisplayAs }) => {
  const darkTheme = useIsDarkTheme();

  const handleSortByButton = () =>
    setSortBy((prev) => {
      if (prev === sortByValues.nameAsc) return sortByValues.nameDesc;

      return sortByValues.nameAsc;
    });

  const handleDisplayAsButton = () =>
    setDisplayAs((prev) => {
      if (prev === displayAsValues.list) return displayAsValues.grid;

      return displayAsValues.list;
    });

  const getListStyles = () => {
    let res = styles.list;

    if (displayAs === displayAsValues.grid) res += ` ${styles.grid}`;

    return res;
  };

  return {
    handleSortByButton,
    handleDisplayAsButton,
    getListStyles,
    darkTheme,
  };
};

export default useListAndGrid;
