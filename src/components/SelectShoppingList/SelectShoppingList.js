import { Label, Select } from "components";
import useSelectShoppingList from "components/SelectShoppingList/useSelectShoppingList";
import { various } from "constantStrings";
import React from "react";

import styles from "./SelectShoppingList.module.css";

const componentName = "SelectShoppingList";

const SelectShoppingList = ({
  selectedShoppingList,
  label,
  setInput,
  onChange,
}) => {
  const { selectStorageOptions } = useSelectShoppingList({
    componentName,
    setInput,
  });

  return (
    <div className={styles.container}>
      <Label>{label}</Label>
      <Select
        options={selectStorageOptions}
        selectedValue={selectedShoppingList ?? various.noShoppingList}
        onChange={onChange}
        listStyles={styles.selectShoppingListList}
        buttonStyles={styles.buttonStyles}
      />
    </div>
  );
};

export default SelectShoppingList;
