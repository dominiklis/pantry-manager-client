import { ListAndGrid, PageContainer } from "components";
import { useLabels } from "pages/Labels";
import React from "react";

const Labels = () => {
  const { sortBy, setSortBy, displayAs, setDisplayAs, elements } = useLabels();

  return (
    <PageContainer>
      <ListAndGrid
        elements={elements}
        sortBy={sortBy}
        setSortBy={setSortBy}
        displayAs={displayAs}
        setDisplayAs={setDisplayAs}
      />
    </PageContainer>
  );
};

export default Labels;
