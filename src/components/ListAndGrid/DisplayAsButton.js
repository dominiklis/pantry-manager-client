import { Button } from "components";
import { componentColors, componentSizes } from "constantStrings";
import React from "react";
import { IoGrid, IoList } from "react-icons/io5";

const DisplayAsButton = ({ onClick, displayAsList }) => {
  return (
    <Button
      backgroundColor={componentColors.transparent}
      size={componentSizes.small}
      onClick={onClick}
      icon={displayAsList ? <IoGrid /> : <IoList />}
      iconButton
    />
  );
};

export default DisplayAsButton;
