import { Button, Translate } from "components";
import { componentColors, componentSizes } from "constantStrings";
import React from "react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

const componentName = "SortByButton";

const SortByButton = ({ onClick, sortingAsc }) => {
  return (
    <Button
      backgroundColor={componentColors.transparent}
      size={componentSizes.small}
      onClick={onClick}
      icon={sortingAsc ? <IoChevronDown /> : <IoChevronUp />}
    >
      <Translate section={componentName} text="name" />
    </Button>
  );
};

export default SortByButton;
