import { ListAndGrid, PageContainer, Translate } from "components";
import { useLabels } from "pages/Labels";
import React from "react";

const componentName = "Labels";

const Labels = () => {
  const {
    sortLabelsBy,
    displayLabelsAs,
    setLabelsSortLabelsBy,
    setLabelsDisplayLabelsAs,
    elements,
  } = useLabels();

  return (
    <PageContainer>
      <ListAndGrid
        elements={elements}
        sortBy={sortLabelsBy}
        displayAs={displayLabelsAs}
        setSortByDispatchAction={setLabelsSortLabelsBy}
        setDisplayAsDispatchAction={setLabelsDisplayLabelsAs}
        emptyListInfo={
          <Translate section={componentName} text="noLabelsInfo" />
        }
      />
    </PageContainer>
  );
};

export default Labels;
