import { Dropdown } from "components";
import React from "react";

const DropdownMenu = ({ menuButton, menuItems }) => {
  return (
    <Dropdown
      dropdownButton={menuButton}
      dropdownContent={
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      }
    />
  );
};

export default DropdownMenu;
