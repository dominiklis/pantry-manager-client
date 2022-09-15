import { Select, Translate } from "components";
import { useToolbar } from "components/ProductsList";
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
        hideOnClick
        selectedValue={sortBy}
        options={orderByOptions}
        onChange={onSortByChange}
      />

      <div className={styles.rightSection}>
        <span>
          <Translate section={componentName} text="highlight" />
          <Select
            hideOnClick
            selectedValue={highlight}
            options={highlightOptions}
            onChange={onHighlightChange}
          />
        </span>

        <span>
          <Translate section={componentName} text="filter" />
          <Select
            hideOnClick
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
