import { Select, Translate } from "components";
import { useToolbar } from "components/ProductsWithoutStoragesList";
import React from "react";
import styles from "./Toolbar.module.css";

const componentName = "ToolBar";

const Toolbar = ({
  sortBy,
  onSortByChange,
  highlight,
  onHighlightChange,
  filterBy,
  onFilterByChange,
}) => {
  const { orderByOptions, highlightOptions, filterOptions } = useToolbar({
    componentName,
  });

  return (
    <div className={styles.toolbar}>
      <Select
        selectedValue={sortBy}
        options={orderByOptions}
        onChange={onSortByChange}
      />

      <div className={styles.rightSection}>
        <span>
          <Translate section={componentName} text="highlight" />
          <Select
            selectedValue={highlight}
            options={highlightOptions}
            onChange={onHighlightChange}
          />
        </span>

        <span>
          <Translate section={componentName} text="filter" />
          <Select
            selectedValue={filterBy}
            options={filterOptions}
            onChange={onFilterByChange}
          />
        </span>
      </div>
    </div>
  );
};

export default Toolbar;
