import { sortByValues, displayAs as displayAsValues } from "constantStrings";
import { useIsDarkTheme, useScrollToElement } from "hooks";
import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { makeSelectLabelsDetails } from "store/selectors";
import styles from "./Labels.module.css";

const useLabels = () => {
  const { hash } = useLocation();
  useScrollToElement(hash?.replace("#", ""));

  const darkTheme = useIsDarkTheme();

  const [sortBy, setSortBy] = useState(sortByValues.nameAsc);
  const [displayAs, setDisplay] = useState(displayAsValues.list);

  const selectLabels = useMemo(makeSelectLabelsDetails, []);
  const labels = useSelector((state) =>
    selectLabels(state, {
      sortBy,
    })
  );

  const handleSortByButton = () =>
    setSortBy((prev) => {
      if (prev === sortByValues.nameAsc) return sortByValues.nameDesc;

      return sortByValues.nameAsc;
    });

  const handleDisplayAsButton = () =>
    setDisplay((prev) => {
      if (prev === displayAsValues.list) return displayAsValues.grid;

      return displayAsValues.list;
    });

  const getListStyles = () => {
    let res = styles.list;

    if (displayAs === displayAsValues.grid) res += ` ${styles.grid}`;

    return res;
  };

  return {
    sortBy,
    handleSortByButton,
    displayAs,
    handleDisplayAsButton,
    darkTheme,
    getListStyles,
    labels,
  };
};

export default useLabels;
