import { ListAndGrid, PageContainer, Translate } from "components";
import { useLabels } from "pages/Labels";
import React from "react";

const componentName = "Labels";

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
        emptyListInfo={
          <Translate section={componentName} text="noLabelsInfo" />
        }
      />
    </PageContainer>
  );
};

export default Labels;
