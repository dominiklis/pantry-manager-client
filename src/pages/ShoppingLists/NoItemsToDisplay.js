import { Translate } from "components";
import React from "react";

const componentName = "NoItemsToDisplay";

const NoItemsToDisplay = () => {
  return (
    <div>
      <Translate section={componentName} text="noItemsInfo" />
    </div>
  );
};

export default NoItemsToDisplay;
