import { Button } from "components";
import { componentColors, componentSizes } from "constantStrings";
import React from "react";
import { IoEllipsisVertical } from "react-icons/io5";

const DropdownMenuButton = () => {
  return (
    <Button
      iconButton
      icon={<IoEllipsisVertical />}
      backgroundColor={componentColors.transparent}
      size={componentSizes.small}
    />
  );
};

export default DropdownMenuButton;
