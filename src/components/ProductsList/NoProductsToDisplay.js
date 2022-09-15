import { Translate } from "components";
import React from "react";

const componentName = "NoProductsToDisplay";

const NoProductsToDisplay = () => {
  return (
    <div>
      <Translate section={componentName} text="noProductsInfo" />
    </div>
  );
};

export default NoProductsToDisplay;
