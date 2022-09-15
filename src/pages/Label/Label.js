import { PageContainer, ProductsList, Translate } from "components";
import { useHandleProductsList } from "hooks";
import { LabelNotFound, useLabel } from "pages/Label";
import React from "react";
import styles from "./Label.module.css";

const componentName = "Label";

const Label = () => {
  const { label } = useLabel();

  const {
    sortBy,
    highlight,
    filterBy,
    products,
    handleSortByChange,
    handleHighlightChange,
    handleFilterByChange,
  } = useHandleProductsList({ labelId: label?.labelId, getProductBody: true });

  if (!label) {
    return (
      <PageContainer>
        <LabelNotFound />
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <h1 className={styles.header}>
        <Translate section={componentName} text="header" />
        <span className={styles.labelName}>{label.labelName}</span>
      </h1>

      <ProductsList
        sortBy={sortBy}
        onSortByChange={handleSortByChange}
        highlight={highlight}
        onHighlightChange={handleHighlightChange}
        filterBy={filterBy}
        onFilterByChange={handleFilterByChange}
        products={products}
      />
    </PageContainer>
  );
};

export default Label;
