import { Label, Select } from "components";
import { useSelectShoppingList } from "components/SelectShoppingList";
import { various } from "constantStrings";
import React from "react";

import styles from "./SelectShoppingList.module.css";

const componentName = "SelectShoppingList";

const SelectShoppingList = ({
  selectedShoppingList,
  label,
  setInput,
  onChange,
  disableShiftingToTheRight,
}) => {
  const { selectStorageOptions } = useSelectShoppingList({
    componentName,
    setInput,
  });

  return (
    <div className={styles.container}>
      <Label>{label}</Label>
      <Select
        hideOnClick
        options={selectStorageOptions}
        selectedValue={
          selectedShoppingList ? selectedShoppingList : various.noShoppingList
        }
        onChange={onChange}
        listStyles={styles.selectShoppingListList}
        buttonStyles={styles.buttonStyles}
        showButtonBorder
        disableShiftingToTheRight={disableShiftingToTheRight}
      />
    </div>
  );
};

export default SelectShoppingList;
