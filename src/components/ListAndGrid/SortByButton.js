import { Button } from "components";
import { componentColors, componentSizes } from "constantStrings";
import React from "react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

const SortByButton = ({ onClick, sortingAsc, buttonText }) => {
  return (
    <Button
      backgroundColor={componentColors.transparent}
      size={componentSizes.small}
      onClick={onClick}
      icon={sortingAsc ? <IoChevronDown /> : <IoChevronUp />}
    >
      {buttonText}
    </Button>
  );
};

export default SortByButton;
