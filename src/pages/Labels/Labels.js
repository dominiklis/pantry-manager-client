import {
  DisplayAsButton,
  LabelChip,
  PageContainer,
  SortByButton,
  Translate,
} from "components";
import { sortByValues, displayAs as displayAsValues } from "constantStrings";
import { useLabels } from "pages/Labels";
import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./Labels.module.css";

const componentName = "Labels";

const Labels = () => {
  const { hash } = useLocation();
  const {
    sortBy,
    handleSortByButton,
    displayAs,
    handleDisplayAsButton,
    darkTheme,
    getListStyles,
    labels,
  } = useLabels();

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
