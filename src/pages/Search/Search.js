import { PageContainer } from "components";
import {
  SearchProducts,
  SearchStorages,
  SearchLabels,
  SearchLists,
  SearchItems,
} from "pages/Search";
import React from "react";
import styles from "./Search.module.css";

const Search = () => {
  return (
    <PageContainer>
      <div className={styles.container}>
        <SearchStorages />
        <SearchProducts />
        <SearchLabels />
        <SearchLists />
        <SearchItems />
      </div>
    </PageContainer>
  );
};

export default Search;
