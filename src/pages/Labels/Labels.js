import {
  DisplayAsButton,
  LabelChip,
  PageContainer,
  SortByButton,
  Translate,
} from "components";
import { sortByValues, displayAs as displayAsValues } from "constantStrings";
import { useIsDarkTheme, useScrollToElement } from "hooks";
import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { makeSelectLabelsDetails } from "store/selectors";
import styles from "./Labels.module.css";

const componentName = "Labels";

const Labels = () => {
  const { hash } = useLocation();
  console.log(hash);
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

  return (
    <PageContainer>
      <div className={styles.toolbar}>
        <SortByButton
          onClick={handleSortByButton}
          sortingAsc={sortBy === sortByValues.nameAsc}
          buttonText={
            <Translate section={componentName} text="sortByButtonText" />
          }
        />

        <DisplayAsButton
          onClick={handleDisplayAsButton}
          displayAsList={displayAs === displayAsValues.list}
        />
      </div>

      <ul className={getListStyles()} data-dark-theme={darkTheme}>
        {labels.map((label) => (
          <li
            key={label.labelId}
            className={styles.listItem}
            id={label.labelId}
          >
            <LabelChip
              key={label.labelId}
              labelName={label.labelName}
              className={styles.link}
              transparent={displayAs === displayAsValues.list}
              selected={label.labelId === hash.replace("#", "")}
            />
          </li>
        ))}
      </ul>
    </PageContainer>
  );
};

export default Labels;
