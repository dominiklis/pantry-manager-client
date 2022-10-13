import {
  Actions,
  Button,
  PageContainer,
  ProductsList,
  Translate,
} from "components";
import { componentSizes } from "constantStrings";
import { EditLabel, LabelNotFound, useLabel } from "pages/Label";
import React from "react";
import { IoPencil, IoTrash } from "react-icons/io5";
import { ActionWtihButton } from "utils";
import styles from "./Label.module.css";

const componentName = "Label";

const Label = () => {
  const {
    products,
    sortBy,
    highlight,
    filterBy,
    handleSortByChange,
    handleHighlightChange,
    handleFilterByChange,
    label,
    handleDeleteLabel,
    loading,
  } = useLabel({ componentName });

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

      <Actions
        additionalButtonsBefore={
          <form onSubmit={handleDeleteLabel}>
            <Button
              icon={<IoTrash />}
              size={componentSizes.small}
              loading={loading}
            >
              <Translate section={componentName} text="deleteButtonText" />
            </Button>
          </form>
        }
        actions={[
          new ActionWtihButton(
            <Translate section={componentName} text="editActionHeader" />,
            <EditLabel label={label} />,
            <Translate section={componentName} text="editButtonText" />,
            <IoPencil />
          ),
        ]}
      />

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
