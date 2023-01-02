import { PageContainer, Translate } from "components";
import React from "react";

const NotFound = () => {
  return (
    <PageContainer hideNavigation>
      <h2>
        <Translate section="NotFound" text="header" />
      </h2>
    </PageContainer>
  );
};

export default NotFound;
