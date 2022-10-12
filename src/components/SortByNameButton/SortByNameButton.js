import { Button, Translate } from "components";
import { componentColors, componentSizes } from "constantStrings";
import React from "react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

const componentName = "SortByNameButton";

const SortByNameButton = ({ onClick, sortingAsc, buttonText }) => {
  return (
    <Button
      backgroundColor={componentColors.transparent}
      size={componentSizes.small}
      onClick={onClick}
      icon={sortingAsc ? <IoChevronUp /> : <IoChevronDown />}
    >
      <Translate section={componentName} text="buttonText" />
    </Button>
  );
};

export default SortByNameButton;
